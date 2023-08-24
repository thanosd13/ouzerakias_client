import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faEnvelope,
  faHeart,
  faGear,
  faRightFromBracket,
  faUser,
  faRightToBracket,
  faStar,
  faLock
} from "@fortawesome/free-solid-svg-icons";

export const SidebarData = [
  {
    title: "Ουζερί",
    icon: <FontAwesomeIcon icon={faHouse} />,
    link: "/home",
  },

  {
    title: "Επικοινωνία",
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    link: "/contact",
  },

  {
    title: "Αγαπημένα",
    icon: <FontAwesomeIcon icon={faHeart} />,
    link: "/love_list",
  },

  {
    title: "Κριτικές",
    icon: <FontAwesomeIcon icon={faStar} />,
    link: "/reviews",
  },

  {
    title: "Λογαριασμός",
    icon: <FontAwesomeIcon icon={faUser} />,
    link: "/account",
  },

  {
    title: "Ρυθμίσεις",
    icon: <FontAwesomeIcon icon={faGear} />,
    link: "/settings",
  },

  {
    title: "Διαχειριστής",
    icon: <FontAwesomeIcon icon={faLock} />,
    link: "/admin_platform",
  },

  {
    title: "Αποσύνδεση",
    icon: <FontAwesomeIcon icon={faRightFromBracket} />,
    link: "/log_out",
  },
];

export const sideBarMobileData = [
  {
    title: "Ουζερί",
    icon: <FontAwesomeIcon icon={faHouse} />,
    link: "/home",
  },

  {
    title: "Επικοινωνία",
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    link: "/contact",
  },

  {
    title: "Αγαπημένα",
    icon: <FontAwesomeIcon icon={faHeart} />,
    link: "/love_list",
  },

  {
    title: "Κριτικές",
    icon: <FontAwesomeIcon icon={faStar} />,
    link: "/reviews",
  },

  {
    title: "Λογαριασμός",
    icon: <FontAwesomeIcon icon={faUser} />,
    link: "/account",
  },

  {
    title: "Ρυθμίσεις",
    icon: <FontAwesomeIcon icon={faGear} />,
    link: "/settings",
  },

  {
    title: "Σύνδεση",
    icon: <FontAwesomeIcon icon={faRightToBracket} />,
    link: "/log_in",
  },

  {
    title: "Αποσύνδεση",
    icon: <FontAwesomeIcon icon={faRightFromBracket} />,
    link: "/log_out",
  },
];
