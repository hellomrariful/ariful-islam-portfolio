const Skill = () => {
  return (
    <div id="skill">
      <h1 className=" text-center text-4xl mt-16 mb-10 font-bold">My Skill</h1>
      <div className="grid grid-cols-2 gap-10">
        <div>
          <div>
            JavaScript
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full  w-[85%]">
                <p className="">85%</p>
              </div>
            </div>
          </div>
          <div>
            React JS
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full  w-[90%]">
                <p className="">90%</p>
              </div>
            </div>
          </div>
          <div>
            Tailwind CSS
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full  w-[93%]">
                <p className="">93%</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            Node.js
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full  w-[84%]">
                <p className="">84%</p>
              </div>
            </div>
          </div>
          <div>
            Express.js
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full  w-[80%]">
                <p className="">80%</p>
              </div>
            </div>
          </div>
          <div>
            MongoDB
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full  w-[75%]">
                <p className="">75%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
