"use client"

import { useState, useEffect } from "react"
import { calculateTimeLeft } from "../utils/calculateTimeLeft"

const targetDate = new Date("2028-04-14T08:59:10Z")

export function CountdownTimer({ initialTimeLeft }: { initialTimeLeft: ReturnType<typeof calculateTimeLeft> }) {
  const [timeLeft, setTimeLeft] = useState(initialTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto p-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div
            key={unit}
            className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 transform hover:scale-105"
          >
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="text-3xl md:text-5xl font-bold text-blue-900">{value.toString().padStart(2, "0")}</div>
              <div className="text-sm md:text-base font-semibold text-blue-600 uppercase tracking-wider">{unit}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-lg mt-6 text-gray-700">
        Reward-Drop ETA date: <strong className="font-semibold">2028-04-14 08:59:10 UTC</strong>
      </div>
    </div>
  )
}

