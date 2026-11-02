import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${sans.variable} ${mono.variable} ${serif.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
