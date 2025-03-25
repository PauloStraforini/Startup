import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();
}

main().catch((e) => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});

export async function GET() {
  try {
    const psicologos = await prisma.psicologos.findMany();
    const total = await prisma.psicologos.count();
    return NextResponse.json({ total, psicologos }, { status: 200 });
  } catch (error) {
    console.error("Erro ao buscar psicólogos:", error);
    const errorMessage = error instanceof Error ? error.message : "Erro interno";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const newPsicologo = await prisma.psicologos.create({ data });
    return NextResponse.json(newPsicologo, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar psicólogo:", error);
    const errorMessage = error instanceof Error ? error.message : "Erro interno";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;
    const updatedPsicologo = await prisma.psicologos.update({
      where: { id },
      data: updateData,
    });
    return NextResponse.json(updatedPsicologo, { status: 200 });
  } catch (error) {
    console.error("Erro ao atualizar psicólogo:", error);
    const errorMessage = error instanceof Error ? error.message : "Erro interno";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    await prisma.psicologos.delete({
      where: { id },
    });
    return NextResponse.json({ message: "Psicólogo deletado com sucesso" }, { status: 200 });
  } catch (error) {
    console.error("Erro ao deletar psicólogo:", error);
    const errorMessage = error instanceof Error ? error.message : "Erro interno";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}