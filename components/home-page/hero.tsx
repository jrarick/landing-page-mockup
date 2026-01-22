import { PhoneCallIcon } from "lucide-react"
import { Heading } from "../ui/heading"
import Link from "next/link"
import { buttonVariants } from "../ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default async function Hero() {
  return (
    <section className="mx-auto grid max-w-5xl grid-cols-2 pt-16">
      <div className="col-span-2 space-y-4 md:col-span-1">
        <Heading as="h2" className="text-7xl">
          $601 Million Recoverd for Clients*
        </Heading>
        <p className="text-xl">Get a TopDog Lawyer.</p>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <PhoneCallIcon className="size-8" />
            <Link
              href="tel:+18334054414"
              className={cn(
                buttonVariants({ size: "lg", variant: "default" }),
                "rounded-full font-bold"
              )}
            >
              1 (833) 405-4414
            </Link>
          </div>
          <p className="text-xs">
            <span className="font-bold">*Open 24/7.</span> Just 5 Minutes to
            Start!
          </p>
        </div>
        <div className="hidden md:block pt-12">
          <figure className="relative max-w-fit">
            <Image
              src="/attorney.png"
              width={450}
              height={550}
              alt="Image of attorney James Helm standing with arms crossed behind a dog"
            />
            <figcaption className="bg-background/80 absolute top-[40%] -right-12 rounded-sm border border-black/50 p-3 backdrop-blur-md">
              <Heading as="div" className="text-center text-4xl">
                James Helm
              </Heading>
              <div className="text-center text-sm">Founder, Attorney</div>
            </figcaption>
          </figure>
        </div>
      </div>
      <div></div>
    </section>
  )
}
