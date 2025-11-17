import Link from "next/link";

interface PageHeaderProps {
  title: string;
  activePage: string;
}

export default function PageHeader({ title, activePage }: PageHeaderProps) {
  return (
    <div className="relative w-full mb-10">
       {/* Background Overlay */}
       <div className="absolute inset-0 bg-overlay z-10"></div>
       
       {/* Background Image */}
       <div 
        className="absolute inset-0 bg-[url('/images/bg.jpg')] bg-cover bg-top bg-no-repeat z-0"
       ></div>

      <div className="relative z-20 container mx-auto px-4 lg:px-10 flex flex-col items-center justify-center min-h-[400px] pt-20 text-center">
        <h1 className="font-heading font-bold text-4xl lg:text-6xl text-white uppercase mb-4">
          {title}
        </h1>
        <div className="inline-flex text-white text-lg uppercase">
          <p className="m-0"><Link href="/" className="text-white hover:text-primary transition-colors">Home</Link></p>
          <p className="m-0 px-3">/</p>
          <p className="m-0 text-primary">{activePage}</p>
        </div>
      </div>
    </div>
  );
}