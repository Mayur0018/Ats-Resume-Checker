const Hero = () => {
  return (
    <>
      <div className="sm:flex">
        <div className="sm:w-1/2  sm:px-16 sm:py-14 py-20">
          <p className="sm:text-[11px] text-[12px] px-4 py-3 font-bold sm:py-2  text-blue-700">
            RESUME CHECKER
          </p>
          <h1 className="px-4 text-4xl sm:text-6xl font-bold sm:py-8 ">
            Is your resume good enough?
          </h1>
          <p className="font-semibold text-gray-800 px-4 py-3">
            A free and fast AI resume checker doing 16 crucial checks to ensure
            your resume is ready to perform and get you interview callbacks.
          </p>
        </div>

        {/* Right Text Section */}
        <div className="sm:w-1/2 flex items-center">
          <div className="sm:w-1/2">
            <div className="image object-center text-center">
              <img
                src="https://i.imgur.com/WbQnbas.png"
                alt="About our company"
                className="mx-auto sm:w-62"
              />
            </div>
          </div>

          <div className="sm:w-1/2 ">
            <div className="text">
              <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
                About us
              </span>
              <h2 className="my-4 font-bold text-3xl sm:text-4xl">
                About <span className="text-indigo-600">Our Company</span>
              </h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, commodi doloremque, fugiat illum magni minus nisi nulla
                numquam obcaecati placeat quia, repellat tempore voluptatum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
