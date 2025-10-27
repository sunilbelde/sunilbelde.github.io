"use client";
import { motion } from "framer-motion";
import { getImageUrl } from "../utils/imageHelper";
import { PageInfo } from "../typings";

type Props = { pageInfo: PageInfo };

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-8 md:px-10 justify-evenly mx-auto items-center overflow-hidden"
    >
      {/* Section Title */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-20 md:top-24 uppercase tracking-[16px] md:tracking-[20px] text-textSecondary text-lg md:text-2xl font-semibold"
      >
        About
      </motion.h3>

      {/* Profile Image */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex-shrink-0"
      >
        <motion.img
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          src={getImageUrl(pageInfo?.profilePic)}
          alt={`${pageInfo?.name}'s profile`}
          className="rounded-full md:rounded-2xl object-cover w-52 h-52 md:w-72 md:h-72 xl:w-[420px] xl:h-[520px] shadow-[0_0_25px_rgba(160,160,160,0.25)]"
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-4 md:space-y-8 px-2 md:px-10 max-w-lg"
      >
        <h4 className="text-xl md:text-4xl font-semibold leading-tight">
          Here is a{" "}
          <span className="underline decoration-textSecondary/50">little</span>{" "}
          background
        </h4>

        {pageInfo?.backgroundInformation
        ?.split(/\n\s*\n/) // split on empty lines
        .map((para, idx) => (
          <p
            key={idx}
            className="text-sm md:text-[1.05rem] text-textSecondary leading-snug tracking-[0.015em] md:tracking-[0.02em] mb-3 text-left"
          >
            {para.trim()}
          </p>

        ))}
      </motion.div>
    </motion.div>
  );
}
