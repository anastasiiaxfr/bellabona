import FAQ from "@/components/homepage/FAQ";
import CTA from "@/components/homepage/CTA";
import ContactForm from "@/components/homepage/ContactForm";
import Reviews from "@/components/homepage/Reviews";
import STR from "@/components/homepage/STR";
import Benefits from "@/components/homepage/Benefits";
import Stat from "@/components/homepage/Stat";
import Metrics from "@/components/homepage/Metrics";
import Brands from "@/components/homepage/Brands";
import Hero from "@/components/homepage/Hero";
import Services from "@/components/homepage/Services";
import Calculator from "@/components/homepage/Calculator";
import { client } from "@/lib/sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
const urlFor = (source) =>
  source ? builder.image(source).auto("format").url() : null;

export default async function Home() {
  const ctas = await client.fetch(
    `*[_type == "home-cta" && language == de]{title, description, image, ctaButtonText, ctaButtonLink, type}`,
  );

  return (
    <>
      <Hero />
      <Brands />
      <Metrics />
      <Services />
      <Stat />
      <Benefits />
      <CTA
        type={ctas?.[0]?.type || "success"}
        title={ctas?.[0]?.title}
        description={ctas?.[0]?.description}
        img={urlFor(ctas?.[0]?.image)}
        btn={ctas?.[0]?.ctaButtonText}
        href={ctas?.[0]?.ctaButtonLink || "#"}
      />
      <STR />
      <Calculator />
      <Reviews />
      <ContactForm />
      <CTA
        type={ctas?.[1]?.type || "success"}
        title={ctas?.[1]?.title}
        description={ctas?.[1]?.description}
        img={urlFor(ctas?.[1]?.image)}
        btn={ctas?.[1]?.ctaButtonText}
        href={ctas?.[1]?.ctaButtonLink || "#"}
      />
      <FAQ />
    </>
  );
}
