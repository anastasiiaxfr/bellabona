import Image from "next/image";
import { Check } from "lucide-react";

function Benefits() {
  return (
    <section className="section section-benefits">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <Image
              src="/img/homepage/img5.jpg"
              alt=""
              width="625"
              height="462"
              className="w-full aspect-2/1.25 rounded-xl object-cover"
            />
          </div>
          <div>
            <div className="bg-ctsm-grey-4 rounded-2xl p-10">
              <ul className="grid gap-8">
                <li className="grid grid-cols-[30px_1fr] gap-4">
                  <b className="w-[30px] h-[30px] rounded-full bg-cstm-green-1 text-white flex items-center justify-center">
                    <Check />
                  </b>
                  <div>
                    <p className="text-2xl font-medium mb-2">
                      30+ Daily Options for All Diets
                    </p>
                    <p>Halal, vegan, gluten-free – no one’s left out.</p>
                  </div>
                </li>

                <li className="grid grid-cols-[30px_1fr] gap-4">
                  <b className="w-[30px] h-[30px] rounded-full bg-cstm-green-1 text-white flex items-center justify-center">
                    <Check />
                  </b>
                  <div>
                    <p className="text-2xl font-medium mb-2">
                      Employees Order by App. Zero Admin For You.
                    </p>
                    <p>No vouchers, no chasing, simply one invoice.</p>
                  </div>
                </li>

                <li className="grid grid-cols-[30px_1fr] gap-4">
                  <b className="w-[30px] h-[30px] rounded-full bg-cstm-green-1 text-white flex items-center justify-center">
                    <Check />
                  </b>
                  <div>
                    <p className="text-2xl font-medium mb-2">
                      100% Reusable Packaging. Zero Waste.
                    </p>
                    <p>Support ESG targets without extra effort.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
