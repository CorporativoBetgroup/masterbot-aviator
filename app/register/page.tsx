import Link from 'next/link'
import { GiCommercialAirplane } from 'react-icons/gi'

import Form from '../../components/FormRegister'


export default function Home() {
  return (
    <main className="flex items-center justify-center bg-base w-[100vw] h-[100vh]">
      <div className="bg-white max-w-7xl max-h-[35rem] w-full h-full rounded-tl-[3.75rem] rounded-br-[3.75rem] flex flex-row justify-between overflow-hidden">
        <div className="w-1/2 bg-black flex justify-center flex-col items-center gap-16">
          <div className='flex justify-center flex-col items-center'>
            <GiCommercialAirplane size={250} color={'#0246ac'}/> 
            <h1 className='text-white text-5xl font-semibold'>MasterBot - Aviator</h1>
          </div>
          <h1 className='text-white text-2xl'>Ou conecte-se <Link href={'/'} className='text-blue-200 underline decoration-solid'>aqui</Link></h1>
        </div>
        <div className="w-1/2 bg-blue-800 px-8 py-10 text-white flex justify-between flex-col items-center">
          <h1 className='text-2xl'>Cadastre-se em nossa plataforma</h1>
          <Form />
        </div>
      </div>
    </main>
  )
}