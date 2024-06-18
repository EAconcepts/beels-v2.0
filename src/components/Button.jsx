import { twMerge } from "tailwind-merge"

const Button = ({children, className}) => {
  return (
    <button className={twMerge("bg-greenPrimary px-[52.5px] py-[16px] text-white font-karla text-[20px] rounded-[4px] font-[500] text-center w-fit  leading-[16px]", className)}>{children}</button>
  )
}

export default Button