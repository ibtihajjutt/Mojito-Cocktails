import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import SplitText from "gsap/SplitText";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
    const videoRef = useRef();

    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
    });

    useGSAP(() => {
        const heroSplit = new SplitText(".title", { type: "chars , words" });

        const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

        heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            stagger: 0.09,
            duration: 1.8,
            ease: "expo.out",
        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            stagger: 0.06,
            ease: "expo.out",
            delay: 1,
        });

        gsap
            .timeline({
                scrollTrigger: {
                    trigger: "#hero",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            })

            .to(".left-leaf", { y: 200 }, 0)
            .to(".right-leaf", { y: -200 }, 0);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        });

        tl.to(".video", { y: "100%", ease: "none" }, 0);

        if (videoRef.current) {
            videoRef.current.onloadedmetadata = () => {
                gsap.to(videoRef.current, {
                    currentTime: videoRef.current.duration,
                    scrollTrigger: {
                        trigger: '#hero',
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    }
                });
            };
        }
    }, []);

    return (
        <>
            <section id="hero" className="noisy">
                <h1 className="title">MOJITO</h1>

                <img
                    src="/images/hero-left-leaf.png"
                    alt="left-leaf"
                    className="left-leaf"
                />

                <img
                    src="/images/hero-right-leaf.png"
                    alt="right-leaf"
                    className="right-leaf"
                />

                <div className="body">
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p>cool. crisp. classic</p>
                            <p className="subtitle">
                                Sip The Sprit <br /> of Summer
                            </p>
                        </div>

                        <div className="view-cocktails">
                            <p className="subtitle">
                                Every cocktail on our menu is a blend of premium ingredients,
                                creative flair, and timeless recipes — designed to delight your
                                senses.
                            </p>

                            <a href="#cocktails">View Cocktails</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="video absolute inset-0">
                <video
                    ref={videoRef}
                    src="/videos/input.mp4"
                    muted
                    playsInline
                    
                    preload="auto"
                />
            </div>
        </>
    );
};

export default Hero;
