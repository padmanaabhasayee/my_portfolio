import defaultImage from "../resources/images/markus-spiske-Skf7HxARcoc-unsplash.jpg";
import {
  CodeRounded,
  ContactPageRounded,
  FacebookRounded,
  HomeRounded,
  SchoolRounded,
} from "@mui/icons-material";

export const userProfileDefaultData = {
  Name: "Padmanaabha Sayee",
  UserName: "padmanaabha_sayee",
  DOB: "27/11/2003",
  Address: "Madurai, TamilNadu",
  EmailID: "workwithps@gmail.com",
  PhoneNo: "9385532720",
  Description: "I'm a Software Engineer",
  Photo: defaultImage,
};

export const IconTitleMap = {
  Home: <HomeRounded className="icon" />,
  Academics: <SchoolRounded className="icon" />,
  Projects: <CodeRounded className="icon" />,
  "Social Profiles": <FacebookRounded className="icon" />,
  Resume: <ContactPageRounded className="icon" />,
};

export const DEFAULT_SIDE_MENU = [
  {
    title: "Home",
    icon: IconTitleMap.Home,
    link: "/home",
  },
  {
    title: "Academics",
    icon: IconTitleMap.Academics,
    link: "/academics",
  },
  {
    title: "Projects",
    icon: IconTitleMap.Projects,
    link: "/projects",
  },
  {
    title: "Social Profiles",
    icon: IconTitleMap["Social Profiles"],
    link: "/social-profile",
  },
  {
    title: "Resume",
    icon: IconTitleMap.Resume,
    link: "/resume",
  },
];

export const DEFAULT_DRAWER_FLAG = true;
export const DEFAULT_ACTIVE_PAGE = DEFAULT_SIDE_MENU[0].title;

export const drawerWidth = 300;

export const DarkTheme = "dark";
export const LightTheme = "light";
