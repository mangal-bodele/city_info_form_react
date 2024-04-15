import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Add() {
    const {register, handleSubmit} = useForm()

    const navi = useNavigate()

    function SaveData(data){
        const result = axios.post('http://localhost:5000/users',data)
        // alert('added record')
        navi('/Show')
        
    }
    
  return (
    <div className='container border border-3 mt-3 p-3 bg-warning col-3'>
        <h3><center>City Information Form</center></h3>
        <form onSubmit={handleSubmit(SaveData)}>
            <label htmlFor='n'>Enter City Name:</label>
            <input type='text' id='n' className='form-control' {...register('city')}/>
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
            <input type='submit' className='btn btn-success btn-lg' />
            <input type='reset'  className='btn btn-danger float-end btn-lg'/>
        </form>

    </div>
  )
}

export default Add