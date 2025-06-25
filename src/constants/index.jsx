import { FormInput, HomeIcon, Megaphone } from "lucide-react";

const K = {
  NAVLINKS: [
    {
      icon: <HomeIcon />,
      text: "OVERVIEW",
      path: "/dashboard",
    },
    {
      icon: <Megaphone />,
      text: "FIND YOUR ADS",
      path: "/dashboard/vendor-ads",
    },
    {
      icon: <FormInput />,
      text: "WANT TO CREATE AN AD?",
      path: "/dashboard/create-ad",
    },
  ],
  USERLINKS: [
    {
      text: "ABOUT-US",
      dropdown: true,
      children: [
        { text: "THE DREAM TEAM", path: "/about-us/meet-the-team" },
        { text: "HOW FORKED WORKS", path: "/about-us/how-it-works" },
      ],

      path: "/about-us",
    },
    {
      text: "RECIPE CATALOG ",
      path: "/user-adverts",
    },
    {
      text: "OFFERS & DISCOUNTS",
      path: "/offers",
    },
    {
      text: "NEED HELP?",
      path: "/user-contact",
    },
    {
      text: "FAQ",
      path: "/faq",
    },
  ],
};

export default K;
