import CallToAction from "@/components/home-page/call-to-action"
import CaseTypes from "@/components/home-page/case-types"
import Features from "@/components/home-page/features"
import Hero from "@/components/home-page/hero"

export default async function Home() {
  return (
    <>
      <Hero />
      <Features />
      <CaseTypes />
      <CallToAction />
    </>
  )
}
