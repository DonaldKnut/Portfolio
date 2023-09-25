import React from "react";

const LeftCard = () => {
  return (
    <div className="mt-6 sm:mt-0 sm:mb-12">
      <div className="flex items-center flex-col sm:flex-row">
        <div className="flex justify-start w-full mx-auto items-center">
          <div className="w-full sm:w-1/2 sm:pr-8">
            <div
              data-aos="fade-right"
              data-aos-duration="1200"
              className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
            >
              <h3 className="text-white font[700] mb-3 group-hover:text-white group-hover:font-[500] text-2xl">
                Frontend Development
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                tempore similique nulla quod illo iure sunt dicta itaque vitae
                saepe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftCard;
