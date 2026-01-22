import Image from "next/image"
import { Heading } from "../ui/heading"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "../ui/button"

export default async function CallToAction() {
  return (
    <section className="relative w-full">
      <Image
        src="/shaking-hands.jpg"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-10 mx-auto grid max-w-5xl gap-8 px-4 py-20 md:grid-cols-2">
        <div className="mx-auto max-w-sm space-y-4 md:mx-[unset] md:max-w-lg">
          <Heading as="h3" className="text-5xl text-white">
            <span>{`Don't Wait. Call TopDog for a `}</span>
            <span className="text-primary">Free Case Review.</span>
          </Heading>
          <p className="text-background text-lg font-medium">
            {`The bills don't wait, and neither do we. TopDog Law helps you get
            the money you deserve.`}
          </p>
        </div>
        <div className="flex flex-col items-center justify-end gap-4 md:flex-row">
          <a
            className={cn(
              buttonVariants({ size: "lg", variant: "default" }),
              "rounded-full font-bold"
            )}
            href="tel:+18334054414"
          >
            1 (833) 405-4414
          </a>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full font-bold"
          >
            Get Help Now
          </Button>
        </div>
      </div>
    </section>
  )
}
