import { iconDictionary } from "@/utils/iconDictionary";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div className="hero bg-gradient-to-tr from-primary to-tertiary">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          alt="Chloë Avatar"
          className="max-w-sm shadow-2xl mask mask-hexagon"
          height={200}
          src="/hero-avatar.jpg"
          priority
          width={200}
        />
        <div>
          <h1 className="text-5xl font-bold">Chloë Rice</h1>
          <p className="py-6">
            Senior Front End Developer, on the road to becoming a Front End
            Architect.
          </p>
          <div className="flex space-x-4">
            <Link href="https://github.com/JosieRice" target="_blank">
              {iconDictionary["personalGitHub"]}
            </Link>

            <Link
              className="border-solid"
              href="https://www.linkedin.com/in/chloe-rice-tong/"
              target="_blank"
            >
              {iconDictionary["personalLinkedIn"]}
            </Link>
            <Link
              href="https://resume.creddle.io/resume/4fr0uv30mww"
              target="_blank"
            >
              {iconDictionary["personalResume"]}
            </Link>
            <Link href={"mailto:chloericetong@gmail.com"}>
              {iconDictionary["personalEmail"]}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
