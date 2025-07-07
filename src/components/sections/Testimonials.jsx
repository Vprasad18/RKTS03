import { AnimatedTestimonials } from "../ui/animated-testimonials";
import mayank from "../../assests/Mayank.jpg";
import rahul from "../../assests/Rahul.jpg";
import aditya from "../../assests/Aditya.jpg";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Their CCTV installation was flawlessly executed—with crystal-clear imaging and perfectly positioned cameras that give us total peace of mind around the clock.",
      name: "Mayank Singh",
      designation: "",
      src: mayank,
    },
    {
      quote:
        "Our new fire‑fighting system was designed and fitted with such precision—completely compliant and seamlessly integrated into our facility. A true lifesaver!",
      name: "Rahul",
      designation: "",
      src: rahul,
    },
    {
      quote:
        "Implementing their access control solution was a game‑changer—biometrics at our entry points enabled secure, remote management and streamlined operations.",
      name: "Aditya Sharma",
      designation: "",
      src: aditya,
    },
    {
      quote:
        "The gas‑operation system they installed is robust and reliable. It’s finely tuned for our plant, and their team ensured every component runs flawlessly 24/7.",
      name: "Abhishek Prajapati",
      designation: "",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "RK Techs’ networking setup transformed our connectivity—fast, secure, and scalable. They handled everything end to end with minimal downtime.",
      name: "Akash",
      designation: "",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
