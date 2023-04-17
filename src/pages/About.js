import React, { useContext } from "react";
// import images
import WomanImg from "../img/ice_pictures/DSC_0010.jpg";
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
        <div className="flex flex-col lg:flex-row items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16 ">
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="m-10 flex-1 pt-8 pb-8 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="mt-20 text-primary text-2xl lg:text-4xl font-bold mb-4 text-gray-800">
              About
            </h1>
            <p className="text-sm lg:text-base mb-6 text-gray-800">
              Dynamic systems is an interdisciplinary project that explores the
              relationship between art and science through the interpretation of
              scientific data related to climate change. <br /> <br /> The
              project's musical compositions, which incorporate elements of
              experimental, electronic, ambient, and noise genres, reflect on
              the vulnerability and crisis of both the environment and the human
              spirit. As creators of this project who grew up by the sea, we are
              particularly concerned about the impact of climate change on
              coastal regions and the challenges facing the world as a whole.
              During our creative process, we have asked many questions, such as
              the root causes of the climate crisis, the responsibility of
              humanity as a whole, and the role of AI in addressing the issue.
              <br /> <br />
              Our data was collected from an expedition to Antarctica and
              simulations using the global sea ice-ocean model FESOM, which shed
              light on the current state of the polar regions and their changes
              over the past 30 years. The data highlights the interconnectedness
              between changes in polar regions and human activities' impact on
              the overall climate system.
            </p>
            <Link to={"/scientificresearch"} className="btn">
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

export default About;
