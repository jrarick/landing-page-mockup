import { cn } from "@/lib/utils"
import { Heading } from "../ui/heading"
import { buttonVariants } from "../ui/button"
import Image from "next/image"

export default async function CaseTypes() {
  return (
    <section className="mx-auto grid max-w-5xl gap-16 px-4 py-24 md:grid-cols-2">
      <div className="space-y-4">
        <p className="text-tertiary text-sm font-semibold tracking-widest uppercase">
          Types of Cases
        </p>
        <Heading as="h3" className="text-4xl md:text-5xl">
          Personal Injury Cases We Handle
        </Heading>
        <p className="text-sm md:text-base">{`If you've been hurt, there's a good chance we handle your type of case. Our major areas of practice include:`}</p>
        <ul className="ml-5 grid grid-cols-2 gap-2 text-sm md:text-base">
          {practiceAreas.map((area) => (
            <li key={area} className="mr-5 list-disc">
              {area}
            </li>
          ))}
        </ul>
        <a
          href="tel:+18334054414"
          className={cn(
            buttonVariants({ size: "lg", variant: "default" }),
            "rounded-full font-bold"
          )}
        >
          (833) 405-4414
        </a>
      </div>
      <Image
        src="/call-topdog.png"
        width={500}
        height={500}
        alt="Call TopDog"
      />
    </section>
  )
}

const practiceAreas = [
  "Personal Injury",
  "Birth Injury",
  "Wrongful Death",
  "Sexual Abuse",
  "Slip and Fall accidents",
  "Car Accidents",
  "Workers Compensation",
  "Medical Malpractice",
]
