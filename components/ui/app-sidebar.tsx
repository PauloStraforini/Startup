import type * as React from "react";
import { Brain, Calendar, FileText, Search, Video, BookOpen, Shield } from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarRail,
    SidebarFooter,
} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";

// This is sample data.
const data = {
    navMain: [
        {
            title: "Dashboard",
            url: "/psicologos/dashboard",
            icon: Calendar,
            isActive: true,
        },
        {
            title: "Pacientes",
            url: "",
            icon: FileText,
            items: [
                {
                    title: "Todos os Pacientes",
                    url: "/psicologos/todos-pacientes",
                    isActive: false,
                },
                {
                    title: "Adicionar Paciente",
                    url: "/pacientes/adicionar",
                    isActive: false,
                },
                {
                    title: "Prontuários",
                    url: "/psicologos/prontuarios",
                    isActive: false,
                },
            ],
        },
        {
            title: "Agendamentos",
            url: "/agendamentos",
            icon: Calendar,
            items: [
                {
                    title: "Calendário",
                    url: "/agendamentos/calendario",
                    isActive: false,
                },
                {
                    title: "Nova Sessão",
                    url: "/agendamentos/nova-sessao",
                    isActive: false,
                },
                {
                    title: "Histórico",
                    url: "/agendamentos/historico",
                    isActive: false,
                },
            ],
        },
        {
            title: "Videoconferência",
            url: "/videoconferencia",
            icon: Video,
        },
        {
            title: "Recursos",
            url: "/recursos",
            icon: BookOpen,
            items: [
                {
                    title: "Biblioteca",
                    isActive: false,
                },
                {
                    title: "Exercícios",
                    url: "/recursos/exercicios",
                    isActive: false,
                },
                {
                    title: "Materiais de Apoio",
                    url: "/recursos/materiais",
                    isActive: false,
                },
            ],
        },
        {
            title: "Relatórios",
            url: "/relatorios",
            icon: FileText,
        },
        {
            title: "Configurações",
            url: "/configuracoes",
            icon: Shield,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar className="border-r border-indigo-100 dark:border-rose-800" {...props}>
            <SidebarHeader className="pb-0">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <a href="#" className="flex items-center">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-gradient-to-r from-rose-300 to-purple-500 text-white">
                                    <Brain className="size-4" />
                                </div>
                                <div className="flex flex-col gap-0.5 leading-none">
                                    <span className="bg-gradient-to-r from-rose-600 to-purple-500 bg-clip-text text-transparent font-extrabold">
                                        MindFlow
                                    </span>
                                    <span className="text-gray-600 dark:text-gray-400">v1.0.0</span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
                <div className="px-2 pt-2">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                        <Input
                            placeholder="Pesquisar..."
                            className="pl-9 h-9 bg-white dark:bg-indigo-950/50 border-indigo-100 dark:border-rose-800 focus-visible:ring-rose-600 dark:focus-visible:ring-indigo-400"
                        />
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent className="px-2">
                <SidebarGroup>
                    <SidebarMenu>
                        {data.navMain.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton
                                    asChild
                                    isActive={item.isActive}
                                    className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-rose-400 data-[active=true]:bg-indigo-50 dark:data-[active=true]:bg-indigo-900/50 data-[active=true]:text-indigo-600 dark:data-[active=true]:text-indigo-400"
                                >
                                    <a href={item.url}>
                                        {item.icon && (
                                            <item.icon className="h-5 w-5 text-gray-500 dark:text-gray-400 group-hover:text-rose-600 dark:group-hover:text-indigo-400" />
                                        )}
                                        <span>{item.title}</span>
                                    </a>
                                </SidebarMenuButton>
                                {item.items?.length ? (
                                    <SidebarMenuSub>
                                        {item.items.map((subItem) => (
                                            <SidebarMenuSubItem key={subItem.title}>
                                                <SidebarMenuSubButton
                                                    asChild
                                                    isActive={subItem.isActive}
                                                    className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-indigo-400 data-[active=true]:text-indigo-600 dark:data-[active=true]:text-indigo-400"
                                                >
                                                    <a href={subItem.url}>{subItem.title}</a>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        ))}
                                    </SidebarMenuSub>
                                ) : null}
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <div className="p-3">
                    <div className="rounded-lg border border-indigo-100 dark:border-indigo-800 bg-white dark:bg-indigo-950/50 p-3 shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-gradient-to-r from-rose-300 to-pink-500 text-white">
                                <Shield className="size-4" />
                            </div>
                            <div className="text-sm font-medium text-indigo-900 dark:text-indigo-200">Plano Profissional</div>
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Sua assinatura renova em 15 dias</div>
                    </div>
                </div>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
