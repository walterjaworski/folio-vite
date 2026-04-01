import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@ui/sidebar";
import { LayoutDashboard, Settings, Wallet } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { Logo } from "./Logo";

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, to: '/' },
  { label: 'Meus Ativos', icon: Wallet, to: '/assets' },
]


export default function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4">
        <Logo className="w-auto h-10 text-primary" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="p-4 gap-2">
          {navItems.map(({ label, icon: Icon, to }) => {
            const isActive = location.pathname === to;

            return (
              <SidebarMenuItem key={to}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                >
                  <NavLink to={to}>
                    <Icon className="size-4" />
                    <span>{label}</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={location.pathname === "/settings"}
              className="data-[active=true]:rounded-full px-4"
            >
              <NavLink to="/settings">
                <Settings className="size-4" />
                <span>Configurações</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
