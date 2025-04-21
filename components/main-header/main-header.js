import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "../main-header/main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "../main-header/main-header-background";

import NavLink from "./nav-link";

function MainHeader() {
 
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image
            src={logoImg.src}
            alt="a plate on with food"
            priority
            width={120}
            height={60}
          />
          Ultimate Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
             <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
