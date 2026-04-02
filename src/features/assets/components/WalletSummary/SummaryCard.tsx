import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@ui/card";

interface ISummaryCardProps {
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export default function SummaryCard({ title, children, footer, className }: ISummaryCardProps) {
  return (
    <Card className={cn("bg-card dark:bg-card flex flex-col transition-all duration-200 border-none ring-0 shadow-none", className)}>
      <CardHeader>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </h3>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex-1">
          {children}
        </div>
        {footer && (
          <div className="text-xs text-muted-foreground/80 flex items-center gap-1.5">
            {footer}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
