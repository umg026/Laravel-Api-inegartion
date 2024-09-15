import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'

function SignUp() {
    const [formdata, setformdata] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handelchange = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value })
    }

    const handelSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post("http://127.0.0.1:8001/api/signup", formdata)
            console.log(res)
            alert("login succes")
            setformdata({ ...formdata, name: "", email: "", password: "" })

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <section> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />
                <div className="signin">
                    <div className="content">
                        <h2>Signup</h2>
                        <form action="" onSubmit={handelSubmit}>
                            <div className="form">
                                <div className="inputBox">
                                    <input type="text" name='name' onChange={handelchange} value={formdata.name} required /> <i>Name</i>
                                </div>
                                <div className="inputBox">
                                    <input type="text" name='email' onChange={handelchange} value={formdata.email} required /> <i>Email</i>
                                </div>
                                <div className="inputBox">
                                    <input type="password" name='password' onChange={handelchange} value={formdata.password} required /> <i>Password</i>
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

export default SignUp