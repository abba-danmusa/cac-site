import Image from "next/image";
import Link from "next/link";

const AdditionalInfo = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto relative">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-7/12 flex items-start mb-8 md:mb-0">
            <div className="relative">
              <div className="absolute top-0 left-0" style={{ transform: 'translateY(70%)', zIndex: 1 }}>
                <Image
                  alt="Image Description 1"
                  src="/assets/images/promo-3.jpg" // Replace with your image path
                  width={386}
                  height={400}
                  className="scale-100 transition-transform duration-300"
                />
              </div>
              <div className="relative z-20">
                <Image
                  alt="Image Description 2"
                  src="/assets/images/promo-4.jpg" // Replace with your image path
                  width={810}
                  height={512}
                  className="scale-100 transition-transform duration-300"
                />
              </div>
              <div className="absolute bottom-0 right-0" style={{ transform: 'translateY(50%)', zIndex: 1 }}>
                <Image
                  alt="Image Description 3"
                  src="/assets/images/promo-5.jpg" // Replace with your image path
                  width={386}
                  height={500}
                  className="scale-100 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-5/12 flex items-center">
            <div className="w-full">
              <h2 className="text-4xl font-bold mb-8">How we work?</h2>
              <div className="mb-8">
                <dl className="space-y-4">
                  <div className="border-b border-gray-300 pb-2">
                    <dt className="flex justify-between items-center cursor-pointer">
                      <Link href="/revised" className="text-lg">01. Discussion</Link>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </dt>
                    {/* Add Accordion functionality here if needed */}
                  </div>
                  <div className="border-b border-gray-300 pb-2">
                    <dt className="flex justify-between items-center cursor-pointer">
                      <Link href="/fees" className="text-lg">02. Design</Link>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </dt>
                    {/* Add Accordion functionality here if needed */}
                  </div>
                  <div className="border-b border-gray-300 pb-2">
                    <dt className="flex justify-between items-center cursor-pointer">
                      <Link href="/reg" className="text-lg">03. Development</Link>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </dt>
                    {/* Add Accordion functionality here if needed */}
                  </div>
                  <div className="border-b border-gray-300 pb-2">
                    <dt className="flex justify-between items-center cursor-pointer">
                      <Link href="/production" className="text-lg">04. Production</Link>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </dt>
                    {/* Add Accordion functionality here if needed */}
                  </div>
                </dl>
              </div>
              <div className="mt-8">
                <Link href="/main-pages-contact-1" className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
                  <span>Start a Project</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;