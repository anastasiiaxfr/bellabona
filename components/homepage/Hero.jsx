import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="section section-hero mt-0!">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <div className="h-full">
            <article className="bg-cstm-green-1 rounded-xl p-10 text-cstm-secondary grid h-full">
              <h1 className="mb-10">
                Offer Lunch to Build Culture & Cut Costs
              </h1>
              <div className="mt-auto">
                <p className="mb-4">
                  30+ fresh, chef-made meals weekly, delivered straight to the
                  office, employees order via app – all diets, no admin
                </p>
                <Button
                  asChild
                  className="btn-main bg-cstm-secondary text-cstm-green-1 hover:bg-main hover:text-white w-full sm:w-auto"
                >
                  <Link href="#">Book a free team lunch</Link>
                </Button>
              </div>
            </article>
          </div>
          <div>
            <div className="relative lg:grid">
              <Image
                src="/img/homepage/img0.jpg"
                alt=""
                width="623"
                height="697"
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
