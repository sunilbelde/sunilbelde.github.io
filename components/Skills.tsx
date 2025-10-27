"use client";
import { motion } from "framer-motion";
import {
  Brain,
  Network,
  Database,
  Code,
  Cloud,
  BarChart3,
} from "lucide-react";
import { Skill } from "../typings";

type Props = { skills: Skill[] };

const iconMap: Record<string, JSX.Element> = {
  brain: <Brain className="text-lightGreen w-6 h-6" />,
  network: <Network className="text-lightGreen w-6 h-6" />,
  database: <Database className="text-lightGreen w-6 h-6" />,
  code: <Code className="text-lightGreen w-6 h-6" />,
  cloud: <Cloud className="text-lightGreen w-6 h-6" />,
  barchart3: <BarChart3 className="text-lightGreen w-6 h-6" />,
};

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-20
                 bg-gradient-to-b from-primary via-darkGreen-10 to-primary"
    >
      <h3 className="uppercase tracking-[14px] text-textSecondary text-2xl mb-12 font-semibold">
        Skills
      </h3>

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((category, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 0px 15px rgba(120, 255, 200, 0.15)",
            }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl p-6 border border-borderLight
                       bg-gradient-to-br from-secondary to-darkGreen-10
                       backdrop-blur-md shadow-sm hover:shadow-lg hover:border-lightGreen-20
                       transition-all duration-300"
            style={{ opacity: 0.95 }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-lightGreen-10 rounded-lg">
                {iconMap[category.icon]}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-lightGreen tracking-wide">
                  {category.title}
                </h4>
                <p className="text-xs text-textSecondary font-medium">
                  {category.experience}
                </p>
              </div>
            </div>

            {/* Skill Chips */}
            <div className="flex flex-wrap gap-2 mt-3">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-[11px] md:text-xs bg-darkGreen-20 text-textPrimary
                             px-3 py-1.5 rounded-full border border-darkGreen-30
                             hover:bg-lightGreen-10 hover:text-lightGreen
                             transition-all font-medium cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
