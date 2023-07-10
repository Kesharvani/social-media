import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    image:
      "https://i.postimg.cc/Vv3T2gFg/rahadiansyah-CV3n-End-R5-Y-unsplash.jpg",
    about: "Just Be Yourself!",
    portfolioUrl: "https://citystore.netlify.app/",
  },
  {
    _id: uuid(),
    firstName: "Shubham",
    lastName: "Soni",
    username: "shubhamsoni",
    password: "shubhamsoni123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    image: "https://i.postimg.cc/7Y2jSvxW/Yash-Patidar.jpg",
    about: "Aspiring Web Developer",
    portfolioUrl: "https://citystore.netlify.app/",
  },
  {
    _id: uuid(),
    firstName: "Syed",
    lastName: "Syed",
    username: "syed123",
    password: "syed123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    image:
      "https://i.postimg.cc/mgQffvJH/albert-dera-ILip77-Sbm-OE-unsplash.jpg",
    about: "Web Developer",
    portfolioUrl: "https://citystore.netlify.app/",
  },
  {
    _id: uuid(),
    firstName: "Bhumi",
    lastName: "Bala",
    username: "bhumi",
    password: "gautam123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    image:
      "https://i.postimg.cc/4yKq8qpn/mahdi-bafande-o-Pb-L-c5q-Oy0-unsplash.jpg",
    about: "Web Developer",
    portfolioUrl: "https://citystore.netlify.app/",
  },
];
