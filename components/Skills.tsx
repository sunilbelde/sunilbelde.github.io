"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
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
  brain: <Brain className="text-darkGreen w-6 h-6" />,
  network: <Network className="text-darkGreen w-6 h-6" />,
  database: <Database className="text-darkGreen w-6 h-6" />,
  code: <Code className="text-darkGreen w-6 h-6" />,
  cloud: <Cloud className="text-darkGreen w-6 h-6" />,
  barchart3: <BarChart3 className="text-darkGreen w-6 h-6" />,
};

export default function Skills({ skills }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleExpand = (idx: number) =>
    setOpenIndex(openIndex === idx ? null : idx);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-12 bg-gradient-to-b from-primary to-darkGreen-10"
    >
      <h3 className="uppercase tracking-[20px] text-textSecondary text-2xl mb-12">
        Skills
      </h3>

      {/* Grid layout that isolates each card */}
      <div
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8"
        style={{ gridAutoRows: "min-content" }}
      >
        {skills.map((category, idx) => (
          <div key={idx} className="flex flex-col">
            <motion.div
              layout="position"
              className={`bg-secondary backdrop-blur-sm border border-borderLight rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 ${
                openIndex === idx ? "shadow-xl border-darkGreen-30" : ""
              }`}
              style={{ opacity: 0.9 }}
            >
              {/* Header */}
              <div
                onClick={() => toggleExpand(idx)}
                className="flex justify-between items-center p-6 cursor-pointer select-none"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-lightGreen-20 p-3 rounded-xl">
                    {iconMap[category.icon] || (
                      <Brain className="w-6 h-6 text-darkGreen" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-textPrimary">
                      {category.title}
                    </h4>
                    <p className="text-sm text-textSecondary">
                      {category.experience}
                    </p>
                  </div>
                </div>

                {openIndex === idx ? (
                  <ChevronUp className="text-textSecondary" />
                ) : (
                  <ChevronDown className="text-textSecondary" />
                )}
              </div>

              {/* Expandable content */}
              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-6 space-y-4 overflow-hidden"
                  >
                    {category.skills.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-1">
                          <span className="text-textPrimary text-sm font-medium">
                            {skill.name}
                          </span>
                          <span className="text-textSecondary text-sm">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-borderLight rounded-full h-2.5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1 }}
                            className="h-2.5 rounded-full bg-gradient-to-r from-lightGreen to-darkGreen"
                          />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
