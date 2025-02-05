import Link from 'next/link'
import React from 'react'

export default function CustomButton({text, href}) {
  if (!href) {
    console.warn("El valor de 'href' no está definido para CustomButton.");
    return null; 
  }
  
  return (
    <Link href={href} className={`bg-[#E10D0D] hover:bg-[#B00B0B] text-white rounded-lg p-2`}>{text}</Link>
  )
}
