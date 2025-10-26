import { motion } from "framer-motion";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";
import { ChevronRight } from "lucide-react"; // ✅ use lucide-react for minimal arrow icon

type Props = { experiences: Experience[] };

export default function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      {/* Section Title */}
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Experience
      </h3>

      <div className="relative w-screen h-3/4 md:h-2/3 md:w-full text-left pb-5 md:pb-10">
        {/* Left and Right Fade Gradients */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

        {/* Scrollable Cards */}
        <div className="flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80">
          {experiences
            ?.slice()
            .sort(
              (a, b) =>
                new Date(b.dateStarted).getTime() -
                new Date(a.dateStarted).getTime()
            )
            .map((experience) => (
              <ExperienceCard key={experience._id} experience={experience} />
            ))}
        </div>

        {/* Faded Animated Arrow Icon (center right) */}
        <motion.div
          className="absolute right-5 top-1/2 transform -translate-y-1/2 text-darkGreen/40 z-20"
          animate={{ x: [0, 8, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronRight size={32} strokeWidth={2.5} />
        </motion.div>
      </div>
    </motion.div>
  );
}
