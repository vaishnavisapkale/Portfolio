import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <div className="border rounded-xl p-10 mt-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
    <div className="relative flex flex-col items-center gap-3 text-center">

  <p className="max-w-md text-sm text-muted-foreground">
     Let’s get in touch.
  </p>
  <Link
    href={`mailto:${DATA.contact.email}`}
    className="text-lg font-medium text-primary underline underline-offset-4 transition-all hover:-translate-y-0.5 hover:shadow-lg"
  >
    {DATA.contact.email}
  </Link>
</div>

{/* <a href="/Vaishnavi_Sapkale.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg underline px-4 py-2  text-sm text-primary transition-all duration-200  hover:shadow-lg hover:-translate-y-0.5">
   Resume
</a> */}
        {/* <Link
          href="/Vaishnavi_Sapkale.pdf"
          download
          className="inline-flex items-center gap-2 rounded-lg underline px-4 py-2  text-sm text-primary transition-all duration-200  hover:shadow-lg hover:-translate-y-0.5"
        >
          Download Resume
        </Link> */}
      {/* </div> */}
    </div>
  );
}

