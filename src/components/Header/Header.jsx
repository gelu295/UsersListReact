import React from 'react'

const Header = ({inputTextValue, setInputTextValue, setSortValue}) => {
    return (
        <header>
            <button onClick={() => setSortValue("name")}>Sort by Name</button>
            <button onClick={() => setSortValue("username")}>Sort by Username</button>
            <h4>Filter</h4>
            <input type="text" value={inputTextValue} onChange={event => setInputTextValue(event.target.value)}></input>
        </header>
    )
}

export default Header;