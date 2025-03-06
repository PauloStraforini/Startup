"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Brain, Eye, EyeOff, AlertCircle } from "lucide-react"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [isGovEmployee, setIsGovEmployee] = useState(false)
  const [govCode, setGovCode] = useState("")
  const [govCodeError, setGovCodeError] = useState("")

  const toggleAuthMode = () => setIsLogin(!isLogin)

  const validateGovCode = (code: string) => {
    // Exemplo de validação simples - código governamental deve ter 8 caracteres
    // e começar com "GOV-"
    const pattern = /^GOV-\d{4}$/
    if (!pattern.test(code)) {
      setGovCodeError("Código inválido. Formato esperado: GOV-XXXX")
      return false
    }
    setGovCodeError("")
    return true
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Se for funcionário governamental, valida o código
    if (isGovEmployee) {
      const isValid = validateGovCode(govCode)
      if (!isValid) return
    }

    // Aqui você implementaria a lógica de autenticação/registro
    console.log("Form submitted", { isLogin, isGovEmployee, govCode })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-blue-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/" className="flex items-center justify-center gap-2 mb-6">
          <Brain className="h-10 w-10 text-indigo-600" />
          <span className="text-3xl font-bold text-indigo-600">PsyTech</span>
        </Link>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {isLogin ? "Entre na sua conta" : "Crie sua conta"}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {isLogin ? "Novo na plataforma?" : "Já tem uma conta?"}{" "}
          <button
            onClick={toggleAuthMode}
            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            {isLogin ? "Crie uma conta" : "Faça login"}
          </button>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nome completo
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">
                  Confirme a senha
                </label>
                <div className="mt-1">
                  <input
                    id="password_confirmation"
                    name="password_confirmation"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            )}

            {/* Campo de seleção para funcionário governamental */}
            <div className="flex items-center">
              <input
                id="gov_employee"
                name="gov_employee"
                type="checkbox"
                checked={isGovEmployee}
                onChange={() => setIsGovEmployee(!isGovEmployee)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="gov_employee" className="ml-2 block text-sm text-gray-900">
                Sou funcionário da área governamental
              </label>
            </div>

            {/* Campo de código governamental */}
            {isGovEmployee && (
              <div>
                <label htmlFor="gov_code" className="block text-sm font-medium text-gray-700">
                  Código Governamental
                </label>
                <div className="mt-1">
                  <input
                    id="gov_code"
                    name="gov_code"
                    type="text"
                    value={govCode}
                    onChange={(e) => setGovCode(e.target.value)}
                    placeholder="GOV-XXXX"
                    required={isGovEmployee}
                    className={`appearance-none block w-full px-3 py-2 border ${
                      govCodeError ? "border-red-300" : "border-gray-300"
                    } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  />
                  {govCodeError && (
                    <div className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {govCodeError}
                    </div>
                  )}
                  <p className="mt-1 text-xs text-gray-500">Formato: GOV-XXXX (onde XXXX são números)</p>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  Lembrar-me
                </label>
              </div>

              {isLogin && (
                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Esqueceu sua senha?
                  </a>
                </div>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {isLogin ? "Entrar" : "Criar conta"}
              </button>
            </div>
          </form>

          
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href="/" className="text-indigo-600 hover:text-indigo-500 flex items-center justify-center">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  )
}

