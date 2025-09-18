const PartnershipSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
    
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
            Partner With Us
          </h2>

        </div>


         

        {/* Partnership Approach */}
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100  mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Partnership Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Discovery</h4>
              <p className="text-gray-600 text-sm">
                We begin by understanding your business, goals, and challenges to identify alignment.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Collaboration Design</h4>
              <p className="text-gray-600 text-sm">
                We co-create a partnership structure that delivers mutual value and supports your growth.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Long-term Growth</h4>
              <p className="text-gray-600 text-sm">
                We commit to ongoing support, regularly evaluating and optimizing our partnership.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-black  p-10 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to explore partnership opportunities?</h3>
          <p className="mb-6 max-w-2xl mx-auto opacity-90">
            Let's discuss how we can work together to drive innovation and growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-black px-6 py-3 rounded-xl font-medium transition-all hover:shadow-lg">
              Contact Our Team
            </button>
            <button className="bg-transparent border border-white text-white px-6 py-3 rounded-xl font-medium transition-all hover:bg-white hover:text-blue-600">
              View Partnership Options
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;