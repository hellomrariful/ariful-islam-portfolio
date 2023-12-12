const Banner = () => {
    return (
        <div className="flex justify-center items-center gap-10 px-20 bg-black text-white">
            <div className="">
            <h1>Hi, I’m Ariful Islam</h1>
            <h2>JS Developer</h2>
            <p>Focused on providing programming excellence.</p>
            <button className="py-3"><a className="bg-black py-4 px-3 rounded  text-white" href="Personal Branding.pdf" download>Downlode Resume</a></button>
            </div>
            <div>
                <img src="/web-developer.gif" alt="" />
            </div>
        </div>
    );
};

export default Banner;
