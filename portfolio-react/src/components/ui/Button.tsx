import React from 'react'

export function Button({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <button className={`rounded px-4 py-2 font-semibold transition hover:brightness-110 ${className}`}>
      {children}
    </button>
  )
}
