import AppSidebar from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

interface IAppLayoutProps {
  sidebar?: boolean;
  appBar?: boolean;
}

export function AppLayout({ sidebar = true, appBar = true }: IAppLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-background">
        {sidebar && <AppSidebar />}
        <div className="flex flex-col flex-1 overflow-hidden">
          {appBar && <div>appbar</div>}
          <main className="flex-1 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}