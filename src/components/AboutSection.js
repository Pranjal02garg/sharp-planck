"use client";

import FadeIn from './FadeIn';
import ContactButton from './ContactButton';
import AnimatedText from './AnimatedText';

const ABOUT_TEXT =
  "Robotics & Artificial Intelligence undergraduate at Thapar Institute of Engineering and Technology. I engineer deep learning architectures, computer vision pipelines, generative AI models, and scalable AWS cloud backends.";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-5 sm:px-8 md:px-10 py-20"
    >
      {/* Corner decorative 3D images */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[60px] sm:w-[160px] md:w-[210px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt=""
          className="w-full h-auto"
          loading="lazy"
          draggable={false}
        />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[55px] sm:w-[140px] md:w-[180px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt=""
          className="w-full h-auto"
          loading="lazy"
          draggable={false}
        />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[60px] sm:w-[160px] md:w-[210px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt=""
          className="w-full h-auto"
          loading="lazy"
          draggable={false}
        />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[65px] sm:w-[170px] md:w-[220px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt=""
          className="w-full h-auto"
          loading="lazy"
          draggable={false}
        />
      </FadeIn>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16 text-center">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight font-kanit"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-12 sm:gap-16 md:gap-20">
          <AnimatedText
            text={ABOUT_TEXT}
            className="font-medium leading-relaxed text-[#D7E2EA] max-w-[620px]"
            style={{ fontSize: 'clamp(1.05rem, 2.2vw, 1.4rem)' }}
          />

          {/* Skills Grid */}
          <FadeIn delay={0.15} className="w-full max-w-3xl">
            <div className="flex flex-col gap-5 sm:gap-6 text-left">
              {[
                {
                  label: 'Languages',
                  items: ['Python', 'C / C++', 'SQL'],
                },
                {
                  label: 'Libraries & Frameworks',
                  items: ['PyTorch', 'OpenCV', 'scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'Streamlit'],
                },
                {
                  label: 'Cloud & Developer Tools',
                  items: ['AWS (ECR, ECS, App Runner)', 'Docker', 'PostgreSQL', 'Upstash Redis', 'Git'],
                },
              ].map((group) => (
                <div
                  key={group.label}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-5"
                >
                  <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 sm:w-44 sm:shrink-0 sm:text-right font-medium">
                    {group.label}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#D7E2EA]/15 bg-[#D7E2EA]/[0.03] px-3 py-1 text-sm text-[#D7E2EA]/80 hover:border-[#D7E2EA]/40 hover:text-[#D7E2EA] transition-colors duration-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
