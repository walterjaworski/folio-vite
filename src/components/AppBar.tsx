import { BellIcon, SunIcon, UserIcon } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const pageTitles: Record<string, string> = {
  '/': 'Dashboard',
  '/assets': 'Meus Ativos',
  '/settings': 'Configurações',
}

export default function AppBar() {
  const { pathname } = useLocation();
  const title = pageTitles[pathname] ?? 'Folio'

  return (
    <header className="flex items-center justify-between h-14 px-4 bg-background">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <span>{title}</span>
      </div>

      <div className="flex items-center gap-1">
        <Tooltip>
          <TooltipTrigger>
            <Button variant="ghost" size="icon">
              <SunIcon className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Modo claro/escuro</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Button variant="ghost" size="icon">
              <BellIcon className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Notificações</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Button variant="ghost" size="icon">
              <UserIcon className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Perfil</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </header>
  )
}