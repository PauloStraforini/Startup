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
  AlertCircle,
  Filter,
  ChevronLeft,
  ChevronDown,
  MoreHorizontal,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function SchedulingPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState("agenda")
  const [selectedDate, setSelectedDate] = useState("12 de Março, 2024")
  const [selectedView, setSelectedView] = useState("day")

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  // Mock data for calendar days
  const calendarDays = [
    { date: "11", day: "Seg", isToday: false },
    { date: "12", day: "Ter", isToday: true },
    { date: "13", day: "Qua", isToday: false },
    { date: "14", day: "Qui", isToday: false },
    { date: "15", day: "Sex", isToday: false },
    { date: "16", day: "Sáb", isToday: false },
    { date: "17", day: "Dom", isToday: false },
  ]

  // Mock data for time slots
  const timeSlots = [
    { time: "08:00", available: true },
    { time: "09:00", available: false, patient: "Carlos Mendes", type: "Terapia Cognitivo-Comportamental" },
    { time: "10:00", available: true },
    { time: "10:30", available: false, patient: "Mariana Santos", type: "Primeira Consulta" },
    { time: "11:30", available: true },
    { time: "12:00", available: true },
    { time: "13:00", available: false, patient: "Pedro Alves", type: "Sessão Online" },
    { time: "14:00", available: true },
    { time: "15:00", available: true },
    { time: "15:30", available: false, patient: "Juliana Costa", type: "Terapia de Casal" },
    { time: "16:30", available: true },
    { time: "17:00", available: false, patient: "Rafael Oliveira", type: "Acompanhamento" },
    { time: "18:00", available: true },
  ]

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
              { name: "Agenda", icon: Calendar, href: "#agenda", id: "agenda" },
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
          <Tabs defaultValue="agenda" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Agenda</h1>
                <p className="text-gray-600">Gerencie suas consultas e compromissos</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-indigo-600 hover:bg-indigo-700">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Nova Consulta
                </Button>
                <Select defaultValue="day" value={selectedView} onValueChange={setSelectedView}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Visualização" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="day">Dia</SelectItem>
                    <SelectItem value="week">Semana</SelectItem>
                    <SelectItem value="month">Mês</SelectItem>
                    <SelectItem value="list">Lista</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <TabsContent value="agenda" className="space-y-6">
              <Card>
                <CardHeader className="pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <div className="text-lg font-medium">{selectedDate}</div>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="ml-2">
                        Hoje
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Filter className="h-4 w-4" />
                        Filtrar
                      </Button>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" size="sm" className="gap-1">
                            <Clock className="h-4 w-4" />
                            Horário
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-56 p-2">
                          <div className="space-y-1">
                            <Button variant="ghost" size="sm" className="w-full justify-start">
                              08:00 - 18:00
                            </Button>
                            <Button variant="ghost" size="sm" className="w-full justify-start">
                              09:00 - 17:00
                            </Button>
                            <Button variant="ghost" size="sm" className="w-full justify-start">
                              Personalizado...
                            </Button>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </CardHeader>

                {selectedView === "day" && (
                  <CardContent className="pt-6">
                    <div className="flex overflow-x-auto pb-4 mb-4 gap-2">
                      {calendarDays.map((day, index) => (
                        <div
                          key={index}
                          className={`flex flex-col items-center p-3 rounded-lg min-w-[70px] cursor-pointer border ${
                            day.isToday
                              ? "bg-indigo-50 border-indigo-200 text-indigo-600"
                              : "border-gray-200 hover:bg-gray-50"
                          }`}
                        >
                          <span className="text-xs font-medium">{day.day}</span>
                          <span className={`text-xl font-bold mt-1 ${day.isToday ? "text-indigo-600" : ""}`}>
                            {day.date}
                          </span>
                          <span className="text-xs text-gray-500 mt-1">Mar</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      {timeSlots.map((slot, index) => (
                        <div
                          key={index}
                          className={`flex border rounded-lg ${
                            slot.available ? "border-gray-200" : "border-indigo-200 bg-indigo-50"
                          }`}
                        >
                          <div
                            className={`w-20 flex-shrink-0 flex flex-col items-center justify-center py-3 border-r ${
                              slot.available ? "border-gray-200" : "border-indigo-200"
                            }`}
                          >
                            <span className="text-sm font-medium">{slot.time}</span>
                          </div>
                          {slot.available ? (
                            <div className="flex-1 flex items-center justify-center p-3 hover:bg-gray-50 cursor-pointer">
                              <Button variant="ghost" className="text-indigo-600">
                                <PlusCircle className="h-4 w-4 mr-2" />
                                Adicionar Consulta
                              </Button>
                            </div>
                          ) : (
                            <div className="flex-1 p-3">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <Avatar className="h-10 w-10 mr-3">
                                    <AvatarImage src="/placeholder.svg" alt={slot.patient} />
                                    <AvatarFallback>
                                      {slot.patient
                                        ?.split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <p className="text-sm font-medium text-gray-900">{slot.patient}</p>
                                    <p className="text-xs text-gray-500">{slot.type}</p>
                                  </div>
                                </div>
                                <div className="flex gap-1">
                                  <Button variant="outline" size="sm" className="h-8">
                                    Detalhes
                                  </Button>
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <MoreHorizontal className="h-4 w-4" />
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                      <DropdownMenuItem>
                                        <Video className="h-4 w-4 mr-2" />
                                        Iniciar Sessão
                                      </DropdownMenuItem>
                                      <DropdownMenuItem>
                                        <Clock className="h-4 w-4 mr-2" />
                                        Reagendar
                                      </DropdownMenuItem>
                                      <DropdownMenuItem>
                                        <FileText className="h-4 w-4 mr-2" />
                                        Prontuário
                                      </DropdownMenuItem>
                                      <DropdownMenuItem className="text-red-600">
                                        <AlertCircle className="h-4 w-4 mr-2" />
                                        Cancelar
                                      </DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                )}

                {selectedView === "week" && (
                  <CardContent className="pt-6">
                    <div className="text-center p-8 border rounded-lg">
                      <Calendar className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Visualização Semanal</h3>
                      <p className="text-gray-500 mb-6">
                        Aqui seria exibida a visualização semanal com todas as suas consultas.
                      </p>
                    </div>
                  </CardContent>
                )}

                {selectedView === "month" && (
                  <CardContent className="pt-6">
                    <div className="text-center p-8 border rounded-lg">
                      <Calendar className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Visualização Mensal</h3>
                      <p className="text-gray-500 mb-6">
                        Aqui seria exibida a visualização mensal com todas as suas consultas.
                      </p>
                    </div>
                  </CardContent>
                )}

                {selectedView === "list" && (
                  <CardContent className="pt-6">
                    <div className="text-center p-8 border rounded-lg">
                      <ClipboardList className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Visualização em Lista</h3>
                      <p className="text-gray-500 mb-6">
                        Aqui seria exibida a visualização em lista com todas as suas consultas.
                      </p>
                    </div>
                  </CardContent>
                )}
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Próximas Consultas</CardTitle>
                    <CardDescription>Consultas agendadas para os próximos dias</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          date: "13 de Março",
                          time: "10:00 - 11:00",
                          name: "Fernanda Lima",
                          type: "Terapia Individual",
                          avatar: "/placeholder.svg",
                        },
                        {
                          date: "13 de Março",
                          time: "14:30 - 15:30",
                          name: "Roberto Gomes",
                          type: "Primeira Consulta",
                          avatar: "/placeholder.svg",
                        },
                        {
                          date: "14 de Março",
                          time: "09:00 - 10:00",
                          name: "Luciana Martins",
                          type: "Terapia Cognitivo-Comportamental",
                          avatar: "/placeholder.svg",
                        },
                        {
                          date: "15 de Março",
                          time: "11:30 - 12:30",
                          name: "Juliana Costa",
                          type: "Terapia de Casal",
                          avatar: "/placeholder.svg",
                        },
                      ].map((appointment, index) => (
                        <div
                          key={index}
                          className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50"
                        >
                          <div className="flex-shrink-0 mr-4">
                            <div className="text-sm font-medium text-gray-900">{appointment.date}</div>
                            <div className="text-xs text-gray-500">{appointment.time}</div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center">
                              <Avatar className="h-10 w-10 mr-3">
                                <AvatarImage src={appointment.avatar} alt={appointment.name} />
                                <AvatarFallback>
                                  {appointment.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-sm font-medium text-gray-900">{appointment.name}</p>
                                <p className="text-xs text-gray-500">{appointment.type}</p>
                              </div>
                            </div>
                          </div>
                          <div className="ml-4 flex gap-2">
                            <Button variant="outline" size="sm">
                              <FileText className="h-4 w-4 mr-2" />
                              Prontuário
                            </Button>
                            <Button variant="outline" size="sm" className="text-indigo-600 border-indigo-200">
                              <Clock className="h-4 w-4 mr-2" />
                              Reagendar
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4 flex justify-between">
                    <div className="text-sm text-gray-500">Mostrando 4 de 12 consultas</div>
                    <Button variant="outline" size="sm">
                      Ver Todas
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Estatísticas de Agenda</CardTitle>
                    <CardDescription>Resumo da sua agenda</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Consultas esta semana</span>
                          <span className="font-medium">18</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Consultas este mês</span>
                          <span className="font-medium">72</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Taxa de ocupação</span>
                          <span className="font-medium">85%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Cancelamentos</span>
                          <span className="font-medium">3</span>
                        </div>
                      </div>

                      <div className="border-t pt-4">
                        <h4 className="text-sm font-medium mb-3">Distribuição por tipo</h4>
                        <div className="space-y-2">
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Terapia Individual</span>
                              <span className="font-medium">65%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div className="bg-indigo-600 h-full rounded-full" style={{ width: "65%" }}></div>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Primeira Consulta</span>
                              <span className="font-medium">15%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div className="bg-teal-500 h-full rounded-full" style={{ width: "15%" }}></div>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Terapia de Casal</span>
                              <span className="font-medium">12%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div className="bg-purple-500 h-full rounded-full" style={{ width: "12%" }}></div>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Outros</span>
                              <span className="font-medium">8%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div className="bg-amber-500 h-full rounded-full" style={{ width: "8%" }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <Button variant="outline" className="w-full">
                      <BarChart className="h-4 w-4 mr-2" />
                      Relatório Detalhado
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

