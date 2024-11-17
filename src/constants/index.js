import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Demo-01",
    price: "$00.20",
  },
  {
    imgURL: shoe5,
    name: "Demo-10",
    price: "$10.20",
  },
  {
    imgURL: shoe6,
    name: "Demo-100",
    price: "$20.20",
  },
  {
    imgURL: shoe7,
    name: "Demo-001",
    price: "$30.20",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Lorem Ipsum",
    subtext:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in.",
  },
  {
    imgURL: shieldTick,
    label: "Lorem Ipsum",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Lorem Ipsum",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Lorem Ipsum",
    rating: 4.5,
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  },
  {
    imgURL: customer2,
    customerName: "Lorem Ipsum",
    rating: 4.5,
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Lorem Ipsum", link: "/" },
      { name: "Lorem Ipsum", link: "/" },
      { name: "Lorem Ipsum", link: "/" },
      { name: "Lorem Ipsum", link: "/" },
      { name: "Lorem Ipsum", link: "/" },
      { name: "Lorem Ipsum", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@test.com", link: "mailto:customer@test.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
