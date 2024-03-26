import React from "react";

type Props = {
  title: string;
  icon: string;
};

export default function ServicesCard({ title, icon }: Props) {
  return (
    <div className="shadow-md rounded-[30px] flex flex-col items-center py-8 gap-8 lg:gap-16 justify-around bg-white text-center">
      <div>
        <img src={icon} alt="service icon" />
      </div>
      <p className="text-darkColor text-[24px] font-bold">{title}</p>
    </div>
  );
}
