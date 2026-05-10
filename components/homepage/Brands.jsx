import Image from "next/image";
import { client } from "@/lib/sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
const urlFor = (source) =>
  source ? builder.image(source).auto("format").url() : null;

async function Brands() {
  const data = await client.fetch(
    `*[_type == "home-brands"][0]{title, images}`,
  );

  return (
    <section className="section section-brands">
      <div className="container">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-10 items-center justify-center text-center">
          <p className="text-4xl">{data?.title}</p>
          <div className="flex gap-8 items-center flex-wrap">
            {data?.images.map((image) => (
              <Image
                key={image._key}
                src={urlFor(image?.asset)}
                alt={image.alt || "Brand logo"}
                width="190"
                height="46"
                className="w-auto h-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
