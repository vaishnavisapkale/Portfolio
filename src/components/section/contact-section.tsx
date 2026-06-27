import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        {/* <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        /> */}
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">

        {/* <p className="mx-auto max-w-lg text-muted-foreground">
    Feel free to reach out.
  </p> */}

        <Link
          href={`mailto:${DATA.contact.email}`}
          className="text-lg underline font-medium text-primary hover:underline underline-offset-4 hover:shadow-lg hover:-translate-y-0.5"
        >
          {DATA.contact.email}
        </Link>

  <Link
    href="/Vaishnavi_Sapkale_resume.pdf"
    download
    className="inline-flex items-center gap-2 rounded-lg underline px-4 py-2  text-sm text-primary transition-all duration-200  hover:shadow-lg hover:-translate-y-0.5"
  >
    Download Resume
  </Link>
      </div>
    </div>
  );
}

