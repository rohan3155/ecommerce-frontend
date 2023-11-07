import React from 'react'

const Contact = () => {
  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700">Contact Us</h1>
        <form className="space-y-4" >
            <div>
                <label className="label">
                    <span className="text-base label-text" >Phone</span>
                </label>
                <input id='phone'  type="text" placeholder="Phone" className="w-full input input-bordered input-primary" />
            </div>

            <div>
                <label className="label">
                    <span className="text-base label-text">Your Query</span>
                </label>
                <input id='password'  type="text" placeholder="Enter Your Query"
                    className="w-full input input-bordered input-primary" />
            </div>
            <div>
                <button  className="btn btn-block btn-primary">Send To Admin</button>
            </div>
            

        </form>
    </div>
</div>
  )
}

export default Contact
