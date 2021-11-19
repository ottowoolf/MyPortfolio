import waves from "../img/projectsimg/waves-min.jpg"
import otis from "../img/projectsimg/Otis-min.png"
import ottomation from "../img/projectsimg/Ottomation-min.png"
import myportfolio from "../img/projectsimg/myportfolio-min.png"
import employees from "../img/projectsimg/Employees.png"
import order from "../img/projectsimg/OrderManagementSystem-min.png"

const projects = [
  {
    id: 1,
    link1: "https://github.com/ottowoolf/Waves-Clothing",
    link2: "https://waves-clothing.herokuapp.com/",
    icon1: "Code",
    icon2: "Website",
    image: waves,
    title: "Waves Shopping",
    description:
      "Ecommerce SPA built with React, Redux, Firebase & Stripe. Tested using Jest",
  },
  {
    id: 2,
    link1: "https://dev.azure.com/OtmanO/MyRestaurant",
    link2: "https://my-restaurant.azurewebsites.net/",
    icon1: "Code",
    icon2: "Website",
    image: otis,
    title: "TeeJO Restaurant",
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
    id: 7,
    link1: "https://github.com/ottowoolf/MyPortfolio",
    link2: "otman-o.com",
    icon1: "Code",
    icon2: "Website",
    image: myportfolio,
    title: "My Portfolio",
    description: "Portfolio Website built with React",
  },
  {
    id: 8,
    link1: "https://github.com/ottowoolf/Employees",
    link2: "https://contractors.netlify.app/",
    icon1: "Code",
    icon2: "Website",
    image: employees,
    title: "Employee Search",
    description:
      "Simple app that filters employees records fetched from an API",
  },
]

export default projects
