import { X } from "lucide-react"
import { ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const modalVariants = tv({
  variants: {
    size: {
      medium: "w-[640px]",
      small: "w-[540px]",
    },
  },
  defaultVariants: {
    size: "small",
  },
})

export interface ModalProps extends VariantProps<typeof modalVariants> {
  closeModalSetter: () => void
  title: ReactNode
  subtitle?: ReactNode
  children: ReactNode
}

export function Modal({ closeModalSetter, size, title, subtitle, children }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className={`${modalVariants({ size })} rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5`}>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              {title}
            </h2>

            <button
              type="button"
              onClick={closeModalSetter}
            >
              <X className="size-5 text-zinc-400" />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            {subtitle}
          </p>
        </div>
        
        {children}
      </div>
    </div>
  )
}