import React from "react";
import { FaBars } from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const [active, setActive] = useState(false);

  const handleSideBarToogle = () => {
    console.log("toogle sidebar");
    setActive((prev) => !prev);
  };

  useEffect(() => {
    const main = document.getElementById("main");
    const sidebar = document.getElementById("sidebar");

    if (active) {
      main.style.transform = "translateX(-65%)";
      main.style.backgroundColor = "rgba(0,0,0,0.7)";
      main.style.transition = "transform 0.4s ease-in-out";

      sidebar.style.transform = "translateX(-105%)";
      sidebar.style.transition = "transform 0.6s ease-in-out";
    }
    else{
      main.style.transform = "translateX(0)";
      main.style.backgroundColor = "rgba(0,0,0,0)";
      main.style.transition = "transform background-color 0.4s ease-in-out";

      sidebar.style.transform = "translateX(0)";
      sidebar.style.transition = "transform 0.6s ease-in-out";
    }
  }, [active]);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setActive(false); 
      }
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div>
      <div
          hidden={active}
          className="text-white text-2xl md:hidden cursor-pointer fixed right-8 top-4 z-20"
          onClick={handleSideBarToogle}
        >
          <FaBars className="w-full"/>
      </div>

      <div
          hidden={!active}
          className="text-white text-3xl md:hidden cursor-pointer fixed right-8 top-4 z-20"
          onClick={handleSideBarToogle}
        >
          <FontAwesomeIcon icon={faXmark} />
      </div>

      <div id="sidebar" className="md:hidden fixed top-0 right-[-75%] w-[70vw] h-screen bg-black *:z-10">

        <div className="flex flex-col items-end absolute right-8 top-14 space-y-5 italic">

          <div className="text-white text-2xl cursor-pointer">
            <span>Accueil</span>
          </div>
          <div className="text-white text-2xl cursor-pointer">
            <span>Nous</span>
          </div>
          <div className="text-white text-2xl cursor-pointer">
            <span>Menu</span>
          </div>
          <div className="text-white text-2xl cursor-pointer">
            <span>Contact</span>
          </div>
          <div className="text-white text-2xl cursor-pointer">
            <span>Réserver une table</span>
          </div>

        </div>
          
      </div>
    </div>
  );
}
