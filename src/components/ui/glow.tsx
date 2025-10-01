import * as React from "react"
import { cn } from "@/lib/utils"

export interface GlowProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "above" | "below" | "center"
}

const Glow = React.forwardRef<HTMLDivElement, GlowProps>(
  ({ className, variant = "center", ...props }, ref) => {
    const variants = {
      above: "top-0 -translate-y-1/2",
      below: "bottom-0 translate-y-1/2",
      center: "top-1/2 -translate-y-1/2",
    }

    return (
      <div
        ref={ref}
        className={cn(
          "absolute left-1/2 -translate-x-1/2",
          "w-[800px] h-[800px] rounded-full",
          "bg-gradient-radial from-primary/20 via-primary/5 to-transparent",
          "blur-3xl",
          variants[variant],
          className
        )}
        {...props}
      />
    )
  }
)

Glow.displayName = "Glow"

export { Glow }
