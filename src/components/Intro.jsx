import React from 'react'

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Sean McLin</h1>
      <p className="text-base md:text-xl mb-3 font-medium">Software Developer & IT Expert</p>
      <p className="text-small max-w-xl mb-6 font-bold">
        I'm passionate about building great software and learning different and new technologies.
        This site was built from scratch using ReactJS, TailwindCSS, Vite, and hosted on Vercel.
        <h2 className="text-md mb-1 mt-4 font-bold">Hosted OpenVPN Access Server credentials:</h2>
        <p className="text-small max-w-xl font-bold text-red-500">Username: beta-user, Password: test123</p>
      </p>
    </div>
  )
}

export default Intro