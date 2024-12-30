import SearchInput from './SearchInput'
import ItemList from './ItemList'
import CounterButton from './CounterButton';
import { useCallback, useState } from 'react';
import './App.css'

function App() {
  const [search, setSearch] = useState('');
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() =>
      setCounter(counter => counter+1),
      [],
    );

  const updateSearch = useCallback((newsearch)=>{
    setSearch(newsearch)
  },[])

  return (
    <>
      <CounterButton clickFunction={increment}/>
      <p>{counter}</p>
      <SearchInput changeSearch={updateSearch}/>
      <ItemList items={["aa", "dd", "eee"]} search = {search}/>
    </>
  )
}

export default App
