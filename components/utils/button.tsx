import React from 'react'

interface Props {
  text: string
  loading?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  type?: 'orange_filled' | 'white_border' | 'green_border'
  className?: string
  iconRight?: React.ReactNode | null
}

export default function Button({
  text,
  type,
  className,
  onClick,
  iconRight,
  ...props
}: Props) {
  const orangeFilledClassName =
    'bg-[#D7610D] text-[white] hover:bg-[white] hover:text-[#D7610D] transition duration-300 ease-in-out'
  const whiteborderClassName =
    'bg-transparent border-[1px] border-[white] text-[white] hover:bg-[white] hover:text-[#D7610D] transition duration-300 linear'

  const greenBorderClassName =
    'bg-[transparent] text-[#17D70D] border-[1px] border-[#17D70D] '
  const buttonClassName =
    type === 'orange_filled'
      ? orangeFilledClassName
      : type === 'white_border'
      ? whiteborderClassName
      : type === 'green_border'
      ? greenBorderClassName
      : ''

  return (
    <button
      className={`${buttonClassName} w-[fit-content] josephine px-[24px] py-[8px] rounded-[20px] flex justify-center gap-[8px] text-[16px] ${className}`}
      {...props}
      onClick={onClick}
    >
      {text} {iconRight}
    </button>
  )
}
