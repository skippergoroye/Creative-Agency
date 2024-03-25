import Image from "next/image";
import HeaderTitle from "@/components/HeaderTitle";
import { Button } from "@/components";

const Teammate = () => {
  return (
    <section className="mx-auto container max-w-[1440px] px-6 lg:px-20 lg:mt-20">
      <HeaderTitle title="About" subtitle="Our Teammate" variant="flex flex-col justify-center items-center lg:mb-8" />
      <div className="flex flex-col-reverse lg:flex-row ">
        <div className="flex flex-1 lg:w-1/2">
          <Image
            src="/SVG/Teammate-group.svg"
            alt="teammate"
            width={633}
            height={430}
          />
        </div>

        <div className="flex flex-1 lg:w-1/2 mb-[40px]">
          <div className="flex flex-col gap-8 mt-8 lg:mt-14 max-w-[470px] ml-[20px] font-quicksand text-md font-extralight text-graycolor">
            <p>
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business
            </p>
            <p>
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business
            </p>
            <div className="flex flex-row gap-4">
              <Button type="button" title="About Us" variant="bg-primary text-white shadow-lg" />
              <Button
                type="button"
                title="Our Story"
                icon="/SVG/play-circle.svg"
                variant="border-blue-400 border font-quicksand text-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teammate;
