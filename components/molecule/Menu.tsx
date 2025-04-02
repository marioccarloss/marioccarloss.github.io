import Link from 'next/link';
import Navigation from './Navigation';

export default function Menu({ refMenu }: { refMenu: React.RefObject<HTMLDivElement> }) {
  return (
    <>
      <div className="menu" ref={refMenu}>
        <Navigation />
        <span className="contact">
          Get in touch
          <Link href="mailto:marioccarloss@gmail.com">
            marioccarloss@gmail.com
          </Link>
        </span>
      </div>

      <style jsx global>{`
        .menu {
          background-color: var(--color-bg);
          color: var(--color-primary);
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: 5.25% 3rem 1fr 3rem 5.25%;
          grid-template-rows: 1rem 3rem 1fr 3rem 2rem;
          transition: all .9s cubic-bezier(.77,0,.175,1);
        }

        .menu.open {
          right: 0;
        }

        .menu .logo {
          width: 3rem;
          height: 3rem;
          grid-column: 2;
        }

        .menu .logo svg {
          width: 3rem;
        }

        .menu nav {
          grid-column: 3;
          grid-row: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
        }

        .menu ul {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding: 0;
          color: var(--color-light);
        }

        .menu .activeLink {
          font-weight: bolder;
          color: var(--color-primary);
        }

        .menu .darkMode {
          display: none;
        }

        .menu .contact {
          grid-column: 3;
          grid-row: 4;
          text-align: center;
          color: var(--color-light);
        }

        .menu .contact a {
          color: var(--color-primary);
        }

        @media screen and (min-width: 1024px) {
          .menu {
            grid-template-rows: 1rem 3rem 1fr 3rem calc(2vw + 2vh);
          }

          .menu li a {
            font-size: calc(4vw + 4vh);
          }

          .menu li a::after {
            display: none;
          }

          .menu .contact {
            font-size: calc(0.72vw + 0.72vh);
          }
        }
      `}
      </style>
    </>
  )
}
