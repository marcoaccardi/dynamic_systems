import React, { useContext } from "react";
// import images
import WomanImg from "../img/ice_pictures/DSC_0001.jpg";
// import link
import { Link } from "react-router-dom";
// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../transitions";
// cursor context
import { CursorContext } from "../context/CursorContext";

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section h-full"
    >
      <div className="h-full">
        {/* text & img wrapper */}
        <div className="flex items-center justify-center h-screen">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center ml-5 items-center lg:items-start"
          >
            <h1 className="h1 font-light text-gray-800 ">
              dynamic <br /> systems.
            </h1>
            <p className="font-thin text-[26px] lg:text-[36px] mb-4 lg:mb-12 leading-8 lg:leading-10 text-gray-800">
              an artistic and scientific research <br /> based on the <br />
              global sea ice-ocean data by FESOM
            </p>
            <Link to={"/about"} className="btn">
              explore
            </Link>
          </motion.div>
          {/* image */}
          <div className="h-full w-full absolute inset-0 flex items-center justify-center opacity-80">
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
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
