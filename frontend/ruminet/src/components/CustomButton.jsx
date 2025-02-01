import React from 'react'

export default function CustomButton({text, padding}) {
  return (
    <button className={`bg-[#E10D0D] hover:bg-[#B00B0B] text-white rounded-lg p-2`}>{text}</button>
  )
}
