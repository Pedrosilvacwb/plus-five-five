import Container from "@/components/Container";
import profile from "@/public/pictures/christopher-campbell-rDEOVtE7vOs-unsplash.jpg";
import start from "@/public/star-favorite-1498-svgrepo-com.svg";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="my-16">
      <Container>
        {" "}
        <div className="flex flex-col items-center justify-between gap-8">
          <p className="text-lg leading-7 text-center">
            <cite>
              "As a coffee aficionado, I have tried various blends from around
              the world, but the coffee products from this website truly stood
              out. The Brazilian Blend, in particular, was a revelation to my
              taste buds. Its rich and balanced flavors, with hints of chocolate
              and caramel, created a delightful sensory experience with every
              sip. The attention to detail and the commitment to quality are
              evident in every aspect, from the packaging to the brewing
              instructions. I highly recommend their coffee products to anyone
              seeking a truly exceptional and memorable coffee experience."
            </cite>{" "}
          </p>
          <div className="flex items-center justify-between gap-2">
            <Image src={start} width={20} height={20} alt="Star" />
            <Image src={start} width={20} height={20} alt="Star" />
            <Image src={start} width={20} height={20} alt="Star" />
            <Image src={start} width={20} height={20} alt="Star" />
            <Image src={start} width={20} height={20} alt="Star" />
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={profile}
              alt="Profile picture"
              className="w-[100px] h-[100px] rounded-[50%] mb-2 object-cover"
            />
            <strong> - Emily S.</strong>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
