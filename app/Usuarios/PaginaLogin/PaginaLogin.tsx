"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Moon, Sun, Volume2, Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// ... (previous imports and component definition)

const MotionCard = motion.div;

export default function MeditationPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [focusMode, setFocusMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleFocusMode = () => setFocusMode(!focusMode);
  const togglePlayPause = () => setIsPlaying(!isPlaying);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? "dark" : ""} font-sans`}>
      <div className="fixed inset-0 z-[-1]">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Peaceful nature scene"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <header
        className={`bg-white bg-opacity-20 dark:bg-gray-800 dark:bg-opacity-20 backdrop-blur-md ${focusMode ? "hidden" : ""}`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-serif text-gray-800 dark:text-gray-200">
            Serenity
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/sessions"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  Sessions
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl text-center font-light text-gray-800 dark:text-gray-200 mb-8">
          Welcome, take a moment for yourself
        </h1>
        <Button
          className="text-xl py-3 px-8 rounded-full bg-lavender-100 text-gray-800 hover:bg-lavender-200 transition-colors duration-300"
          onClick={() => console.log("Start session")}
        >
          Start Session
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {["Deep Breathing", "Guided Meditation", "Mindfulness"].map((session, index) => (
            <MotionCard
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={`/placeholder.svg?height=200&width=300`}
                alt={session}
                width={300}
                height={200}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{session}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Duration: {5 + index * 5} minutes</p>
              </div>
            </MotionCard>
          ))}
        </div>

        <div className="w-full max-w-md mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Now Playing</h3>
            <Volume2 className="text-gray-600 dark:text-gray-400" />
          </div>
          <div className="flex justify-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => console.log("Previous")}>
              <SkipBack className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" onClick={togglePlayPause}>
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => console.log("Next")}>
              <SkipForward className="h-6 w-6" />
            </Button>
          </div>
          <div className="mt-4 bg-gray-200 dark:bg-gray-700 rounded-full h-1">
            <div className="bg-lavender-300 h-1 rounded-full w-1/3"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center space-x-4">
            <div className="bg-lavender-100 dark:bg-lavender-800 rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-lavender-600 dark:text-lavender-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Breathing Exercises</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Calm your mind with guided breathing</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center space-x-4">
            <div className="bg-peach-100 dark:bg-peach-800 rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-peach-600 dark:text-peach-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Mood Tracker</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Monitor and understand your emotions</p>
            </div>
          </div>
        </div>
      </main>

      <footer className={`bg-gray-100 dark:bg-gray-900 py-4 ${focusMode ? "hidden" : ""}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link href="/terms" className="hover:underline">
              Terms & Conditions
            </Link>
          </div>
          <Link href="/support" className="text-sm text-gray-600 dark:text-gray-400 hover:underline">
            Support
          </Link>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 space-x-2">
        <Button variant="outline" size="icon" onClick={toggleDarkMode}>
          {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
        <Button variant="outline" size="icon" onClick={toggleFocusMode}>
          {focusMode ? "Exit Focus" : "Focus Mode"}
        </Button>
      </div>
    </div>
  );
}
