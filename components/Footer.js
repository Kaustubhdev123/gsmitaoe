import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Footer = () => {
  const router = useRouter();
  const [isWobRoute, setIsWobRoute] = useState(false);

  useEffect(() => {
    if (router.asPath.startsWith("/wob")) {
      setIsWobRoute(true); // set it to true if you launch the website
    } else {
      setIsWobRoute(false);
    }
  }, [router.asPath]);

  return (
    <footer id="Contact">
      {isWobRoute ? (
        <div className="footer-2 bg-gradient-to-b from-[#ADD8E6] to-[#00008B] pt-6 md:pt-8">
          <div className="container px-4 mx-auto">
            <div className="md:flex md:flex-wrap justify-center md:-mx-4 py-6 md:pb-8">
              <div className="footer-info pt-10 lg:w-1/3 md:px-4">
                
              </div>

              <div className="md:w-2/3 max-w-[144px] lg:w-1/3 justify-center mt-12 lg:mt-0">
                <div className="sm:flex">
                  <div className="sm:flex-1">
                    
                    <div>
                    
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3 max-w-[480px] md:px-4 md:text-left mt-12 lg:mt-0">
               
                
              </div>
            </div>
          </div>

          <div className="border-t border-solid border-gray-900 mt-4 py-4">
            <div className="container px-4 mx-auto">
              <div className="md:flex md:-mx-4 md:items-center">
                <div className="md:flex-1 md:px-4 text-center ">
                  <p className="text-white">
                    &copy;{" "}
                    <strong>
                      2024 GirlScript . Made with 🖤️ by GirlScript
                      Mit Aoe. All rights reserved.
                    </strong>
                  </p>
                </div>
                {/* <div className="md:flex-1 md:px-4 text-center md:text-right">
                <a
                  href="#"
                  className="py-2 px-4 text-white inline-block hover:underline"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="py-2 px-4 text-white inline-block hover:underline"
                >
                  Privacy Policy
                </a>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="footer-2 bg-gradient-to-b from-[#FF8500] to-[#FF6701] pt-6 md:pt-8">
          <div className="container px-4 mx-auto">
            <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-8">
              <div className="footer-info lg:w-1/3 md:px-4">
                {/* <h4 className="text-white text-2xl font-medium mb-4">
                Made with ❤️ by GirlScript India
  </h4>*/}
              </div>

              <div className="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
                <div className="sm:flex">
                  <div className="sm:flex-1">
                
                    <div>
                    
                     
                      
                    </div>
                  </div>
                  <div className="sm:flex-1 mt-4 sm:mt-0">
                 
                    <div>
                    
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3 md:px-4 md:text-left mt-12 lg:mt-0">
               
              </div>
            </div>
          </div>

          <div className="border-t border-solid border-gray-900 mt-4 py-4">
            <div className="container px-4 mx-auto">
              <div className="md:flex md:-mx-4 md:items-center">
                <div className="md:flex-1 md:px-4 text-center ">
                  <p className="text-black">
                    &copy;{" "}
                    <strong>
                      2024 GirlScript . Made with 🖤️ by GirlScript
                      Mit Aoe. All rights reserved.
                    </strong>
                  </p>
                </div>
                {/* <div className="md:flex-1 md:px-4 text-center md:text-right">
                <a
                  href="#"
                  className="py-2 px-4 text-white inline-block hover:underline"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="py-2 px-4 text-white inline-block hover:underline"
                >
                  Privacy Policy
                </a>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
export default Footer;
