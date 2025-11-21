import React from "react";
import Navbar from "./Navbar";
import Socials from "./Socials";

const Layout = ({ children }) => {
  return (
    <div className="bg-navy min-h-screen text-slate font-sans">
      <Navbar />
      <Socials />
      <div id="content">
        <main className="px-6 md:px-20 lg:px-32 xl:px-40 max-w-[1600px] mx-auto min-h-screen pt-24 md:pt-32">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
