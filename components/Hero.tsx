import Image from "next/image";
import React from "react";
import Imagee from "../../../public-image.jpg";

function Hero () {
    return (
        <div className="h-screen mt-32 flex flex-col lg:flex-row items-center lg:items-start">

            { /* Left Section */ }
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start px-4 lg:px-20">
            <div className="font-bold text-3xl md:text-4xl mt-10 lg:mt-20 text-center lg-text-left">
                <h1> IMPACCABLE </h1>
                <h1> CRAFTSMANSHIP AND</h1>
                <h1> FINESSE </h1>
            </div>
              <p className="mt-4 text-center lg:text-left font-semibold text-sm text-[#A29875] w-full lg:w-[550px">
                An example of intricant workmanship and detail, elegant necklaces and
                 long and short chains form a part of over desirable collection.
              </p>
               <button className="mt-8 lg:mt-10 text-white bg-[#A29875] w-[200px] md:w-[250px] lg:w-[288px] h-[50px] rounded:lg hover:bg-[#b8aa75]">
                Explore Now
               </button>
        </div>


        { /* Right Section (Image) */ }
        <div className="w-[380.lpx] md:w-[440px] lg:w-[462px] h-auto mt-10 ig:mt-0 ig:ml-16 ">
            <Image
            src="images/image.png" // Note the leading slash here
            alt="image"
            width={380.1}
            height={525.43}
            className="rounded-ig"
            />
        </div>
        </div>
    );
}


export default Hero;
