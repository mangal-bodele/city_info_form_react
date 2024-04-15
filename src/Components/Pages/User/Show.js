import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {PencilSquare, Trash} from 'react-bootstrap-icons'

function Show() {
    const[users, setUser] = useState([])

    async function fetchdata(){
        const result = await axios.get('http://localhost:5000/users')
        setUser(result.data)
    }

    useEffect(()=>{
        fetchdata()
    },[])
  return (
    <div className='container m-auto p-3'>
        <table className='text-center col-12'>
            <thead>
                <tr className='bg-dark text-white'>
                    <th>city</th>
                    <th>state</th>
                    <th>country</th>
                    <th>pin</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody className='bg-info'>
                {
                    users.map((obj)=>{
                        return(
                            <tr>
                                <td>{obj.city}</td>
                                <td>{obj.state}</td>
                                <td>{obj.country}</td>
                                <td>{obj.pin}</td>
                                <td>
                                    <NavLink to={`/Update/${obj.id}`}><button className='btn btn-success col-3 btn-sm me-6'>Update<PencilSquare/></button></NavLink>
                                    <NavLink to={`/Delete/${obj.id}`}> <button className='btn btn-success col-3 btn-sm me-6'>Delete<Trash/></button></NavLink>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Show