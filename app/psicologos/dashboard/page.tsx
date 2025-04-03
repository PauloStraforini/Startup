import { AppSidebar } from "@/components/ui/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  FileText,
  Users,
  TrendingUp,
  BrainCircuit,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next"; // Correção aqui

export default async function Page() {
  const session = await getServerSession();

  if (!session) {
    redirect("/login"); // Correção aqui
  }

  return (
    <div>
      <h1>Welcome, {session.user?.name}</h1>
      <p>This is your dashboard.</p>
    </div>
  );
}
