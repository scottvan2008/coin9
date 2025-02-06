"use client"

import { useState, useEffect, useMemo } from "react"

const CountdownClock = () => {
  const endTime = useMemo(() => new Date("2028-04-14T08:43:18Z").getTime(), [])

  const calculateTimeLeft = () => {
    const now = new Date().getTime()
    const difference = endTime - now

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      }
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [calculateTimeLeft]) // Added calculateTimeLeft to dependencies

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-full max-w-4xl px-4 py-8 bg-white rounded-lg shadow-2xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-800">
        Bitcoin Block Reward Halving Countdown
        </h1>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center bg-blue-50 p-4 rounded-lg shadow-md">
              <div className="text-4xl md:text-6xl font-bold text-blue-600">{value.toString().padStart(2, "0")}</div>
              <div className="text-lg md:text-xl text-blue-800 capitalize mt-2">{unit}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CountdownClock

