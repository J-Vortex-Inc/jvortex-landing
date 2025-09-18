const AboutSection = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 font-sans">
      {/* Innovation With Purpose Section */}
      <section className="py-16 sm:py-20 lg:py-24">
         <div className="inline-flex items-center justify-center bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            OUR VENTURES
          </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <p className="w-fit items-center text-left justify-left bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-4 sm:mb-6">
            
              ABOUT US
            </p>
            <h2 className="text-3xl text-left sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 max-w-4xl leading-tight">
              Innovation With <span className="text-gray-900">Purpose</span>
            </h2>
            <p className="mt-4 text-lg text-left text-gray-600 max-w-3xl">
              We are committed to creating technology that empowers people and transforms industries through ethical innovation.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            
            {/* Our Mission Card */}
            <div className="group bg-white hover:bg-gradient-to-br from-white to-gray-50 p-8 sm:p-10 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-purple-200/50 hover:-translate-y-2 border border-gray-100">
           
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe technology should make life smart and simple, while creating opportunities and value for everyone.
              </p>
            </div>

            {/* Our Vision Card */}
            <div className="group bg-white hover:bg-gradient-to-br from-white to-gray-50 p-8 sm:p-10 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200/50 hover:-translate-y-2 border border-gray-100">
           
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a trusted global holdings company that builds ethical, high-impact businesses, reshaping how people live, work, and connect.
              </p>
            </div>

            {/* Our Approach Card - Added a third card for better balance */}
            <div className="group bg-white hover:bg-gradient-to-br from-white to-gray-50 p-8 sm:p-10 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-200/50 hover:-translate-y-2 border border-gray-100">
             
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                Combining cutting-edge technology with human-centered design to create solutions that are both powerful and accessible to all.
              </p>
            </div>
          </div>


          
        </div>
      </section>
    </div>
  );
};

export default AboutSection;