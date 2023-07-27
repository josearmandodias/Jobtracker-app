import React from 'react';
import Navbar from '../Navbar/Navbar';

function Applications() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6 text-left">Your applications &#129412;</h1>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <div className="bg-red" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Applications;
