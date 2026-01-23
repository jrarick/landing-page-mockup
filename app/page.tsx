import CallToAction from "@/components/home-page/call-to-action"
import CaseTypes from "@/components/home-page/case-types"
import Features from "@/components/home-page/features"
import Hero from "@/components/home-page/hero"
import Testimonials from "@/components/home-page/testimonials"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "TopDog Law",
  description:
    "TopDog Law is a personal injury law firm fighting for maximum compensation. Free consultations available 24/7.",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": "https://topdoglaw.com/#legalservice",
      name: "TopDog Law",
      description:
        "TopDog Law is a personal injury law firm dedicated to fighting for maximum compensation for accident victims.",
      url: "https://topdoglaw.com",
      telephone: "+1-833-TOP-DOG1",
      priceRange: "Free Consultation",
      image: "https://topdoglaw.com/logo.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1500 John F Kennedy Blvd",
        addressLocality: "Philadelphia",
        addressRegion: "PA",
        postalCode: "19102",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 39.9526,
        longitude: -75.1652,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      areaServed: {
        "@type": "State",
        name: "Pennsylvania",
      },
      serviceType: [
        "Personal Injury Law",
        "Car Accident Claims",
        "Truck Accident Claims",
        "Motorcycle Accident Claims",
        "Slip and Fall Claims",
        "Medical Malpractice",
        "Wrongful Death Claims",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Legal Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Free Case Evaluation",
              description: "No-obligation consultation to review your case",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Personal Injury Representation",
              description:
                "Legal representation for accident victims on a contingency fee basis",
            },
          },
        ],
      },
      sameAs: [
        "https://www.facebook.com/topdoglaw",
        "https://www.instagram.com/topdoglaw",
        "https://www.youtube.com/@topdoglaw",
        "https://www.tiktok.com/@topdoglaw",
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://topdoglaw.com/#organization",
      name: "TopDog Law",
      url: "https://topdoglaw.com",
      logo: {
        "@type": "ImageObject",
        url: "https://topdoglaw.com/logo.png",
        width: 300,
        height: 60,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-833-TOP-DOG1",
        contactType: "customer service",
        availableLanguage: ["English", "Spanish"],
        areaServed: "US",
      },
      sameAs: [
        "https://www.facebook.com/topdoglaw",
        "https://www.instagram.com/topdoglaw",
        "https://www.youtube.com/@topdoglaw",
        "https://www.tiktok.com/@topdoglaw",
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://topdoglaw.com/#webpage",
      url: "https://topdoglaw.com",
      name: "TopDog Law | Personal Injury Attorneys",
      description:
        "TopDog Law is a personal injury law firm fighting for maximum compensation. Free consultations available 24/7.",
      isPartOf: {
        "@id": "https://topdoglaw.com/#website",
      },
      about: {
        "@id": "https://topdoglaw.com/#legalservice",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://topdoglaw.com/og-image.png",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://topdoglaw.com/#website",
      url: "https://topdoglaw.com",
      name: "TopDog Law",
      publisher: {
        "@id": "https://topdoglaw.com/#organization",
      },
    },
  ],
}

export default async function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Features />
      <CaseTypes />
      <CallToAction />
      <Testimonials />
    </>
  )
}
