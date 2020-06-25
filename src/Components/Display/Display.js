import React from 'react'
import Cards from '../Cards/Cards'

const Display = ({cards}) => {

const mappedData = cards.map(question => <Cards key={question.id} question={question}/>)
    return (
        <div>
           {mappedData}
        </div>
    )
}

export default Display
