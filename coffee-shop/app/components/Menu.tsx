import Image from "next/image";

const menuItems = [
  {
    id: 1,
    category: "Hot Coffee",
    items: [
      {
        id: 101,
        name: "Black Coffee",
        description: "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
        price: "$5",
        image: "/images/menu-1.jpg",
      },
      {
        id: 102,
        name: "Chocolate Coffee",
        description: "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
        price: "$7",
        image: "/images/menu-2.jpg",
      },
      {
        id: 103,
        name: "Coffee With Milk",
        description: "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
        price: "$9",
        image: "/images/menu-3.jpg",
      },
    ],
  },
  {
    id: 2,
    category: "Cold Coffee",
    items: [
      {
        id: 201,
        name: "Iced Coffee",
        description: "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
        price: "$5",
        image: "/images/menu-1.jpg",
      },
      {
        id: 202,
        name: "Cold Chocolate",
        description: "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
        price: "$7",
        image: "/images/menu-2.jpg",
      },
      {
        id: 203,
        name: "Milkshake",
        description: "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
        price: "$9",
        image: "/images/menu-3.jpg",
      },
    ],
  },
];

export default function Menu() {
  return (
    <section className="container mx-auto py-20 px-4 lg:px-10">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h4 className="text-primary font-bold text-xl uppercase tracking-[5px] relative inline-block">
          Menu & Pricing
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-16 h-[2px] bg-primary"></span>
        </h4>
        <h1 className="font-heading font-bold text-4xl lg:text-5xl text-secondary mt-4">
          Competitive Pricing
        </h1>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {menuItems.map((section) => (
          <div key={section.id}>
            <h1 className="font-heading font-bold text-3xl text-secondary mb-8">
              {section.category}
            </h1>
            <div className="space-y-8">
              {section.items.map((item) => (
                <div key={item.id} className="flex items-center gap-5">
                  {/* Item Image & Price */}
                  <div className="relative shrink-0">
                    <div className="relative w-24 h-24">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-full border-2 border-primary p-1"
                      />
                    </div>
                    <span className="absolute top-0 right-0 bg-primary text-secondary font-bold w-10 h-10 flex items-center justify-center rounded-full text-sm shadow-md">
                      {item.price}
                    </span>
                  </div>

                  {/* Item Details */}
                  <div className="flex-grow">
                    <h4 className="font-heading font-bold text-xl text-secondary mb-1">
                      {item.name}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}