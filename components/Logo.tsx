import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
  <Link href="/">
     <div className='font-bold text-3xl font-sans ml-4 cursor-pointer'>
    jobs<span className="text-blue-500">Now.</span>
   </div>
  </Link>
  )
}

export default Logo