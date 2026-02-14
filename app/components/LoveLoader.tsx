"use client";
import { useEffect, useState } from "react";

const quotes = [
  "Love is composed of a single soul inhabiting two bodies.",
  "Every love story is beautiful, but yours is my favorite.",
  "Where there is love, there is life.",
  "Love recognizes no barriers.",
  "You + Me = Destiny ❤️"
];

export default function LoveLoader() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-50 to-red-100 text-center px-6">
      <div className="text-6xl text-red-500 animate-bounce">
        ❤️
      </div>

      <p className="mt-6 text-xl font-semibold text-gray-700 animate-pulse">
        Calculating your love destiny...
      </p>

      <p className="mt-6 text-md italic text-gray-600 max-w-md">
        "{quote}"
      </p>
    </div>
  );
}
