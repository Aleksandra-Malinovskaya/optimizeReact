const SearchInput = ({changeSearch}) =>{
    
    const handle = (event) =>{
        changeSearch(event.currentTarget.value)
    }
    return(
        <input type="text" onChange={handle}></input>
    )
}

export default SearchInput;