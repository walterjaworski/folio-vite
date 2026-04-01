import AppBar from "@/components/AppBar";
import AppSidebar from "@/components/AppSidebar";
import { SidebarInset, SidebarProvider } from "@ui/sidebar";
import { Outlet } from "react-router-dom";

interface IAppLayoutProps {
  sidebar?: boolean;
  appBar?: boolean;
}

export default function AppLayout({ sidebar = true, appBar = true }: IAppLayoutProps) {
  return (
    <SidebarProvider>
      {sidebar && <AppSidebar />}
      <SidebarInset>
        {appBar && <AppBar />}
        <main className="p-8">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
