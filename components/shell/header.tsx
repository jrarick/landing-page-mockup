import Image from "next/image"
import Link from "next/link"
import { PhoneCall } from "lucide-react"
import { buttonVariants } from "../ui/button"
import { cn } from "@/lib/utils"

export default async function Header() {
  return (
    <header className="bg-primary w-full border-b border-black">
      <div className="mx-auto flex max-w-4xl items-center justify-between p-2">
        <Link href="/" aria-label="Home">
          <Image
            src="/topdog-logo.png"
            alt="Top Dog Logo"
            width={200}
            height={50}
            className="h-8 w-auto"
          />
        </Link>
        <div className="flex items-center gap-2">
          <PhoneCall className="h-6 w-6" />
          <Link
            href="tel:+18334054414"
            className={cn(
              buttonVariants({ size: "lg", variant: "secondary" }),
              "rounded-full font-black"
            )}
          >
            1 (833) 405-4414
          </Link>
        </div>
      </div>
    </header>
  )
}
