import React, {useState} from 'react'
function OrderedList() {
    const [itemsList, setItemsList] = useState([])
    const [inputItems, setInputItems] = useState('')
    const [direction, setDirection] = useState(true)
    const handleChange = (e) => {
        setInputItems(e.target.value)
    }
    const handleClear = () => {
        setInputItems('')
        setItemsList([])
    }

    const handleToggle = () => {
        direction ===false? setDirection(true) : setDirection(false)
    }
 
    return (
        <>
            <input type="text" value={inputItems} onChange={handleChange} onKeyDown={(e) => {
        if (e.key === 'Enter' && inputItems.trim() !== '') {
            setItemsList([...itemsList, inputItems])
            setInputItems('')
        }   
    }}/>
             <button onClick={handleToggle} className="sort-direction" >{direction === false?"⬇️":"⬆️"}</button>
            <button onClick={handleClear} className="clear-list">️🆑</button>
            <ul>{direction === false && itemsList.sort().reverse().map((item, index) => <li key={index}>{item}</li>)}
            {direction === true && itemsList.sort().map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </>
    )
}
export default OrderedList
