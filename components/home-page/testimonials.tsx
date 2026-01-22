import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"
import { Heading } from "../ui/heading"
import Image from "next/image"

export default async function Testimonials() {
  return (
    <section className="h-160 w-full bg-[url('/testimonial-background.jpg')] bg-cover bg-center md:h-200">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Carousel className="w-md max-w-full px-4">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="w-full space-y-4 text-center select-none"
              >
                <Heading
                  as="span"
                  className="text-primary text-4xl"
                >{`"`}</Heading>
                <Heading as="h3" className="text-4xl">
                  {testimonial.title}
                </Heading>
                <p className="text-base md:text-lg">{`"${testimonial.content}"`}</p>
                <p className="font-bold">- {testimonial.author}</p>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Image
          src="/topdog-logo.png"
          alt="Top Dog Logo"
          width={200}
          height={50}
          className="mt-12 h-10 w-auto"
        />
      </div>
    </section>
  )
}

const testimonials = [
  {
    author: "Andrew Yung",
    title: "I'm Very Thankful!",
    content:
      "TopDog Law Personal Injury Lawyers was extremely professional when they handled my personal injury case. They even followed up after everything was over with to check on me.",
  },
  {
    author: "Tiffany Ringgold",
    title: "I Highly Recommend!",
    content:
      "Top Dog Law has been thorough and on top of my case since it has begun. They have excellent follow-up and they seem to care about us as clients versus see another dollar like other law firms.",
  },
  {
    author: "Stephen Williams",
    title: "Thank You TogDog!",
    content:
      "Top Dog helped me feel comfortable with the process. Helped me get the treatment I needed for my quality of life. I'm extremely grateful knowing I'm in good hands.",
  },
  {
    author: "Crystal Smith",
    title: "Best Call I've Made!",
    content:
      "I haven't been involved in an auto accident in over 25 years and I've been very pleased with the level of responsiveness and professionalism of the local Top Dog team here in Philly.",
  },
]
