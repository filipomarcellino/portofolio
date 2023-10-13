import ProjectToggle from "@/components/ProjectToggle";
import {BIO_INFO, EXPERIENCES, PROJECTS} from "@/constants/data";
import dynamic from "next/dynamic";
import Head from "next/head";
import {useState} from "react";
import {AiFillGithub, AiFillLinkedin, AiFillMail} from "react-icons/ai";
import {BsFillMoonStarsFill} from "react-icons/bs";
import {TypeAnimation} from "react-type-animation";
import "react-slidedown/lib/slidedown.css";
import ExperienceToggle from "@/components/ExperienceToggle";
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const DynamicReactJson = dynamic(import("react-json-view"), { ssr: false });
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-[#FFFBF5] p-10 dark:bg-[#202225] min-h-screen h-max">
        <Head>
          <title>Filipo Marcellino</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/profile.png" />
        </Head>
        <main className="max-w-2xl mx-auto">
          <section className="bg-zinc-200 dark:bg-[#2c2f33] rounded-lg border-black px-8 py-10 mb-6">
            <nav className="flex justify-between text-black dark:text-white mb-2">
              <div className="flex">
                <Image src="/profile.png"
                       width={90}
                       height={90}
                       alt="Picture of the author"
                />
                <h1 className="my-auto text-2xl ml-4">Filipo's Portfolio</h1>
              </div>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className=" cursor-pointer text-2xl"
                  />
                </li>
                <li>
                  <a
                    className="bg-green-700 text-white px-4 py-2 border-none rounded-lg ml-8"
                    href="/resume_new.pdf"
                    target="_blank"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            <h3 className="mb-3 italic py-2 text-stone-600 dark:text-golden text-xl">
              <TypeAnimation
                sequence={[
                  "Hi! I'm Filipo", // Types 'One'
                  3000, // Waits 1s
                  "Hi! I'm a software engineer @aquanow", // Types 'One'
                  3000, // Waits 1s
                  "Hi! I'm a software systems student @ SFU", // Deletes 'One' and types 'Two'
                  3000, // Waits 2s
                  "Hi! I'm a hopeful cloud architect!", // Types 'Three' without deleting 'Two'
                  3000,
                  "Hi! I'm a competitive powerlifter", // Types 'Three' without deleting 'Two'
                  3000,
                  () => {
                    console.log("Done typing!"); // Place optional callbacks anywhere in the array
                  }
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                deletionSpeed={75}
              />
            </h3>
            <div className="text-xs sm:text-sm md:text-base">
              <DynamicReactJson
                src={BIO_INFO}
                theme={darkMode ? "eighties" : "rjv-default"}
                name={false}
                iconStyle="circle"
                collapsed={1}
                enableClipboard={false}
                displayDataTypes={false}
              />
            </div>
            <p className="mt-4 text-md text-gray-800 dark:text-gray-400">
              Best way to reach me is through
              <span className="font-bold italic text-stone-600 dark:text-golden">
                {" "}
                email
              </span>
            </p>
            <div className="text-4xl flex gap-4 py-3 text-gray-600 dark:text-gray-200">
              <a href="http://github.com/filipomarcellino">
                <AiFillGithub />
              </a>
              <a href="http://linkedin.com/in/filipomarcellino">
                <AiFillLinkedin />
              </a>
              <a href="mailto:fmarcellino7@gmail.com">
                <AiFillMail />
              </a>
            </div>
          </section>
          <section className="bg-zinc-200 dark:bg-[#2c2f33]  rounded-lg border-black py-4 mb-6">
            <h1 className=" dark:text-golden w-11/12 mx-auto font-semibold text-xl">
              Work experience
            </h1>
            {EXPERIENCES.map((job, index) => (
              <ExperienceToggle key={index} data={job} darkMode={darkMode} showOnLoad={index === 0}
               />
            ))}
          </section>
          <section className="bg-zinc-200 dark:bg-[#2c2f33] rounded-lg border-black py-4">
            <h1 className=" dark:text-golden w-11/12 mx-auto font-semibold text-xl">
              Projects
            </h1>
            {PROJECTS.map((project, index) => (
              <ProjectToggle
                  key={index}
                data={project}
                showOnLoad={index === 0}
              />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
