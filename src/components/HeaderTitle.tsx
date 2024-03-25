import React from "react";

type Props = {
  title: string;
  subtitle: string;
  variant: string;
};

export default function HeaderTitle({ title, subtitle, variant }: Props) {
  return (
    <div className={`${variant}`}>
      <p className="text-primary text-[20px] font-semibold font-quicksand py-3">
        {title}
      </p>
      <p className="text-darkcolor text-[24px] lg:text-[35px] font-quicksand font-bold">
        {subtitle}
      </p>
    </div>
  );
}
