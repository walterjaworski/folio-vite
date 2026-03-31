import { BellIcon, SunIcon, UserIcon } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";

const pageTitles: Record<string, string> = {
  '/': 'Dashboard',
  '/assets': 'Meus Ativos',
  '/settings': 'Configurações',
}

export default function AppBar() {
  const { pathname } = useLocation();
  const title = pageTitles[pathname] ?? 'Folio'

  return (
    <header className="flex items-center justify-between h-14 px-4 border-b border-border bg-background">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <span>{title}</span>
      </div>

      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon">
          <SunIcon className="size-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <BellIcon className="size-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <UserIcon className="size-4" />
        </Button>
      </div>
    </header>
  )
}