import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma/client'

type Data = {
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method === 'POST'){
    
    const { customer } = req.body;
    const email  = customer.email;

    const createdAuthEmail = await prisma.autorizedEmail.create({
      data:{
        email
      }
    })

    return res.status(201).json({ message: 'Email cadastrado com sucesso' });
  }
}
