"use client"
import React, { useState } from "react"
import { ChevronDown } from "lucide-react"

interface MenuProps {
  trigger: React.ReactNode
  children: React.ReactNode
  align?: "left" | "right"
  showChevron?: boolean
}
export function Menu({ trigger, children, align = "left", showChevron = true }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="relative inline-block text-left">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer inline-flex items-center"
        role="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {trigger}
        {showChevron && (
          <ChevronDown className="ml-2 -mr-1 h-4 w-4 text-gray-500" aria-hidden="true" />
        )}
      </div>
      {isOpen && (
        <div
          className={`absolute ${align === "right" ? "right-0" : "left-0"} mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-9 focus:outline-none z-50`}
          style={{ backgroundColor: '#2e2d4d' }}
          role="menu"
        >
          <div className="py-1">{children}</div>
        </div>
      )}
    </div>
  )
}

interface MenuItemProps {
  children?: React.ReactNode
  label?: string
  onClick?: () => void
  disabled?: boolean
  icon?: React.ReactNode
  isActive?: boolean
}
export function MenuItem({ children, label, onClick, disabled = false, icon, isActive = false }: MenuItemProps) {
  return (
    <button
      className={`relative block w-full h-16 text-center group
        ${disabled ? "opacity-40 cursor-not-allowed" : ""}
        ${isActive ? "bg-white/10" : ""}
      `}
      role="menuitem"
      onClick={onClick}
      disabled={disabled}
    >
      <span className="flex items-center justify-center h-full text-gray-600 dark:text-gray-300">
        {icon || children}
      </span>
      {label && (
        <span
          className="whitespace-nowrap text-sm font-medium text-gray-600 dark:text-gray-300"
          style={{
            position: 'absolute',
            left: '72px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontFamily: 'DM Sans, sans-serif',
          }}
        >
          {label}
        </span>
      )}
    </button>
  )
}

export function MenuContainer({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const childrenArray = React.Children.toArray(children)

  return (
    <div className="relative w-[160px]" data-expanded={isExpanded}>
      <div className="relative">
        {/* First item - trigger button, always visible */}
        <div
          className="relative w-16 h-16 cursor-pointer rounded-full group will-change-transform z-50 flex items-center justify-center bg-gray-100 dark:bg-gray-800"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {childrenArray[0]}
        </div>
        {/* Nav items */}
        {childrenArray.slice(1).map((child, index) => (
          <div
            key={index}
            className="absolute top-0 left-0 w-16 h-16 will-change-transform rounded-full bg-gray-100 dark:bg-gray-800 overflow-visible"
            style={{
              position: 'absolute' as const,
              transform: `translateY(${isExpanded ? (index + 1) * 68 : 0}px)`,
              opacity: isExpanded ? 1 : 0,
              zIndex: 40 - index,
              transition: `transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
                           opacity 300ms`,
              borderBottom: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}
