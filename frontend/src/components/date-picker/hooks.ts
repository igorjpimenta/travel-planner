import { useEffect } from "react"

interface useClickOutsideProps {
  ref: React.MutableRefObject<HTMLElement | null>
  handler: () => void
}

export function useClickOutside({ ref, handler }: useClickOutsideProps) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }

      handler()
    }

    document.addEventListener('mousedown', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, handler])
}