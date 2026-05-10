import CardServices from "../cards/CardServices";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CarouselSevices from "../carousels/CarouselServices";

const SERVICES_LIST = [
  {
    id: 1,
    title: "Fresh Salad with Pears & Tofu",
    category: "Seasonal Specials",
    percentage: "94%",
    reviewvs: "171",
    image: "/img/services/s1.png",
  },
  {
    id: 2,
    title: "High-Protein Tuna Egg Rice Bowl",
    category: "High-Protein Meals",
    percentage: "98%",
    reviewvs: "322",
    image: "/img/services/s2.png",
  },
  {
    id: 3,
    title: "Thai Chicken Salad",
    category: "Gluten- & Lactose-Free",
    percentage: "92%",
    reviewvs: "186",
    image: "/img/services/s3.png",
  },
  {
    id: 4,
    title: "Bacon Cheeseburger",
    category: "International Cuisine",
    percentage: "949%",
    reviewvs: "532",
    image: "/img/services/s4.png",
  },
  {
    id: 5,
    title: "Greek Chopped Salad",
    category: "Vegan & Veggie Variety",
    percentage: "94%",
    reviewvs: "202",
    image: "/img/services/s5.png",
  },
  {
    id: 6,
    title: "Hawaiian Chicken Poke",
    category: "Allergy & Halal Friendly",
    percentage: "97%",
    reviewvs: "254",
    image: "/img/services/s6.png",
  },
];

function Services() {
  return (
    <section className="section section-services my-0 py-10 lg:py-20 bg-cstm-secondary">
      <div className="container">
        <h2 className="text-center text-cstm-green-1">
          30+ Meal Options Every Week. Made Fresh Daily. For Every Diet.
        </h2>

        {/* <div className="grid grod-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-15">
          {SERVICES_LIST.map((service) => (
            <CardServices key={service.id} {...service} />
          ))}
        </div> */}
        <CarouselSevices data={SERVICES_LIST} />

        <div className="text-center">
          <Button
            asChild
            className={`btn-main sm:w-auto  w-full hover:bg-main mt-10 hover:text-white bg-cstm-green-1 text-white`}
          >
            <Link href="#">Download the menu now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Services;
