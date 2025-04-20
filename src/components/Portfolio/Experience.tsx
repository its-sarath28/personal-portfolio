"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "@/hooks/useSectionView";
import SectionHeading from "./SectionHeading";
import { experiencesData } from "@/lib/data";
import { useTheme } from "next-themes";
import { useIsMounted } from "@/hooks/useMounted";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  const isMounted = useIsMounted();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline
        lineColor={
          !isMounted
            ? "transparent"
            : theme === "light"
              ? "#9ca3af"
              : "rgba(255, 255, 255, 0.2)"
        }
      >
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: !isMounted
                  ? "transparent"
                  : theme === "light"
                    ? "#f3f4f6"
                    : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: !isMounted
                  ? "transparent"
                  : theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              dateClassName="lg:mx-3"
              icon={item.icon}
              iconStyle={{
                background: !isMounted
                  ? "transparent"
                  : theme === "light"
                    ? "white"
                    : "#495057",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>

              {item.points?.map((point, index) => <p key={index}>• {point}</p>)}
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
