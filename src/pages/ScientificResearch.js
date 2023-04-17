import React, { useContext } from "react";
// import images
import WomanImg from "../img/ice_pictures/DSC_0005.jpg";
// import link
import { Link } from "react-router-dom";
// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../transitions";
// import cursor context
import { CursorContext } from "../context/CursorContext";

const About = () => {
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
              Ice is a mirror. Ice on Earth is special because it mirrors back
              most of the radiation that comes to it from the Sun. In a network
              with atmosphere, ocean, and land, fine-tuned by physics, it keeps
              the climate in a state that supports life. Ice on Earth is a
              mirror of the destructive human-made climate change. At the time
              of this writing, we can still make a difference. <br /> <br />
              The most spectacular forms of ice on Earth can be found in
              Antarctica. A frozen ocean circling the continent extends for
              millions of square kilometres. Satellites measured the smallest
              Antarctica sea-ice extent on record in February 2023 (Reference
              1), a sharp turn in a long-term trend. The physics-based climate
              models predict sea ice will eventually continue to decay in the
              warming climate. The floating ice shelves are guarding the largest
              water reservoir on Earth, the Antarctic ice sheet, from expelling
              its content to the ocean. The reservoir content, if all melted
              into the ocean, would increase the sea level by 60m. Ice shelves
              in western Antarctica have been melting rapidly over the last two
              decades.
              <br /> <br />
            </p>
            <Link to={"/scientificresearch2"} className="btn">
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
                className="h-full w-full object-cover filter grayscale"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
