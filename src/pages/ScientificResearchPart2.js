import React, { useContext } from "react";
// import images
import WomanImg from "../img/ice_pictures/DSC_0028.jpg";
// import link
import { Link } from "react-router-dom";
// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../transitions";
// import cursor context
import { CursorContext } from "../context/CursorContext";

const ScientificResearchPart2 = () => {
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
              Scientific research
            </h1>
            <p className="text-sm lg:text-base mb-6 text-gray-800">
              The largest Antarctica’s ice shelf by volume, Filchner-Ronne Ice
              Shelf, is part of another interplay crucial for the world’s
              climate. Here in the southern Weddell Sea, the wild cold winds
              from the continent persistently push sea ice away from the
              ice-shelf edge. Newly opened water surfaces, polynyas, cool
              rapidly and freeze. The sea salt is left out of the icy crystals
              in the ocean, making it denser. In fact, the water formed here is
              among the densest on Earth (Reference 2). It fuels global ocean
              circulation. It also carries heat below the ice shelf and melts
              it. We are able to represent and dive into the peculiarities of
              this system using a sea ice-ocean model (Reference 3). If we keep
              warming the climate, we will disturb these marvellous dynamics.
              Ice shelf melt will increase drastically.
              <br /> <br />
            </p>
            <Link to={"/reference"} className="btn">
              next
            </Link>
          </motion.div>
          {/* image */}
          <div className="w-full absolute inset-0 flex items-center justify-center opacity-60">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className="h-full w-full object-cover overflow-hidden"
            >
              <motion.img
                // whileHover={{ scale: 1. }}
                // transition={transition1}
                src={WomanImg}
                alt=""
                className="h-full w-full object-cover "
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ScientificResearchPart2;
