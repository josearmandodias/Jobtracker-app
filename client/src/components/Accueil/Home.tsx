import React from 'react';
import Header from '../Header/Header';

function Home() {
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = Object.fromEntries(form);
    console.log(data);

    try {
    /*
    await fetch("http://localhost:3000/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    */
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <div className="main min-h-screen items-center justify-center bg-gradient-to-r from-rose-100 to-teal-100">
        <div className="container mx-auto py-8">
          <h1 className="text-2xl font-bold mb-6 text-center text-white drop-shadow">Add your new target ! &#128640;</h1>
          <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md" method="POST" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="job_title" className="block text-gray-700 text-sm font-bold mb-2">
                Job title &#128377;
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:border-indigo-500"
                  type="text"
                  placeholder="e.g : Backend developer"
                  name="job_title"
                  required
                />
              </label>

              <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">
                Company name &#127970;
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:border-indigo-500"
                  type="text"
                  placeholder="e.g : Google"
                  name="company"
                  required
                />
              </label>

              <label htmlFor="salary" className="block text-gray-700 text-sm font-bold mb-2">
                Annual Salary &#129297;
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:border-indigo-500"
                  type="number"
                  min={0}
                  placeholder="e.g : 120k$ / year"
                  name="salary"
                  required
                />
              </label>

              <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                Job description &#128214;
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:border-indigo-500"
                  type="text"
                  placeholder="e.g : Technical stack : Javascript..."
                  name="description"
                  required
                />
              </label>

              <label htmlFor="offer" className="block text-gray-700 text-sm font-bold mb-2">
                Job offer &#128279;
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:border-indigo-500"
                  type="text"
                  placeholder="e.g : https://m5.apply.indeed.com/..."
                  name="offer"
                />
              </label>

              <label htmlFor="application_date" className="block text-gray-700 text-sm font-bold mb-2">
                Application Date &#128197;
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:border-indigo-500"
                  type="date"
                  name="application_date"
                  required
                />
              </label>
            </div>
            <button
              className="w-full bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
