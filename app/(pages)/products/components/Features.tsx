import Container from "@/components/Container";
import check from "@/public/check-svgrepo-com.svg";
import client from "@/public/client-svgrepo-com.svg";
import coffee from "@/public/coffee-cup-svgrepo-com.svg";
import Image from "next/image";

const Features = () => {
  return (
    <div className="py-16">
      <Container>
        <h2 className="text-3xl font-semibold text-center mb-16">
          Quality without compromise
        </h2>
        <div className="flex md:flex-row flex-col items-start justify-between gap-4">
          <div className="flex flex-col items-center justify-between gap-4 text-center flex-1">
            <div className="w-[80px] h-[80px]  flex items-center justify-center rounded-full bg-sand">
              <Image width={40} height={40} src={check} alt="Icon" />
            </div>
            <h3 className="text-xl text-forest font-semibold">
              Transparency Matters
            </h3>
            <p className="text-lg">
              Being completely transparent with ingredients and manufacturing
              processes for informed choices.
            </p>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 text-center flex-1">
            <div className="w-[80px] h-[80px]  flex items-center justify-center rounded-full bg-sand">
              <Image width={40} height={40} src={coffee} alt="Icon" />
            </div>
            <h3 className="text-xl text-forest font-semibold">
              Quality Obsessed
            </h3>
            <p className="text-lg">
              Passionate about creating high-quality, safe, and harmful-free
              coffee products.
            </p>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 text-center flex-1">
            <div className="w-[80px] h-[80px]  flex items-center justify-center rounded-full bg-sand">
              <Image width={40} height={40} src={client} alt="Icon" />
            </div>
            <h3 className="text-xl text-forest font-semibold">
              Customer-First Approach
            </h3>
            <p className="text-lg">
              Committed to fair labor standards, responsible sourcing, and
              minimizing environmental impact throughout the supply chain.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Features;
