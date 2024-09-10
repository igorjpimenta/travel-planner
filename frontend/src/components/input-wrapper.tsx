import { LucideIcon } from "lucide-react"
import { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"

const inputWrapperVariants = tv({
  base: "flex items-center gap-2 select-none",
  variants: {
    theme: {
      dark: "bg-zinc-950 border border-zinc-800 rounded-lg",
      transparent: "bg-transparent",
    },
    kind: {
      absolute: "h-14 px-4",
    },
  },
  defaultVariants: {
    theme: "dark",
  },
})

export interface InputWrapperProps extends ComponentProps<'input'>, VariantProps<typeof inputWrapperVariants> {
  icon?: LucideIcon
  classNames?: string
}

export function InputWrapper({
  icon: Icon,
  classNames,
  theme,
  kind,
  ...props
}: InputWrapperProps) {
  return (
    <div className={`${inputWrapperVariants({ theme, kind })} ${classNames}`}>
      {Icon && <Icon className="text-zinc-400 size-5" />}
      
      <input
        className="bg-transparent text-lg text-zinc-100 placeholder:text-zinc-400 flex-1 outline-none"
        { ...props }
      />
    </div>
  )
}