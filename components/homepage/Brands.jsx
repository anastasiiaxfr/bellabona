import Image from "next/image";

function Brands() {
  return (
    <section className="section section-brands">
      <div className="container">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-10 items-center justify-center text-center">
          <p className="text-4xl">Loved by +X00 customers</p>
          <div className="flex gap-8 items-center flex-wrap">
            <Image
              src="/img/homepage/b1.svg"
              alt=""
              width="110"
              height="34"
              className="w-auto h-auto"
            />
            <Image
              src="/img/homepage/b2.svg"
              alt=""
              width="190"
              height="46"
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
