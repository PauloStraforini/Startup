'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CadastroPsicologo() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    crp: '',
    email: '',
    nomeCompleto: '',
    dataNascimento: '',
    especialidades: [] as string[]
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica do frontend
    if (!formData.dataNascimento) {
      alert('Preencha a data de nascimento');
      return;
    }

    try {
      const response = await fetch('/api/psicologos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          dataNascimento: formData.dataNascimento // Já está no formato YYYY-MM-DD
        }),
      });

      if (!response.ok) throw new Error('Erro no cadastro');
      
      router.push('/cadastro/sucesso');
    } catch (error) {
      console.error(error);
      alert('Erro ao cadastrar');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Outros campos... */}
      
      <input
        type="date"
        name="dataNascimento"
        value={formData.dataNascimento}
        onChange={(e) => setFormData({...formData, dataNascimento: e.target.value})}
        max={new Date().toISOString().split('T')[0]} // Impede datas futuras
        required
      />

      <button type="submit">Cadastrar</button>
    </form>
  );
}