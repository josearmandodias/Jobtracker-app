import React from 'react';

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
          <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md" method="POST" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Job title &#128377;
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:border-indigo-500"
                  type="text"
                  placeholder="e.g : Backend developer"
                  name="job_title"
                  required
                />
              </label>

              <label className="block text-gray-700 text-sm font-bold mb-2">
                Company name &#127970;
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:border-indigo-500"
                  type="text"
                  placeholder="e.g : Google"
                  name="company"
                  required
                />
              </label>

              <label className="block text-gray-700 text-sm font-bold mb-2">
                Annual Salary 	&#129297;
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:border-indigo-500"
                type="number"
                min={0}
                placeholder="e.g : 120k$ / year"
                name="salary"
                required
              />

              <label className="block text-gray-700 text-sm font-bold mb-2">
                Job description &#128214;
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:border-indigo-500"
                type="text"
                placeholder="e.g : Technical stack : Javascript..."
                name="description"
                required
              />

              <label className="block text-gray-700 text-sm font-bold mb-2">
                Job offer &#128279;
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:border-indigo-500"
                type="text"
                placeholder="e.g : https://m5.apply.indeed.com/..."
                name="offer"
              />

              <label className="block text-gray-700 text-sm font-bold mb-2">
                Application Date &#128197;
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:border-indigo-500"
                type="date"
                name="application_date"
                required
              />
            </div>
            <button
              className="w-full bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
