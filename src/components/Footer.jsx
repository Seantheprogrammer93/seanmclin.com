import React from 'react'

function Footer() {
  return (
    <div className="py-5 text-center">
      <p className="text-sm mt-2 opacity-50">
        &copy; {new Date().getFullYear()} Sean McLin. All rights reserved.
      </p>
    </div>
  )
}

export default Footer