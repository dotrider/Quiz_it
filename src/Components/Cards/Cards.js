import React, {useState} from 'react'

const Cards = ({question}) => {
    const [ toggle, setToggle ] = useState(Boolean)

    return (
        <div onClick={() => setToggle(!toggle)}>
            {toggle? question.answer: question.question}
        </div>
    )
}

export default Cards
