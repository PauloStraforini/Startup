import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

interface NavItem {
  title: string
  url: string
  isActive?: boolean
  items?: NavItem[]
}

interface NavMainProps {
  items: NavItem[]
  className?: string
}

export function NavMain({ items, className }: NavMainProps) {
  return (
    <SidebarMenu className={cn("gap-2", className)}>
      {items.map((item) => (
        <Collapsible key={item.title} defaultOpen>
          <SidebarMenuItem className="group/collapsible">
            <CollapsibleTrigger asChild>
              <SidebarMenuButton
                className="font-medium text-indigo-800 hover:text-indigo-600 dark:text-indigo-200 dark:hover:text-indigo-300"
                isActive={item.isActive}
              >
                {item.title}
                <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            {item.items?.length ? (
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton
                        asChild
                        isActive={subItem.isActive}
                        className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-300"
                      >
                        <a href={subItem.url}>{subItem.title}</a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            ) : null}
          </SidebarMenuItem>
        </Collapsible>
      ))}
    </SidebarMenu>
  )
}

