import React, { useState,useEffect } from 'react';
import axios from 'axios';

export default function Axios() {
    const dataPost = {
        name: '',
        email: '',
        password: ''
    }

    const [inputData, setInputData] = useState(dataPost);
    const [data,setData] = useState(null);

    function handleData(e){
        e.preventDefault();
        setInputData({...inputData, [e.target.name]: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/users', inputData)
        .then((response)=>{
            console.log(response);
        });    
    }

    function handleUpdate(e){
        e.preventDefault();
        axios.put('https://jsonplaceholder.typicode.com/users/1', inputData)
        .then((response)=>{
            console.log(response);
        });    
    }

    function handleDelete(e){
        e.preventDefault();
        axios.delete('https://jsonplaceholder.typicode.com/users/1', inputData)
        .then((response)=>{
            console.log(response);
        });    
    }

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
    <h3>AXIOS (GET)</h3>
        
        {data ? (
            <ul>
                {data.map((user)=>(
                    <li key={user.id}> 
                        {user.name}
                        <br/>
                        {user.email}
                    </li>
                ))}
            
            </ul>
        ) : <p>Loading...</p>}

        <div className='container bg-dark my-4 py-4 w-50 justify-content-center mx-auto px-4'>
            <h2 className='text-white'>FORM (AXIOS POST,PUT,PATCH)</h2>
            <form >
                <input type='text' name='name' placeholder='NAME' value={inputData.name} onChange={handleData} className='form-control' /><br/>
                <input type='text' name='email' placeholder='EMAIL' value={inputData.email} onChange={handleData} className='form-control' /><br/>
                <input type='text' name='password' placeholder='PASSWORD' value={inputData.password} onChange={handleData} className='form-control' /><br/>
                <button className='btn btn-primary mx-2' onClick={handleSubmit}>Submit</button>
                <button className='btn btn-info mx-2' onClick={handleUpdate}>Update</button>
                <button className='btn btn-warning mx-2' onClick={handleDelete}>Delete</button>
            </form>
        </div>

        
       
    </>
  )
}
