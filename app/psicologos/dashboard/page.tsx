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
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, FileText, Users, TrendingUp, BrainCircuit, CheckCircle2, AlertCircle } from "lucide-react"

export default function Page() {
  // Sample data for the dashboard
  const stats = [
    {
      title: "Pacientes Ativos",
      value: "32",
      change: "+2 este mês",
      icon: Users,
      color: "text-pink-600 dark:text-pink-400",
      bgColor: "bg-pink-100 dark:bg-pink-900/50",
    },
    {
      title: "Sessões Agendadas",
      value: "12",
      change: "Próximos 7 dias",
      icon: Calendar,
      color: "text-pink-600 dark:text-pink-400",
      bgColor: "bg-pink-100 dark:bg-pink-900/50",
    },
    {
      title: "Relatórios Pendentes",
      value: "5",
      change: "3 com prazo próximo",
      icon: FileText,
      color: "text-pink-600 dark:text-pink-400",
      bgColor: "bg-pink-100 dark:bg-pink-900/50",
    },
    {
      title: "Horas Trabalhadas",
      value: "24h",
      change: "Esta semana",
      icon: Clock,
      color: "text-pink-600 dark:text-pink-400",
      bgColor: "bg-pink-100 dark:bg-pink-900/50",
    },
  ]

  const upcomingAppointments = [
    {
      patient: "Maria Silva",
      time: "Hoje, 14:00",
      type: "Terapia Individual",
      status: "confirmado",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      patient: "João Santos",
      time: "Hoje, 16:30",
      type: "Primeira Consulta",
      status: "confirmado",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      patient: "Ana Oliveira",
      time: "Amanhã, 09:00",
      type: "Terapia Individual",
      status: "pendente",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      patient: "Carlos Mendes",
      time: "Amanhã, 11:30",
      type: "Avaliação Psicológica",
      status: "confirmado",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      patient: "Juliana Costa",
      time: "Quinta, 15:00",
      type: "Terapia Individual",
      status: "confirmado",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const recentActivities = [
    {
      type: "Prontuário Atualizado",
      patient: "Maria Silva",
      time: "Há 2 horas",
      icon: FileText,
      color: "text-pink-600 bg-pink-100 dark:text-pink-400 dark:bg-pink-900/50",
    },
    {
      type: "Sessão Concluída",
      patient: "Pedro Almeida",
      time: "Há 4 horas",
      icon: CheckCircle2,
      color: "text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/50",
    },
    {
      type: "Novo Agendamento",
      patient: "Fernanda Lima",
      time: "Há 1 dia",
      icon: Calendar,
      color: "text-pink-600 bg-pink-100 dark:text-pink-400 dark:bg-pink-900/50",
    },
    {
      type: "Alerta de Paciente",
      patient: "Roberto Gomes",
      time: "Há 1 dia",
      icon: AlertCircle,
      color: "text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/50",
    },
  ]

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-pink-100 dark:border-pink-800 px-4 bg-white dark:bg-pink-950/50">
          <SidebarTrigger className="-ml-1 text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400" />
          <Separator orientation="vertical" className="mr-2 h-4 bg-pink-200 dark:bg-pink-700" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink
                  href="#"
                  className="text-pink-600 dark:text-pink-400 hover:text-pink-800 dark:hover:text-pink-300"
                >
                  Dashboard
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block text-pink-300 dark:text-pink-600" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-gray-800 dark:text-gray-200">Visão Geral</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 bg-gradient-to-b from-slate-50 to-pink-50 dark:from-pink-950 dark:to-pink-900 min-h-screen">
          {/* Welcome Section */}
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <Card className="w-full md:w-2/3 bg-white dark:bg-pink-900/50 border-pink-100 dark:border-pink-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-pink-900 dark:text-pink-100">
                  Bem-vindo ao MindFlow, Dra. Mariana Takahashi
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Aqui está um resumo da sua agenda e atividades recentes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="flex flex-col p-4 rounded-lg border border-pink-100 dark:border-pink-800 bg-white dark:bg-pink-950/50"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-md ${stat.bgColor}`}>
                          <stat.icon className={`h-5 w-5 ${stat.color}`} />
                        </div>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</span>
                      </div>
                      <div className="flex items-end justify-between">
                        <span className="text-2xl font-bold text-pink-900 dark:text-pink-100">{stat.value}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{stat.change}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="w-full md:w-1/3 bg-gradient-to-br from-blue-600 to-pink-800 text-white border-none">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-white flex items-center gap-2">
                  <BrainCircuit className="h-5 w-5" />
                  Assistente IA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-pink-100 text-sm">
                    Baseado nos seus pacientes recentes, aqui estão algumas sugestões:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-pink-500/20 p-1 mt-0.5">
                        <CheckCircle2 className="h-3 w-3" />
                      </div>
                      <span>3 pacientes precisam de atualização de prontuário</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-pink-500/20 p-1 mt-0.5">
                        <CheckCircle2 className="h-3 w-3" />
                      </div>
                      <span>Novo artigo sobre Terapia Cognitivo-Comportamental disponível</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-pink-500/20 p-1 mt-0.5">
                        <CheckCircle2 className="h-3 w-3" />
                      </div>
                      <span>Lembrete: Conferência online amanhã às 19h</span>
                    </li>
                  </ul>
                  <button className="w-full mt-2 bg-white/10 hover:bg-white/20 text-white rounded-md py-1.5 text-sm font-medium transition-colors">
                    Ver todas as sugestões
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Appointments and Activity Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Upcoming Appointments */}
            <Card className="md:col-span-2 bg-white dark:bg-pink-900/50 border-pink-100 dark:border-pink-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-pink-900 dark:text-pink-100 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                  Próximas Sessões
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Seus agendamentos para os próximos dias
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingAppointments.map((appointment, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg border border-pink-100 dark:border-pink-800 hover:bg-pink-50 dark:hover:bg-pink-800/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={appointment.avatar} alt={appointment.patient} />
                          <AvatarFallback className="bg-pink-200 text-pink-800 dark:bg-pink-800 dark:text-pink-200">
                            {appointment.patient
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-pink-900 dark:text-pink-100">{appointment.patient}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{appointment.type}</div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{appointment.time}</div>
                        <div
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            appointment.status === "confirmado"
                              ? "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300"
                          }`}
                        >
                          {appointment.status === "confirmado" ? "Confirmado" : "Pendente"}
                        </div>
                      </div>
                    </div>
                  ))}
                  <button className="w-full mt-2 bg-pink-50 hover:bg-pink-100 dark:bg-pink-800/50 dark:hover:bg-pink-800 text-pink-600 dark:text-pink-300 rounded-md py-2 text-sm font-medium transition-colors">
                    Ver todos os agendamentos
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-white dark:bg-pink-900/50 border-pink-100 dark:border-pink-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-pink-900 dark:text-pink-100 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                  Atividades Recentes
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">Últimas ações realizadas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivities.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg border border-pink-100 dark:border-pink-800 hover:bg-pink-50 dark:hover:bg-pink-800/50 transition-colors"
                    >
                      <div className={`p-2 rounded-md ${activity.color}`}>
                        <activity.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium text-pink-900 dark:text-pink-100">{activity.type}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{activity.patient}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">{activity.time}</div>
                      </div>
                    </div>
                  ))}
                  <button className="w-full mt-2 bg-pink-50 hover:bg-pink-100 dark:bg-pink-800/50 dark:hover:bg-pink-800 text-pink-600 dark:text-pink-300 rounded-md py-2 text-sm font-medium transition-colors">
                    Ver todas as atividades
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Patient Overview */}
          <Card className="bg-white dark:bg-pink-900/50 border-pink-100 dark:border-pink-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold text-pink-900 dark:text-pink-100 flex items-center gap-2">
                <Users className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                Visão Geral dos Pacientes
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                Distribuição e estatísticas dos seus pacientes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col-span-2 h-64 rounded-lg border border-pink-100 dark:border-pink-800 bg-pink-50/50 dark:bg-pink-950/50 flex items-center justify-center">
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <FileText className="h-10 w-10 mx-auto mb-2 opacity-50" />
                    <p>Gráfico de distribuição de pacientes por idade e gênero</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg border border-pink-100 dark:border-pink-800 bg-white dark:bg-pink-950/50">
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Faixa Etária</div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-pink-900 dark:text-pink-100">18-35 anos</span>
                      <span className="text-sm text-pink-600 dark:text-pink-400">65%</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-pink-100 dark:border-pink-800 bg-white dark:bg-pink-950/50">
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Gênero</div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-pink-900 dark:text-pink-100">Feminino</span>
                      <span className="text-sm text-pink-600 dark:text-pink-400">58%</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border border-pink-100 dark:border-pink-800 bg-white dark:bg-pink-950/50">
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Novos Pacientes</div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-pink-900 dark:text-pink-100">5 pacientes</span>
                      <span className="text-sm text-green-600 dark:text-green-400">+12%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

