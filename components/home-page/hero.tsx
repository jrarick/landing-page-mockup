import { PhoneCallIcon } from "lucide-react"
import { Heading } from "../ui/heading"
import Link from "next/link"
import { buttonVariants } from "../ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { CaseWizard } from "./case-wizard"

export default async function Hero() {
  return (
    <section className="mx-auto grid max-w-5xl pt-16 lg:grid-cols-2">
      <div className="mx-auto max-w-md space-y-4 px-4 pb-12 lg:max-w-full lg:pb-0">
        <Heading as="h2" className="text-5xl lg:text-7xl">
          $601 Million Recovered for Clients*
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
        <div className="hidden pt-12 lg:block">
          <figure className="relative max-w-fit">
            <Image
              src="/attorney.png"
              width={450}
              height={541}
              alt="Image of attorney James Helm standing with arms crossed behind a dog"
              loading="eager"
              fetchPriority="high"
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
      <div className="mx-auto mb-16 flex flex-col justify-between gap-12 bg-white p-6">
        <div className="space-y-4">
          <Heading as="h2" className="text-5xl">
            88,000+ People Helped*
          </Heading>
          <p className="text-lg">
            Always <span className="font-semibold">Free</span> Until You Win!
          </p>
          <CaseWizard />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4 pb-8">
            <span className="text-sm font-semibold tracking-widest uppercase">
              As seen on:
            </span>
            <Image
              src="/abc.png"
              width={80}
              height={80}
              alt="ABC Logo"
              className="h-auto w-20"
            />
            <Image
              src="/cbs.png"
              width={80}
              height={80}
              alt="CBS Logo"
              className="h-auto w-20"
            />
          </div>
          <p className="text-xs">
            *Recoveries by TopDog Law and its co-counsel firms.
          </p>
          <p className="text-xs">
            *James Helm admitted in Arizona and Pennsylvania.
          </p>
        </div>
      </div>
    </section>
  )
}
