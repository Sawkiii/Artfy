import React, { useEffect } from "react";
import { ReactElement } from "react";
import { InstagramEmbed } from "react-social-media-embed";

const InstagramFeed = (): ReactElement => {
  useEffect(() => {
    const divs = document.querySelectorAll("div");

    // Durch die divs iterieren und nach dem Inhalt suchen
    divs.forEach((div) => {
      if (
        div.textContent &&
        div.textContent.includes("View full profile on Instagram")
      ) {
        div.textContent = "Something";
      }
    });
  }, []);
  return (
    <section
      id="instaFeed"
      className="relative bg-cover bg-center py-10 flex-grow"
    >
      <div className="max-w-full bg-base-100 shadow-lg rounded-lg">
        <h2 className="pt-4 text-2xl font-bold text-center pb-4">Instagram</h2>
        <div className="flex justify-center">
          <InstagramEmbed
            className="w-full px-5"
            url="https://www.instagram.com/artfy.hb"
          />
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
