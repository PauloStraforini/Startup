"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Calendar,
  FileText,
  Users,
  Clock,
  BarChart,
  Settings,
  Bell,
  Search,
  MessageSquare,
  Brain,
  ClipboardList,
  BookOpen,
  Video,
  PlusCircle,
  ChevronRight,
  Menu,
  LogOut,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"

export default function PsychologistWorkspace() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState("dashboard")

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800 overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`bg-white border-r border-gray-200 transition-all duration-300 ${
          isSidebarOpen ? "w-64" : "w-20"
        } flex flex-col fixed h-full z-30`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <Link href="/" className={`flex items-center gap-2 ${!isSidebarOpen && "justify-center"}`}>
            <div className="relative">
              <Brain className="h-8 w-8 text-indigo-600" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-teal-400 rounded-full animate-pulse"></span>
            </div>
            {isSidebarOpen && (
              <span className="font-bold text-xl bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent">
                PsyTech
              </span>
            )}
          </Link>
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="text-gray-500 hover:text-indigo-600">
            {isSidebarOpen ? <ChevronRight className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <nav className="px-2 space-y-1">
            {[
              { name: "Dashboard", icon: BarChart, href: "#dashboard", id: "dashboard" },
              { name: "Pacientes", icon: Users, href: "#patients", id: "patients" },
              { name: "Agenda", icon: Calendar, href: "#calendar", id: "calendar" },
              { name: "Prontuários", icon: FileText, href: "#records", id: "records" },
              { name: "Sessões Online", icon: Video, href: "#sessions", id: "sessions" },
              { name: "Recursos", icon: BookOpen, href: "#resources", id: "resources" },
              { name: "Relatórios", icon: ClipboardList, href: "#reports", id: "reports" },
              { name: "Mensagens", icon: MessageSquare, href: "#messages", id: "messages", badge: 3 },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center ${
                  !isSidebarOpen ? "justify-center" : "justify-between"
                } px-3 py-3 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === item.id
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <div className={`flex items-center ${!isSidebarOpen ? "justify-center" : ""}`}>
                  <item.icon className={`${!isSidebarOpen ? "h-6 w-6" : "h-5 w-5 mr-3"}`} />
                  {isSidebarOpen && <span>{item.name}</span>}
                </div>
                {isSidebarOpen && item.badge && (
                  <Badge variant="default" className="bg-indigo-600 hover:bg-indigo-700">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-gray-200">
          {isSidebarOpen ? (
            <div className="flex items-center">
              <Avatar className="h-10 w-10 border-2 border-indigo-100">
                <AvatarImage src="/placeholder.svg" alt="Dr. Ana Silva" />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Dra. Ana Silva</p>
                <p className="text-xs text-gray-500">Psicóloga Clínica</p>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <Avatar className="h-10 w-10 border-2 border-indigo-100">
                <AvatarImage src="/placeholder.svg" alt="Dr. Ana Silva" />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
            </div>
          )}

          <div className="mt-4">
            <Button
              variant="outline"
              className={`w-full text-gray-600 hover:text-indigo-600 hover:border-indigo-600 ${
                !isSidebarOpen && "p-2 flex justify-center"
              }`}
            >
              <Settings className={`${!isSidebarOpen ? "h-5 w-5" : "h-4 w-4 mr-2"}`} />
              {isSidebarOpen && "Configurações"}
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-20"}`}>
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
          <div className="flex items-center justify-between px-6 py-3">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleSidebar}>
                <Menu className="h-5 w-5" />
              </Button>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Buscar..."
                  className="pl-10 bg-gray-50 border-gray-200 focus:bg-white"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-indigo-600 relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-indigo-600">
                <MessageSquare className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-indigo-600">
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-6 overflow-y-auto h-[calc(100vh-57px)]">
          <Tabs defaultValue="dashboard" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Bem-vinda, Dra. Ana</h1>
                <p className="text-gray-600">Terça-feira, 12 de Março de 2024</p>
              </div>
              <TabsList className="hidden md:flex">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="patients">Pacientes</TabsTrigger>
                <TabsTrigger value="calendar">Agenda</TabsTrigger>
                <TabsTrigger value="records">Prontuários</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="dashboard" className="space-y-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Sessões Hoje",
                    value: "5",
                    icon: Calendar,
                    color: "text-blue-600",
                    bgColor: "bg-blue-100",
                  },
                  {
                    title: "Pacientes Ativos",
                    value: "28",
                    icon: Users,
                    color: "text-indigo-600",
                    bgColor: "bg-indigo-100",
                  },
                  {
                    title: "Horas Trabalhadas",
                    value: "18h",
                    icon: Clock,
                    color: "text-teal-600",
                    bgColor: "bg-teal-100",
                  },
                  {
                    title: "Relatórios Pendentes",
                    value: "3",
                    icon: FileText,
                    color: "text-amber-600",
                    bgColor: "bg-amber-100",
                  },
                ].map((stat, index) => (
                  <Card key={index}>
                    <CardContent className="p-6 flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                        <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                      </div>
                      <div className={`${stat.bgColor} p-3 rounded-full`}>
                        <stat.icon className={`h-6 w-6 ${stat.color}`} />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Today's Schedule and Upcoming Sessions */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle>Agenda de Hoje</CardTitle>
                      <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-800">
                        Ver Tudo
                      </Button>
                    </div>
                    <CardDescription>Você tem 5 sessões agendadas para hoje</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          time: "09:00 - 10:00",
                          name: "Carlos Mendes",
                          type: "Terapia Cognitivo-Comportamental",
                          status: "completed",
                          avatar: "/placeholder.svg",
                        },
                        {
                          time: "10:30 - 11:30",
                          name: "Mariana Santos",
                          type: "Primeira Consulta",
                          status: "completed",
                          avatar: "/placeholder.svg",
                        },
                        {
                          time: "13:00 - 14:00",
                          name: "Pedro Alves",
                          type: "Sessão Online",
                          status: "current",
                          avatar: "/placeholder.svg",
                        },
                        {
                          time: "15:30 - 16:30",
                          name: "Juliana Costa",
                          type: "Terapia de Casal",
                          status: "upcoming",
                          avatar: "/placeholder.svg",
                        },
                        {
                          time: "17:00 - 18:00",
                          name: "Rafael Oliveira",
                          type: "Acompanhamento",
                          status: "upcoming",
                          avatar: "/placeholder.svg",
                        },
                      ].map((session, index) => (
                        <div
                          key={index}
                          className={`flex items-center p-3 rounded-lg border ${
                            session.status === "current"
                              ? "border-indigo-200 bg-indigo-50"
                              : "border-gray-200 hover:bg-gray-50"
                          }`}
                        >
                          <div className="flex-shrink-0 mr-4">
                            <div className="text-sm font-medium text-gray-900">{session.time}</div>
                            <div className="flex items-center mt-1">
                              {session.status === "completed" && (
                                <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                                  <CheckCircle2 className="h-3 w-3 mr-1" />
                                  Concluída
                                </Badge>
                              )}
                              {session.status === "current" && (
                                <Badge className="bg-indigo-600">
                                  <span className="animate-pulse mr-1">●</span>
                                  Atual
                                </Badge>
                              )}
                              {session.status === "upcoming" && (
                                <Badge variant="outline" className="text-gray-600 border-gray-200 bg-gray-50">
                                  <Clock className="h-3 w-3 mr-1" />
                                  Pendente
                                </Badge>
                              )}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center">
                              <Avatar className="h-10 w-10 mr-3">
                                <AvatarImage src={session.avatar} alt={session.name} />
                                <AvatarFallback>
                                  {session.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-sm font-medium text-gray-900">{session.name}</p>
                                <p className="text-xs text-gray-500">{session.type}</p>
                              </div>
                            </div>
                          </div>
                          <div className="ml-4">
                            <Button
                              variant={session.status === "current" ? "default" : "outline"}
                              size="sm"
                              className={session.status === "current" ? "bg-indigo-600 hover:bg-indigo-700" : ""}
                            >
                              {session.status === "completed"
                                ? "Notas"
                                : session.status === "current"
                                  ? "Iniciar"
                                  : "Detalhes"}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Tarefas Pendentes</CardTitle>
                    <CardDescription>Você tem 5 tarefas para concluir</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Relatório - Carlos Mendes",
                          due: "Hoje",
                          priority: "high",
                          icon: FileText,
                        },
                        {
                          title: "Preparar material para Juliana",
                          due: "Hoje",
                          priority: "medium",
                          icon: BookOpen,
                        },
                        {
                          title: "Revisar prontuário - Pedro",
                          due: "Amanhã",
                          priority: "medium",
                          icon: ClipboardList,
                        },
                        {
                          title: "Responder mensagem - Mariana",
                          due: "Amanhã",
                          priority: "low",
                          icon: MessageSquare,
                        },
                        {
                          title: "Atualizar agenda semanal",
                          due: "Sexta-feira",
                          priority: "low",
                          icon: Calendar,
                        },
                      ].map((task, index) => (
                        <div
                          key={index}
                          className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
                        >
                          <div
                            className={`p-2 rounded-full mr-3 ${
                              task.priority === "high"
                                ? "bg-red-100 text-red-600"
                                : task.priority === "medium"
                                  ? "bg-amber-100 text-amber-600"
                                  : "bg-blue-100 text-blue-600"
                            }`}
                          >
                            <task.icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">{task.title}</p>
                            <div className="flex items-center mt-1">
                              <Badge
                                variant="outline"
                                className={`text-xs ${
                                  task.due === "Hoje"
                                    ? "text-red-600 border-red-200 bg-red-50"
                                    : "text-gray-600 border-gray-200"
                                }`}
                              >
                                Prazo: {task.due}
                              </Badge>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-indigo-600">
                            <CheckCircle2 className="h-5 w-5" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4 flex justify-center">
                    <Button variant="outline" className="w-full">
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Nova Tarefa
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Patient Insights and AI Assistant */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Insights de Pacientes</CardTitle>
                    <CardDescription>Resumo de atividades e progresso</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[
                        {
                          name: "Carlos Mendes",
                          sessions: 12,
                          progress: 75,
                          lastSession: "Hoje",
                          nextSession: "19/03",
                          status: "Progredindo bem",
                          avatar: "/placeholder.svg",
                        },
                        {
                          name: "Mariana Santos",
                          sessions: 3,
                          progress: 30,
                          lastSession: "Hoje",
                          nextSession: "20/03",
                          status: "Fase inicial",
                          avatar: "/placeholder.svg",
                        },
                        {
                          name: "Pedro Alves",
                          sessions: 8,
                          progress: 60,
                          lastSession: "Hoje",
                          nextSession: "19/03",
                          status: "Progresso moderado",
                          avatar: "/placeholder.svg",
                        },
                      ].map((patient, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                              <Avatar className="h-10 w-10 mr-3">
                                <AvatarImage src={patient.avatar} alt={patient.name} />
                                <AvatarFallback>
                                  {patient.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-sm font-medium text-gray-900">{patient.name}</p>
                                <p className="text-xs text-gray-500">{patient.sessions} sessões realizadas</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="text-indigo-600 border-indigo-200 bg-indigo-50">
                              {patient.status}
                            </Badge>
                          </div>
                          <div className="mb-2">
                            <div className="flex justify-between mb-1">
                              <span className="text-xs font-medium text-gray-700">Progresso do tratamento</span>
                              <span className="text-xs font-medium text-gray-700">{patient.progress}%</span>
                            </div>
                            <Progress value={patient.progress} className="h-2" />
                          </div>
                          <div className="flex justify-between text-xs text-gray-500 mt-4">
                            <div>
                              Última sessão: <span className="font-medium text-gray-700">{patient.lastSession}</span>
                            </div>
                            <div>
                              Próxima sessão: <span className="font-medium text-gray-700">{patient.nextSession}</span>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-indigo-600 hover:text-indigo-800 -my-1 h-8"
                            >
                              Ver Prontuário
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-100">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center">
                        <Sparkles className="h-5 w-5 mr-2 text-indigo-600" />
                        Assistente IA
                      </CardTitle>
                      <Badge variant="outline" className="bg-indigo-100 text-indigo-800 border-indigo-200">
                        Novo
                      </Badge>
                    </div>
                    <CardDescription>Sugestões personalizadas baseadas em seus pacientes</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-indigo-100 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="bg-indigo-100 p-2 rounded-full text-indigo-600">
                          <Brain className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 mb-1">Sugestão para Carlos Mendes</p>
                          <p className="text-xs text-gray-600">
                            Baseado nas últimas 3 sessões, considere aplicar técnicas de mindfulness para ajudar com os
                            episódios de ansiedade relatados.
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-end mt-2">
                        <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-800 h-7 text-xs">
                          Ver Recursos
                        </Button>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-indigo-100 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="bg-amber-100 p-2 rounded-full text-amber-600">
                          <AlertCircle className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 mb-1">Alerta: Juliana Costa</p>
                          <p className="text-xs text-gray-600">
                            Detectamos padrões de linguagem que podem indicar aumento nos níveis de estresse desde a
                            última sessão.
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-end mt-2">
                        <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-800 h-7 text-xs">
                          Revisar Notas
                        </Button>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-indigo-100 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 p-2 rounded-full text-green-600">
                          <BookOpen className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 mb-1">Recurso Recomendado</p>
                          <p className="text-xs text-gray-600">
                            Novo artigo sobre Terapia de Aceitação e Compromisso que pode ser útil para o caso de Pedro
                            Alves.
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-end mt-2">
                        <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-800 h-7 text-xs">
                          Acessar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-indigo-100 pt-4">
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Consultar Assistente IA</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="patients" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Lista de Pacientes</CardTitle>
                    <Button className="bg-indigo-600 hover:bg-indigo-700">
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Novo Paciente
                    </Button>
                  </div>
                  <CardDescription>Gerencie seus pacientes e acesse informações rapidamente</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div className="relative w-64">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        type="search"
                        placeholder="Buscar pacientes..."
                        className="pl-10 bg-gray-50 border-gray-200 focus:bg-white"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Filtrar
                      </Button>
                      <Button variant="outline" size="sm">
                        Ordenar
                      </Button>
                    </div>
                  </div>

                  <div className="border rounded-lg overflow-hidden">
                    <div className="grid grid-cols-12 bg-gray-50 p-4 border-b text-sm font-medium text-gray-600">
                      <div className="col-span-4">Nome</div>
                      <div className="col-span-2">Idade</div>
                      <div className="col-span-2">Status</div>
                      <div className="col-span-2">Próxima Sessão</div>
                      <div className="col-span-2 text-right">Ações</div>
                    </div>

                    {[
                      {
                        name: "Carlos Mendes",
                        age: 35,
                        status: "Ativo",
                        nextSession: "19/03/2024",
                        avatar: "/placeholder.svg",
                      },
                      {
                        name: "Mariana Santos",
                        age: 28,
                        status: "Ativo",
                        nextSession: "20/03/2024",
                        avatar: "/placeholder.svg",
                      },
                      {
                        name: "Pedro Alves",
                        age: 42,
                        status: "Ativo",
                        nextSession: "19/03/2024",
                        avatar: "/placeholder.svg",
                      },
                      {
                        name: "Juliana Costa",
                        age: 31,
                        status: "Ativo",
                        nextSession: "15/03/2024",
                        avatar: "/placeholder.svg",
                      },
                      {
                        name: "Rafael Oliveira",
                        age: 25,
                        status: "Ativo",
                        nextSession: "17/03/2024",
                        avatar: "/placeholder.svg",
                      },
                      {
                        name: "Fernanda Lima",
                        age: 39,
                        status: "Inativo",
                        nextSession: "-",
                        avatar: "/placeholder.svg",
                      },
                    ].map((patient, index) => (
                      <div key={index} className="grid grid-cols-12 p-4 border-b hover:bg-gray-50 items-center text-sm">
                        <div className="col-span-4 flex items-center">
                          <Avatar className="h-8 w-8 mr-3">
                            <AvatarImage src={patient.avatar} alt={patient.name} />
                            <AvatarFallback>
                              {patient.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium text-gray-900">{patient.name}</span>
                        </div>
                        <div className="col-span-2">{patient.age} anos</div>
                        <div className="col-span-2">
                          <Badge
                            variant="outline"
                            className={`${
                              patient.status === "Ativo"
                                ? "bg-green-50 text-green-700 border-green-200"
                                : "bg-gray-50 text-gray-700 border-gray-200"
                            }`}
                          >
                            {patient.status}
                          </Badge>
                        </div>
                        <div className="col-span-2">{patient.nextSession}</div>
                        <div className="col-span-2 flex justify-end gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-indigo-600">
                            <FileText className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-indigo-600">
                            <Calendar className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-indigo-600">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between">
                  <div className="text-sm text-gray-500">Mostrando 6 de 28 pacientes</div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" disabled>
                      Anterior
                    </Button>
                    <Button variant="outline" size="sm">
                      Próximo
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="calendar" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Agenda</CardTitle>
                    <Button className="bg-indigo-600 hover:bg-indigo-700">
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Nova Sessão
                    </Button>
                  </div>
                  <CardDescription>Gerencie suas sessões e compromissos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center p-12 border rounded-lg">
                    <Calendar className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Visualização do Calendário</h3>
                    <p className="text-gray-500 mb-6">
                      Aqui seria exibido um calendário completo com todas as suas sessões e compromissos.
                    </p>
                    <Button className="bg-indigo-600 hover:bg-indigo-700">Visualizar Calendário Completo</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="records" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Prontuários Eletrônicos</CardTitle>
                    <Button className="bg-indigo-600 hover:bg-indigo-700">
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Novo Prontuário
                    </Button>
                  </div>
                  <CardDescription>Acesse e gerencie os prontuários de seus pacientes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center p-12 border rounded-lg">
                    <FileText className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Sistema de Prontuários</h3>
                    <p className="text-gray-500 mb-6">
                      Aqui seria exibido o sistema completo de prontuários eletrônicos com busca, filtros e
                      visualização.
                    </p>
                    <Button className="bg-indigo-600 hover:bg-indigo-700">Acessar Sistema de Prontuários</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

