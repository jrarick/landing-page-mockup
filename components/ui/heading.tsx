import { Anton } from "next/font/google"
import type { ComponentPropsWithRef, ElementType, JSX } from "react"

import { cn } from "@/lib/utils"

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
})

type AllowedTags = keyof Pick<
  JSX.IntrinsicElements,
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div" | "span"
>

type HeadingProps<T extends AllowedTags = "p"> = {
  as?: T
} & ComponentPropsWithRef<T>

export function Heading<T extends AllowedTags = "p">({
  as,
  className,
  ...props
}: HeadingProps<T>) {
  const Component = (as ?? "p") as ElementType
  return (
    <Component
      {...props}
      className={cn(anton.className, "uppercase", className)}
    />
  )
}
