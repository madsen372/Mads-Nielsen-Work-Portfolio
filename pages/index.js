import Head from "next/head";
import { motion } from "framer-motion";
import Typical from "react-typical";
import { Zoom, Fade, Bounce } from "react-reveal/";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { MdSchool } from "react-icons/md";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import {
  BsMoonFill,
  BsPhone,
  BsFillEnvelopeFill,
  BsArrowRight,
} from "react-icons/bs";
import { MdOutlineBabyChangingStation, MdComputer } from "react-icons/md";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const cardVariantsLeft = {
    offscreen: {
      hidden: { opacity: 0 },
      x: -900,
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        //bounce: 0.4,
        duration: 1.5,
      },
    },
  };

  const iconVariants = {
    offscreen: {
      hidden: { opacity: 0 },
      y: 900,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "",
        //bounce: 0.4,
        duration: 1.5,
      },
    },
  };

  const cardVariantsRight = {
    offscreen: {
      x: 900,
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        //bounce: 0.4,
        duration: 1.5,
      },
    },
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Next App</title>
        <meta name="viewport" width="device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="basis- 0 flex flex-wrap justify-center flex-col bg-[#BBE1FA] px-10 dark:bg-[#1B262C] md:px-20 lg:px-40 overflow-x-hidden overflow-y-hidden">
        <nav className="py-2 mb-12 flex justify-between dark:bg-[#1B262C] dark:text-white sticky top-0 opacity-95">
          <div className="py-2">
            <BsMoonFill
              onClick={() => setDarkMode(!darkMode)}
              className=" cursor-pointer text-2xl"
            />
          </div>

          <h1 className="font-burtons text-xl"></h1>
          <ol className="flex items-center list-decimal gap-x-4">
            <li>
              <a
                className="border-1 hover:text-[#3282B8] font-bold border-white py-1 rounded"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="border-1 hover:text-[#3282B8] font-bold delay:150 border-white py-2 rounded"
                href="#experience"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                className="border-1 hover:text-[#3282B8] font-bold border-white py-2 rounded"
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                className="border-1 hover:text-[#3282B8] font-bold delay:150 border-white py-2 rounded"
                href="#contact"
              >
                Contact
              </a>
            </li>

            <a
              className="text-center border-2 w-[90px] font-bold hover:bg-white hover:bg-opacity-10 hover:delay-400 border-black dark:border-white py-2 rounded"
              href="MadsN.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </ol>
        </nav>
        <section className="flex flex-col justify-center items-center min-h-screen">
          <div className="text-center p-10 flex justify-center items-center flex-col">
            <svg
              className="fill-black dark:fill-white flex justify-center items-center p-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="180px"
              height="180px"
            >
              <path d="M 5 2 C 3.347656 2 2 3.347656 2 5 L 2 35 C 2 36.652344 3.347656 38 5 38 L 45 38 C 46.652344 38 48 36.652344 48 35 L 48 5 C 48 3.347656 46.652344 2 45 2 Z M 7 7 L 43 7 L 43 33 L 7 33 Z M 19.28125 11.28125 L 11.28125 19.28125 L 10.59375 20 L 11.28125 20.71875 L 19.28125 28.71875 L 20.71875 27.28125 L 13.4375 20 L 20.71875 12.71875 Z M 30.71875 11.28125 L 29.28125 12.71875 L 36.5625 20 L 29.28125 27.28125 L 30.71875 28.71875 L 38.71875 20.71875 L 39.40625 20 L 38.71875 19.28125 Z M 20 39 L 20 43 L 30 43 L 30 39 Z M 10 40 C 9.703125 40 9.410156 40.117188 9.21875 40.34375 L 4.21875 46.34375 C 3.96875 46.644531 3.929688 47.085938 4.09375 47.4375 C 4.257813 47.789063 4.613281 48 5 48 L 45 48 C 45.386719 48 45.742188 47.789063 45.90625 47.4375 C 46.070313 47.085938 46.027344 46.644531 45.78125 46.34375 L 40.78125 40.34375 C 40.589844 40.117188 40.296875 40 40 40 L 32 40 L 32 45 L 18 45 L 18 40 Z" />
            </svg>
            <h2 className=" text-5xl py-2 font-medium dark:text-[#ccd6f6] md:text-6xl">
              Mads Nicolaj Nielsen
            </h2>
            <Typical
              className="text-5xl text-center py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-4xl"
              steps={[
                "Software Developer",
                2000,
                "Computer Scientist",
                2000,
                "A Great Guy",
                2000,
              ]}
              loop={50}
            />
            ;
          </div>
        </section>

        <section
          id="about"
          className=" flex flex-col justify-center items-center min-h-full "
        >
          <div className="animate-pulse flex justify-center flex-col w-1/2 p-5 dark:text-white text-center py-5">
            <h3 className="text-3xl dark:text-white ">About me</h3>
            <Bounce left>
              <p className="bg-[#3282b8] py-2 px-2 text-left  mt-5 rounded-md">
                I'm Mads, a passionate programmer, who codes frontend and
                backend applications. A well-organized person, problem solver an
                I'm 29 Years old, living with my girlfriend and dog in Kastrup,
                Copenhagen. Loves fitness, long walks, gaming and coding.
              </p>
            </Bounce>
            <Bounce left>
              <p className="bg-[#3282b8] py-2 px-2 text-left mt-2 rounded-md">
                Bachelor in Computer Science from Syddansk universitet in
                Odense, Denmark.
              </p>
            </Bounce>
            <Bounce left>
              <p className="bg-[#3282b8] py-2 px-2 text-left mt-2 rounded-md">
                I started my coding journey back in 2018, and havent stopped
                coding since. I love every aspect of it, and I don't plan on
                stopping ever.
              </p>
            </Bounce>
          </div>
        </section>

        <section
          id="experience"
          className="flex flex-col items-center py-20 dark:text-white "
        >
          <h3 className="text-3xl mb-10 dark:text-white">Experience</h3>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="dark: vertical-timeline-element--work"
              contentStyle={{ background: "#3282B8", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2022 Nov. - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                WebbyPi AB/ Sweden - Software Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Malmø, Sweden
              </h4>

              <div className="flex text-left mt-4 justify-normal flex-wrap ">
                <span className="badges rounded mr-2 mt-0 br-2">
                  Javascript
                </span>
                <span className="badges rounded mr-2 mt-0 br-2">PHP</span>
                <span className="badges rounded mr-2 mt-0 br-2">Java</span>
                <span className="badges rounded mr-2 mt-0 br-2">Wordpress</span>
                <span className="badges rounded mr-2 mt-0 br-2">HTML/CSS</span>
                <span className="badges rounded mr-2 mt-0 br-2">
                  Javascript
                </span>
                <span className="badges rounded mr-2 mt-0 br-2">REST API</span>
                <span className="badges rounded mr-2 mt-0 br-2">
                  Material UI
                </span>
                <span className="badges rounded mr-2 mt-0 br-2">REST API</span>
                <span className="badges rounded mr-2 mt-0 br-2">
                  Material UI
                </span>
                <span className="badges rounded mr-2 mt-0 br-2">REST API</span>
                <span className="badges rounded mr-2 mt-0 br-2">
                  Material UI
                </span>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="dark: vertical-timeline-element--work"
              contentStyle={{ background: "#3282B8", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2022 July - 2023 Jan."
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                Micar - Backend Developer - Part time
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                København, Danmark
              </h4>

              <div className="flex text-left mt-4 justify-normal flex-wrap ">
                <span className="badges rounded mr-2 mt-0 br-2">
                  Javascript
                </span>
                <span className="badges rounded mr-2 mt-0 br-2">Node.js</span>
                <span className="badges rounded mr-2 mt-0 br-2">Angular</span>
                <span className="badges rounded mr-2 mt-0 br-2">MongoDB</span>
                <span className="badges rounded mr-2 mt-0 br-2">REST API</span>
                <span className="badges rounded mr-2 mt-0 br-2">
                  Material UI
                </span>
                <span className="badges rounded mr-2 mt-0 br-2">REST API</span>
                <span className="badges rounded mr-2 mt-0 br-2">
                  Material UI
                </span>
                <span className="badges rounded mr-2 mt-0 br-2">REST API</span>
                <span className="badges rounded mr-2 mt-0 br-2">
                  Material UI
                </span>
                <span className="badges rounded mr-2 mt-0 br-2">REST API</span>
                <span className="badges rounded mr-2 mt-0 br-2">
                  Material UI
                </span>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#3282B8", color: "#fff" }}
              date="2021-2022"
              iconStyle={{ background: "#3282B8", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                Påbegyndt kandidat i Datalogi
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Syddansk Universitet, Odense, Danmark
              </h4>
              <div className="flex text-left mt-4 justfiy-center items-center flex-wrap ">
                <span className="badges rounded mr-2 mt-0 br-2 ">
                  ROS Drones
                </span>
                <span className="badges rounded mr-2 mt-0 br-2">Node.js</span>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#3282B8", color: "#fff" }}
              date="2018-2021"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                Bachelor i Datalogi
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Syddansk Universitet, Odense, Danmark
              </h4>

              <div className="flex text-left mt-4 justify-normal flex-wrap ">
                <span className="badges rounded mr-2 mt-0 br-2">Java</span>
                <span className="badges rounded mr-2 mt-0 br-2">C</span>
                <span className="badges rounded mr-2 mt-0 br-2">Haskell</span>
                <span className="badges rounded mr-2 mt-0 br-2">Assembly</span>
                <span className="badges rounded mr-2 mt-0 br-2">Python</span>
                <span className="badges rounded mr-2 mt-0 br-2">AI</span>
                <span className="badges rounded mr-2 mt-0 br-2">
                  Datastructures
                </span>
                <span className="badges rounded mr-2 mt-0 br-2">Scrum</span>
                <span></span>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#3282B8", color: "#fff" }}
              date="11 marts, 1994"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdOutlineBabyChangingStation />}
            >
              <h3 className="vertical-timeline-element-title">
                A king was born
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Odense Universitetshospital, DK
              </h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </section>

        <section
          id="portfolio"
          className="flex flex-col items-center dark:text-white"
        >
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center rounded-full shadow-cyan-500/50 bg-white h-16 w-16">
              <MdComputer
                style={{ color: "rgb(33, 150, 243)", fontSize: "50px" }}
              />
            </div>
            <h3 className="ml-5 text-3xl dark:text-white">Projects</h3>
          </div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }}
            class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6 "
          >
            <motion.div
              variants={cardVariantsLeft}
              className="rounded-md bg-[#3282B8] items-center justify-center px-2 py-2"
            >
              <h3
                className="ml-5 mt-2 text-3xl"
                data-te-animation-start="onScroll"
                data-te-animation-on-scroll="repeat"
                data-te-animation-reset="true"
                data-te-animation="[slide-in-right_5s_ease-in-out]"
              >
                Netflix look-a-like
              </h3>
              <p className=" ml-5 mt-2">
                a movie, it renders a trailer of the selected movie. Project is
                done using the tech stack: MongoDB, Express, Node and React.
              </p>
              <div className="flex mt-5 ">
                <a
                  className=" font-bold ml-5 py-2 px-4 rounded bg-[#222] flex-shrink-0 cursor-pointer transition ease-in-out delay-0
              hover:-translate-y-1 hover:scale-102 duration-200"
                  href="https://github.com/madsen372/netflix"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <AiFillGithub style={{ color: "white" }} />
                </a>
                <a
                  className="flex bg-[#0f4c75] hover:bg-[#08273b] font ml-5 py-2 px-4 rounded flex-shrink-0 mr-6 cursor-pointer transition ease-in-out delay-0
              hover:-translate-y-1 hover:scale-102 duration-200"
                  href="https://netflix-madsen372.vercel.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <BsArrowRight style={{ color: "white", fontSize: "20" }} />
                  <span className="text-white ml-2 font-bold">Demo</span>
                </a>
              </div>
            </motion.div>
            <motion.div
              variants={cardVariantsRight}
              className="rounded-md bg-[#3282B8] items-center justify-center px-2 py-2 overflow-y-hidden"
            >
              <h3 className="ml-5 mt-2 text-3xl">Jumping Game</h3>
              <p className=" ml-5 mt-2">
                My first game I developed a few years back. A game where the
                goal is to jump as high as possible, and achieve the highest
                score as you can. The project is done in Javascript and CSS.
              </p>
              <div className="flex mt-5">
                <a
                  className="font-bold ml-5 py-2 px-4 rounded bg-[#222] flex-shrink-0 cursor-pointer transition ease-in-out delay-0
              hover:-translate-y-1 hover:scale-102 duration-200"
                  href="https://github.com/madsen372/DoodleJump-Game"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <AiFillGithub style={{ color: "white" }} />
                </a>
                <a
                  className="flex bg-[#0f4c75] hover:bg-[#08273b] font-bold font ml-5 py-2 px-4 rounded flex-shrink-0 mr-6 cursor-pointer transition ease-in-out delay-0
              hover:-translate-y-1 hover:scale-102 duration-200"
                  href="https://doodle-jump-game.vercel.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <BsArrowRight style={{ color: "white", fontSize: "20" }} />
                  <span className="text-white ml-2">Demo</span>
                </a>
              </div>
            </motion.div>
            <motion.div
              variants={cardVariantsLeft}
              className="rounded-md bg-[#3282B8] items-center justify-center px-2 py-2 overflow-y-hidden"
            >
              <h3 className="ml-5 mt-2 text-3xl">Chat App</h3>
              <p className=" ml-5 mt-2">
                A full stack chat app build with Node, React.
              </p>
              <div className="flex mt-5">
                <a
                  className="font-bold ml-5 py-2 px-4 rounded bg-[#222] flex-shrink-0 cursor-pointer transition ease-in-out delay-0
              hover:-translate-y-1 hover:scale-102 duration-200"
                  href="https://github.com/madsen372/chat-app "
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <AiFillGithub style={{ color: "white" }} />
                </a>
                <a
                  className="flex bg-[#0f4c75] hover:bg-[#08273b] font-bold font ml-5 py-2 px-4 rounded flex-shrink-0 mr-6 cursor-pointer transition ease-in-out delay-0
              hover:-translate-y-1 hover:scale-102 duration-200"
                  href="https://github.com/madsen372/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <BsArrowRight style={{ color: "white", fontSize: "20" }} />
                  <span className="text-white ml-2">Demo</span>
                </a>
              </div>
            </motion.div>
            <motion.div
              variants={cardVariantsRight}
              className="rounded-md bg-[#3282B8] items-center justify-center px-2 py-2 overflow-y-hidden"
            >
              <h3 className="ml-5 mt-2 text-3xl">Discord App</h3>
              <p className=" ml-5 mt-2">
                A project creating a Discord Chat app, with google
                authentication.
              </p>
              <div className="flex mt-5">
                <a
                  className="font-bold ml-5 py-2 px-4 rounded bg-[#222] flex-shrink-0 cursor-pointer transition ease-in-out delay-0
              hover:-translate-y-1 hover:scale-102 duration-200"
                  href="https://github.com/madsen372/discord"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <AiFillGithub style={{ color: "white" }} />
                </a>
                <a
                  className="flex bg-[#0f4c75] hover:bg-[#08273b] font-bold font ml-5 py-2 px-4 rounded flex-shrink-0 mr-6 cursor-pointer transition ease-in-out delay-0
              hover:-translate-y-1 hover:scale-102 duration-200"
                  href="https://discord-18a7c.web.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <BsArrowRight style={{ color: "white", fontSize: "20" }} />
                  <span className="text-white ml-2">Demo</span>
                </a>
              </div>
            </motion.div>
            <motion.div
              variants={cardVariantsLeft}
              className="rounded-md bg-[#3282B8] items-center justify-center px-2 py-2 overflow-y-hidden"
            >
              <h3 className="ml-5 mt-2 text-3xl">Disney+ App</h3>
              <p className=" ml-5 mt-2">
                A project creating a Disney app, with google authentication.
              </p>
              <div className="flex mt-5">
                <a
                  className="font-bold ml-5 py-2 px-4 rounded bg-[#222] flex-shrink-0 cursor-pointer transition ease-in-out delay-0
              hover:-translate-y-1 hover:scale-102 duration-200"
                  href="https://github.com/madsen372/Disney"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <AiFillGithub style={{ color: "white" }} />
                </a>
                <a
                  className="flex bg-[#0f4c75] hover:bg-[#08273b] font-bold font ml-5 py-2 px-4 rounded flex-shrink-0 mr-6 cursor-pointer transition ease-in-out delay-0
              hover:-translate-y-1 hover:scale-102 duration-200"
                  href="https://discord-18a7c.web.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <BsArrowRight style={{ color: "white", fontSize: "20" }} />
                  <span className="text-white ml-2">Demo</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </section>
        <section
          id="#about"
          className="flex justify-center flex-col mt-20 mb-20 "
        >
          <h3 className="flex justify-center text-5xl text-white mb-10">
            Get in touch with me!
          </h3>

          <div className="text-8xl flex justify-center gap-16 py-3 text-gray-600 dark:text-[#BBE1FA]">
            <Bounce bottom>
              <div
                variants={iconVariants}
                className="flex justify-center items-center flex-shrink-0 mr-6 cursor-pointer transition ease-in-out delay-150
              hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <a
                  href="https://twitter.com/Madsnn99"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillTwitterCircle />
                </a>
              </div>
            </Bounce>
            <Bounce bottom>
              <div
                variants={iconVariants}
                className="flex items-center flex-shrink-0 mr-6 cursor-pointer transition ease-in-out delay-150
              hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <a
                  href="https://www.linkedin.com/in/mads-nielsen-41538a1b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin />
                </a>
              </div>
            </Bounce>
            <Bounce bottom>
              <div
                variants={iconVariants}
                className="flex items-center flex-shrink-0 mr-6 cursor-pointer transition ease-in-out delay-150
              hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <a
                  href="https://github.com/madsen372/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <AiFillGithub />
                </a>
              </div>
            </Bounce>
          </div>
        </section>
        <footer
          id="contact"
          class="bg-[#BBE1FA] rounded-lg shadow-lg p-5 dark:bg-[#1B262C] flex-1 mt-24"
        >
          <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-white">
              By Mads Nicolaj Nielsen
            </span>
            <ul class="flex flex-wrap justify-between mt-3 text-sm font-medium text-gray-500 dark:text-white sm:mt-0">
              <li class="md:mr-2">
                <BsFillEnvelopeFill />
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">
                  Mads372@hotmail.com
                </a>
              </li>

              <li class="md:mr-2">
                <BsPhone />
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">
                  {" "}
                  +45 29 71 88 10
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </main>
    </div>
  );
}
