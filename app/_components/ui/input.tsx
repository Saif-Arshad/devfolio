import * as React from "react"
import { cn } from "../../_lib/utils"


const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          " h-12 w-full rounded-xl  bg-neutral-700  px-5 text-base   placeholder:text-muted-foreground file  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm   file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus:border-none focus:outline-none focus:ring-0   flex items-center justify-center",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
