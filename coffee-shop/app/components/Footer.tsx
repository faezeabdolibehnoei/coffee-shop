import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-secondary mt-20 pt-24 pb-12">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-secondary/90 z-10"></div>
        <Image
          src="/images/bg.jpg"
          alt="Footer Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Top Decoration Image (Paper tear effect) */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Image
          src="/images/overlay-top.png"
          alt="Overlay"
          width={1920}
          height={40}
          className="w-full h-auto"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-10 relative z-20 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Column 1: Get In Touch */}
          <div>
            <h4 className="text-white font-bold text-xl uppercase tracking-[3px] mb-6">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <p className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                123 Street, New York, USA
              </p>
              <p className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +012 345 67890
              </p>
              <p className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                info@example.com
              </p>
            </div>
          </div>

          {/* Column 2: Follow Us */}
          <div>
            <h4 className="text-white font-bold text-xl uppercase tracking-[3px] mb-6">
              Follow Us
            </h4>
            <p className="text-gray-200 mb-4">
              Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum
            </p>
            <div className="flex gap-2">
              {['Twitter', 'Facebook', 'LinkedIn', 'Instagram'].map((social) => (
                <Link 
                  href="#" 
                  key={social}
                  className="w-10 h-10 border border-white flex items-center justify-center hover:bg-white hover:text-secondary transition-colors duration-300"
                >
                  {/* Simple generic icon for all socials for demo purposes */}
                   <span className="text-sm font-bold">{social[0]}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Open Hours */}
          <div>
            <h4 className="text-white font-bold text-xl uppercase tracking-[3px] mb-6">
              Open Hours
            </h4>
            <div className="space-y-2">
              <h6 className="font-bold uppercase">Monday - Friday</h6>
              <p className="text-gray-200 text-sm">8.00 AM - 8.00 PM</p>
              <h6 className="font-bold uppercase mt-4">Saturday - Sunday</h6>
              <p className="text-gray-200 text-sm">2.00 PM - 8.00 PM</p>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-white font-bold text-xl uppercase tracking-[3px] mb-6">
              Newsletter
            </h4>
            <p className="text-gray-200 mb-4">
              Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum
            </p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-3 bg-transparent border border-white/50 text-white placeholder-gray-300 focus:outline-none focus:border-primary transition-colors"
              />
              <button 
                type="submit"
                className="bg-primary text-secondary font-bold uppercase p-3 hover:bg-white transition-colors duration-300"
              >
                Sign Up
              </button>
            </form>
          </div>

        </div>

        {/* Copyright Border */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-lg text-white m-0">
            Copyright &copy; <Link href="#" className="text-primary font-bold">Domain</Link>. All Rights Reserved.
          </p>
          <p className="text-sm text-white/70 mt-2">
            Designed by <Link href="#" className="text-primary font-bold">HTML Codex</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}