import { cn } from "@/lib/utils"
import { buttonVariants } from "../ui/button"

export default async function Footer() {
  return (
    <footer className="bg-primary grid w-full grid-cols-1 gap-4 px-4 py-8 md:grid-cols-5">
      <div />
      <div className="mx-auto max-w-xl space-y-2 md:col-span-3">
        <p className="text-center text-sm font-bold">
          © TopDog Technologies, Inc. and Helm Law Group, LLC. All rights
          reserved.
        </p>
        <p className="text-center text-xs">
          Attorney advertising. TopDog Law (Helm Law Group, LLC) is
          headquartered in Arizona and has lawyers licensed in most states.
          James Helm is licensed in AZ and PA. TopDog Law maintains at least
          joint responsibility for most client files. We often rely on
          co-counsel. TopDog does not mean we are the best. Past results do not
          guarantee future results. See TopDogLaw.com for further information.
          See additional information on our Disclaimers page.
        </p>
      </div>
      <div className="flex flex-col">
        <a
          className={cn(buttonVariants({ variant: "link" }), "font-bold")}
          href="#"
        >
          Privacy Policy
        </a>
        <a
          className={cn(buttonVariants({ variant: "link" }), "font-bold")}
          href="#"
        >
          Terms of Service
        </a>
      </div>
    </footer>
  )
}
