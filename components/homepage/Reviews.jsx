import Image from "next/image";
import { client } from "@/lib/sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
const urlFor = (source) =>
  source ? builder.image(source).auto("format").url() : null;

async function Reviews() {
  const data = await client.fetch(
    `*[_type == "home-review" && language == de][0]{title, cite, author, job, images[]{asset->{url}, alt}}`,
  );

  return (
    <section className="section section-reviews my-0! py-10 lg:py-20 bg-cstm-secondary overflow-x-hidden">
      <div className="container">
        <h2 className="text-center">{data?.title}</h2>
      </div>
      <div className="grid grid-cols-[20%_60%_20%] xl:grid-cols-[1fr_1.5fr_1fr] gap-4 lg:gap-10 items-center sm:mt-20">
        <Image
          src={urlFor(data?.images?.[0])}
          alt=""
          width="400"
          height="400"
          className="aspect-2/2 rounded-2xl object-cover object-center -ml-4 lg:-ml-10 min-h-[200px]"
        />
        <blockquote className="bg-cstm-green-1 text-white text-center p-4 sm:px-10 sm:py-30 rounded-xl grid h-full scale-110">
          <p className="text-sm sm:text-2xl lg:text-3xl [grid-area:_1_1_2_2] mb-10">
            {data?.cite}
          </p>

          <footer className="mt-auto text-xs sm:text-sm">
            <cite className="not-italic">
              <p>{data?.author}</p>
              <p>{data?.job}</p>
            </cite>
          </footer>
        </blockquote>
        <Image
          src={urlFor(data?.images?.[1])}
          alt=""
          width="400"
          height="400"
          className="aspect-2/2 rounded-2xl object-cover object-center ml-4 lg:ml-10 min-h-[200px]"
        />
      </div>
    </section>
  );
}

export default Reviews;
