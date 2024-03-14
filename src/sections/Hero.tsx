import { Button } from "@/components";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="px-6 lg:px-20 py-5 mx-auto container max-w-[1440px]">
      <div className="flex flex-col items-center text-center gap-4 mt-8 lg:-mt-3">
        <h1 className="font-extrabold text-darkcolor text-[27px] lg:text-[50px] max-w-[450px] lg:max-w-[600px] font-quicksand">
          Make your dream business goal come true
        </h1>
        <p className="text-slate-700 font-extralight font-nunito text-sm lg:text-lg max-w-[318px] lg:max-w-[400px]">
          when you need us for improve your business,
        </p>
        <p className="text-slate-700 font-extralight font-nunito text-sm lg:text-lg -mt-3">
          then come with us to help your business have reach it, you just sit
          and feel that goal
        </p>
        <Button
          type="button"
          title="Start Project"
          variant="font-quicksand text-white bg-primary shadow-2xl mt-4"
        />
        <div>
          <Image
            src="/SVG/hero-mobile.svg" // mobile
            alt="hero-iamge"
            width={330}
            height={244}
            className="lg:hidden"
          />
          <Image
            src="/SVG/hero-desktop.svg" // desktop
            alt="hero-iamge"
            width={986}
            height={378}
            className="hidden lg:flex"
          />
        </div>
      </div>


      {/* side ball  */}
        <div className="absolute top-80 left-20 hidden md:block">
          <Image src="/SVG/blue-ball.svg" alt="blue-ball" width={50} height={10} />
        </div>

        <div className="absolute top-56 right-0 hidden md:block">
           <Image src="/SVG/red-ball.svg" alt="red-ball" width={30} height={10} />
        </div>
      
    </section>
  );
};

export default Hero;
