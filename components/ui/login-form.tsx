"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login attempt with:", username, password)
  }

  return (
    <div className="flex flex-col">
      <h1 className="mb-6 text-3xl font-medium text-white">Entrar</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="username" className="block text-sm text-white">
            Nome
          </label>
          <Input
            id="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-md bg-white text-black"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm text-white">
            Senha
          </label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md bg-white text-black"
          />
          <div className="text-right">
            <Link href="/forgot-password" className="text-xs text-emerald-200 hover:underline">
              Forgot Password?
            </Link>
          </div>
        </div>

        <Button type="submit" className="w-full rounded-md bg-emerald-500 py-2 text-black hover:bg-emerald-600">
          Entrar na conta
        </Button>
      </form>

      <div className="mt-4 text-center text-sm text-white">
        <p>Não tem uma conta cirada?</p>
        <Link href="/register" className="text-emerald-200 hover:underline">
          Registre-se agora
        </Link>
      </div>
    </div>
  )
}

