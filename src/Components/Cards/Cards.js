import React, {useState} from 'react'

const Cards = ({card}) => {
    const [ toggle, setToggle ] = useState(Boolean)


    const mappedOptions = card.options.map(option => <div>{option}</div>)
    return (
        <div 
        className={`card ${toggle ? 'flip': ''}`}
        onClick={() => setToggle(!toggle)}
        >

            <div className='question'>
                {card.question}
                <div>
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
