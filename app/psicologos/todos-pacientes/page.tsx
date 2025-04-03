"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/ui/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from
"@/components/ui/sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  AlertCircle,
  Calendar,
  FileText,
  Filter,
  MessageSquare,
  MoreHorizontal,
  Plus,
  Search,
  SlidersHorizontal,
  Smile,
  Frown,
  Meh,
  Users,
  X,
} from "lucide-react"

// Sample user data
const users = [
  {
    id: 1,
    avatar: "/placeholder.svg?height=40&width=40",
    name: "Maria Silva",
    status: "ativo",
    last_session: "15/03/2024",
    treatment: "TCC",
    progress: 75,
    mood: "neutro",
    alerts: 2,
    therapist: "Dra. Mariana",
    tags: ["Alta Recente"],
  },
  {
    id: 2,
    avatar: "/placeholder.svg?height=40&width=40",
    name: "João Santos",
    status: "ativo",
    last_session: "12/03/2024",
    treatment: "Terapia Individual",
    progress: 45,
    mood: "positivo",
    alerts: 0,
    therapist: "Dra. Mariana",
    tags: [],
  },
  {
    id: 3,
    avatar: "/placeholder.svg?height=40&width=40",
    name: "Ana Oliveira",
    status: "pendente",
    last_session: "02/03/2024",
    treatment: "Terapia de Casal",
    progress: 30,
    mood: "negativo",
    alerts: 1,
    therapist: "Dra. Mariana",
    tags: ["Novo"],
  },
  {
    id: 4,
    avatar: "/placeholder.svg?height=40&width=40",
    name: "Carlos Mendes",
    status: "inativo",
    last_session: "15/02/2024",
    treatment: "Avaliação Psicológica",
    progress: 90,
    mood: "neutro",
    alerts: 0,
    therapist: "Dra. Mariana",
    tags: [],
  },
  {
    id: 5,
    avatar: "/placeholder.svg?height=40&width=40",
    name: "Juliana Costa",
    status: "ativo",
    last_session: "10/03/2024",
    treatment: "TCC",
    progress: 60,
    mood: "positivo",
    alerts: 0,
    therapist: "Dra. Mariana",
    tags: [],
  },
  {
    id: 6,
    avatar: "/placeholder.svg?height=40&width=40",
    name: "Roberto Gomes",
    status: "ativo",
    last_session: "08/03/2024",
    treatment: "Terapia Individual",
    progress: 25,
    mood: "negativo",
    alerts: 3,
    therapist: "Dra. Mariana",
    tags: ["Urgente"],
  },
  {
    id: 7,
    avatar: "/placeholder.svg?height=40&width=40",
    name: "Fernanda Lima",
    status: "ativo",
    last_session: "05/03/2024",
    treatment: "Terapia Individual",
    progress: 50,
    mood: "neutro",
    alerts: 0,
    therapist: "Dra. Mariana",
    tags: [],
  },
  {
    id: 8,
    avatar: "/placeholder.svg?height=40&width=40",
    name: "Pedro Almeida",
    status: "pendente",
    last_session: "01/03/2024",
    treatment: "Avaliação Psicológica",
    progress: 15,
    mood: "neutro",
    alerts: 1,
    therapist: "Dra. Mariana",
    tags: ["Novo"],
  },
  {
    id: 9,
    avatar: "/placeholder.svg?height=40&width=40",
    name: "Paulo Straforini",
    status: "ativo",
    last_session: "08/03/2024",
    treatment: "Terapia para superar a Ex-namorada",
    progress: 50,
    mood: "neutro",
    alerts: 3,
    therapist: "Dra. Mariana",
    tags: ["Novo"],
  },
  {
    id: 10,
    avatar: "/placeholder.svg?height=40&width=40",
    name: "Cristian Souza",
    status: "ativo",
    last_session: "18/10/2024",
    treatment: "Terapia para superar a Ex-namorada",
    progress: 20,
    mood: "negativo",
    alerts: 1,
    therapist: "Dra. Mariana",
    tags: ["Urgente"],
  },
]

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("todos")
  const [treatmentFilter, setTreatmentFilter] = useState("todos")
  const [activeFilters, setActiveFilters] = useState(0)

  // Filter users based on search term and filters
  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "todos" || user.status === statusFilter
    const matchesTreatment = treatmentFilter === "todos" || user.treatment === treatmentFilter

    return matchesSearch && matchesStatus && matchesTreatment
  })

  // Calculate active filters
  const calculateActiveFilters = () => {
    let count = 0
    if (statusFilter !== "todos") count++
    if (treatmentFilter !== "todos") count++
    return count
  }

  // Reset all filters
  const resetFilters = () => {
    setStatusFilter("todos")
    setTreatmentFilter("todos")
  }

  // Get mood icon based on mood
  const getMoodIcon = (mood: string) => {
    switch (mood) {
      case "positivo":
        return <Smile className="h-4 w-4 text-green-500" />
      case "negativo":
        return <Frown className="h-4 w-4 text-red-500" />
      default:
        return <Meh className="h-4 w-4 text-yellow-500" />
    }
  }

  // Get status badge based on status
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ativo":
        return (
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900/50">
            Ativo
          </Badge>
        )
      case "pendente":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300 hover:bg-yellow-100 dark:hover:bg-yellow-900/50">
            Pendente
          </Badge>
        )
      case "inativo":
        return (
          <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900/50">
            Inativo
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-indigo-100 dark:border-indigo-800 px-4 bg-white dark:bg-indigo-950/50">
          <SidebarTrigger className="-ml-1 text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400" />
          <Separator orientation="vertical" className="mr-2 h-4 bg-indigo-200 dark:bg-indigo-700" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink
                  href="#"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                >
                  Dashboard
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block text-indigo-300 dark:text-indigo-600" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-gray-800 dark:text-gray-200">Todos Usuários</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 bg-gradient-to-b from-slate-50 to-indigo-50 dark:from-indigo-950 dark:to-indigo-900 min-h-screen">
          {/* Header with title and actions */}
          <div className="flex flex-col md:flex-row gap-4 items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 flex items-center gap-2">
                <Users className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                Todos Usuários
                <Badge className="ml-2 bg-indigo-100 hover:bg-indigo-300 text-indigo-800 dark:bg-indigo-800/50 dark:text-indigo-300">
                  {users.length} total
                </Badge>
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Gerencie todos os pacientes cadastrados no sistema
              </p>
            </div>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:text-white">
              <Plus className="mr-2 h-4 w-4" /> Novo Paciente
            </Button>
          </div>

          {/* Search and filters */}
          <Card className="bg-white dark:bg-indigo-900/50 border-indigo-100 dark:border-indigo-800">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <Input
                    placeholder="Buscar paciente por nome..."
                    className="pl-9 bg-white dark:bg-indigo-950/50 border-indigo-200 dark:border-indigo-700 focus-visible:ring-indigo-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="border-indigo-200 dark:border-indigo-700 bg-white dark:bg-indigo-950/50"
                      >
                        <Filter className="mr-2 h-4 w-4" />
                        Filtros
                        {activeFilters > 0 && (
                          <Badge className="ml-2 bg-indigo-100 text-indigo-800 dark:bg-indigo-800/50 dark:text-indigo-300">
                            {activeFilters}
                          </Badge>
                        )}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 bg-white dark:bg-indigo-900 border-indigo-200 dark:border-indigo-700">
                      <div className="p-2">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Status</span>
                          {statusFilter !== "todos" && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 px-2 text-gray-500 dark:text-gray-400"
                              onClick={() => setStatusFilter("todos")}
                            >
                              <X className="h-3 w-3 mr-1" /> Limpar
                            </Button>
                          )}
                        </div>
                        <Select value={statusFilter} onValueChange={setStatusFilter}>
                          <SelectTrigger className="w-full border-indigo-200 dark:border-indigo-700 bg-white dark:bg-indigo-950/50">
                            <SelectValue placeholder="Selecione o status" />
                          </SelectTrigger>
                          <SelectContent className="bg-white dark:bg-indigo-900 border-indigo-200 dark:border-indigo-700">
                            <SelectItem value="todos">Todos</SelectItem>
                            <SelectItem value="ativo">Ativo</SelectItem>
                            <SelectItem value="pendente">Pendente</SelectItem>
                            <SelectItem value="inativo">Inativo</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Separator className="my-2 bg-indigo-100 dark:bg-indigo-800" />
                      <div className="p-2">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Tratamento</span>
                          {treatmentFilter !== "todos" && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 px-2 text-gray-500 dark:text-gray-400"
                              onClick={() => setTreatmentFilter("todos")}
                            >
                              <X className="h-3 w-3 mr-1" /> Limpar
                            </Button>
                          )}
                        </div>
                        <Select value={treatmentFilter} onValueChange={setTreatmentFilter}>
                          <SelectTrigger className="w-full border-indigo-200 dark:border-indigo-700 bg-white dark:bg-indigo-950/50">
                            <SelectValue placeholder="Selecione o tratamento" />
                          </SelectTrigger>
                          <SelectContent className="bg-white dark:bg-indigo-900 border-indigo-200 dark:border-indigo-700">
                            <SelectItem value="todos">Todos</SelectItem>
                            <SelectItem value="TCC">TCC</SelectItem>
                            <SelectItem value="Terapia Individual">Terapia Individual</SelectItem>
                            <SelectItem value="Terapia de Casal">Terapia de Casal</SelectItem>
                            <SelectItem value="Avaliação Psicológica">Avaliação Psicológica</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Separator className="my-2 bg-indigo-100 dark:bg-indigo-800" />
                      <div className="p-2 flex justify-between">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-700 dark:text-gray-300"
                          onClick={resetFilters}
                        >
                          Limpar Todos
                        </Button>
                        <Button
                          size="sm"
                          className="bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-700 dark:hover:bg-indigo-600"
                          onClick={() => setActiveFilters(calculateActiveFilters())}
                        >
                          Aplicar
                        </Button>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button
                    variant="outline"
                    className="border-indigo-200 dark:border-indigo-700 bg-white dark:bg-indigo-950/50"
                  >
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    Colunas
                  </Button>
                </div>
              </div>

              {/* Active filters */}
              {(statusFilter !== "todos" || treatmentFilter !== "todos") && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {statusFilter !== "todos" && (
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1 bg-indigo-50 dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-700 text-indigo-800 dark:text-indigo-300"
                    >
                      Status: {statusFilter.charAt(0).toUpperCase() + statusFilter.slice(1)}
                      <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => setStatusFilter("todos")} />
                    </Badge>
                  )}
                  {treatmentFilter !== "todos" && (
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1 bg-indigo-50 dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-700 text-indigo-800 dark:text-indigo-300"
                    >
                      Tratamento: {treatmentFilter}
                      <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => setTreatmentFilter("todos")} />
                    </Badge>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 px-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                    onClick={resetFilters}
                  >
                    Limpar Todos
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Users table */}
          <Card className="bg-white dark:bg-indigo-900/50 border-indigo-100 dark:border-indigo-800">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-indigo-100 dark:border-indigo-800 hover:bg-transparent dark:hover:bg-transparent">
                    <TableHead className="text-indigo-900 dark:text-indigo-100 font-medium">Paciente</TableHead>
                    <TableHead className="text-indigo-900 dark:text-indigo-100 font-medium">Status</TableHead>
                    <TableHead className="text-indigo-900 dark:text-indigo-100 font-medium">Última Sessão</TableHead>
                    <TableHead className="text-indigo-900 dark:text-indigo-100 font-medium">Tratamento</TableHead>
                    <TableHead className="text-indigo-900 dark:text-indigo-100 font-medium">Progresso</TableHead>
                    <TableHead className="text-indigo-900 dark:text-indigo-100 font-medium">Humor</TableHead>
                    <TableHead className="text-indigo-900 dark:text-indigo-100 font-medium">Alertas</TableHead>
                    <TableHead className="text-right text-indigo-900 dark:text-indigo-100 font-medium">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                      <TableRow
                        key={user.id}
                        className="border-indigo-100 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-800/50 transition-colors"
                      >
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={user.avatar} alt={user.name} />
                              <AvatarFallback className="bg-indigo-200 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-200">
                                {user.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-indigo-900 dark:text-indigo-100 flex items-center gap-2">
                                {user.name}
                                {user.tags.map((tag, index) => (
                                  <Badge
                                    key={index}
                                    className={`text-xs ${
                                      tag === "Novo"
                                        ? "bg-blue-100 hover:bg-blue-200 text-blue-800 dark:bg-blue-900/50 dark:hover:bg-blue-800 dark:text-blue-300"
                                        : tag === "Urgente"
                                          ? "bg-red-100 hover:bg-red-200 text-red-800 dark:bg-red-900/50 dark:text-red-300"
                                          : "bg-purple-100 hover:bg-purple-200 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300"
                                    }`}
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">{user.therapist}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{getStatusBadge(user.status)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                            <span>{user.last_session}</span>
                          </div>
                        </TableCell>
                        <TableCell>{user.treatment}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="w-24 h-2 bg-indigo-100 dark:bg-indigo-800 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-indigo-600 dark:bg-indigo-400 rounded-full"
                                style={{ width: `${user.progress}%` }}
                              />
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">{user.progress}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="flex items-center gap-1">
                                  {getMoodIcon(user.mood)}
                                  <span className="sr-only">{user.mood}</span>
                                </div>
                              </TooltipTrigger>
                              <TooltipContent className="bg-white dark:bg-indigo-900 border-indigo-200 dark:border-indigo-700">
                                <p>{user.mood.charAt(0).toUpperCase() + user.mood.slice(1)}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </TableCell>
                        <TableCell>
                          {user.alerts > 0 ? (
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <div className="flex items-center gap-1">
                                    <AlertCircle className="h-4 w-4 text-red-500" />
                                    <span className="text-red-500">{user.alerts}</span>
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent className="bg-white dark:bg-indigo-900 border-indigo-200 dark:border-indigo-700">
                                  <p>
                                    {user.alerts} alerta{user.alerts > 1 ? "s" : ""} pendente
                                    {user.alerts > 1 ? "s" : ""}
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          ) : (
                            <span className="text-gray-500 dark:text-gray-400">-</span>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Abrir menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                              align="end"
                              className="bg-white dark:bg-indigo-900 border-indigo-200 dark:border-indigo-700"
                            >
                              <DropdownMenuItem className="text-indigo-600 dark:text-indigo-400 focus:text-indigo-600 dark:focus:text-indigo-400 focus:bg-indigo-50 dark:focus:bg-indigo-800/50">
                                <MessageSquare className="mr-2 h-4 w-4" />
                                <span>Enviar Mensagem</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="focus:bg-indigo-50 dark:focus:bg-indigo-800/50">
                                <FileText className="mr-2 h-4 w-4" />
                                <span>Ver Histórico</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="focus:bg-indigo-50 dark:focus:bg-indigo-800/50">
                                <Calendar className="mr-2 h-4 w-4" />
                                <span>Agendar Sessão</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="focus:bg-indigo-50 dark:focus:bg-indigo-800/50">
                                <Users className="mr-2 h-4 w-4" />
                                <span>Editar Perfil</span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={8} className="h-24 text-center">
                        <div className="flex flex-col items-center justify-center text-gray-500 dark:text-gray-400">
                          <Search className="h-10 w-10 mb-2 opacity-50" />
                          <p className="text-lg font-medium">Nenhum paciente encontrado</p>
                          <p className="text-sm">Tente ajustar os filtros ou termos de busca</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Pagination */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Mostrando{" "}
              <span className="font-medium text-indigo-900 dark:text-indigo-100">1-{filteredUsers.length}</span> de{" "}
              <span className="font-medium text-indigo-900 dark:text-indigo-100">{users.length}</span> pacientes
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-indigo-200 dark:border-indigo-700 bg-white dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400"
                disabled
              >
                Anterior
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-indigo-200 dark:border-indigo-700 bg-white dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400"
              >
                Próximo
              </Button>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

