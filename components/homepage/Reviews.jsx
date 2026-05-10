import Image from "next/image";

function Reviews() {
  return (
    <section className="section section-reviews my-0 py-10 lg:py-20 bg-cstm-secondary overflow-x-hidden">
      <div className="container">
        <h2 className="text-center">
          Join 200+ Companies Filling Desks and Boosting Culture With Lunch
        </h2>
      </div>
      <div className="grid grid-cols-[20%_60%_20%] xl:grid-cols-[1fr_1.5fr_1fr] gap-4 lg:gap-10 items-center sm:mt-20">
        <Image
          src="/img/homepage/img2.jpg"
          alt=""
          width="400"
          height="400"
          className="aspect-2/2 rounded-2xl object-cover object-center -ml-4 lg:-ml-10 min-h-[200px]"
        />
        <blockquote className="bg-cstm-green-1 text-white text-center p-4 sm:p-10 rounded-xl grid h-full scale-110">
          <p className="text-sm sm:text-2xl lg:text-3xl mb-10">
            “This is the first benefit that everyone is really happy about—and
            that they will continue to use for longer than two months.”
          </p>

          <footer className="mt-auto text-xs sm:text-sm">
            <cite className="not-italic">
              <p>Anna Boehm</p>
              <p>People Manager</p>
            </cite>
          </footer>
        </blockquote>
        <Image
          src="/img/homepage/img3.jpg"
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
