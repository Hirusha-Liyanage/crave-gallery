"use client";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  Link,
} from "@heroui/react";
import Image from "next/image";
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const page = () => {
  const currentYear = new Date().getFullYear();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full scroll-smooth h-[100svh] bg-home overflow-y-auto -z-10">
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="z-10 px-4 py-3 bg-transparent"
        maxWidth="full"
        isBlurred={false}
        position="static"
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <img src="/img/CraveGallery-Logo.png" className="h-14" />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-5" justify="start">
          <NavbarBrand>
            <img src="/img/CraveGallery-Logo.png" className="h-14" />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-5" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#home" size="sm">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#about" size="sm">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#cakes" color="foreground" size="sm">
              Cakes
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#designs" color="foreground" size="sm">
              Designs
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-5" justify="end">
          <NavbarItem>
            <Link color="foreground" href="#delivery" size="sm">
              Delivery
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              variant="shadow"
              className="btns rounded-full"
              onPress={() =>
                window.open(
                  "https://api.whatsapp.com/send/?phone=94776717312&text&type=phone_number&app_absent=0",
                  "_blank"
                )
              }
            >
              Contact
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="bg-[#12071f] pt-4">
          <a
            className="w-full text-sm"
            color={"foreground"}
            href="#home"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Home
          </a>
          <a
            className="w-full text-sm"
            color={"foreground"}
            href="#about"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            About
          </a>
          <a
            className="w-full text-sm"
            color={"foreground"}
            href="#cakes"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Cakes
          </a>
          <a
            className="w-full text-sm"
            color={"foreground"}
            href="#designs"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Designs
          </a>
          <a
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-full text-sm"
            color={"foreground"}
            href="#delivery"
          >
            Delivery
          </a>
          <Button
            className="flex items-center btns rounded-full"
            variant="shadow"
            onPress={() =>
              window.open(
                "https://api.whatsapp.com/send/?phone=94776717312&text&type=phone_number&app_absent=0",
                "_blank"
              )
            }
          >
            Contact
          </Button>
        </NavbarMenu>
      </Navbar>
      <div className="w-full flex flex-col items-center bg-gradient mt-5">
        <div
          className="w-full lg:w-[70%] flex flex-col lg:flex-row justify-center items-center p-5 z-10 fade"
          id="home"
        >
          <div className="w-full lg:w-[55%] flex-col flex items-start justify-center p-5">
            <label className="w-full text-3xl lg:text-4xl font-bold">
              Delight in Every Bite with Crave Gallery!
            </label>
            <label className="text-xl lg:text-3xl font-bold mt-1">
              <TypeAnimation
                className="text-2xl lg:text-3xl font-bold mb-2 typing-text"
                sequence={[
                  "Crafting cakes that make every moment special.",
                  1500,
                  "Our handcrafted cakes, baked with love and passion.",
                  1500,
                  "Crave Gallery brings your sweetest cravings to life.",
                  1500,
                ]}
                wrapper="label"
                speed={50}
                style={{ display: "inline-block", color: "#006fee" }}
                repeat={Infinity}
              />
            </label>
            <p className="w-full lg:w-4/5 mt-5 text-md lg:text-lg text-stone-400 text-justify">
              Delicious, beautifully crafted cakes for every occasion. We create
              stunnig treats, including butter cake, chocolate cake and many
              more cakes with custom wedding and birthday cakes.
            </p>
            <Button
              className="w-full lg:w-2/5 mt-5 btns rounded-full"
              variant="shadow"
              color="danger"
              size="lg"
              onPress={() => (window.location = "#about")}
            >
              Read More
            </Button>
          </div>
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end p-5">
            <Image
              src={"/img/Dis-Img-01.png"}
              width={500}
              height={500}
              alt="Cake-img-01"
            />
          </div>
        </div>
        <div
          className="w-full lg:w-[70%] flex flex-col lg:flex-row justify-center items-center p-5 z-10 fade mt-10 mb-10"
          id="about"
        >
          <div className="w-full lg:w-[45%] hidden lg:flex justify-center lg:justify-start p-5">
            <Image
              src={"/img/CraveGallery.png"}
              width={400}
              height={400}
              alt="Cake-img-01"
            />
          </div>
          <div className="w-full lg:w-[55%] flex-col flex items-end justify-center p-5">
            <label className="w-full text-3xl lg:text-4xl font-bold lg:text-end">
              About Crave Gallery
            </label>
            <p className="w-full lg:w-4/5 mt-5 text-md lg:text-lg text-stone-400 text-justify">
              Crave Gallery, started in 2025, offers a variety of delicious
              cakes including butter, chocolate, fruit, red velvet, and custom
              cakes for weddings and birthdays. We bake each cake with care to
              make every occasion special.
            </p>
          </div>
          <div className="w-full lg:w-[45%] lg:hidden flex justify-center p-5">
            <Image
              src={"/img/CraveGallery.png"}
              width={400}
              height={400}
              alt="Cake-img-01"
            />
          </div>
        </div>
        <div
          className="w-full lg:w-[70%] flex flex-col lg:flex-row justify-center items-center p-5 z-10 fade mt-10 mb-10 fade"
          id="cakes"
        >
          <div className="w-full flex-col flex items-end justify-center p-5">
            <label className="w-full text-3xl lg:text-4xl font-bold text-center">
              Crave Gallery Cakes
            </label>
            <div className="w-full mt-8 flex flex-row flex-wrap justify-center gap-4">
              <div className="w-full lg:w-[20rem] shadow-lg p-5 rounded-2xl bg-white bg-opacity-5">
                <div className="w-full flex justify-center mb-3 p-2">
                  <Image
                    src={"/img/Cake (1).png"}
                    width={250}
                    height={250}
                    alt="Cake-01"
                    className="rounded-2xl"
                  />
                </div>
                <label className="w-full font-bold text-2xl flex flex-row justify-start items-center gap-1">
                  Butter Cake
                </label>
                <p className="text-md text-stone-400">
                  Starting From LKR. 1500
                </p>
                <Button
                  className="w-full lg:w-2/4 mt-5 rounded-full"
                  variant="bordered"
                  color="primary"
                  size="lg"
                  onPress={() =>
                    window.open(
                      "https://api.whatsapp.com/send/?phone=94776717312&text&type=phone_number&app_absent=0",
                      "_blank"
                    )
                  }
                >
                  Order Now
                </Button>
              </div>
              <div className="w-full lg:w-[20rem] shadow-lg p-5 rounded-2xl bg-white bg-opacity-5">
                <div className="w-full flex justify-center mb-3 p-2">
                  <Image
                    src={"/img/Cake (2).png"}
                    width={250}
                    height={250}
                    alt="Cake-02"
                    className="rounded-2xl"
                  />
                </div>
                <label className="w-full font-bold text-2xl flex flex-row justify-start items-center gap-1">
                  Chocolate Cake
                </label>
                <p className="text-md text-stone-400">
                  Starting From LKR. 1500
                </p>
                <Button
                  className="w-full lg:w-2/4 mt-5 rounded-full"
                  variant="bordered"
                  color="primary"
                  size="lg"
                  onPress={() =>
                    window.open(
                      "https://api.whatsapp.com/send/?phone=94776717312&text&type=phone_number&app_absent=0",
                      "_blank"
                    )
                  }
                >
                  Order Now
                </Button>
              </div>
              <div className="w-full lg:w-[20rem] shadow-lg p-5 rounded-2xl bg-white bg-opacity-5">
                <div className="w-full flex justify-center mb-3 p-2">
                  <Image
                    src={"/img/Cake (3).png"}
                    width={250}
                    height={250}
                    alt="Cake-03"
                    className="rounded-2xl"
                  />
                </div>
                <label className="w-full font-bold text-2xl flex flex-row justify-start items-center gap-1">
                  Ribbon Cake
                </label>
                <p className="text-md text-stone-400">
                  Starting From LKR. 1500
                </p>
                <Button
                  className="w-full lg:w-2/4 mt-5 rounded-full"
                  variant="bordered"
                  color="primary"
                  size="lg"
                  onPress={() =>
                    window.open(
                      "https://api.whatsapp.com/send/?phone=94776717312&text&type=phone_number&app_absent=0",
                      "_blank"
                    )
                  }
                >
                  Order Now
                </Button>
              </div>
              <div className="w-full lg:w-[20rem] shadow-lg p-5 rounded-2xl bg-white bg-opacity-5">
                <div className="w-full flex justify-center mb-3 p-2">
                  <Image
                    src={"/img/Cake (4).png"}
                    width={250}
                    height={250}
                    alt="Cake-04"
                    className="rounded-2xl"
                  />
                </div>
                <label className="w-full font-bold text-2xl flex flex-row justify-start items-center gap-1">
                  Fruit Cake
                </label>
                <p className="text-md text-stone-400">
                  Starting From LKR. 1500
                </p>
                <Button
                  className="w-full lg:w-2/4 mt-5 rounded-full"
                  variant="bordered"
                  color="primary"
                  size="lg"
                  onPress={() =>
                    window.open(
                      "https://api.whatsapp.com/send/?phone=94776717312&text&type=phone_number&app_absent=0",
                      "_blank"
                    )
                  }
                >
                  Order Now
                </Button>
              </div>
              <div className="w-full lg:w-[20rem] shadow-lg p-5 rounded-2xl bg-white bg-opacity-5">
                <div className="w-full flex justify-center mb-3 p-2">
                  <Image
                    src={"/img/Cake (5).png"}
                    width={250}
                    height={250}
                    alt="Cake-05"
                    className="rounded-2xl"
                  />
                </div>
                <label className="w-full font-bold text-2xl flex flex-row justify-start items-center gap-1">
                  Coffe Cake
                </label>
                <p className="text-md text-stone-400">
                  Starting From LKR. 1500
                </p>
                <Button
                  className="w-full lg:w-2/4 mt-5 rounded-full"
                  variant="bordered"
                  color="primary"
                  size="lg"
                  onPress={() =>
                    window.open(
                      "https://api.whatsapp.com/send/?phone=94776717312&text&type=phone_number&app_absent=0",
                      "_blank"
                    )
                  }
                >
                  Order Now
                </Button>
              </div>
              <div className="w-full lg:w-[20rem] shadow-lg p-5 rounded-2xl bg-white bg-opacity-5">
                <div className="w-full flex justify-center mb-3 p-2">
                  <Image
                    src={"/img/Cake (6).png"}
                    width={250}
                    height={250}
                    alt="Cake-06"
                    className="rounded-2xl"
                  />
                </div>
                <label className="w-full font-bold text-2xl flex flex-row justify-start items-center gap-1">
                  Date Cake
                </label>
                <p className="text-md text-stone-400">
                  Starting From LKR. 1500
                </p>
                <Button
                  className="w-full lg:w-2/4 mt-5 rounded-full"
                  variant="bordered"
                  color="primary"
                  size="lg"
                  onPress={() =>
                    window.open(
                      "https://api.whatsapp.com/send/?phone=94776717312&text&type=phone_number&app_absent=0",
                      "_blank"
                    )
                  }
                >
                  Order Now
                </Button>
              </div>
              <div className="w-full lg:w-[20rem] shadow-lg p-5 rounded-2xl bg-white bg-opacity-5">
                <div className="w-full flex justify-center mb-3 p-2">
                  <Image
                    src={"/img/Cake (7).png"}
                    width={250}
                    height={250}
                    alt="Cake-07"
                    className="rounded-2xl"
                  />
                </div>
                <label className="w-full font-bold text-2xl flex flex-row justify-start items-center gap-1">
                  Jar Cake
                </label>
                <p className="text-md text-stone-400">
                  Starting From LKR. 1500
                </p>
                <Button
                  className="w-full lg:w-2/4 mt-5 rounded-full"
                  variant="bordered"
                  color="primary"
                  size="lg"
                  onPress={() =>
                    window.open(
                      "https://api.whatsapp.com/send/?phone=94776717312&text&type=phone_number&app_absent=0",
                      "_blank"
                    )
                  }
                >
                  Order Now
                </Button>
              </div>
              <div className="w-full lg:w-[20rem] shadow-lg p-5 rounded-2xl bg-white bg-opacity-5">
                <div className="w-full flex justify-center mb-3 p-2">
                  <Image
                    src={"/img/Cake (8).png"}
                    width={250}
                    height={250}
                    alt="Cake-08"
                    className="rounded-2xl"
                  />
                </div>
                <label className="w-full font-bold text-2xl flex flex-row justify-start items-center gap-1">
                  Cup Cake
                </label>
                <p className="text-md text-stone-400">
                  Starting From LKR. 1500
                </p>
                <Button
                  className="w-full lg:w-2/4 mt-5 rounded-full"
                  variant="bordered"
                  color="primary"
                  size="lg"
                  onPress={() =>
                    window.open(
                      "https://api.whatsapp.com/send/?phone=94776717312&text&type=phone_number&app_absent=0",
                      "_blank"
                    )
                  }
                >
                  Order Now
                </Button>
              </div>
              <div className="w-full lg:w-[20rem] shadow-lg p-5 rounded-2xl bg-white bg-opacity-5">
                <div className="w-full flex justify-center mb-3 p-2">
                  <Image
                    src={"/img/Cake (9).png"}
                    width={250}
                    height={250}
                    alt="Cake-09"
                    className="rounded-2xl"
                  />
                </div>
                <label className="w-full font-bold text-2xl flex flex-row justify-start items-center gap-1">
                  Red Velvet Cake
                </label>
                <p className="text-md text-stone-400">
                  Starting From LKR. 1500
                </p>
                <Button
                  className="w-full lg:w-2/4 mt-5 rounded-full"
                  variant="bordered"
                  color="primary"
                  size="lg"
                  onPress={() =>
                    window.open(
                      "https://api.whatsapp.com/send/?phone=94776717312&text&type=phone_number&app_absent=0",
                      "_blank"
                    )
                  }
                >
                  Order Now
                </Button>
              </div>
              <div className="w-full lg:w-[20rem] shadow-lg p-5 rounded-2xl bg-white bg-opacity-5">
                <div className="w-full flex justify-center mb-3 p-2">
                  <Image
                    src={"/img/Cake (10).png"}
                    width={250}
                    height={250}
                    alt="Cake-10"
                    className="rounded-2xl"
                  />
                </div>
                <label className="w-full font-bold text-2xl flex flex-row justify-start items-center gap-1">
                  Wedding Cake
                </label>
                <p className="text-md text-stone-400">
                  Starting From LKR. 1500 according to preferences
                </p>
                <Button
                  className="w-full lg:w-2/4 mt-5 rounded-full"
                  variant="bordered"
                  color="primary"
                  size="lg"
                  onPress={() =>
                    window.open(
                      "https://api.whatsapp.com/send/?phone=94776717312&text&type=phone_number&app_absent=0",
                      "_blank"
                    )
                  }
                >
                  Order Now
                </Button>
              </div>
              <div className="w-full lg:w-[20rem] shadow-lg p-5 rounded-2xl bg-white bg-opacity-5">
                <div className="w-full flex justify-center mb-3 p-2">
                  <Image
                    src={"/img/Cake (11).png"}
                    width={250}
                    height={250}
                    alt="Cake-11"
                    className="rounded-2xl"
                  />
                </div>
                <label className="w-full font-bold text-2xl flex flex-row justify-start items-center gap-1">
                  Birthday Cake
                </label>
                <p className="text-md text-stone-400">
                  Starting From LKR. 1500 according to preferences
                </p>
                <Button
                  className="w-full lg:w-2/4 mt-5 rounded-full"
                  variant="bordered"
                  color="primary"
                  size="lg"
                  onPress={() =>
                    window.open(
                      "https://api.whatsapp.com/send/?phone=94776717312&text&type=phone_number&app_absent=0",
                      "_blank"
                    )
                  }
                >
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full lg:w-[70%] flex flex-col lg:flex-row justify-center items-center p-5 z-10 fade mt-10 mb-10 fade"
          id="designs"
        >
          <div className="w-full flex-col flex items-end justify-center p-5">
            <label className="w-full text-3xl lg:text-4xl font-bold text-center">
              Few Designs of Cakes
            </label>
            <div className="w-full mt-8 flex flex-row flex-wrap justify-center gap-4">
              <div className="w-full lg:w-[20rem] shadow-lg p-5 rounded-2xl bg-white bg-opacity-5">
                <div className="w-full flex justify-center mb-3 p-2">
                  <Image
                    src={"/img/Design (6).png"}
                    width={250}
                    height={250}
                    alt="Design-01"
                    className="rounded-2xl"
                  />
                </div>
                <label className="w-full font-bold text-2xl flex flex-row justify-center items-center gap-1 text-center">
                  Thank You Cake
                </label>
              </div>
              <div className="w-full lg:w-[20rem] shadow-lg p-5 rounded-2xl bg-white bg-opacity-5">
                <div className="w-full flex justify-center mb-3 p-2">
                  <Image
                    src={"/img/Design (5).png"}
                    width={250}
                    height={250}
                    alt="Design-02"
                    className="rounded-2xl"
                  />
                </div>
                <label className="w-full font-bold text-2xl flex flex-row justify-center items-center gap-1 text-center">
                  Birthday Cake
                </label>
              </div>
              <div className="w-full lg:w-[20rem] shadow-lg p-5 rounded-2xl bg-white bg-opacity-5">
                <div className="w-full flex justify-center mb-3 p-2">
                  <Image
                    src={"/img/Design (4).png"}
                    width={250}
                    height={250}
                    alt="Design-03"
                    className="rounded-2xl"
                  />
                </div>
                <label className="w-full font-bold text-2xl flex flex-row justify-center items-center gap-1 text-center">
                  Birthday Cake
                </label>
              </div>
              <div className="w-full lg:w-[20rem] shadow-lg p-5 rounded-2xl bg-white bg-opacity-5">
                <div className="w-full flex justify-center mb-3 p-2">
                  <Image
                    src={"/img/Design (3).png"}
                    width={250}
                    height={250}
                    alt="Design-04"
                    className="rounded-2xl"
                  />
                </div>
                <label className="w-full font-bold text-2xl flex flex-row justify-center items-center gap-1 text-center">
                  Birthday Cake
                </label>
              </div>
              <div className="w-full lg:w-[20rem] shadow-lg p-5 rounded-2xl bg-white bg-opacity-5">
                <div className="w-full flex justify-center mb-3 p-2">
                  <Image
                    src={"/img/Design (2).png"}
                    width={250}
                    height={250}
                    alt="Design-05"
                    className="rounded-2xl"
                  />
                </div>
                <label className="w-full font-bold text-2xl flex flex-row justify-center items-center gap-1 text-center">
                  Puberty Ceremony Cake
                </label>
              </div>
              <div className="w-full lg:w-[20rem] shadow-lg p-5 rounded-2xl bg-white bg-opacity-5">
                <div className="w-full flex justify-center mb-3 p-2">
                  <Image
                    src={"/img/Design (1).png"}
                    width={250}
                    height={250}
                    alt="Design-06"
                    className="rounded-2xl"
                  />
                </div>
                <label className="w-full font-bold text-2xl flex flex-row justify-center items-center gap-1 text-center">
                  Birthday Cake
                </label>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full lg:w-[70%] flex flex-col lg:flex-row justify-center items-center p-5 z-10 fade"
          id="delivery"
        >
          <div className="w-full lg:w-[55%] flex-col flex items-start justify-center p-5">
            <label className="w-full text-3xl lg:text-4xl font-bold">
              Fast and Free Delivery!
            </label>
            <p className="w-full lg:w-4/5 mt-5 text-md lg:text-lg text-stone-400 text-justify">
              {" "}
              No need to waste your time with our fast and free delivery within
              the <span className="font-bold text-white">Kandy area.</span> We
              offer fast and free delivery to bring your favorite cakes right to
              your doorstep.
            </p>
          </div>
          <div className="w-full lg:w-[45%] hidden lg:flex justify-center lg:justify-end p-5">
            <Image
              src={"/img/delivery.png"}
              width={400}
              height={400}
              alt="Cake-img-01"
            />
          </div>
        </div>
        <div className="w-full lg:w-[70%] flex flex-col justify-center items-center p-5 mt-10 z-10 fade">
          <label className="w-full text-3xl lg:text-4xl font-bold text-center">
            Make Your Dream Cake
          </label>
          <div className="w-full flex flex-col items-center gap-5 p-5">
            {" "}
            <p className="w-full text-stone-400 text-md text-center">
              Have a question or a custom cake request?
            </p>
            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-5">
              <Button
                className="w-full lg:w-1/4 xl:1/5 rounded-full btns"
                size="lg"
                onPress={() =>
                  window.open(
                    "https://api.whatsapp.com/send/?phone=94776717312&text&type=phone_number&app_absent=0",
                    "_blank"
                  )
                }
              >
                Contact Crave Gallery
              </Button>
            </div>
            <p className="w-full text-stone-400 text-sm text-center">
              Feel Free to Contact Crave Gallery
            </p>
          </div>
        </div>
        <footer className="w-full bottom-0 flex items-center flex-col mt-20 bg-black bg-opacity-5 footer p-10">
          <label className="text-2xl font-bold flex items-center">
            <img src="/img/CraveGallery-Logo.png" className="h-20" />
          </label>
          <div className="w-full flex justify-center gap-3 mt-5 mb-5 flex-wrap">
            <a className="cursor-pointer font-bold text-lg" href="#home">
              Home
            </a>
            <a className="cursor-pointer font-bold text-lg" href="#about">
              About
            </a>
            <a className="cursor-pointer font-bold text-lg" href="#cakes">
              Cakes
            </a>
            <a className="cursor-pointer font-bold text-lg" href="#designs">
              Designs
            </a>
            <a className="cursor-pointer font-bold text-lg" href="#delivery">
              Delivery
            </a>
          </div>
          <div className="w-full flex justify-center gap-3 mt-5 mb-5">
            <a
              className="bg-stone-900 rounded-full p-2 cursor-pointer flex items-center justify-center"
              href="#"
              target="_blank"
            >
              <FaWhatsapp size={22} />
            </a>
            <a
              className="bg-stone-900 rounded-full p-2 cursor-pointer flex items-center justify-center"
              href="#"
              target="_blank"
            >
              <FaFacebook size={22} />
            </a>
            <a
              className="bg-stone-900 rounded-full p-2 cursor-pointer flex items-center justify-center"
              href="#"
              target="_blank"
            >
              <FaInstagram size={22} />
            </a>
            <a
              className="bg-stone-900 rounded-full p-2 cursor-pointer flex items-center justify-center"
              href="#"
              target="_blank"
            >
              <FaYoutube size={22} />
            </a>
          </div>

          <label className="text-base font-normal text-gray-400">
            &copy; {currentYear} Crave Gallery. All rights reserved.
          </label>
        </footer>
      </div>
    </div>
  );
};

export default page;
