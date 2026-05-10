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

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Metrics />
      <Services />
      <Stat />
      <Benefits />
      <CTA
        type="danger"
        title="Fill office seats with tax-deductible lunches."
        img="/img/homepage/img4.jpg"
        btn="Get Custom Quote"
        href="#"
      />
      <STR />
      <Reviews />
      <ContactForm />
      <CTA
        type="success"
        title="Already a Bella&Bona customer?"
        description="Access the Support Center to manage orders, check your balance, or resolve questions about your account."
        img="/img/homepage/img1.jpg"
        btn="Go to Support Center"
        href="#"
      />
      <FAQ />
    </>
  );
}
