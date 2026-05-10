import Image from "next/image";
import Link from "next/link";

import Form from "@/components/forms/Form-1";

function ContactForm() {
  return (
    <section className="section section-cta-form">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <article className="bg-cstm-green-1 text-cstm-green-3 rounded-xl p-10">
              <h2 className="text-cstm-green-3">
                Got Questions? Let’s Talk Lunch.
              </h2>
              <p className="mb-10">
                Straightforward answers on pricing, setup and whether Bella&Bona
                fits your office – we're here to help.
              </p>
              <div className="mt-auto flex gap-4 items-end">
                <Image
                  src="/img/homepage/ava1.jpg"
                  alt=""
                  width="230"
                  height="205"
                  className="rounded-lg aspect-square"
                />
                <div>
                  <p>
                    <b>Sara Dorofeev</b>
                  </p>
                  <p>
                    <Link href="mailto:sara@bellabona.com">
                      sara@bellabona.com
                    </Link>
                  </p>
                  <p>
                    <Link href="tel:+4915129605077">+49 151 2960 5077</Link>
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
