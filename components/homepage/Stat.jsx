function Stat() {
  return (
    <section className="section section-statistics">
      <div className="container">
        <h2 className="text-center">
          The #1 Perk That Actually Boosts Culture, Attendance, and ROI
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-cstm-green-1 text-cstm-green-3 grid p-10 rounded-2xl">
            <p className="text-5xl xl:text-7xl font-medium mb-4">30-40%</p>
            <p className="font-bold text-xl xl:text-3xl mb-10">
              Attendance Boost
            </p>
            <p className="text-lg xl:text-2xl">
              Because nobody can say no to great food
            </p>
          </div>

          <div className="bg-cstm-green-1 text-cstm-green-3 grid p-10 rounded-2xl">
            <p className="text-5xl xl:text-7xl font-medium mb-4">7,50 €</p>
            <p className="font-bold text-xl xl:text-3xl mb-10">
              Tax-free per meal
            </p>
            <p className="text-lg xl:text-2xl">Only pay for what’s used</p>
          </div>

          <div className="bg-cstm-green-1 text-cstm-green-3 grid p-10 rounded-2xl">
            <p className="text-5xl xl:text-7xl font-medium mb-4">92% </p>
            <p className="font-bold text-xl xl:text-3xl mb-10">
              Users use it daily
            </p>
            <p className="text-lg xl:text-2xl">
              Finally, a benefit everyone loves
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stat;
