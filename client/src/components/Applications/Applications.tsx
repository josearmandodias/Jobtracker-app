import React from 'react';
import Header from '../Header/Header';

function Applications() {
  return (
    <>
      <Header />
      <div>
        <div className="container min-h-screen min-w-full mx-auto py-8 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-red-900 via-violet-200 to-orange-500">
          <h1 className="text-2xl font-bold mb-6 text-left text-white ml-8 drop-shadow">Your applications &#129412;</h1>
          <div className="flex flex-col mx-3 mb-6 ml-8">
            <div className="flex flex-col p-6 justify-between m-2 ml-0 bg-white bg-opacity-20 backdrop-blur-lg min-w-0 break-words border-0 rounded-2xl mb-5 draggable shadow-lg">
              <span className="text-white text-xl font-semibold mr-2">Sent : 7 Aug 2022</span>
              <span className="pt-1 font-medium text-white text-lg">Frontend Software Engineer</span>
              <span className="pt-1 font-medium text-white/80 text-base">Google</span>
              <span className="pt-1 font-medium text-white/80 text-lg">120k$ / year</span>
              <span className="pt-1 font-medium text-white text-lg">Softare engineer on the frontend. MERN stack, using redux</span>
              <a
                href="https://www.linkedin.com/jobs/collections/recommended/?currentJobId=3654909940"
                className="text-white text-sm text-center rounded-lg px-5 mt-2 py-2.5 mr-2 mb-2 bg-blue-500 hover:bg-blue-700 font-medium w-40 transition duration-300"
              >
                Job offer
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Applications;
