import React from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useTheme } from '../utils/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-secondary border-2 border-borderLight shadow-lg hover:shadow-xl transition-all hover:border-darkGreen-40"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'light' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? (
          <MoonIcon className="h-6 w-6 text-textPrimary" />
        ) : (
          <SunIcon className="h-6 w-6 text-yellowColor" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
