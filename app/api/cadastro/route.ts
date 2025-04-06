// app/api/cadastro/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { crp, email, nomeCompleto, dataNascimento, especialidades } = body;

    const psicologo = await prisma.psicologo.create({
      data: {
        crp,
        email,
        nomeCompleto,
        dataNascimento: new Date(dataNascimento),
        especialidades,
      },
    });

    return NextResponse.json(psicologo, { status: 201 });
  } catch (error) {
    console.error("Erro no cadastro:", error);
    return NextResponse.json(
      { message: "Erro interno no servidor" },
      { status: 500 }
    );
  }
}