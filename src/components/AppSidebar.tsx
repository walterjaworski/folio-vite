import { LayoutDashboard, Settings, Wallet } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger } from "./ui/sidebar";

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, to: '/' },
  { label: 'Meus Ativos', icon: Wallet, to: '/assets' },
]

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <p>Folio</p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map(({ label, icon: Icon, to }) => (
            <SidebarMenuItem key={to}>
              <SidebarMenuButton asChild>
                <NavLink
                  to={to}
                  end
                  className={({ isActive }) => isActive ? "bg-accent text-accent-foreground" : ""}
                >
                  <Icon className="size-4" />
                  <span>{label}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarTrigger />
            <SidebarMenuButton asChild>
              <NavLink to="/settings" className="text-muted-foreground">
                <Settings className="size-4" />
                <span>Settings</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}