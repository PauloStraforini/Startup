import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const psicologos = await prisma.psicologo.findMany();

    return new Response(JSON.stringify(psicologos), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Erro ao buscar psicólogos:', error);

    return new Response(JSON.stringify({ error: 'Erro interno no servidor' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
