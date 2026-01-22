import { BanIcon, PhoneCallIcon, ZapIcon } from "lucide-react"
import { Heading } from "../ui/heading"

export default async function Features() {
  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto grid max-w-5xl gap-y-12 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center gap-3 text-center"
          >
            <feature.icon className="text-tertiary size-8" />
            <Heading as="h3" className="text-4xl">
              {feature.title}
            </Heading>
            <p className="max-w-52 text-base/5 text-balance">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

const features = [
  {
    icon: PhoneCallIcon,
    title: "We Make it Easy",
    description:
      "No legal talk. No red tape. Just one call, and we handle the rest.",
  },
  {
    icon: BanIcon,
    title: "Risk Free",
    description:
      "We only get paid if you win — no out of pocket fees, no hidden cost, no catch.",
  },
  {
    icon: ZapIcon,
    title: "We Move Fast",
    description:
      "Bills don't wait, and neither do we. We act fast, right when you need it.",
  },
]
