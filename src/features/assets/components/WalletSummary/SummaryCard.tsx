import { cn } from "@/lib/utils";

interface ISummaryCardProps {
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export default function SummaryCard({ title, children, footer, className }: ISummaryCardProps) {
  return (
    <div className={cn("bg-white p-6 rounded-md flex flex-col justify-between gap-4", className)}>
      <h3 className="text-sm font-semibold uppercase">
        {title}
      </h3>
      {children}
      {footer && (
        <div>
          {footer}
        </div>
      )}
    </div>
  )
}
