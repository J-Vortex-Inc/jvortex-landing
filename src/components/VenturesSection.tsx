import igree from '../assets/images/igree.jpg';

const VenturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
            <p className="w-fit items-center text-left justify-left  bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-4 sm:mb-6">
            
              OUR VENTURES
            </p>
            <h2 className="text-3xl text-left sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 max-w-4xl leading-tight">
              Strategic Investments 
            </h2>
            <p className="mt-4 text-lg text-left text-gray-600 max-w-3xl">
              We partner with innovative companies that are reshaping commerce and community experiences.
            </p>
          </div>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Igree Card */}
          <div className="group bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:bg-white hover:shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mr-5">
                    <img src={igree} alt="Igree Logo" className="rounded-2xl h-full w-full" />
                </div>
              <h3 className="text-2xl font-bold text-gray-900">Igree Marketplace</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              A social marketplace revolutionizing how people discover and purchase products through community-driven recommendations and authentic reviews.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">E-commerce</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">Social Marketplace</span>
              <span className="px-3 py-1 bg-pink-100 text-pink-700 text-xs font-medium rounded-full">Community Driven</span>
            </div>
            <a 
              href="#" 
              className="inline-flex items-center text-purple-600 font-medium group-hover:text-purple-700 transition-colors"
            >
              Explore platform
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* More Ventures (Placeholder) */}
          <div className="group bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:bg-white hover:shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mr-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Future Ventures</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We're continuously exploring innovative e-commerce platforms that align with our vision of creating meaningful connections between brands and consumers.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">Coming Soon</span>
            </div>
            <a 
              href="#" 
              className="inline-flex items-center text-gray-600 font-medium group-hover:text-gray-800 transition-colors"
            >
              View investment portfolio
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenturesSection;