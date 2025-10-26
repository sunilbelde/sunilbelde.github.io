"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { getImageUrl } from "../utils/imageHelper";
import { Experience } from "../typings";

type Props = { experience: Experience };

export default function ExperienceCard({ experience }: Props) {
  const [flipped, setFlipped] = useState(false);
  const handleFlip = () => setFlipped((prev) => !prev);

  return (
    <div
      onClick={handleFlip}
      className="relative flex-shrink-0 w-72 md:w-[600px] xl:w-[700px] h-[450px]
                 [perspective:1000px] cursor-pointer snap-center"
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="relative w-full h-full [transform-style:preserve-3d]"
      >
        {/* FRONT SIDE */}
        <article
          className="absolute inset-0 flex flex-col items-center rounded-3xl
            drop-shadow-xl bg-gradient-to-tr from-white to-darkGreen/20
            p-5 md:p-10 transition-all duration-300 hover:shadow-2xl backface-hidden"
        >
          {/* Company Image (XL view) */}
          <img
          key={experience._id}
          src={getImageUrl(experience?.companyImage)}
          alt={experience?.company}
          className={`${
            experience.company === "Capital One"
              ? "w-36 h-20 object-contain rounded-xl bg-white p-2"
              : "w-28 h-28 object-cover rounded-full"
          } mb-4 md:invisible xl:visible md:h-0 md:w-0 xl:w-[100px] xl:h-[100px]`}
        />


          {/* Header */}
          <div className="w-full px-0 md:px-10">
            <div className="md:flex md:justify-between items-center">
              <div>
                <h4 className="text-lg md:text-3xl font-light text-black">
                  {experience?.jobTitle}
                </h4>
                <p className="font-bold text-md md:text-2xl mt-1 text-lightGreen">
                  {experience?.company}
                </p>
                <p className="text-gray-600 text-sm md:text-base mt-2 italic">
                  {experience?.description}
                </p>


                {/* Tech Stack
                <div className="flex space-x-2 my-2">
                  {experience?.technologies.map((tech) => (
                    <img
                      key={tech._id}
                      className="h-10 w-10 rounded-full object-cover"
                      src={getImageUrl(tech?.image)}
                    />
                  ))}
                </div> */}
                <div className="flex flex-wrap gap-2 mt-3">
                {experience?.tags?.map((tag) => (
                  <span
                  key={tag}
                  className="bg-darkGreen/10 text-darkGreen text-xs px-4 py-2 rounded-full"
                  >
                  {tag}
                  </span>
                ))}
                </div>
              </div>

              {/* Company Logo (md view) */}
              <motion.img
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="invisible md:visible xl:invisible xl:h-0 xl:w-0 h-0 w-0 md:h-28 md:w-28 rounded-full mb-0 object-cover object-center"
                src={getImageUrl(experience?.companyImage)}
                alt={experience?.company}
              />
            </div>

            {/* Dates */}
            <div className="space-y-1"></div>
              <p className="uppercase py-2 md:py-5 text-gray-500 text-sm md:text-lg">
              {new Date(experience?.dateStarted).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} –{' '}
              {experience.isCurrentlyWorkingHere
              ? 'Present'
              : new Date(experience?.dateEnded).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
              </p>
                <span className="absolute top-5 right-5 bg-lightGreen/20 text-darkGreen text-base md:text-lg font-medium px-6 py-2 rounded-full">
                {(() => {
                const start = new Date(experience.dateStarted);
                const end = experience.isCurrentlyWorkingHere ? new Date() : new Date(experience.dateEnded);
                const diffYears = end.getFullYear() - start.getFullYear();
                const diffMonths = end.getMonth() - start.getMonth();
                const totalMonths = diffYears * 12 + diffMonths;
                const years = Math.floor(totalMonths / 12);
                const months = totalMonths % 12;
                return `${years > 0 ? `${years}y` : ''}${months > 0 ? ` ${months}m` : ''}`;
                })()}
                </span>
            </div>
            <p className="text-sm mt-auto text-darkGreen font-medium relative group cursor-pointer">
              View Key Highlights
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-darkGreen transition-all duration-300 group-hover:w-full"></span>
            </p>





        </article>

        {/* BACK SIDE */}
        <article
          className="absolute inset-0 rounded-3xl p-5 md:p-10 
            bg-gradient-to-tr from-white to-darkGreen/20
            drop-shadow-xl flex flex-col justify-start items-start 
            [transform:rotateY(180deg)] backface-hidden overflow-hidden"
        >
          <h3 className="text-lg md:text-2xl font-semibold mb-4 text-darkGreen">
            Key Highlights
          </h3>

          <ul className="list-disc text-black text-sm md:text-lg space-y-3 pl-5 pr-2 overflow-y-auto scrollbar-thin scrollbar-thumb-darkGreen/60 scrollbar-track-gray-100">
            {experience?.points.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {point}
              </motion.li>
            ))}
          </ul>
          <p className="text-sm mt-auto text-darkGreen font-medium relative group cursor-pointer">
          Click to flip back ↩️
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-darkGreen transition-all duration-300 group-hover:w-full"></span>
          </p>
        </article>
      </motion.div>
    </div>
  );
}
