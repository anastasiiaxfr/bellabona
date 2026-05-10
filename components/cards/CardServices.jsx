import Image from "next/image";
import { X, ThumbsUp } from "lucide-react";
import { client } from "@/lib/sanity";

import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(client);
const urlFor = (source) =>
  source ? builder.image(source).auto("format").url() : null;

function CardServices({ title, category, percentage, reviews, image }) {
  return (
    <article className="bg-white rounded-xl p-4">
      <div className="grid items-between rounded-lg gap-0 mb-4 overflow-hidden bg-cstm-green-5">
        <span className="bg-white px-4 py-2 rounded-full text-sm inline-flex gap-2 items-center shadow m-4 mr-auto mb-0 border border-[rgba(16,40,72,0.9)] ">
          {category} <X size="14" />
        </span>
        <Image
          src={urlFor(image)}
          width="400"
          height="400"
          alt=""
          className="w-full h-auto"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="flex gap-2 flex-wrap items-center">
        <span className="flex gap-2 items-center text-2xl">
          <ThumbsUp />
          {percentage}%
        </span>
        <span className="flex gap-2 items-center text-base opacity-70">
          ({reviews} reviews)
        </span>
      </div>
    </article>
  );
}

export default CardServices;
