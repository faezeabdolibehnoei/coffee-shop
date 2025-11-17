import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Fastest Door Delivery",
    description: "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt",
    image: "/images/service-1.jpg",
    icon: "🚚", // Placeholder icon
  },
  {
    id: 2,
    title: "Fresh Coffee Beans",
    description: "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt",
    image: "/images/service-2.jpg",
    icon: "☕",
  },
  {
    id: 3,
    title: "Best Quality Coffee",
    description: "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt",
    image: "/images/service-3.jpg",
    icon: "🏅",
  },
  {
    id: 4,
    title: "Online Table Booking",
    description: "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt",
    image: "/images/service-4.jpg",
    icon: "📅",
  },
];

export default function Services() {
  return (
    <section className="container mx-auto py-20 px-4 lg:px-10 bg-light">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <h4 className="text-primary font-bold text-xl uppercase tracking-[5px] relative inline-block">
          Our Services
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-16 h-[2px] bg-primary"></span>
        </h4>
        <h1 className="font-heading font-bold text-4xl lg:text-5xl text-secondary mt-4">
          Fresh & Organic Beans
        </h1>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col sm:flex-row items-center gap-6">
            
            {/* Service Image */}
            <div className="w-full sm:w-5/12 relative h-48 sm:h-40 overflow-hidden rounded-lg">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Service Text */}
            <div className="w-full sm:w-7/12 text-center sm:text-left">
              <h4 className="text-secondary font-heading font-bold text-xl mb-2 flex items-center justify-center sm:justify-start gap-3">
                <span className="w-10 h-10 bg-primary text-secondary rounded-full flex items-center justify-center text-lg">
                  {service.icon}
                </span>
                {service.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}