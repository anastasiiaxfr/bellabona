import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function CTA({ type, title, description = "", img, btn, href }) {
  return (
    <section className="section section-cta">
      <div className="container">
        <div
          className={`rounded-2xl p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch bg-cstm-green-3 text-cstm-green-1 ${type === "danger" && "bg-cstm-red-1 text-cstm-ren-2"}`}
        >
          <div>
            <h3
              className={`xl:text-[54px] mb-4 text-cstm-green-1 ${type === "danger" && "text-cstm-red-2"}`}
            >
              {title}
            </h3>
            {description && <p className="mb-8">{description}</p>}

            <Button
              asChild
              className={`btn-main sm:w-auto  w-full hover:bg-main mt-10 hover:text-white ${type === "success" && "bg-cstm-green-1"} ${type === "danger" && "bg-cstm-red-2 "}`}
            >
              <Link href={href}>{btn}</Link>
            </Button>
          </div>
          <div>
            {img && (
              <Image
                src={img}
                width={449}
                height={318}
                alt=""
                className="aspect-2/1 w-full lg:w-auto h-full rounded-lg lg:ml-auto"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
