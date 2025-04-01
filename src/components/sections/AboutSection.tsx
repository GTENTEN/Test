import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-blue-600">CLOUD22</span>
            </h2>
            <p className="text-gray-600 mb-4">
              Founded with a passion for technology and innovation, CLOUD22 is a leading IT solutions provider specializing in software development, IT consultancy, SEO optimization, and mobile application development.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of expert developers and consultants brings years of industry experience to deliver cutting-edge solutions that help businesses thrive in the digital era. We pride ourselves on our client-centric approach, ensuring that every project is tailored to meet specific business objectives.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="rounded-full bg-blue-100 p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Innovative Solutions</h3>
                  <p className="text-sm text-gray-600">Using latest technologies</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="rounded-full bg-blue-100 p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Expert Team</h3>
                  <p className="text-sm text-gray-600">Experienced professionals</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="rounded-full bg-blue-100 p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Client-Focused</h3>
                  <p className="text-sm text-gray-600">Tailored to your needs</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="rounded-full bg-blue-100 p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Quality Assurance</h3>
                  <p className="text-sm text-gray-600">Rigorous testing process</p>
                </div>
              </div>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700">
              Learn More About Us
            </Button>
          </div>

          <div className="relative">
            <div className="bg-blue-600 w-full h-full absolute -top-4 -left-4 rounded-lg opacity-20"></div>
            <div className="bg-gray-100 p-8 rounded-lg relative z-10">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To empower businesses with innovative technology solutions that drive growth and success in the digital marketplace.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">Our Approach</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span> Understand client needs
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span> Develop tailored solutions
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span> Implement with precision
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span> Provide ongoing support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
