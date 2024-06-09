import React from 'react';
import { FaFileAlt } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import { IoLockClosed } from "react-icons/io5";
import { motion } from "framer-motion";

function Card( { data, reference } ) {
  return (
    <motion.div drag dragConstraints = { reference } whileDrag = {{ scale : 1.5 }} dragElastic = { 1.5 } dragTransition = {{ bounceStiffness : 100, bounceDamping : 10 }} className = 'relative top-[33%] left-[2%] w-60 h-72 z-[4] rounded-[35px] bg-sky-500 text-white px-5 py-7 ml-10 overflow-hidden'>
      <FaFileAlt size = "2em" color = "#000" />
      <p className = 'text-md leading-tight mt-3 mb-3 font-semibold text-red-200 indent-[25px]'> { data.title } </p>
        
        <div className = 'absolute bottom-0 left-0 w-full'>
            
            <div className = 'flex items-center justify-between py-6 px-4'>
                <h3> { data.filesize } </h3>
                <span className = 'w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center'> 
                    { data.close ? <IoLockClosed size = "1.35em" color = "blue" /> : <IoDownloadOutline size = "1.35em" color = "blue"/> } 
                </span> 
            </div>

            { data.footer.isOpen ? ( <div className = { 'w-full py-3 ${ data.footer.footerColor === "blue" ? "bg-blue-600" : "bg-green-600" } flex items-center justify-center' }> 
            <h3 className = 'text-md font-bold'> { data.footer.footerTitle } </h3> </div> ) : null }
            
        </div>

    </motion.div>
  );
}

export default Card;
