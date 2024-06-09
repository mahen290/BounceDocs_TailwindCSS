import React from 'react';

function Background() {
  return (
    <div className = 'fixed z-[2] w-full h-screen bg-zinc-800'>
        <div className = 'absolute top-0 w-full py-1 flex justify-center text-zinc-400 text-[2vw] font-semibold'> Document. </div>
        <h1 className = 'absolute top-[74%] left-1/2 -translate-x-[44%] -translate-y-[50%] text-[12vw] leading-none tracking-tighter font-semibold text-zinc-600'> Docs. </h1>
    </div>
  );
}

export default Background;
