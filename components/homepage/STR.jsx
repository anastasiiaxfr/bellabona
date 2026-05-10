import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { client } from "@/lib/sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
const urlFor = (source) =>
  source ? builder.image(source).auto("format").url() : null;

async function STR() {
  const data = await client.fetch(
    `*[_type == "home-steps"][0]{title, steps, ctaButtonText, ctaButtonLink}`,
  );

  return (
    <section className="section section-str">
      <div className="container text-center">
        <h2 className="mx-auto max-w-4xl">{data?.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left mb-10">
          {data?.steps?.map((step, index) => (
            <article key={index} className="bg-cstm-green-3 rounded-xl p-6">
              <Image
                src={urlFor(step.image)}
                alt={step.title}
                width="406"
                height="416"
                className="rounded-xl aspect-square w-full"
              />
              <span className="inline-block px-4 py-2 text-sm rounded-full bg-cstm-secondary my-4 text-cstm-grey-3">
                Step {index < 10 ? `0${index + 1}` : index + 1}
              </span>

              <h4 className="text-xl mb-3">{step.title}</h4>
              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <Button
          asChild
          className="btn-main bg-cstm-green-1 hover:bg-cstm-secondary hover:text-cstm-green-1"
        >
          <Link href={data?.ctaButtonLink}>{data?.ctaButtonText}</Link>
        </Button>
      </div>
    </section>
  );
}

export default STR;
