import React from 'react'
import './index.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function index() {
    const redirect = useNavigate()
    const TOKEN= '1|3c4738a6de64cc9a6f89e9efd16fe41cd0fb041323b3e15823182bd421895f1b'
    const handelLogout =async () =>{
      try {
         await axios.post("http://127.0.0.1:8001/api/logout" ,TOKEN )
         redirect("/login")

      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div>
        <div>Dashboard</div>
        <button onClick={handelLogout}>Logout</button>
    </div>
  )
}
