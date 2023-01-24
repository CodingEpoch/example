import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

// export const SlideUpOnScroll = ({ children }) => {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect();
//         }
//       });
//     });
//     observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <motion.div
//       ref={ref}
//       animate={isVisible ? "visible" : "hidden"}
//       initial="hidden"
//       variants={{
//         visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
//         hidden: { y: "100%", opacity: 0 },
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// };

export const SlideOnScroll = ({ children, from }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  let start;
  let end;
  if (from === "up") {
    start = { y: "-100%", opacity: 0 };
    end = { y: 0, opacity: 1, transition: { duration: 1 } };
  } else if (from === "down") {
    start = { y: "100%", opacity: 0 };
    end = { y: 0, opacity: 1, transition: { duration: 1 } };
  } else if (from === "left") {
    start = { x: "-100%", opacity: 0 };
    end = { x: 0, opacity: 1, transition: { duration: 1 } };
  } else if (from === "right") {
    start = { x: "100%", opacity: 0 };
    end = { x: 0, opacity: 1, transition: { duration: 1 } };
  } else {
    start = { y: "100%", opacity: 0 };
    end = { y: 0, opacity: 1, transition: { duration: 1 } };
  }

  return (
    <motion.div ref={ref} animate={isVisible ? end : start} initial={start}>
      {children}
    </motion.div>
  );
};

//  Example
export const TeamMembers = () => {
  const teamMembers = [
    { name: "John Doe", position: "Developer" },
    { name: "Jane Smith", position: "Designer" },
    { name: "Bob Johnson", position: "Manager" },
  ];

  return (
    <div>
      {teamMembers.map((member) => (
        <>
          <SlideOnScroll direction="up">
            <h2>{member.name}</h2>
            <p>{member.position}</p>
          </SlideOnScroll>
          <SlideOnScroll direction="down">
            <h2>{member.name}</h2>
            <p>{member.position}</p>
          </SlideOnScroll>
          <SlideOnScroll direction="left">
            <h2>{member.name}</h2>
            <p>{member.position}</p>
          </SlideOnScroll>
          <SlideOnScroll direction="right">
            <h2>{member.name}</h2>
            <p>{member.position}</p>
          </SlideOnScroll>
        </>
      ))}
    </div>
  );
};
