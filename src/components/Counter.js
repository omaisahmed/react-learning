import axios from 'axios';
import React, {useState, useRef, useEffect} from 'react'

export default function Counter() {

    // useState Hook
    const [count, setCount] = useState(0);

    function updateCounter(){
        setCount(count + 1);
    }

    function resetCounter(){
        setCount(0);
    }

    // useRef Hook
    const useRefElement = useRef('');
    console.log(useRefElement);
    const [name, setName] = useState('omais');

    function Reset(){
        setName('');
        useRefElement.current.focus();
    }

    function handleInputChange(){
        useRefElement.current.style.backgroundColor='red';
    }

    const myNewRefElement = useRef(null);

    useEffect(()=>{   
        const myElement = myNewRefElement.current;
        if(myElement){
            myElement.style.backgroundColor = "purple";
            myElement.style.color = "white";
        }

    }, []) // [] this shows component mount only once

    // Track the number of renders
    const renderCount = useRef(0);
    const [trackState, setTrackState] = useState('');
    renderCount.current += 1;

    const handleTrackState = ()=>{
        setTrackState(`Render Count: ${renderCount.current}`);
    };

    // useEffect AXIOS
    const [data,setData] = useState(null);

    useEffect(()=>{
        const fetchDataApi = async()=>{
            try{
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                console.log(response);
                setData(response.data);
            }
            catch(error){
                console.log(error);
            }
        }
        fetchDataApi();
    }, [])

  return (
    <>

    <div>
        <h1>Counter (useState Hook)</h1>
      <h1>You Clicked {count} times</h1>
      <button onClick={updateCounter}>Click to Count</button>
      <button onClick={resetCounter}>Click to Reset Counter</button>
    </div>

    <div className='py-4'>
    <h1>useRef Hook</h1>
        <input type='text' value={name} ref={useRefElement} onChange={(e)=>setName(e.target.value)} />
        <button onClick={Reset}>Reset</button>
        <button onClick={handleInputChange}>handleInputChange</button>
        <div className='my-2' ref={myNewRefElement}>myNewRefElement div</div>
        <h3>Track the number of renders</h3>
        <p>{trackState}</p>
        <button onClick={handleTrackState}>Update Track State</button>
    </div>

    <div className='py-4'>
    <h1>useEffect Hook</h1>
    {data ? (
        <ul>
            {data.map((user) => (
                <li key={user.id}>
                    Name: {user.name}
                    <br/>
                    Email: {user.email}
                </li>
            ))}
            </ul>
    ) : (<p>Loading...</p>)}
    </div>


    </>
  )
}
