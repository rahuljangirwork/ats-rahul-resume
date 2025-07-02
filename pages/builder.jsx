/* -------------------------------------------------------------------------- */
/*  Imports                                                                   */
/* -------------------------------------------------------------------------- */
import React, { useState, createContext } from "react"; // core React hooks
import dynamic from "next/dynamic";                     // for client-side only components
import clsx from "clsx";
// Form sections
import Language from "../components/form/Language";
import PersonalInformation from "../components/form/PersonalInformation";
import SocialMedia from "../components/form/SocialMedia";
import Summary from "../components/form/Summary";
import Education from "../components/form/Education";
import WorkExperience from "../components/form/WorkExperience";
import Projects from "../components/form/Projects";
import Skill from "../components/form/Skill";
import Certification from "../components/form/certification";
import LoadUnload from "../components/form/LoadUnload";

// Meta / preview / controls
import Meta from "../components/meta/Meta";
import Preview from "../components/preview/Preview";
import FormCP from "../components/form/FormCP";
import DefaultResumeData from "../components/utility/DefaultResumeData";

import { motion, AnimatePresence } from "framer-motion";




/* -------------------------------------------------------------------------- */
/*  Context setup: lets any child component grab / update resume data easily  */
/* -------------------------------------------------------------------------- */
const ResumeContext = createContext(DefaultResumeData);

/* -------------------------------------------------------------------------- */
/*  Dynamically import Print utility so it only runs in the browser           */
/*  (avoids Next.js server-side rendering issues with window / DOM access)    */
/* -------------------------------------------------------------------------- */
const Print = dynamic(() => import("../components/utility/WinPrint"), {
  ssr: false, // ‹— disable SSR for this component
});

/* -------------------------------------------------------------------------- */
/*  Page component                                                            */
/* -------------------------------------------------------------------------- */
export default function Builder() {
  /* ------------- state ------------- */
  // Master copy of the résumé JSON
  const [resumeData, setResumeData] = useState(DefaultResumeData);
  // Toggles whether the left-hand form pane is visible
  const [formClose, setFormClose] = useState(false);

  

  /* ------------- handlers ------------- */
  // Turn an <input type="file"> image into a data URL and store it
  const handleProfilePicture = (e) => {
    const file = e.target.files[0];
    if (file instanceof Blob) {
      const reader = new FileReader();
      reader.onload = (event) =>
        setResumeData({ ...resumeData, profilePicture: event.target.result });
      reader.readAsDataURL(file);
    } else {
      console.error("Invalid file type");
    }
  };

  // Generic text/textarea input handler
  const handleChange = (e) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
    console.log(resumeData); // dev aid: remove for production
  };

  /* ------------- render ------------- */
  return (
    <>


  






      {/* Provide résumé state + helpers to every child via context */}
      <ResumeContext.Provider
        value={{ resumeData, setResumeData, handleProfilePicture, handleChange }}
      >
        {/* SEO / <head> tags */}
        <Meta
          title={`${resumeData.name || "Rahul Jangir"} | Resume`}
          description="Explore the professional resume of Rahul Jangir – showcasing skills, experience, education, and projects in a clean, ATS-friendly format."
          keywords="Rahul Jangir, Resume, Web Developer, Software Engineer, Portfolio, ATS Resume"
        />


        {/* ---- Main two-pane layout (flex column → row on md screens) ---- */}
        <div className="h-screen grid grid-rows-[auto_1fr_auto] max-w-7xl mx-auto">

          {/* 🔵 Topbar */}
          <header className="w-full bg-white border-b px-4 py-3 shadow-sm print:hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
              <LoadUnload />
              <h1 className="text-lg font-semibold text-gray-700 whitespace-nowrap">
                ATS Resume Builder
              </h1>
            </div>
          </header>

          {/* 🔧 Main Content */}
          <main
            className={clsx(
              "grid grid-cols-1 min-h-0 overflow-hidden",
              !formClose && "md:grid-cols-[40%_60%]"
            )}
          >


            {/* 🔹 Left Form Pane */}
            {/* {formClose ? null : (
              <form className="p-4 bg-blue-600 exclude-print h-full overflow-y-auto">
                <PersonalInformation />
                <SocialMedia />
                <Summary />
                <Education />
                <WorkExperience />
                <Projects />
                {resumeData.skills.map((skill, index) => (
                  <Skill key={index} title={skill.title} />
                ))}
                <Certification />
                <Language />
              </form>
            )} */}

            {!formClose && (
              <motion.form
                key="form-pane"
                initial={{ x: -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.8, 0.25, 1],
                }}
                className="p-4 bg-blue-600 exclude-print h-full overflow-y-auto"
              >
                <PersonalInformation />
                <SocialMedia />
                <Summary />
                <Education />
                <WorkExperience />
                <Projects />
                {resumeData.skills.map((skill, index) => (
                  <Skill key={index} title={skill.title} />
                ))}
                <Certification />
                <Language />
              </motion.form>
            )}




            {/* 🔹 Right Preview Pane */}
            <motion.div
              className="h-full overflow-y-auto bg-white"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Preview />
            </motion.div>
          </main>

          {/* 🔻 Footer */}
          <footer className="w-full bg-gray-50 border-t px-4 py-3 text-center text-sm text-muted-foreground print:hidden">
            <span>
              &copy; {new Date().getFullYear()}{" "}
              <a
                href="https://rahuljangir.work"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-600 transition"
              >
                Rahul Jangir
              </a>. All rights reserved.
            </span>
          </footer>

        </div>



        {/* Floating button set (collapse / print, etc.) */}
        <FormCP formClose={formClose} setFormClose={setFormClose} />

        {/* Window.print() helper (client-only) */}
        <Print />
      </ResumeContext.Provider>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Re-export the context so other modules can `import { ResumeContext }`     */
/* -------------------------------------------------------------------------- */
export { ResumeContext };
