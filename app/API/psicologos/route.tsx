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