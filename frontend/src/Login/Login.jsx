import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'
import { Link, useNavigate } from 'react-router-dom'


function Login() {
    const [formdata, setformdata] = useState({
        email: "",
        password: ""
    })
    const redirect = useNavigate()

    const handelchange = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value })
    }

    const handelSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post("http://127.0.0.1:8001/api/login", formdata)
            console.log(res)
            alert("login succes")
            setformdata({ ...formdata, email: "", password: "" })
            redirect("/")

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <section> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />
                <div className="signin">
                    <div className="content">
                        <h2>Login</h2>
                        <form action="" onSubmit={handelSubmit}>
                            <div className="form">
                                <div className="inputBox">
                                    <input type="text" name='email' onChange={handelchange} value={formdata.email} required /> <i>Email</i>
                                </div>
                                <div className="inputBox">
                                    <input type="password" name='password' onChange={handelchange} value={formdata.password} required /> <i>Password</i>
                                </div>
                                <div className="links"> <Link to="/signup">Signup</Link>
                                </div>
                                <div className="inputBox">
                                    <input type="submit" defaultValue="Login" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login