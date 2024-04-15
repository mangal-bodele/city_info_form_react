import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

function Delete() {
    const[user, setUser]=useState({})
    const {userId} = useParams()
    const navi = useNavigate()

    async function fetchdata(){
        const result = await axios.get(`http://localhost:5000/users/${userId}`)
        setUser(result.data)
    }

    function deleteUser(){
        axios.delete(`http://localhost:5000/users/${userId}`)
        navi('/Show')
    }

    useEffect(()=>{
        fetchdata()
    },[])
  return (
    <div>
    <center>
        <h1>Delete Confirmation</h1>
        <h3>do you really want to delete <span style={{'color':"blue"}}>{user.city}</span> city info?? </h3>
        <button onClick={()=>{deleteUser()}} className='btn btn-primary'>YES</button>&nbsp;
        <NavLink to='/Show'><button className='btn btn-primary'>NO</button></NavLink>
    </center>
    
    </div>
  )
}

export default Delete