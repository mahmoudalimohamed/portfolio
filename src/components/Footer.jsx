import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center py-12 md:py-16 text-center">
      <div className="flex flex-col items-center gap-2">
        <a
          href="https://github.com/bchiang7/v4"
          target="_blank"
          rel="noreferrer"
          className="text-slate text-xs font-mono hover:text-green transition-colors"
        >
          Designed & Built by Brittany Chiang
        </a>
      </div>
    </footer>
  );
};

export default Footer;
