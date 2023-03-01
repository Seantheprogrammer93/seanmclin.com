import React from 'react'

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Sean McLin</h1>
      <p className="text-base md:text-xl mb-3 font-medium">Software Developer</p>
      <p className="text-small max-w-xl mb-6 font-bold">
        I'm a software developer with hands-on experience in a variety of technologies and programming languages.
        I'm passionate about building great software and I'm always looking for new opportunities to learn and grow.
        As my portfolio shows, I try to find challenging and unique projects to work on. For example, this site was built from
        scratch using ReactJS, TailwindCSS and Vite.
      </p>
    </div>
  )
}

export default Intro