"use client";

import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import logo from "public/logo5.png";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { IconButton } from "@mui/material";

const Navbar = () => {
  return (
    <div className="bg-white 2xl:py-8 py-4 2xl:px-52 px-10  flex items-center justify-between">
      <IconButton>
        <MenuIcon className="md:text-4xl text-2xl" />
      </IconButton>
      <Image src={logo} className="md:w-32 w-24 relative -top-3" alt="logo" />
      <div className="flex items-center sm:gap-6 gap-4">
        <IconButton>
          <Person2OutlinedIcon className="md:text-3xl  hidden md:block" />
        </IconButton>
        <IconButton>
          <FavoriteBorderOutlinedIcon className="md:text-3xl " />
        </IconButton>
        <IconButton>
          <SearchOutlinedIcon className="md:text-3xl " />
        </IconButton>
        <IconButton>
          <ShoppingBagOutlinedIcon className="md:text-3xl " />
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
