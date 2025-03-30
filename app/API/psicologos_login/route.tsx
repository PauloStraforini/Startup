import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const psicologos = await prisma.psicologos.findMany();
    const total = psicologos.length;

    return NextResponse.json({ total, psicologos }, { status: 200 });
  } catch (error) {
    console.error("Erro ao buscar psicólogos:", error);
    return NextResponse.json({ error: "Erro ao buscar dados" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validação básica
    if (!data.nome || !data.email) {
      return NextResponse.json({ error: "Nome e email são obrigatórios" }, { status: 400 });
    }

    const newPsicologo = await prisma.psicologos.create({ data });

    return NextResponse.json(newPsicologo, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar psicólogo:", error);
    return NextResponse.json({ error: "Erro ao salvar dados" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;

    if (!id) {
      return NextResponse.json({ error: "ID é obrigatório" }, { status: 400 });
    }

    const updatedPsicologo = await prisma.psicologos.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(updatedPsicologo, { status: 200 });
  } catch (error) {
    console.error("Erro ao atualizar psicólogo:", error);
    return NextResponse.json({ error: "Erro ao atualizar" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id") ? parseInt(searchParams.get("id") as string, 10) : null;

    if (!id) {
      return NextResponse.json({ error: "ID é obrigatório" }, { status: 400 });
    }

    if (!id || isNaN(id)) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 });
    }

    await prisma.psicologos.delete({ where: { id: id } });

    return NextResponse.json({ message: "Psicólogo deletado com sucesso" }, { status: 200 });
  } catch (error) {
    console.error("Erro ao deletar psicólogo:", error);
    return NextResponse.json({ error: "Erro ao deletar" }, { status: 500 });
  }
}
