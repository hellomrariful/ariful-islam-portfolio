import { useState } from "react";
import { Tab } from "@headlessui/react";
import { Button } from "@material-tailwind/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const About = () => {
  let [categories] = useState({
    Experience: [
      {
        id: 1,
        title: "Meta audience network - Anolipi",
        date: "2020-2023",
      },
      {
        id: 2,
        title: "Lead the Dev Team - Anolipi",
        date: "2020-2023",
      },
    ],
    Education: [
      {
        id: 1,
        title: "Diploma in Electronic Engineer - Sylhet Polytechnic Institute",
        date: "2021-2024",
      },
      {
        id: 2,
        title: "SSC - Bogla Rusmat Ali Ram Shundor High School & Collage",
        date: "2019-2020",
      },
    ],
  });

  return (
    <div id="about">
      <h1 className="text-center font-bold mt-20 text-4xl">About Me</h1>
      <div className="flex mt-10 justify-center items-center gap-10">
        <div className="w-[350px]">
          <img className="rounded" src="/public/aa-removebg-preview.png" alt="" />
        </div>
        <div className="w-1/2">
          <h1 className="text-3xl font-bold">I'm Ariful Islam</h1>
          <h3 className="text-xl text-[#f8024d] ">MERN Stack Developer</h3>
          <p className=" text-gray-800 font-semibold mt-2 text-[17px]">
            Hi, Ariful Islam here, a Front-End Developer skilled in React.js,
            Next.js, Node.js, Express.js, and MongoDB. My mission to transform
            into a seasoned Software Engineer. Enthusiastic about coding and
            crafting innovative projects. Let's Work Together, Work Forever.
          </p>
          <div className="w-full max-w-md px-2  mt-3 sm:px-0">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                {Object.keys(categories).map((category) => (
                  <Tab
                    key={category}
                    className={({ selected }) =>
                      classNames(
                        "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                        "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                        selected
                          ? "bg-white text-blue-700 shadow"
                          : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                      )
                    }
                  >
                    {category}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="mt-2">
                {Object.values(categories).map((posts, idx) => (
                  <Tab.Panel
                    key={idx}
                    className={classNames(
                      "rounded-xl bg-white p-3",
                      "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                    )}
                  >
                    <ul>
                      {posts.map((post) => (
                        <li
                          key={post.id}
                          className="relative rounded-md p-3 hover:bg-gray-100"
                        >
                          <h3 className="text-sm font-medium leading-5">
                            {post.title}
                          </h3>

                          <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                            <li>{post.date}</li>
                          </ul>

                          <a
                            href="#"
                            className={classNames(
                              "absolute inset-0 rounded-md",
                              "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                            )}
                          />
                        </li>
                      ))}
                    </ul>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>

          <a href="https://www.linkedin.com/in/hellomrariful/" className="bg-[#f8024d] text-[16px] block w-full text-center rounded-lg py-3 text-white px-2">
  See LinkedIn
</a>

        </div>
      </div>
    </div>
  );
};

export default About;
