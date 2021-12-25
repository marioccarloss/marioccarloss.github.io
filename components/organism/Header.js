import Link from "next/link";
import IconLogo from "../atoms/IconLogo";
import Navigation from "../molecule/Navigation";
import Hamburger from "../atoms/Hamburger";

export default function Header () {

  return (
    <header>
      <Link href="/">
        <a className="logo"><IconLogo /></a>
      </Link>
      <Navigation />
      <Hamburger />
    </header>
  )
}
