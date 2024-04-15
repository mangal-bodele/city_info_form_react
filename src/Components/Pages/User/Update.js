import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
    const {register,handleSubmit, setValue} = useForm();
    const {userId} = useParams();
    const navi = useNavigate();
    async function fetchdata(){
        const result = await axios.get(`http://localhost:5000/users/${userId}`)
        setValue('city', result.data.city)
        setValue('state', result.data.state)
        setValue('country', result.data.country)
        setValue('pin', result.data.pin)
    }
    function saveData(data){
        axios.put(`http://localhost:5000/users/${userId}/`,data)
        navi('/Show')   
    }
    useEffect(()=>{
        fetchdata();
    },[])
    
  return (
    <div className='container border border-3 mt-3 p-3 bg-warning col-3'>
        <h3><center>City Information Update Form</center></h3>
        <form onSubmit={handleSubmit(saveData)}>
            <label htmlFor='n'>Enter City Name:</label>
            <input type='text' id='n'className='form-control' {...register('city')}/>
            <br /><br />
            <label htmlFor='s'>Enter State:</label>
            <input type='text' id='s' className='form-control' {...register('state')}/>
            <br /><br />
            <label htmlFor='c'>Enter Country:</label>
            <input type='text' id='c' className='form-control' {...register('country')}/>
            <br /><br />
            <label htmlFor='p'>Enter Pin Code:</label>
            <input type='number' id='p' className='form-control' {...register('pin')}/>
            <br /><br />
            <input type='submit' value='update' className='btn btn-success' />
            <input type='reset'  value='cancel' className='btn btn-danger float-end'/>
        </form>
    </div>
  )
}
export default Update