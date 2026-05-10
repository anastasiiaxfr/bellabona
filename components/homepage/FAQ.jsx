import Script from "next/script";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    value: "item-1",
    trigger:
      "What is the tax-free lunch subsidy (Steuerfreier Essenszuschuss) in Germany?",
    content:
      "Bella&Bona is designed to seamlessly apply the tax-free meal subsidy on every eligible order. You only pay per meal, and we handle the automated invoicing and tax compliance, so your finance team doesn’t have to. Touch base with us and we’ll guide you through it.",
  },
  {
    value: "item-2",
    trigger:
      "How does Bella&Bona help me use the tax-free lunch benefit (Steuerfreier Essenszuschuss)?",
    content:
      "Traditional meal vouchers (Essensgutscheine) often go unused, are limited to partner restaurants, and create reimbursement hassle. Bella&Bona offers 30+ fresh, chef-made meals delivered daily, with 92% usage and zero paperwork. CFOs love the savings and teams actually enjoy the perk.",
  },
  {
    value: "item-3",
    trigger: "What makes this better than meal vouchers (Essensgutscheine)?",
    content:
      "Almost none. Employees order via app, and Bella&Bona delivers ready-to-eat meals. You receive one monthly invoice, with access to a real-time admin dashboard for usage tracking and tax reporting.",
  },
  {
    value: "item-4",
    trigger: "How much admin work is involved?",
    content:
      "Yes. Every meal clearly lists allergens and dietary tags. With 40% plant-based options, halal-friendly, lactose- and gluten-free meals, every team member finds something they love – regardless of background or preference.",
  },
  {
    value: "item-5",
    trigger:
      "We have an international team. Do you support diverse dietary needs?",
    content:
      "Yes. Every meal clearly lists allergens and dietary tags. With 40% plant-based options, halal-friendly, lactose- and gluten-free meals, every team member finds something they love – regardless of background or preference.",
  },
  {
    value: "item-6",
    trigger: "Can I test the service before committing?",
    content:
      "Absolutely. We offer a free team tasting for up to 50 people, so you can experience the impact before rolling it out. No setup cost, no hidden fees – just great food.",
  },
  {
    value: "item-7",
    trigger: "Is Bella&Bona a good fit for hybrid or part-time office teams?",
    content:
      "Yes. You can select specific delivery days, adjust your budget any time, and even rotate team members. Most companies see 30–40% higher office attendance on Bella&Bona lunch days.",
  },
  {
    value: "item-8",
    trigger: "How fast can we go live?",
    content:
      "Most companies go from first contact to first lunch in under 7 days. There’s no lengthy setup, and our team supports you through every step – from free tasting to full rollout.",
  },
];

function FAQ() {
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
            mainEntity: FAQ_ITEMS.map((item) => ({
              "@type": "Question",
              name: item.trigger,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.content,
              },
            })),
          }),
        }}
      />
      <section className="section section-faq">
        <div className="container">
          <h2 className="text-center">
            Tax-free meal allowance, employee catering & more – everything you
            need to know.
          </h2>

          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="faq w-full"
          >
            {FAQ_ITEMS.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger>{item.trigger}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}

export default FAQ;
