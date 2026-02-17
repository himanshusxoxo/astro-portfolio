import React, { useState, useEffect } from 'react'
import moment from 'moment-timezone'

const Timezone = () => {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment().tz('Asia/Kolkata') // 🕒 Force Indian Time
      setDateTime(now.format('dddd, DD MMMM YYYY [a] h:mm:ss A'))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <p>{dateTime}</p>
      <p className="text-sm text-gray-500">India, Delhi</p>
    </div>
  )
}

export default Timezone
