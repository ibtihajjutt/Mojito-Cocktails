import { useGSAP } from "@gsap/react";
import React from "react";
import SplitText from "gsap/SplitText";
import gsap from "gsap";

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", { type: "words" });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });

    scrollTimeline.from(titleSplit.words, {
      opacity: 0,
      yPercent: 100,
      ease: "expo.out",
      stagger: 0.02,
    })
     .from('.top-grid div, .bottom-grid div', {
      opacity: 0,
      duration:1,
      yPercent: 50,
      ease: "Power1.inUut",
      stagger: 0.04,
     }, "-=0.5");
  });

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Were Every Detail Matters <span className="text-white">-</span>{" "}
              from muddle to garnish
            </h2>
          </div>
          <div className="subcontent width[100%] md:col-span-4 flex flex-col justify-between">
            <p>
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.{" "}
            </p>
            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span className="text-yellow">4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                More Than +120000 Customers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid  ">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt1.png" alt="grid-img-1" />
        </div>

        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt2.png" alt="grid-img-2" />
        </div>

        <div className="md:col-span-6 ">
          <div className="noisy" />
          <img src="/images/abt5.png" alt="grid-img-5" />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src="/images/abt3.png" alt="grid-img-3" />
        </div>

        <div className="md:col-span-4">
          <div className="noisy" />
          <img src="/images/abt4.png" alt="grid-img-4" />
        </div>
      </div>
    </div>
  );
};

export default About;
