import PageHeader from "@/app/components/PageHeader";

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" activePage="Contact" />
      
      <section className="container mx-auto py-20 px-4 lg:px-10">
        <div className="text-center mb-16">
          <h4 className="text-primary font-bold text-xl uppercase tracking-[5px] relative inline-block">
            Contact Us
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-16 h-[2px] bg-primary"></span>
          </h4>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-secondary mt-4">
            Feel Free To Contact
          </h1>
        </div>

        {/* Contact Info Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
                <i className="block text-3xl mb-2">📍</i> {/* You can replace with SVG icon */}
                <h4 className="font-bold text-xl text-secondary mb-2">Address</h4>
                <p className="text-gray-600">123 Street, New York, USA</p>
            </div>
            <div className="text-center">
                <i className="block text-3xl mb-2">📞</i>
                <h4 className="font-bold text-xl text-secondary mb-2">Phone</h4>
                <p className="text-gray-600">+012 345 6789</p>
            </div>
            <div className="text-center">
                <i className="block text-3xl mb-2">✉️</i>
                <h4 className="font-bold text-xl text-secondary mb-2">Email</h4>
                <p className="text-gray-600">info@example.com</p>
            </div>
        </div>

        {/* Map & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Google Map */}
            <div className="w-full h-[450px]">
                <iframe 
                    className="w-full h-full border-0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" 
                    allowFullScreen={true} 
                    aria-hidden="false" 
                    tabIndex={0}
                ></iframe>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 shadow-sm border border-gray-200">
                <form className="space-y-6">
                    <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full p-4 bg-transparent border border-gray-300 focus:border-primary outline-none transition-colors"
                        required 
                    />
                    <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="w-full p-4 bg-transparent border border-gray-300 focus:border-primary outline-none transition-colors"
                        required 
                    />
                    <input 
                        type="text" 
                        placeholder="Subject" 
                        className="w-full p-4 bg-transparent border border-gray-300 focus:border-primary outline-none transition-colors"
                        required 
                    />
                    <textarea 
                        rows={5}
                        placeholder="Message" 
                        className="w-full p-4 bg-transparent border border-gray-300 focus:border-primary outline-none transition-colors resize-none"
                        required 
                    ></textarea>
                    <button 
                        type="submit" 
                        className="w-full bg-primary text-secondary font-bold py-4 px-10 hover:bg-secondary hover:text-white transition-colors duration-300 uppercase tracking-wider"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
      </section>
    </>
  );
}