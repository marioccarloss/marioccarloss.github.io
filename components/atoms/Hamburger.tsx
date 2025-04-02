import { createRef } from "react";
import Menu from '../molecule/Menu';

export default function Hamburger() {
  const hamburger = createRef<HTMLButtonElement>();
  const menu = createRef<HTMLDivElement>();

  const openModal = () => {
    menu.current?.classList.toggle("open");
    hamburger.current?.classList.toggle("active");
  }

  return(
    <>
      <button
        className="hamburger"
        aria-hidden="true"
        ref={hamburger}
        onClick={() => openModal()}
      >
      </button>

      <Menu refMenu={menu} />

      <style jsx>{`
        .hamburger {
          height: 50px;
          position: relative;
          width: 50px;
          overflow: hidden;
          grid-column: 6;
          grid-row: 2;
          transition-delay: 0.3s;
          z-index: 2;
        }

        .hamburger::before,
        .hamburger::after {
          content: '';
          background-color: var(--color-primary);
          display: block;
          position: absolute;
          right: 0;
          height: 2px;
          width: 80%;
          transition: all 0.3s ease;
          transform-origin: center center;
        }

        .hamburger::before {
          top: 20px;
        }

        .hamburger::after {
          bottom: 20px;
        }

        .hamburger.active::before {
          transform: rotate(-90deg) translateY(2px);
        }

        .hamburger.active::after {
          transform: rotate(-90deg) translateY(-8px) translateX(8px);
        }

        @media screen and (min-width: 1024px) {
          .hamburger {
            cursor: pointer;
            position: fixed;
            top: 50%;
            transform: translateY(-50%);
            left: 6.5%;
          }
        }
      `}
      </style>
    </>
  )
}
