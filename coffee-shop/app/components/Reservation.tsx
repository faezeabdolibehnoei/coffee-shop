"use client";

import { useState } from "react";

export default function Reservation() {
  // State for form inputs (just for show)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    person: "Person",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Reservation Submitted! (Demo)");
  };

  return (
    <section className="relative w-full py-20 my-20">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-overlay z-10"></div>
      
      {/* Background Image (Fixed/Parallax Effect can be added here if needed) */}
      <div 
        className="absolute inset-0 bg-[url('/images/bg.jpg')] bg-cover bg-center bg-fixed z-0" 
        aria-hidden="true"
      ></div>

      <div className="container mx-auto px-4 lg:px-10 relative z-20">
        <div className="flex flex-col lg:flex-row h-full">
          
          {/* Left Column: Offer Info */}
          <div className="w-full lg:w-1/2 py-10 lg:py-20 lg:pr-16 text-center lg:text-left mb-10 lg:mb-0">
            <div className="mb-10">
              <h1 className="text-primary font-bold text-5xl lg:text-7xl font-heading mb-4">
                30% OFF
              </h1>
              <h2 className="text-white font-bold text-3xl lg:text-5xl font-heading">
                For Online Reservation
              </h2>
            </div>
            <p className="text-white text-lg leading-relaxed mb-8">
              Lorem justo clita erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
              ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea
            </p>
            <ul className="text-white space-y-4 list-none inline-block lg:block text-left">
              <li className="flex items-center">
                <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 text-sm text-secondary">✓</span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 text-sm text-secondary">✓</span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 text-sm text-secondary">✓</span>
                Lorem ipsum dolor sit amet
              </li>
            </ul>
          </div>

          {/* Right Column: Reservation Form */}
          <div className="w-full lg:w-1/2 bg-secondary/80 p-8 lg:p-12 rounded-sm shadow-lg text-center">
            <h1 className="text-white font-heading font-bold text-4xl mb-8 mt-4">
              Book Your Table
            </h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full bg-transparent border border-primary p-4 text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors"
                  required
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-transparent border border-primary p-4 text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors"
                  required
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="form-group">
                <input 
                  type="date" 
                  className="w-full bg-transparent border border-primary p-4 text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors"
                  required
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>

              <div className="form-group">
                <input 
                  type="time" 
                  className="w-full bg-transparent border border-primary p-4 text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors"
                  required
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                />
              </div>

              <div className="form-group">
                <select 
                  className="w-full bg-transparent border border-primary p-4 text-white focus:outline-none focus:border-white transition-colors appearance-none"
                  value={formData.person}
                  onChange={(e) => setFormData({...formData, person: e.target.value})}
                >
                  <option className="text-black" value="Person">Person</option>
                  <option className="text-black" value="1">Person 1</option>
                  <option className="text-black" value="2">Person 2</option>
                  <option className="text-black" value="3">Person 3</option>
                  <option className="text-black" value="4">Person 4</option>
                </select>
              </div>

              <div>
                <button 
                  type="submit" 
                  className="w-full bg-primary text-secondary font-bold text-xl py-4 hover:bg-white hover:text-primary transition-colors duration-300 mt-4"
                >
                  Book Now
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}