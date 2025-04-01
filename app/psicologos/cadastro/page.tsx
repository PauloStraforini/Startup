'use client'

import { signIn } from "@/auth"

export default function Cadastro() {
  return (
    <button 
      onClick={() => signIn('google', { callbackUrl: "/dashboard" })} 
      style={{
        padding: "10px 20px",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px"
      }}
    >
      Fazer Cadastro
    </button>
  )
}