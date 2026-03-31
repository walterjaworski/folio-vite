import AppBar from "@/components/AppBar";
import AppSidebar from "@/components/AppSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

interface IAppLayoutProps {
  sidebar?: boolean;
  appBar?: boolean;
}

export function AppLayout({ sidebar = true, appBar = true }: IAppLayoutProps) {
  return (
    <SidebarProvider>
      {sidebar && <AppSidebar />}
      <SidebarInset>
        {appBar && <AppBar />}
        <main className="p-6">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}