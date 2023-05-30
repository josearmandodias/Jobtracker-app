import React from "react"

function Auth(props) {
  return (
    <div className="flex h-screen justify-center items-center bg-green-400">
      
      <form className="text-center w-80 bg-white/20 p-8 rounded-lg shadow-xl backdrop-blur-sm border border-white">
        <div className="block">
          <h3 className="font-bold text-green-700 text-2xl mb-6">Jobtracker</h3>
          <h3 className="font-bold text-black">Sign In </h3>
          <a href="/signup" className="font-bold text-black hover:text-green-700">Create an account</a>
          <div className="form-group mt-3">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email address
            </label>
            <input
              type="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Password
            </label>
            <input
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" class="px-4 py-1 text-sm text-green-600 font-semibold rounded-full border border-green-600 hover:text-white hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
  )
};

export default Auth;