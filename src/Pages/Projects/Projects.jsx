import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="text-center font-bold mt-20 text-4xl mb-10">
        Projects I Worked On
      </h1>

      <Card className="w-full md:flex-row rounded-lg bg-slate-200 border-4 border-red-500">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 md:w-1/2 shrink-0 rounded-r-none"
        >
          <img
            src="/public/Screenshot.png"
            alt="card-image"
            className="h-full lg:h-72 md:h-60 md:mt-32  lg:mt-10 my-5 w-full rounded-l-lg
          object-cover"
          />
        </CardHeader>
        <CardBody className="py-10 px-10">
          <Typography variant="h4" color="blue-gray" className="mb-2 text-2xl">
            📈 NexTrade | A Online Trading Platform (Team Project).
          </Typography>
          <Typography color="gray" className="mb-3 font-normal">
            NexTrade offers seamless cryptocurrency trading, including buying,
            selling, and exchanging, coupled with comprehensive educational
            resources for traders to enhance their knowledge and skills. Also,
            customizable portfolio, market, watchlist, history, and wallet for
            seamless deposit and withdrawal of funds using the Stripe payment
            gateway and many more... Admin can see the analytics of NexTrade and
            also manage the user, crypto coin & academy.
          </Typography>
          <div className=" text-blue-800">
            <a
              className="border-b-2 border-[#f8024d] mr-1"
              href="https://nextrade-front-end.vercel.app/"
            >
              NexTrade-Live
            </a>
            |
            <a
              className="border-b-2 border-[#f8024d] mx-1"
              href="https://github.com/diptomahin/nextrade"
            >
              NexTrade-Client
            </a>
            |
            <a
              className="border-b-2 border-[#f8024d] ml-1"
              href="https://github.com/diptomahin/nexTrade-server"
            >
              NexTrade-Server
            </a>
          </div>
        </CardBody>
      </Card>

      <Card className="w-full md:flex-row rounded-lg bg-slate-200 border-4 border-red-500">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 md:w-1/2 shrink-0 rounded-r-none"
        >
          <img
            src="/public/all-devices-white.png"
            alt="card-image"
            className="h-full lg:h-72 md:h-60 md:mt-32  lg:mt-10 my-5 w-full rounded-l-lg
          object-cover"
          />
        </CardHeader>
        <CardBody className="py-10 px-10">
          <Typography variant="h4" color="blue-gray" className="mb-2 text-2xl">
            📰 Anolipi | A Online News Portal
          </Typography>
          <Typography color="gray" className="mb-3 font-normal">
            Anolipi is a Online public demand news portal. In this projects,
            User can publish his/her article. Also user can read premium content
            by subscribe. User can pay by stripe payment method. Anolipi has 3
            role of user, 1.Admin, 2.Normal User, 3.Premium User. Anolipi is
            built in a way that has all the features of a standard online news
            site.
          </Typography>
          <div className=" text-blue-800">
            <a
              className="border-b-2 border-[#f8024d] mr-1"
              href="https://anolipi.web.app/"
            >
              Anolipi-Live
            </a>
            |
            <a
              className="border-b-2 border-[#f8024d] mx-1"
              href="https://github.com/hellomrariful/Anolipi-Client"
            >
              Anolipi-Client
            </a>
            |
            <a
              className="border-b-2 border-[#f8024d] ml-1"
              href="https://github.com/hellomrariful/Anolipi-Server"
            >
              Anolipi-Server
            </a>
          </div>
        </CardBody>
      </Card>

      <Card className="w-full md:flex-row rounded-lg bg-slate-200 border-4 border-red-500 my-10">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 md:w-1/2 shrink-0 rounded-r-none"
        >
          <img
            src="tripify.png"
            alt="card-image"
            className="h-full lg:h-72 md:h-60 md:mt-32  lg:mt-10 my-5 w-full rounded-l-lg
          object-cover"
          />
        </CardHeader>
        <CardBody className="py-10 px-10">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            ✈️ Tripify BD | A Tourist Guide Web.
          </Typography>
          <Typography color="gray" className="mb-3 font-normal">
            Tripify is a Online career maker website. In this projects, user can
            earn money by guiding tourists in his area. This website has 3 role
            of user, 1.Admin, 2.Tourist, 3.Tour Guide. Tripify is built in
            MERN[MongoDB, Express.js, React.js, Node.js] Stake based.
          </Typography>
          <div className=" text-blue-800">
            <a
              className="border-b-2 border-[#f8024d] mr-1"
              href="https://tripifybd.web.app/"
            >
              Tripify-Live
            </a>
            |
            <a
              className="border-b-2 border-[#f8024d] mx-1"
              href="https://github.com/hellomrariful/Tripify-Client"
            >
              Tripify-Client
            </a>
            |
            <a
              className="border-b-2 border-[#f8024d] ml-1"
              href="https://github.com/hellomrariful/Tripify-Server"
            >
              Tripify-Server
            </a>
          </div>
        </CardBody>
      </Card>

      <Card className="w-full md:flex-row rounded-lg bg-slate-200 border-4 border-red-500">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 md:w-1/2 shrink-0 rounded-r-none"
        >
          <img
            src="gadger.png"
            alt="card-image"
            className="h-full lg:h-72 md:h-60 md:mt-32  lg:mt-10 my-5 w-full rounded-l-lg
          object-cover"
          />
        </CardHeader>
        <CardBody className="py-10 px-10">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            🛒 Gadger | A digital online Gadget shop.
          </Typography>
          <Typography color="gray" className="mb-3 font-normal">
            Gadger is a Online Gadget sell ecommerce website. This project is
            developed for various Brand Product Sell. In this project, User can
            Buy Latest and Greatest Products. Gadger is built in a way that has
            all the features of a standard online e-commerce site. Like, user
            can add product, search product, buy product etc. This project also
            built in MERN Stack based.
          </Typography>
          <div className=" text-blue-800">
            <a
              className="border-b-2 border-[#f8024d] mr-1"
              href="https://gadgerbd.web.app/"
            >
              Gadger-Live
            </a>
            |
            <a
              className="border-b-2 border-[#f8024d] mx-1"
              href="https://github.com/hellomrariful/Gadger-Store-Client"
            >
              Gadger-Client
            </a>
            |
            <a
              className="border-b-2 border-[#f8024d] ml-1"
              href="https://github.com/hellomrariful/Gadger-Store-Server"
            >
              Gadger-Server
            </a>
          </div>
        </CardBody>
      </Card>
      <div className="text-center mt-10">
        <a
          className="bg-[#f8024d] text-white rounded py-4 px-4 inline-block"
          href="https://github.com/hellomrariful"
        >
          More Projects On Github
        </a>
      </div>
    </div>
  );
};

export default Projects;
