import Link from "next/link";
import { useRouter } from "next/router";
import DarkMode from "../atoms/DarkMode";

const navLinks = [
  {title: 'Home', path: '/'},
  {title: 'Portfolio', path: '/portfolio'},
  // {title: 'Blog', path: '/blog'},
  {title: 'Contact', path: '/contact'},
]
export default function Navigation () {

  const router = useRouter();

  return (
    <>
      <nav>
        <ul>
          {
            navLinks.map((link) => (
              <li key={link.title}>
                <Link href={link.path} passHref className={router.pathname === link.path ? "activeLink" : ""}>
                  {link.title}
                </Link>
              </li>
            ))
          }
        </ul>
        <DarkMode />
      </nav>

      <style jsx>{`
        ul {
          display: none;
        }

        nav {
          grid-column: 4;
          grid-row: 2;
        }

        @media screen and (min-width: 1024px) {
          ul,
          nav {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: calc(2.25vw + 2.25vh);
          }

          a {
            font-size: calc(0.72vw + 0.72vh);
          }

          .activeLink {
            font-weight: bolder;
            position: relative;
          }

          .activeLink:after {
            content: '';
            background-color: var(--color-primary);
            width: 8px;
            height: 8px;
            border-radius: 10px;
            position: absolute;
            top: 2rem;
            left: 0;
            right: 0;
            margin: 0 auto;
          }
        }
      `}
      </style>
    </>
  )
}
