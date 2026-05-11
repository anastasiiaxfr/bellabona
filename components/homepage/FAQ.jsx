import Script from "next/script";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { client } from "@/lib/sanity";

async function FAQ() {
  const data = await client.fetch(`*[_type == "home-faq"][0]{title, faqs}`);

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: data.faqs.map((item) => ({
              "@type": "Question",
              name: item.term,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
      <section className="section section-faq">
        <div className="container">
          <h2 className="text-center">{data?.title}</h2>

          <Accordion
            type="single"
            defaultValue="item-1"
            className="faq w-full"
          >
            {data?.faqs.map((item) => (
              <AccordionItem key={item._key} value={item.term}>
                <AccordionTrigger>{item.term}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}

export default FAQ;
