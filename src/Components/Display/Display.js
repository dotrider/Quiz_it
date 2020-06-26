import React from 'react'
import Cards from '../Cards/Cards'

const Display = ({cards}) => {

const mappedData = cards.map(card => <Cards key={card.id} card={card}/>)
    return (
        <div>
           {mappedData}
        </div>
    )
}

export default Display
