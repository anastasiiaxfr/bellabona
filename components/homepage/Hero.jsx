import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { client } from "@/lib/sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
const urlFor = (source) =>
  source ? builder.image(source).auto("format").url() : null;

async function Hero() {
  const data = await client.fetch(
    `*[_type == "home-hero"][0]{title, subtitle, image, ctaButtonText, ctaButtonLink}`,
  );

  return (
    <section className="section section-hero mt-0!">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <div className="h-full">
            <article className="bg-cstm-green-1 rounded-xl p-10 text-cstm-secondary grid h-full">
              <h1 className="mb-10">{data?.title}</h1>
              <div className="mt-auto">
                <p className="mb-4">{data?.subtitle}</p>
                <Button
                  asChild
                  className="btn-main bg-cstm-secondary text-cstm-green-1 hover:bg-main hover:text-white w-full sm:w-auto"
                >
                  <Link href={data?.ctaButtonLink} target="_blank">
                    {data?.ctaButtonText}
                  </Link>
                </Button>
              </div>
            </article>
          </div>
          <div>
            <div className="relative lg:grid">
              <Image
                src={urlFor(data?.image)}
                alt=""
                width={623}
                height={697}
                className="w-full aspect-square rounded-xl object-cover [grid-area:1/1/2/2] "
                fetchPriority="hight"
              />
              <div className="[grid-area:1/1/2/2] xl:mt-auto grid grid-cols-3 items-center gap-4 justify-center p-6 mt-auto">
                <Link href="#" traget="_blank">
                  <Image
                    src="/icons/gp.png"
                    alt="Google Pay"
                    width="202"
                    height="60"
                    fetchPriority="hight"
                    className="aspect-2/0.5 object-cover rounded-lg w-full h-auto"
                  />
                </Link>

                <Link href="#" traget="_blank">
                  <Image
                    src="/icons/appstore.png"
                    alt="App Store"
                    width="180"
                    height="60"
                    fetchPriority="hight"
                    className="aspect-2/0.5 object-cover rounded-lg w-full h-auto"
                  />
                </Link>

                <Link href="#" traget="_blank">
                  <Image
                    src="/icons/g+.png"
                    alt="Google Plus"
                    width="160"
                    height="60"
                    fetchPriority="hight"
                    className="aspect-2/0.5 object-cover rounded-lg w-full h-auto"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
