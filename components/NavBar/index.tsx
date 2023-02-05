import { GiCommercialAirplane } from 'react-icons/gi'


export default function NavBar(){
  return(
    <nav className="w-full bg-blue-800 h-20 px-16 flex items-center">
      <div className='flex flex-row items-center gap-5'>
        <GiCommercialAirplane size={50} color={'#2d8fff'}/>
        <h1 className='text-white text-xl font-semibold '>MasterBot - Aviator</h1>
      </div>
    </nav>
  )
}