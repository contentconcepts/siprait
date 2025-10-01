import * as React from "react"
import { cn } from "@/lib/utils"

export interface MockupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const Mockup = React.forwardRef<HTMLDivElement, MockupProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-lg border bg-card overflow-hidden",
          "shadow-lg transition-shadow duration-300",
          className
        )}
        {...props}
      >
        {/* Browser chrome mockup */}
        <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative">
          {children}
        </div>
      </div>
    )
  }
)

Mockup.displayName = "Mockup"

export { Mockup }
