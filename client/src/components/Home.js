import React, { useState } from "react";

function handleFormSumbit(event) {
  event.preventDefault();
  console.log(event);
}

function Home(props) {
  return (
    <div className="main min-h-screen items-center justify-center bg-white">
      <div className="flex-row justify-between items-center">
        <div className="navbar shadow max-h-screen">
          <div className="h-16 mx-auto px-5 flex items-center justify-between">
              <a href="/home" className="text-xl font-mono text-blue-500 hover:text-blue-800 transition-colors cursor-pointer">Jobtracker</a>
              
              <ul className="flex items-center gap-5">
                <li><a href="/my-applications" className="text-blue-500 font-mono hover:text-blue-800 transition-colors">My applications</a></li>
                <li><a href="/profile" className="text-blue-500 font-mono hover:text-blue-800 transition-colors">Profil</a></li>
              </ul>
          </div>
        </div>

        <div className="container mx-auto py-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Add your new target ! &#128640;</h1>
          <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md" method="POST">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Job title &#128377;
              </label>
              <input className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:border-indigo-500"
                type="text" id="job_title" name="job_title" placeholder="e.g : Backend developer" required>
              </input>

              <label className="block text-gray-700 text-sm font-bold mb-2">
                Company name &#127970;	
              </label>
              <input className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:border-indigo-500"
                type="text" id="company" name="job_title" placeholder="e.g : Google" required>
              </input>

              <label className="block text-gray-700 text-sm font-bold mb-2">
                Salary 	&#129297;
              </label>
              <input className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:border-indigo-500"
                type="number" min={0} id="salary" name="salary" placeholder="e.g : 120k$ / year" required>
              </input>

              <label className="block text-gray-700 text-sm font-bold mb-2">
                Job description &#128214;
              </label>
              <input className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:border-indigo-500"
                type="text" id="description" name="description" placeholder="e.g : Technical stack : Javascript..." required>
              </input>

              <label className="block text-gray-700 text-sm font-bold mb-2">
                Job offer &#128279;
              </label>
              <input className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:border-indigo-500"
                type="text" id="offer" name="offer" placeholder="e.g : https://m5.apply.indeed.com/...">
              </input>

              <label className="block text-gray-700 text-sm font-bold mb-2">
                Application Date &#128197;
              </label>
              <input className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:border-indigo-500"
                type="date" id="application_date" name="application_date" required>
              </input>
            </div>
            <button className="w-full bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
              type="submit"
              onClick={handleFormSumbit}>
                Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;