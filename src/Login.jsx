// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import 'whatwg-fetch'




export default function Login() {

    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")


    const history = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            await axios.post('http://localhost:3155/Admin/Login', {
                phone, password
            }).then(res => {

                if (res.data.result === "All input is required") {

                    history("/Login", { state: { id: firstname } })
                } else if (res.data.result === "You Are Succesfully Logged into your Account") {
                    console.log(res.data.name)
                    console.log(res.data)
                    localStorage.setItem("Adminname", (res.data.name))
                    const token = res.data.token;
                    function setCookie(cName, cValue, expDays) {
                        let date = new Date();
                        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
                        const expires = "expires=" + date.toUTCString();
                        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
                    }
                    setCookie('AdminToken', token, 7);
                    setTimeout(() => {
                        // e.preventDefault();
                        history("/admin")
                    }, 800);
                    setTimeout(() => {
                        // e.preventDefault();
                        location.reload()
                    }, 1200);
                }
            })
        } catch (error) {
            console.log(error)
        }


        setPhone("")
        setPassword("")
    }



    return (
        <>
            <div className="relative flex flex-col justify-center h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-purple-700">Login</h1>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="label">
                                <span className="text-base label-text" >Phone</span>
                            </label>
                            <input id='phone' value={phone} onChange={e => setPhone(e.target.value)} type="text" placeholder="Phone" className="w-full input input-bordered input-primary" />
                        </div>

                        <div>
                            <label className="label">
                                <span className="text-base label-text">Password</span>
                            </label>
                            <input id='password' value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Enter Password"
                                className="w-full input input-bordered input-primary" />
                        </div>
                        <div>
                            <button className="btn btn-block btn-primary">Login</button>
                        </div>
                        <span>Have no account ?
                            <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">Sign up</a></span>

                    </form>
                </div>
            </div>
        </>
    );
}



