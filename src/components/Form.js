import React, { useEffect, useState } from 'react'

export default function Form() {
    const data = {
        name: '',
        email: '',
        password: ''
    };

    const [inputData, setInputData] = useState(data);
    const [flag, setFlag] = useState(false);

    useEffect(()=>{
        console.log('REGISTERED!');
    }, [flag])

    const handleData = (e)=>{
        setInputData({...inputData, [e.target.name]: e.target.value});
        console.log(inputData);
    }

    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.password){
            alert('please fill the data!');
        }
        else{
            setFlag(true);
            console.log('Submitted Data' + inputData);
        }
    }

  return (
    <>
      <div className='container bg-dark my-4 py-4 w-50 justify-content-center mx-auto px-4'>
      <pre>{(flag) ? <h3 className='text-white'>YOU HAVE SUCCESSFULLY REGISTERED!</h3> : ''}</pre>
        <h2 className='text-white'>FORM</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='NAME' value={inputData.name} onChange={handleData} className='form-control' /><br/>
            <input type='text' name='email' placeholder='EMAIL' value={inputData.email} onChange={handleData} className='form-control' /><br/>
            <input type='text' name='password' placeholder='PASSWORD' value={inputData.password} onChange={handleData} className='form-control' /><br/>
            <button className='btn btn-primary mx-auto'>Submit</button>
        </form>
      </div>
    </>
  )
}
