interface IPageHeaderProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export default function PageHeader({ title, description, action }: IPageHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-5xl font-title font-extrabold tracking-tight text-foreground transition-colors duration-200">
          {title}
        </h1>
        {description &&
          <p className="text-muted-foreground mt-1 text-lg transition-colors duration-200">
            {description}
          </p>}
      </div>
      {action && action}
    </div>
  )
}
