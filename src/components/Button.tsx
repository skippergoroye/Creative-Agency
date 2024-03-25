import Image from "next/image";
import React from "react";

type Props = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
};



const Button = ({ type, title, icon, variant}: Props) => {
  return (
  <button type={type} className={`${variant} flex items-center justify-center gap-2 px-8 p-2 rounded-full`}>
    {icon && <Image src={icon} alt={title} width={24} height={24}  />}
    <label className="whitespace-nowrap text-[16px] font-[700] font-quicksand">{title}</label>
  </button>);
};

export default Button;
