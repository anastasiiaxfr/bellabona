import Image from "next/image";
import Link from "next/link";

import Form from "@/components/forms/Form-1";

import { client } from "@/lib/sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
const urlFor = (source) =>
  source ? builder.image(source).auto("format").url() : null;

async function ContactForm({ language }) {
  const data = await client.fetch(
    `*[_type == "home-contact-form" && language == $language][0]{
      title,
      description,
      name,
      email,
      phone,
      image{
        asset->
      }
    }`,
    { language },
  );

  return (
    <section className="section section-cta-form">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <article className="bg-cstm-green-1 text-cstm-green-3 rounded-xl p-10">
              <h2 className="text-cstm-green-3">{data?.title}</h2>
              <p className="mb-10">{data?.description}</p>
              <div className="mt-auto flex gap-4 items-end">
                <Image
                  src={urlFor(data?.image.asset)}
                  alt={data?.name}
                  width="230"
                  height="205"
                  className="rounded-lg aspect-square"
                />
                <div>
                  <p>
                    <b>{data?.name}</b>
                  </p>
                  <p>
                    <Link href={`mailto:${data?.email}`}>{data?.email}</Link>
                  </p>
                  <p>
                    <Link href={`tel:${data?.phone}`}>{data?.phone}</Link>
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div>
            <h4 className="text-cstm-green-1">Schedule an appointment now</h4>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
