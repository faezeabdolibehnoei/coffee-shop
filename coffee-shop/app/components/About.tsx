import Image from "next/image";

export default function About() {
  return (
    <section className="container mx-auto py-20 px-4 lg:px-10">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        
        {/* Left Column: Image */}
        <div className="w-full lg:w-5/12 relative min-h-[400px] lg:min-h-[500px]">
          <Image
            src="/images/about.png" 
            alt="About Our Coffee Shop"
            fill
            className="object-contain lg:object-cover"
          />
        </div>

        {/* Right Column: Content */}
        <div className="w-full lg:w-7/12 space-y-6 text-center lg:text-left">
          {/* Section Header */}
          <div className="space-y-2">
            <h4 className="text-primary font-bold text-xl uppercase tracking-widest relative inline-block">
              About Us
              {/* خط تزیینی زیر متن (Optional) */}
              <span className="absolute left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 -bottom-2 w-12 h-[2px] bg-primary"></span>
            </h4>
            <h1 className="font-heading font-bold text-4xl lg:text-5xl text-secondary mt-4">
              Serving Since 1950
            </h1>
          </div>

          {/* Paragraphs */}
          <p className="text-gray-600 leading-relaxed text-lg">
            Eos kasd eos consetetur elitr sed diam nonumy at erat. Ipsum eirmod sit clita
            lorem ea justo sed stet no at tempor. At clita rebum clita. Eos kasd eos consetetur elitr sed diam nonumy at erat. Ipsum eirmod sit clita
            lorem ea justo sed stet no at tempor.
          </p>
          
          <p className="text-gray-500 font-light italic text-base">
            "Takimata sed stet justo vero sit sit at. At justo duo inamis sea. At amet clita no et, sed magna ipsum sed. Lorem ipsum dolor sit amet"
          </p> 

          {/* Signature / Button Area */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <button className="bg-secondary text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-primary transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}