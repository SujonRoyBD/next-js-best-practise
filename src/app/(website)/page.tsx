
// import { Button } from '@/components/ui/button'
import React from 'react'
import dynamic from 'next/dynamic';
const Map = dynamic(() => import('@/components/Map'), { ssr: false });

const Home = () => {
  return (
    <div >
      {/* <h3 className='font-inter'>Home page</h3>
      <h2 className='font-poppins text-primary'>Hello World</h2>
      <Button>Click Me</Button> */}
      <Map/>
    </div>
  )
}

export default Home
