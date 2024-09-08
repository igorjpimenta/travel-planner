import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const buttonVariants = tv({
  base: "rounded-lg px-5 font-medium flex items-center justify-center gap-2 shrink-0",
  variants: {
    variant: {
      primary: "bg-lime-300 hover:bg-lime-400 text-lime-950",
      secondary: "bg-zinc-800 hover:bg-zinc-700 text-zinc-200",
    },
    size: {
      default: "py-2",
      icon: "p-2",
      full: "h-[42px] w-full",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  children: ReactNode
}

export function Button({ children, variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      { ...props }
      className={`${buttonVariants({ variant, size })} ${className}`}
    >
      {children}
    </button>
  )
}