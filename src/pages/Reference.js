import React, { useContext } from "react";
// import images
import WomanImg from "../img/ice_pictures/DSC_0013.jpg";
// import link
import { Link } from "react-router-dom";
// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../transitions";
// import cursor context
import { CursorContext } from "../context/CursorContext";

const Reference = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="container mx-auto h-full"
      >
        {/* text & img wrapper */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="m-10 flex-1 pt-8 pb-8 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="mt-20 text-2xl lg:text-4xl font-bold mb-4 text-gray-800">
              Resources
            </h1>
            <p className="text-sm lg:text-base mb-6 text-gray-800">
              Reference 1 sea-ice data: Fetterer, F., K. Knowles, W. N. Meier,
              M. Savoie, and A. K. Windnagel. (2017). Sea Ice Index, Version 3,
              Boulder, Colorado USA. National Snow and Ice Data Center.
              https://doi.org/10.7265/N5K072F8. Date Accessed 03-04-2023. <br />
              <br />
              Reference 2: ocean measurements:
              https://doi.org/10.1029/2021JC017269, can be linked to Figure 1
              from the same paper
              https://agupubs.onlinelibrary.wiley.com/cms/asset/4c4b3bd9-e57e-4236-82ce-428142f36f1e/jgrc24558-fig-0001-m.jpg
              (credit Janout et al., 2021)
              <br /> <br />
              Reference 3:
            </p>
            <Link to={"/credits"} className="btn">
              next
            </Link>
          </motion.div>
          {/* image */}
          <div className="h-full absolute inset-0 flex items-center justify-center opacity-60">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className="h-full w-full object-cover"
            >
              <motion.img
                // whileHover={{ scale: 1. }}
                // transition={transition1}
                src={WomanImg}
                alt=""
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Reference;
