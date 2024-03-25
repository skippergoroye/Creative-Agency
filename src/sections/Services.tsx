import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import HeaderTitle from "@/components/HeaderTitle";

const Services = () => {
  return (
    <section className="mx-auto container max-w-[1440px] px-6 lg:px-20 lg:mt-20">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <HeaderTitle
            title="Our Services"
            subtitle="Perfect and Fast Movement"
            variant="lg:max-w-[381px] mb-2"
          />
          <p className="text-[#464646] font-quicksand font-normal text-md justify-start lg:max-w-[420px]">
            We move with make a Creative Strategy for help your business goal,
            we help to improve your income by a services we have. make your
            content look interesting and make people look for your business
          </p>
          <Link href="/" className="flex items-center gap-4 justify-start lg:justify-end text-[#377DFF] lg:max-w-[420px]">
            Read more
            <FaArrowRightLong color="#377DFF" />
          </Link>
        </div>
        <div>
          <div>kkfkkfkfk</div>
          <div>kkfkkfkfk</div>
          <div>kkfkkfkfk</div>
        </div>
      </div>
    </section>
  );
};

export default Services;
