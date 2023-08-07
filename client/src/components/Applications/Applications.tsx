import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import DeleteIcon from '@mui/icons-material/Delete';
// eslint-disable-next-line import/no-extraneous-dependencies
import EditIcon from '@mui/icons-material/Edit';
import Header from '../Header/Header';

function Applications() {
  return (
    <>
      <Header />
      <div>
        <div className="container min-h-screen min-w-full mx-auto py-8 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200">
          <h1 className="text-2xl font-bold mb-6 text-left text-white ml-8 drop-shadow">Your applications &#129412;</h1>
          <div className="flex flex-col mx-3 mb-6 ml-8">
            <div className="flex flex-col p-6 justify-between m-2 ml-0 bg-white bg-opacity-10 backdrop-blur-sm min-w-0 break-words border-0 rounded-2xl mb-5 draggable shadow-lg">
              <span className="text-blue-500 text-xl font-bold mr-2">7th Aug 2022</span>
              <span className="pt-1 font-medium text-white text-lg">Frontend Software Engineer</span>
              <span className="pt-1 font-bold text-white/80 text-lg">Google</span>
              <span className="pt-1 font-bold text-white/80 text-lg">120k$ / year</span>
              <span className="pt-1 font-normal text-white text-lg">Software engineer on the frontend. MERN stack, using redux</span>
              <a
                href="https://www.linkedin.com/jobs/collections/recommended/?currentJobId=3654909940"
                className="text-white text-md text-center rounded-lg hover:rounded-3xl px-5 mt-2 py-2.5 mr-2 mb-2 bg-blue-500 hover:bg-blue-700 font-medium w-44 transition-all duration-300"
              >
                Job offer
              </a>

              <div className="flex gap-4">
                <button
                  type="button"
                  className="w-20 p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
                >
                  <EditIcon />
                </button>
                <button
                  type="button"
                  className="w-20 p-2.5 bg-red-500 rounded-xl hover:rounded-3xl hover:bg-red-600 transition-all duration-300 text-white"
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Applications;
