'use client'

export const GetDate = () => {
  const getcurrentTime = () => {
    let currentDate = new Date()
    return `${currentDate.getHours()}:${currentDate.getMinutes().toString().padStart(2, '0')}`
  }

  return <div>{getcurrentTime()}</div>
}
