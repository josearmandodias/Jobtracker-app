import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

/**
 * Renders the authentication component.
 *
 * @param {object} props - The props object containing the component's properties.
 * @return {JSX.Element} The rendered authentication component.
 */

interface SigninProps {
  setAlreadySignin?: React.Dispatch<React.SetStateAction<boolean>>;
}

function Signin({setAlreadySignin}: SigninProps ) {

  const navigate = useNavigate()

  function handleSubmit(event: any) {
    event.preventDefault();
    navigate('/home')
  }


    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-indigo-500 from-10% via-sky-600 via-30% to-emerald-500 to-90% dark:bg-gray-950 p-12">
        <div>
          <div className="max-w-sm rounded-3xl bg-gradient-to-b from-sky-300 to-purple-500 p-px dark:from-gray-800 dark:to-transparent">
            <div className="rounded-[calc(1.5rem-1px)] bg-white px-10 p-12 dark:bg-gray-900">
              <div>
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Sign in to your account
                </h1>
                <p className="text-sm tracking-wide text-gray-600 dark:text-gray-300">
                  Don't have an account ? 
                <Link to="/signup" className="text-blue-600 transition duration-200 hover:underline dark:text-blue-400">
                &nbsp;Signup
                </Link> for free</p>
              </div>
  
              <form className="mt-8 space-y-8" onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <input className="w-full bg-transparent text-gray-600 dark:text-white dark:border-gray-700 rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-600 invalid:border-red-500 dark:placeholder-gray-300" placeholder="Your Email" type="email" name="email" />
                  <input className="w-full bg-transparent text-gray-600 dark:text-white dark:border-gray-700 rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-600 invalid:border-red-500 dark:placeholder-gray-300" placeholder="Your Password" type="password" name="password" />
                </div>
                <button 
                  type="submit" 
                  className="h-9 px-3 w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-700 transition duration-500 rounded-md text-white" 
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  


};

export default Signin;