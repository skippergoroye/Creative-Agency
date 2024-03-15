import React from "react";

type Props = {
  title: string;
  subtitle: string;
};

export default function HeaderTitle({ title, subtitle }: Props) {
  return (
    <div className={`flex flex-col justify-center items-center lg:gap-4 lg:mb-8`}>
      <p className="text-primary text-[24px] font-semibold font-quicksand text-center">
        {title}
      </p>
      <p className="text-darkcolor text-lg lg:text-[55px] font-bold font-nunito">
        {subtitle}
      </p>
    </div>
  );
}
