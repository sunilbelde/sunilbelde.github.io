import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { getImageUrl } from "../utils/imageHelper";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";

type Props = { pageInfo: PageInfo };

export default function Hero({ pageInfo }: Props) {
  const [text] = useTypewriter({
    words: [
      `Hello, my name is ${pageInfo?.name}`,
      "I_love_to_code.py",
      "And I'm passionate about ML/AI",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={getImageUrl(pageInfo?.heroImage)}
        alt={`${pageInfo?.name}'s profile`}
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[4px] md:tracking-[6px] font-bold">
          {pageInfo?.role}
        </h2>
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#68B2A0" />
        </h1>

        <div className="pt-5 flex flex-wrap items-center justify-center gap-4">
          <Link href="#about">
            <button className="heroButton">Learn More About Me</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
