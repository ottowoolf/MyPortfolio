import waves from "../img/projectsimg/waves-min.jpg";
import otis from "../img/projectsimg/Otis-min.png";
import ottomation from "../img/projectsimg/Ottomation-min.png";
import sorrento from "../img/projectsimg/sorrento-min.png";
import myportfolio from "../img/projectsimg/myportfolio-min.png";
import focus from "../img/projectsimg/Focus.png";
import order from "../img/projectsimg/OrderManagementSystem-min.png";

const projects = [
  {
    id: 1,
    link1: "www.github.com",
    link2: "www.website.com",
    icon1: "Code",
    icon2: "Website",
    image: waves,
    title: "Waves Shopping",
    description:
      "Ecommerce SPA built with React, Redux, Firebase & Stripe. Tested using Jest",
  },
  {
    id: 2,
    link1: "www.github.com",
    link2: "www.github.com",
    icon1: "Code",
    icon2: "Website",
    image: otis,
    title: "C# and ASP.NET",
    description:
      "Restaurant Reservation System built in C# with ASP.NET MVC and Entity Framework.",
  },
  {
    id: 3,
    link1: "https://github.com/ottowoolf/OrderManagementSystem",
    link2: "https://github.com/ottowoolf/OrderManagementSystem",
    icon1: "Code",
    icon2: "Website",
    image: order,
    title: "Order Management system",
    description:
      "Order Management application built using C#, ADO.NET & WPF. Tested using MSTest",
  },
  {
    id: 4,
    link1: "https://github.com/ottowoolf/Ottomation",
    link2: "https://ottowoolf.github.io/Ottomation/",
    icon1: "Code",
    icon2: "Website",
    image: ottomation,
    title: "OttoMation",
    description: "Simple Website with HTML, CSS & Bootstrap.",
  },
  {
    id: 5,
    link1: "https://github.com/ottowoolf/Sorrento_by_the_sea",
    link2: "https://sorrento.netlify.app",
    icon1: "Code",
    icon2: "Website",
    image: sorrento,
    title: "Sorrento By The Sea",
    description:
      "Simple holiday appartement Website built with HTML, CSS, JS & Bootstrap",
  },
  {
    id: 6,
    link1: "https://github.com/ottowoolf/LetsFocus",
    link2: "www.github.com",
    icon1: "Code",
    icon2: "App",
    image: focus,
    title: "Let's Focus",
    description: "Simple React-Native app to focus on tasks",
  },
  {
    id: 7,
    link1: "www.github.com",
    link2: "www.github.com",
    icon1: "Code",
    icon2: "Website",
    image: myportfolio,
    title: "My Portfolio",
    description: "Portfolio Website built with React",
  },
];

export default projects;
