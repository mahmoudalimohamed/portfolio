import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Socials = () => {
  return (
    <>
      {/* Left Side - Social Icons */}
      <div className="fixed bottom-0 left-10 hidden md:block z-10">
        <ul className="flex flex-col items-center gap-6 after:content-[''] after:block after:w-[1px] after:h-24 after:bg-light-slate after:mx-auto after:mt-6">
          <li>
            <a
              href="https://github.com/mahmoudalimohamed"
              target="_blank"
              rel="noreferrer"
              className="text-light-slate hover:text-green hover:-translate-y-1 transition-all block p-2"
            >
              <Github className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a
              href="www.linkedin.com/in/mahmoud-maher-41859a266"
              target="_blank"
              rel="noreferrer"
              className="text-light-slate hover:text-green hover:-translate-y-1 transition-all block p-2"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </li>
        </ul>
      </div>

      {/* Right Side - Email */}
      <div className="fixed bottom-0 right-10 hidden md:block z-10">
        <div className="flex flex-col items-center gap-6 after:content-[''] after:block after:w-[1px] after:h-24 after:bg-light-slate after:mx-auto after:mt-6">
          <p
            className="text-light-slate hover:text-green hover:-translate-y-1 transition-all font-mono text-xs tracking-widest writing-mode-vertical-rl p-2"
            style={{ writingMode: "vertical-rl" }}
          >
            mahermahmoud872@gmail.com
          </p>
        </div>
      </div>
    </>
  );
};

export default Socials;
