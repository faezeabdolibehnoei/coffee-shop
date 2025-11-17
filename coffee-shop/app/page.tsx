import Image from "next/image";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import Menu from "@/app/components/Menu"; // Import Menu
import Reservation from "@/app/components/Reservation";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <main className="relative w-full h-screen">
        {/* ... Hero codes ... */}
         <div className="absolute inset-0 bg-black/50 z-10"></div>
         <div className="absolute inset-0">
            <Image src="/images/carousel-1.jpg" alt="Background" fill className="object-cover" priority />
         </div>
         <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
             <h1 className="font-heading font-bold text-5xl md:text-8xl uppercase mb-4">Coffee</h1>
         </div>
      </main>

      <About />
      <Services />
      <Menu /> {/* Add Menu Section here */}
      <Reservation />
      <Testimonial />
      <Footer />

    </>
  );
}