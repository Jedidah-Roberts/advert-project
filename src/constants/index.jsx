import { FormInput, HomeIcon } from "lucide-react";
import { FcAdvertising } from "react-icons/fc";


const K = {
  NAVLINKS: [

    {
      icon: <HomeIcon />,
      text: "OVERVIEW",
      path: "/dashboard",
    },
    {
      icon: <FcAdvertising />,
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
      dropdown: true,
      children: [
        { text: "COUNTRY-BASED RECIPES", path: "/user-adverts" },
        { text: "COURSE-BASED RECIPES", path: "/user-adverts" },
        { text: "COOKING-TECHNIQUE BASED RECIPES", path: "/user-adverts" },
        { text: "SPECIAL-DIET BASED RECIPES", path: "/user-adverts" },
      ],

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
  ADMINLINKS: [
    {
      icon: <HomeIcon />,
      text: "DASHBOARD",
      path: "/admin/dashboard",
    },
    {
      icon: <FcAdvertising />,
      text: "FIND ALL USERS",
      path: "/admin/users-list",
    },
    {
      icon: <FormInput />,
      text: "FIND ALL ADS",
      path: "/admin/ad-lists",
    },
  ],
};

export default K;
