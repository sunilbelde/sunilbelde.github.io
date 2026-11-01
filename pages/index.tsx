import Head from "next/head";
import About from "../components/About";
import Background from "../components/Background";
import Builds from "../components/Builds";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Skills from "../components/Skills";
import Work from "../components/Work";
import { profile, socials } from "../data/profile";

const SITE_URL = "https://sunilbelde.github.io";
const TITLE = `${profile.name} · ${profile.role}`;
const DESCRIPTION =
  "ML engineer at Capital One building production GenAI systems: agentic workflows, RAG, LLM evaluation and data engineering automation.";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  worksFor: { "@type": "Organization", name: profile.company },
  address: { "@type": "PostalAddress", addressLocality: "Chicago", addressRegion: "IL", addressCountry: "US" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University of Illinois Chicago" },
    { "@type": "CollegeOrUniversity", name: "VNR Vignana Jyothi Institute of Engineering & Technology" },
  ],
  url: SITE_URL,
  image: `${SITE_URL}${profile.portrait}`,
  sameAs: socials.map((s) => s.url),
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:image" content={`${SITE_URL}${profile.portrait}`} />
        <meta name="twitter:card" content="summary" />
        <meta name="theme-color" content="#0b0c0e" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#fafaf8" media="(prefers-color-scheme: light)" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </Head>

      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Builds />
        <Experience />
        <Skills />
        <Background />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
