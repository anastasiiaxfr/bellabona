import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function STR() {
  return (
    <section className="section section-str">
      <div className="container text-center">
        <h2 className="mx-auto max-w-4xl">
          From test lunch to happy teams in 3 easy steps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left mb-10">
          <article>
            <Image
              src="/img/homepage/str1.jpg"
              alt=""
              width="406"
              height="416"
              className="rounded-xl aspect-square w-full"
            />
            <span className="inline-block px-4 py-2 text-sm rounded-full bg-cstm-secondary my-4 text-cstm-grey-3">
              Step 01
            </span>

            <h4 className="text-xl mb-3">Set delivery interval & budget</h4>
            <p>Ready to go in less than a week.</p>
          </article>

          <article>
            <Image
              src="/img/homepage/str2.jpg"
              alt=""
              width="406"
              height="416"
              className="rounded-xl aspect-square w-full"
            />
            <span className="inline-block px-4 py-2 text-sm rounded-full bg-cstm-secondary my-4 text-cstm-grey-3">
              Step 02
            </span>

            <h4 className="text-xl mb-3">Lunch runs automatically</h4>
            <p>Team orders by 9:00 for same-day delivery.</p>
          </article>

          <article>
            <Image
              src="/img/homepage/str3.jpg"
              alt=""
              width="406"
              height="416"
              className="rounded-xl aspect-square w-full"
            />
            <span className="inline-block px-4 py-2 text-sm rounded-full bg-cstm-secondary my-4 text-cstm-grey-3">
              Step 03
            </span>

            <h4 className="text-xl mb-3">Track satisfaction & usage</h4>
            <p>Dashboard for order volume, billing data, etc.</p>
          </article>
        </div>

        <Button
          asChild
          className="btn-main bg-cstm-green-1 hover:bg-cstm-secondary hover:text-cstm-green-1"
        >
          <Link href="#">Schedule Free Test Lunch</Link>
        </Button>
      </div>
    </section>
  );
}

export default STR;
