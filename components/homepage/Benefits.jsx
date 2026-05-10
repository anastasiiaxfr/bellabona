import Image from "next/image";
import { Check } from "lucide-react";
import { client } from "@/lib/sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
const urlFor = (source) =>
  source ? builder.image(source).auto("format").url() : null;

async function Benefits() {
  const data = await client.fetch(
    `*[_type == "home-features" && language == de][0]{image, features[]}`,
  );

  return (
    <section className="section section-benefits">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <Image
              src={urlFor(data?.image)}
              alt=""
              width="625"
              height="462"
              className="w-full aspect-2/1.25 rounded-xl object-cover"
            />
          </div>
          <div>
            <div className="bg-ctsm-grey-4 rounded-2xl p-10">
              <ul className="grid gap-8">
                {data?.features?.map((feature, index) => (
                  <li className="grid grid-cols-[30px_1fr] gap-4" key={index}>
                    <b className="w-[30px] h-[30px] rounded-full bg-cstm-green-1 text-white flex items-center justify-center">
                      <Check />
                    </b>
                    <div>
                      <p className="text-lg md:text-2xl font-medium mb-2">
                        {feature.title}
                      </p>
                      <p>{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
