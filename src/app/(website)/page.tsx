
// import { Button } from '@/components/ui/button'
// import CounterApp from '@/components/CounterApp'
import PersonalInfo from '@/components/Personal-Info'
import Table from '@/components/Table/Table';
// import dynamic from 'next/dynamic';
// const Map = dynamic(() => import('@/components/Map'), { ssr: false });

const Home = () => {
  return (
    <div >
      {/* <h3 className='font-inter'>Home page</h3>
      <h2 className='font-poppins text-primary'>Hello World</h2>
      <Button>Click Me</Button> */}
      {/* <Map/> */}
      {/* <CounterApp/> */}
      <PersonalInfo/>
      <Table/>
    </div>
  )
}

export default Home;
