import { client } from "@/lib/sanity";

async function Stat() {
  const data = await client.fetch(`*[_type == "home-stats"][0]{title, stats}`);

  return (
    <section className="section section-statistics">
      <div className="container">
        <h2 className="text-center">{data?.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data?.stats.map((stat) => (
            <div
              key={stat._key}
              className="bg-cstm-green-1 text-cstm-green-3 grid p-10 rounded-2xl"
            >
              <p className="text-5xl xl:text-7xl font-medium mb-4">
                {stat.value}
              </p>
              <p className="font-bold text-xl xl:text-3xl mb-10">
                {stat.title}
              </p>
              <p className="text-lg xl:text-2xl">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stat;
