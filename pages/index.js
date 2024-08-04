import Aos from "aos";
import { useTheme } from "next-themes";
import Head from "next/head";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import Tilt from "react-parallax-tilt";
import VisibilitySensor from "react-visibility-sensor";

import Bighex from "../components/BgAssets/Bighex";
import EllipseBox from "../components/BgAssets/EllipseBox";
import EllipseBox2 from "../components/BgAssets/EllipseBox2";
import Hex1 from "../components/BgAssets/Hex1";
import Hex2 from "../components/BgAssets/Hex2";
import Map from "../components/BgAssets/Map";
import SmallHex from "../components/BgAssets/SmallHex";
import Card from "../components/homepage/Card";
import Slider from "../components/homepage/Slider";
import SocialFollow from "../components/homepage/SocialFollow";
import ThemeChanger from "../components/Toggler";


import Papa from "papaparse";

// Google Sheet CSV URL
const CSV_URL =
  "https://docs.google.com/spreadsheets/d/1cUM1aAXBgz1AUDBBk36BNpqu0fCzNisvkfpq_HJUwa4/export?format=csv";

const fetchData = async () => {
  const response = await fetch(CSV_URL);
  const csvText = await response.text();
  const parsedData = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  });
  return parsedData.data;
};

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const [data, setData] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
    setMounted(true);
    fetchData().then((data) => setData(data));
  }, []);
  if (!mounted) return null;

  return (
    <div>
      <Head>
        <title>
          GirlScript Summer of Code 2024 | GirlScript Foundation India
        </title>
        <meta name="GSSoC'24" content="GSSoC'24 is back!" />
        <link
          rel="icon"
          href="https://user-images.githubusercontent.com/63473496/153487849-4f094c16-d21c-463e-9971-98a8af7ba372.png"
        />

        <meta property="og:url" content="https://gssoc.girlscript.tech/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="GirlScript Summer of Code'24" />
        <meta property="og:description" content="GSSoC'24 is back!" />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/63473496/153487849-4f094c16-d21c-463e-9971-98a8af7ba372.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="gssoc.girlscript.tech" />
        <meta property="twitter:url" content="https://gssoc.girlscript.tech/" />
        <meta name="twitter:title" content="GirlScript Summer of Code'24" />
        <meta name="twitter:description" content="GSSoC'24 is here!" />
        <meta
          name="twitter:image"
          content="https://user-images.githubusercontent.com/63473496/153487849-4f094c16-d21c-463e-9971-98a8af7ba372.png"
        />
      </Head>
      {/* Bg assets */}
      <div className="hidden lg:block 3xl:hidden">
        <div className="absolute bottom-[60rem] right-0">
          <img
            src="https://user-images.githubusercontent.com/64256342/152650376-d285b39d-3b06-4c46-afad-c15b90074358.svg"
            alt="bg"
          />
        </div>
        <div className="absolute w-full left-0 -top-10 right-0">
          <Bighex />
        </div>
        <div className="absolute top-0 left-0">
          <Hex1 />
        </div>
        <div className="absolute top-0 left-0">
          <Hex2 />
        </div>
        <div className="absolute top-0 left-48">
          <EllipseBox2 />
        </div>
        <div className="absolute top-10 -left-20">
          <EllipseBox />
        </div>
        <div className="absolute top-0">
          <SmallHex />
        </div>
      </div>
      <SocialFollow />
      <div className="absolute object-right text-xs text-right right-1 dark:bg-primary_orange-0 px-2 animate-pulse py-2 rounded-full opacity-80 bg-black top-20 lg:hidden">
        <ThemeChanger />
      </div>
      <div className="container transition-colors mx-auto mt-12 mb-0 md:mb-12 p-8 sm:px-10 md:px-12 lg:px-40 2xl:px-50 dark:bg-darkmode_gray-0 dark:transition-colors ">
        <div className="first-section mb-10 flex flex-col md:flex-row">
          <div className="basis-1/2 relative">
            <div className="text-black dark:text-white text-6xl font-sans font-semibold 2.25rem 3rem mb-10">
              <span className="text-primary_orange-0">GirlScript MIT AOE </span>

              <div className="mt-2">is here!</div>
            </div>

            <div className="font-serif font-medium text-2xl 1.5rem 2rem text-gray-800 dark:text-white">
              At MIT Academy of Engineering, Girl Script MIT AOE stands as a
              beacon for aspiring data scientists and machine learning
              professionals. <br />
              <span className="text-primary_orange-0">
                #Established in 2016,&nbsp;
              </span>
              our club is dedicated to fostering a vibrant community where
              students can explore and excel in the fields of data science and
              machine learning. .
              <br />
              <b> 2024-2025 </b>
            </div>
            {/* 
            <div className="ring mb-4 ring-primary_orange-0 text-white ring-offset-4 ring-offset-white dark:ring-offset-darkmode_gray-0 rounded-2xl w-full h-20 flex items-center justify-center drop-shadow-2xl">
              <h2 className="font-serif text-center font-medium text-2xl 1.5rem 2rem text-black dark:text-white"><b>GSSoC&apos;24 Job Fair</b> is coming soon!</h2>
            </div> */}
            <div className="flex items-center mt-2 mb-10 md:mb-52 lg:mb-56">
              {/* <a
                className=""
                href="https://docs.google.com/forms/d/e/1FAIpQLScl2zoD7dOYnftAc9csfY4SD72WJbM1c0XMWAq-4Z7X5k45NA/viewform"
              >
                <button
                  id="CTA-button"
                  data-aos="fade-down"
                  className=" bg-gradient-to-b from-primary_orange-0 to-orange-600 text-md text-white font-semibold px-4 py-4 rounded-2xl md:text-2xl md:py-2 hover:bg-gradient-to-t hover:from-primary_orange-0 hover:to-orange-600"
                >
                  Register Here
                </button>
              </a>
              <a className="" href="#about-gssoc">
                <button
                  id="CTA-button1"
                  data-aos="fade-down"
                  className=" bg-gradient-to-b from-primary_orange-0 to-orange-600 text-md text-white font-semibold px-4 py-4 rounded-2xl md:text-2xl md:py-2 hover:bg-gradient-to-t hover:from-primary_orange-0 hover:to-orange-600"
                >
                  Learn More
                </button>
              </a> */}
              {/* <a data-aos="fade-down" href="#about-gssoc">
                <div className="font-serif font-medium text-md text-primary_orange-0 ml-9 md:text-2xl">
                  Learn More
                </div>
              </a> */}
            </div>
          </div>

          <div data-aos="fade-down" className="hero__image hidden lg:block">
            <Tilt
              className="Tilt"
              options={{ max: 25 }}
              style={{ height: 600, width: 600 }}
            >
              <div className="img__container">
                {theme === "light" ? (
                  <img src={"./Hero_Image_Lite_Theme.svg"} alt="hero-image" />
                ) : (
                  <img src={"./Hero_Image_Dark_Theme.svg"} alt="hero-image" />
                )}
              </div>
            </Tilt>
          </div>
        </div>

        <div className="flex justify-between items-center flex-wrap mb-24">
          <div
            className="border-8 rounded drop-shadow-xl border-black dark:border-white"
            data-aos="flip-left"
            data-aos-duration="700"
          >
            <img
              src="gs2024group.jpg"
              height="453"
              width="420"
              alt="GirlScript Group Photo"
            />
          </div>
          <div className="basis-full md:basis-6/12 md:order-first lg:basis-1/2 lg:order-first relative">
            <div className="text-black dark:text-white font-semibold text-4xl 2.25rem 3rem mb-5 font-sans">
              Our Mission{" "}
              <span className="text-primary_orange-0">GirlScript </span>
            </div>
            <p className="dark:text-white font-serif text-1xl text-black-100">
              We are committed to bridging the gap between academic learning and
              practical application by providing a platform for students to
              engage in innovative projects, cutting-edge research, and hands-on
              experiences. Our mission is to cultivate a learning environment
              that encourages curiosity, creativity, and collaboration.
            </p>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}


        <div className="be-part-of">
          <p className="font-sans font-semibold text-center dark:text-white text-gray-800 text-4xl 2.25rem 3rem ">
            <span className="text-primary_orange-0 text-4xl 2.25rem 3rem">
              Be a part of{" "}
            </span>
            GS 2025
          </p>
          <div
            data-aos="flip-left"
            data-aos-duration="1500"
            className="container my-12 mx-auto"
          >
            <div
              className="flex flex-wrap justify-between md:justify-around -mx-1 lg:-mx-4 md:justify-items-stretch"
              id="card-1"
            >
              {/* Card-1 */}
              <Card
                disabled
                title="Technical Team"
                content="The Technical Team is the backbone of our club, responsible for all things tech-related. This team tackles complex data science and machine learning challenges, develops innovative solutions, and supports technical aspects of our events. They work on creating and maintaining tools, systems, and resources that enhance the learning experience for our members. If you have a knack for coding, data analysis, or technical problem-solving, this is the team for you!"
                // btntext="Apply as a Contributor"
                // link="https://swiy.co/contributors"
              />
              {/* Card-2 */}
              <Card
                disabled
                title="Management Team"
                content="The Management Team ensures the smooth operation of the club’s activities and coordinates between different teams. They handle organizational tasks, manage resources, and oversee the planning and execution of our events. With a focus on efficiency and effectiveness, this team ensures that everything runs seamlessly and according to plan. If you excel in organization, coordination, and leadership, consider joining the Management Team!"
                 
                // link="https://bit.ly/gssoc-mentor"
              />
            </div>
          </div>
          <div
            data-aos="flip-right"
            data-aos-duration="1500"
            className="container my-12 mx-auto "
          >
            <div className="flex flex-wrap justify-between md:justify-around -mx-1 lg:-mx-4">
              {/* Card-3 */}
              <Card
                disabled
                title="Social Media Team"
                content="The Social Media Team is responsible for promoting our club and its events through various social media platforms. They create engaging content, manage our online presence, and interact with our community to build a strong and vibrant network. This team is key to increasing our visibility and outreach, ensuring that our events reach a wide audience. If you’re passionate about social media, content creation, and community engagement, this team is perfect for you!"
                // link="https://bit.ly/GSSoC24-Projects"
              />
              {/* Card-4 */}
              <Card
                title="Design Team"
                content="The Design Team brings creativity and visual appeal to our club’s materials and events. They are responsible for designing promotional materials, event graphics, and other visual content that represents our brand. This team plays a vital role in ensuring that all visual elements are professional and aligned with our club’s identity. If you have a flair for design, graphic creation, and visual storytelling, the Design Team is the place for you!"
                // link="https://forms.gle/n16MGBJTvbMcCjCc9"
              />
            </div>
          </div>
        </div>


        {/* ------------------------------------------------------------------------ */}
        <div className="text-black dark:text-white font-semibold text-4xl 2.25rem 3rem mb-5 font-sans">
            
              <span className="text-primary_orange-0">GirlScript 2023-24 </span>
            </div>

        <div
          className="flex flex-row justify-between items-center bg-[#FFECDE] dark:bg-black flex-wrap rounded-xl mb-24"
          id="about-gssoc"
        > 
          <div className="pr-4 font-semibold pt-3 rounded-lg lg:my-4 lg:px-2 lg:py-10">
            {data.map((item, index) => (
              <div
                key={index}
                className="dark:bg-black dark:transition-colors bg-stone-50 shadow-lg rounded-lg my-1 px-4 py-4 w-120 sm:w-fit"
              >
                <img
                  src={item["linkdin photo link"]}
                  alt={`${item["full name"]} LinkedIn`}
                  className="rounded-full w-60 h-60 mx-auto"
                />
                <h3 className="text-xl font-bold text-center mt-2">
                  {item["full name"]}
                </h3>
                <p className="text-center">{item["position"]}</p>
                {/* <p className="text-center">
                  {item["currently working in which company"]}
                </p> */}
                <p className="text-center">{item["year of joining"]}</p>
                <a
                  href={`mailto:${item["Email Address"]}`}
                  className="block text-center text-blue-500 mt-2"
                >
                  {item["Email Address"]}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="organisation">
          <div className="hidden lg:block 3xl:hidden">
            <div className="absolute left-0 top-[130rem]">
              <Map />
            </div>
          </div>

          {/* <p className="font-sans font-semibold dark:text-white text-center text-gray-800 text-4xl 2.25rem 3rem mb-8">
          Some of the previous <br />
          <span className="text-primary_orange-0 text-4xl 2.25rem 3rem">
            participating organisations
          </span>
        </p> */}
          <div className="org__box flex flex-row items-center justify-center flex-wrap">
            {/* <img
              data-aos="fade-right"
              data-aos-duration="500"
              className="w-20 h-auto mr-12 mb-10 md:mb-0"
              src="https://github.com/girlscript/gssoc-assets/blob/main/Participating_projects/logo1.png?raw=true"
              alt="logo"
            />
             <img
              data-aos="fade-right"
              data-aos-duration="500"
              className="w-20 h-auto mr-12 mb-10 md:mb-0"
              src="https://github.com/girlscript/gssoc-assets/blob/main/Participating_projects/logo2.png?raw=true"
              alt="logo"
            />
            <img
              data-aos="fade-right"
              data-aos-duration="500"
              className="w-20 h-auto mr-12"
              src="https://github.com/girlscript/gssoc-assets/blob/main/Participating_projects/logo3.png?raw=true"
              alt="logo"
            />
            <img
              data-aos="fade-right"
              data-aos-duration="500"
              className="w-20 h-auto mr-12"
              src="https://github.com/girlscript/gssoc-assets/blob/main/Participating_projects/logo4.png?raw=true"
              alt="logo"
            /> */}
          </div>
        </div>

        {/* sponsors */}
        <div className="flex flex-row justify-center px-3 mb-20" id="Sponsors">
          </div>
        {/* Slider */}
        <div className="mb-20">
          <Slider />
        </div>

    
      </div>

 
    </div>
  );
}
