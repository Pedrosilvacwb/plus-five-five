import Button from "@/components/Button";
import Container from "@/components/Container";
import arrow from "@/public/arrow-right-svgrepo-com.svg";
import picture from "@/public/pictures/instagram/nathan-dumlao-6VhPY27jdps-unsplash.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div className="py-16">
      <Container>
        <div className="flex sm:flex-row flex-col items-center justify-between gap-16">
          <div className="w-[90%]">
            <h2 className="sm:text-4xl text-xl w-full font-semibold leading-[150%] mb-8">
              Through our carefully crafted roasting process, we unlock the full
              potential of each bean, showcasing its unique flavors and aromatic
              profiles.
            </h2>
            <p className="sm:text-lg text-sm w-full sm:leading-8 leading-6 mb-8">
              Whether you prefer a rich, dark roast or a smooth, medium blend,
              we have a wide range of options to suit your taste preferences.
              But it's not just about the coffee itself; it's about the
              experience. We believe that every sip should transport you to a
              moment of tranquility and inspiration.
            </p>
            <Button>
              Shop now{" "}
              <Image
                className="ml-2"
                width={25}
                height={25}
                src={arrow}
                alt="Right arrow"
              />
            </Button>
          </div>
          <div>
            <Image
              className="h-[575px] sm:max-w-[280px] max-w-[95%] object-cover rounded-[32px] mx-auto"
              src={picture}
              alt="Picture"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
