import CountUp from "react-countup";

const Statistic = () => {
  return (
    <div className="px-4 mt-20 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-slate-200 rounded text-black">
      <div className="grid row-gap-8 sm:grid-cols-3 justify-center mx-auto">
        <div className="text-center">
          <h6 className="text-5xl font-bold text-deep-purple-accent-400">
            <CountUp start={0} end={6} duration={10}>
              {({ countUpRef }) => (
                <div className="flex ml-24">
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
          </h6>
          <p className="font-bold">Running Projects</p>
        </div>
        <div className="text-center">
          <h6 className="text-5xl font-bold text-deep-purple-accent-400">
            <CountUp start={0} end={44} duration={11}>
              {({ countUpRef }) => (
                <div className="flex ml-24">
                  <span ref={countUpRef} />
                  <h1>+</h1>
                </div>
              )}
            </CountUp>
          </h6>
          <p className="font-bold">Complete Projects</p>
        </div>
        <div className="text-center">
          <h6 className="text-5xl font-bold text-deep-purple-accent-400">
            <CountUp start={0} end={1} duration={12}>
              {({ countUpRef }) => (
                <div className="flex ml-24">
                  <span ref={countUpRef} />
                  <h1>+</h1>
                </div>
              )}
            </CountUp>
          </h6>
          <p className="font-bold">Years Of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
