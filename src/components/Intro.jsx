import React from 'react'

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Sean McLin</h1>
      <p className="text-base md:text-xl mb-3 font-medium">Tech Expert</p>
      <p className="text-small max-w-xl mb-6 font-bold">
        I'm a tech expert and a computer programmer.
        I'm passionate about building great software, and learning about new and exciting technologies.
        This site was built from scratch using ReactJS, TailwindCSS and Vite.
      </p>
    </div>
  )
}

export default Intro