import Link from 'next/link';
import { AiFillMail, AiFillLock } from 'react-icons/ai';

export default function Form(){
  return(
    <form action="" className='w-full'>
      <label htmlFor="email" className='text-xl text-blue-100'>Insira seu E-mail</label>
      <div className="flex flex-row border-2 border-white gap-5 px-4 py-3 rounded-3xl mb-10 mt-2">
        <AiFillMail size={30}/>
        <input 
          type="text" 
          id="email" 
          placeholder="Email..."
          className='bg-transparent text-xl w-full pl-2 text-blue-100 border-0 outline-none border-l-2'
        />
      </div>

      <label htmlFor="password" className='text-xl text-blue-100'>Insira sua Senha</label>
      <div className="flex flex-row border-2 border-white gap-5 px-4 py-3 rounded-3xl mb-20 mt-2">
        <AiFillLock size={30}/>
        <input 
          type="text" 
          id="password" 
          placeholder="Senha..."
          className='bg-transparent text-xl w-full pl-2 text-blue-100 border-0 outline-none border-l-2'
        />
      </div>

      <Link href={'/home'}>
        <button className="text-white bg-blue-500 rounded-3xl w-full py-3 uppercase">
          <h1 className="font-medium text-xl">
            Entrar
          </h1>
        </button>
      </Link>
    </form>
  )
}