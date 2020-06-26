import React, {useState} from 'react'

const Cards = ({card}) => {
    const [ toggle, setToggle ] = useState(Boolean)


    const mappedOptions = card.options.map(option => <div key={option} className='card-options'>{option}</div>)
    return (
        <div 
        className={`card ${toggle ? 'flip': ''}`}
        onClick={() => setToggle(!toggle)}
        >

            <div className='question'>
                {card.question}
                <div className='card-option'>
                    {mappedOptions}
                </div>
            </div>
            <div className='answer'>
                {card.answer}
               
            </div>

        </div>
    )
}

export default Cards
