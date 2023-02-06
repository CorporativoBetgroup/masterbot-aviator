import Link from 'next/link'
import { GiCommercialAirplane } from 'react-icons/gi'

import Form from '../components/Form'


export default function Home() {
  return (
    <main className="flex items-center justify-center bg-base w-[100vw] h-[100vh]">
      <div className="bg-white max-w-7xl max-h-[35rem] w-full h-full rounded-tl-[3.75rem] rounded-br-[3.75rem] flex flex-row justify-between overflow-hidden">
        <div className="w-1/2 bg-black px-8 py-10 flex justify-between flex-col">
          <div className='flex justify-center flex-col items-center'>
            <GiCommercialAirplane size={250} color={'#0246ac'}/> 
            <h1 className='text-white text-5xl font-semibold'>MasterBot - Aviator</h1>
          </div>

          <div className='flex gap-3 flex-col'>
            <div className='flex items-center justify-center'>
              <h2 className='text-white text-2xl'>Ainda não tem acesso? Compre 
                <a 
                  href=''
                  className='text-blue-200 underline decoration-solid ml-2'
                >aqui
                </a>
              </h2>
            </div>

            <div>
              <Link href={'/register'}>
                <button className="text-white bg-blue-500 rounded-3xl w-full py-3 uppercase">
                  <h1 className="font-medium text-lg">
                    Cadastre-se
                  </h1>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-blue-800 px-8 py-10 text-white flex justify-between flex-col items-center">
          <h1 className='text-2xl'>Conecte-se para ter acesso aos sinais</h1>

          <Form />
        </div>
      </div>
    </main>
  )
}
