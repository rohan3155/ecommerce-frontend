import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'





export default function USignup() {
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [phone, setphone] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")


    const history = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            await axios.post('http://localhost:3155/User/Signup', {
                firstname, lastname, phone, email, password,
            }).then(res => {

                if (res.data.result === "All input is required" || res.data.result === "User Already Exist") {

                    history("/Signup", { state: { id: firstname } })
                } else if (res.data.result === "Your Sign Up was successful , now you can login") {
                    console.log(res.data.name)
                    console.log(res.data)
                    localStorage.setItem("name",(res.data.name))
                    localStorage.setItem("Uid",(res.data.id))
                    const token = res.data.token;
                    function setCookie(cName, cValue, expDays) {
                        let date = new Date();
                        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
                        const expires = "expires=" + date.toUTCString();
                        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
                    }
                    setCookie('Token', token, 7);
                    setTimeout(() => {
                        // e.preventDefault();
                        history("/")
                    }, 800);
                    setTimeout(() => {
                        // e.preventDefault();
                        location. reload()
                    }, 1200);
                }
            })
        } catch (error) {
            console.log(error)
        }

        setfirstname("")
        setlastname("")
        setphone("")
        setemail("")
        setpassword("")
    }






    return (
        <>
            <div className="relative flex flex-col justify-center h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">

                    <h1 className="text-3xl font-semibold text-center text-purple-700">Sign Up</h1>
                    <form className="space-y-4" method='post' onSubmit={handleSubmit}>
                        <div className="flex w-full gap-2">
                            <div className='w-1/2'>
                                <label className="label">
                                    <span className="text-base label-text">First Name</span>
                                </label>
                                <input id='firstname' type="text" placeholder="First Name" className="w-full input input-bordered input-primary"
                                    value={firstname}
                                    onChange={e => setfirstname(e.target.value)}
                                />
                            </div>
                            <div className='w-1/2'>
                                <label className="label">
                                    <span className="text-base label-text">Last Name</span>
                                </label>
                                <input id='lastname' type="text" placeholder=" Last Name" className="w-full input input-bordered input-primary"
                                    value={lastname}
                                    onChange={e => setlastname(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Phone</span>
                            </label>
                            <input id='phone' type="text" placeholder="Phone" className="w-full input input-bordered input-primary"
                                value={phone}
                                onChange={e => setphone(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Email</span>
                            </label>
                            <input id='email' type="text" placeholder="Email Address" className="w-full input input-bordered input-primary"
                                value={email}
                                onChange={e => setemail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Password</span>
                            </label>
                            <input id='password' type="password" placeholder="Enter Password"
                                className="w-full input input-bordered input-primary"
                                value={password}
                                onChange={e => setpassword(e.target.value)}
                            />
                        </div>

                        <div>
                            <button className="btn btn-block btn-primary">Sign Up</button>
                        </div>
                        <span>Already have an account ?
                            <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">Login</a></span>
                    </form>
                </div>
            </div>
        </>
    );
}



