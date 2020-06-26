import React, { useState, useEffect, useRef } from 'react';
import Display from './Components/Display/Display'
import axios from 'axios'
import data from './Data'
import './App.css';

function App() {
    const [ cards, setCards ] = useState([])
    const [ category, setCategory ] = useState([])

    const categoryEl = useRef()
    const amountEl = useRef()

  useEffect(() => {
    axios.get('https://opentdb.com/api_category.php').then(res => {
      setCategory(res.data.trivia_categories)
    })
  })


  //Converts non readable signs to human readable
  const decodeStr = (str) => {
    const textArea = document.createElement('textarea')
    textArea.innerHTML = str
    return textArea.value
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.get('https://opentdb.com/api.php', {params: {
      amount: amountEl.current.value,
      category: categoryEl.current.value
   }}).then(res => {
      setCards(
      res.data.results.map((item, i) => {
        const answer = decodeStr(item.correct_answer);
        const options = [...item.incorrect_answers.map(a => decodeStr(a)), answer]
        return {
          id:  `${i}-${Date.now()}`,
          question: decodeStr(item.question),
          answer,
          options: options.sort(() => Math.random() - .5)
        }
      }))
  })
  }

  return (
    <>
      <form className='search-bar' onSubmit={handleSubmit}>
          <div className='inner-form'>
              <label htmlFor='category'>Category:</label>
                <select id='category' ref={categoryEl}>
                    {category.map(category => {
                      return  <option value={category.id} key={category.id}>
                                  {category.name}
                              </option>
                    })}                
                </select>
          </div>
          <div className='inner-form'>
              <label htmlFor='amount'>Number of Questions:</label>
              <input type='number' id='amount' min='1' step='1' defaultValue={10} ref={amountEl} />
          </div>
          <div className='inner-form'>
              <button className='btn'>Generate</button>
          </div>
          
      </form>
      <div className="App">
        <Display cards={cards}/>
      </div>
    </>
  );
}

export default App;
