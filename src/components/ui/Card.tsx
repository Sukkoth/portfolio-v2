import { cn } from "../../lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function Card({ children, className, hoverEffect = true, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "bg-[var(--surface)] border-2 border-[var(--border-color)] rounded-xl p-6",
                "relative overflow-hidden",
                hoverEffect && "hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--border-color)] transition-all duration-300",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}
