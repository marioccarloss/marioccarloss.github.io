import Link from "next/link";
import IconLogo from "../atoms/IconLogo";
import Navigation from "../molecule/Navigation";
import Hamburger from "../atoms/Hamburger";

export default function Header () {

  return (
    <header>
      <Link href="/" className="logo">
        <IconLogo />
      </Link>
      <Navigation />
      <Hamburger />
    </header>
  )
}
