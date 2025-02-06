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
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Countdown to 2028-04-14 08:43:18 UTC</h1>
      <div className="flex space-x-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center">
            <div className="text-5xl font-bold text-blue-600">{value.toString().padStart(2, "0")}</div>
            <div className="text-xl text-gray-600 capitalize">{unit}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CountdownClock

