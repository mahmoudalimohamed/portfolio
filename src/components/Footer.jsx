import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center py-8 text-slate text-xs font-mono hover:text-green transition-colors">
      <a
        href="https://github.com/bchiang7/v4"
        target="_blank"
        rel="noreferrer"
        className="text-center p-4"
      >
        <div>Designed & Built by Brittany Chiang</div>
        <div className="mt-2">
          {/* Optional: Add star/fork stats if desired, for now just text */}
        </div>
      </a>
    </footer>
  );
};

export default Footer;
