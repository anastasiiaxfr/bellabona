function Metrics() {
  return (
    <section className="section section-metrics">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-ctsm-grey-4 grid p-10 rounded-2xl">
            <p className="text-5xl xl:text-7xl font-medium mb-10">9/10</p>

            <p className="text-lg xl:text-2xl">Employee Satisfaction</p>
          </div>

          <div className="bg-ctsm-grey-4 grid p-10 rounded-2xl">
            <p className="text-5xl xl:text-7xl font-medium mb-10">30-40%</p>

            <p className="text-lg xl:text-2xl">More teams in the office</p>
          </div>

          <div className="bg-ctsm-grey-4 grid p-10 rounded-2xl">
            <p className="text-5xl xl:text-7xl font-medium mb-10">1.2 MM</p>

            <p className="text-lg xl:text-2xl">
              Meals delivered in Munich & Berlin
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Metrics;
