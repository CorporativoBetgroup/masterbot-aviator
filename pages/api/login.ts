import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

type Data = {
  message: string;
  user?:{
    id: number
    email: string;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method === 'POST'){
    
    const { email, password } = req.body;


    if(!email.trim() || !password.trim()){
      return res.status(400).json({ message: 'Por favor, preencha todos os campos de login' })
    }

    const emailAlreadyExists = await prisma.user.findFirst({
      where:{
        email
      },
      select:{
        id: true,
        email: true,
        password: true,
      }
    })
    if(!emailAlreadyExists){
      return res.status(400).json({ message: 'Cadastro não encontrado em nossa plataforma' })
    }

    const verifyPass = await bcrypt.compare(password, emailAlreadyExists.password)
    if(!verifyPass){
      return res.status(400).json({ message: 'Senha incorreta. Tente novamente!' })
    }

    const token = jwt.sign({ id: emailAlreadyExists.id }, process.env.JWT_PASS ?? '', { 
      expiresIn: '8h' 
    })


    const { password: _, ...userLogin } = emailAlreadyExists;

    return res.json({message: 'Usuário logado com sucesso', user: userLogin, token })

  }
}
