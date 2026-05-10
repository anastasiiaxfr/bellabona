import Link from "next/link";
import { Button } from "@/components/ui/button";
import CarouselSevices from "../carousels/CarouselServices";
import { client } from "@/lib/sanity";

async function Services() {
  const data = await client.fetch(
    `*[_type == "home-services"][0]{title, services, ctaButtonText, ctaButtonLink}`,
  );

  return (
    <section className="section section-services my-0 py-10 lg:py-20 bg-cstm-secondary">
      <div className="container">
        <h2 className="text-center text-cstm-green-1">{data?.title}</h2>

        <CarouselSevices data={data?.services} />

        <div className="text-center">
          <Button
            asChild
            className={`btn-main sm:w-auto  w-full hover:bg-main mt-10 hover:text-white bg-cstm-green-1 text-white`}
          >
            <Link href={data?.ctaButtonLink}>{data?.ctaButtonText}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Services;
