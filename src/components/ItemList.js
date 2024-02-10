import React, { useMemo, useState } from 'react'

export default function ItemList({items}) {

    // Item List Memoization Example
    const [filter,setFilter] =  useState('');
    const filterItems = (items,filter)=>{
        console.log("Filter Values");
        return items.filter(item => item.toLowerCase().includes(filter.toLowerCase()));
    }
    const memoFilter = useMemo(()=>filterItems(items,filter),[items,filter]);
    // Item List Memoization Example

    // Numbers Caluclation Memoization Example
    const [number,setNumber] = useState(0);
    function expensiveCalculation(input){
        console.log('expensiveCalculation here...');
        return input * 2;
    }
    const memoNumber = useMemo(()=>expensiveCalculation(number) , [number]);
    // Numbers Caluclation Memoization Example
    
  return (
    <>
      <h2>Items List</h2>
      <input type="text" placeholder="Filter items..." value={filter} onChange={(e)=>setFilter(e.target.value)} />
      <ul>
        {memoFilter.map((item,index) => (
            <li key={index} value={item}>{item}</li>
        ))}
      </ul>
      <h2>Example of useMemo (calculations in number store in cache)</h2>
      <p>Number: {number}</p>
      <p>Memoization Value: {memoNumber}</p>
      <button onClick={()=>setNumber(number+1)}>Increment Number</button>
    </>
  )
}
