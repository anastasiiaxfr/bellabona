import { client } from "@/lib/sanity";

async function Metrics() {
  const data = await client.fetch(`*[_type == "home-metrics"][0]{metrics}`);

  return (
    <section className="section section-metrics">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data?.metrics.map((metric) => (
            <div
              key={metric._key}
              className="bg-ctsm-grey-4 grid p-10 rounded-2xl"
            >
              <p className="text-5xl xl:text-7xl font-medium mb-10">
                {metric.value}
              </p>
              <p className="text-lg xl:text-2xl">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Metrics;
