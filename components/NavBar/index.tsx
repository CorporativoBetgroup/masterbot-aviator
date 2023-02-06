import Link from 'next/link';
import { GiCommercialAirplane } from 'react-icons/gi';
import { MdOutlineExitToApp } from 'react-icons/md'


export default function NavBar(){
  return(
    <nav className="w-full bg-blue-800 h-20 px-16 flex items-center justify-between">
      <div className='flex flex-row items-center gap-5'>
        <GiCommercialAirplane size={50} color={'#2d8fff'}/>
        <h1 className='text-white text-xl font-semibold '>MasterBot - Aviator</h1>
      </div>

      <div>
        <Link href={'/'}>
          <button>
            <MdOutlineExitToApp size={40} color='#ffffff'/>
          </button>
        </Link>
      </div>
    </nav>
  )
}