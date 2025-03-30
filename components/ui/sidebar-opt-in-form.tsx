import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SidebarOptInForm() {
  return (
    <div className="rounded-lg border border-indigo-100 bg-white p-4 shadow-sm dark:border-indigo-800 dark:bg-indigo-950/50">
      <div className="mb-3 text-sm font-medium text-indigo-900 dark:text-indigo-200">Receba novidades</div>
      <p className="mb-3 text-xs text-gray-600 dark:text-gray-400">
        Fique por dentro das últimas atualizações e recursos para psicólogos
      </p>
      <form className="flex gap-2">
        <Input
          type="email"
          placeholder="Seu email"
          className="h-9 border-indigo-100 bg-white text-sm placeholder:text-gray-400 dark:border-indigo-800 dark:bg-indigo-900/50"
        />
        <Button
          type="submit"
          size="sm"
          className="h-9 bg-gradient-to-r from-indigo-600 to-teal-500 hover:from-indigo-700 hover:to-teal-600 text-white"
        >
          <ArrowRight className="h-4 w-4" />
          <span className="sr-only">Inscrever</span>
        </Button>
      </form>
    </div>
  )
}

