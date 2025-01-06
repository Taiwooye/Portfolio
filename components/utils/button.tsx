import React from 'react'

interface Props {
  text: string
  loading?: boolean
  onClick?: (e: any) => void
  type?: 'orange_filled' | 'white_border'
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
    'bg-transparent border-[1px] border-[white] text-[white] hover:bg-[white] hover:text-[#D7610D] transition duration-3000 linear'
  const buttonClassName =
    type === 'orange_filled'
      ? orangeFilledClassName
      : type === 'white_border'
      ? whiteborderClassName
      : ''

  return (
    <button
      className={`${buttonClassName} w-[169px] px-[24px] py-[8px] rounded-[20px] flex justify-center gap-[8px] font-[600] text-[16px] ${className}`}
      {...props}
      onClick={onClick}
    >
      {text} {iconRight}
    </button>
  )
}
