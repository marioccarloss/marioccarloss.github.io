import Link from "next/link";
import IconLinkedin from '../atoms/IconLinkedin';
import IconBehance from '../atoms/IconBehance';
import IconGithub from '../atoms/IconGithub';

export default function Social() {
  return(
    <>
      <ul className="social">
        <li>
          <Link href="https://www.linkedin.com/in/marioccarloss/" target="_blank">
            <IconLinkedin width={20} height={22}/>
          </Link>
        </li>
        <li>
          <Link href="https://www.behance.net/marioccarloss/"  target="_blank">
            <IconBehance width={24} height={22}/>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/marioccarloss/" target="_blank">
            <IconGithub width={20} height={22}/>
          </Link>
        </li>
      </ul>

      <style jsx global>{`
        .social {
          grid-column: 2;
          grid-row: 1;
          gap: 1rem;
          padding: 0;
        }

        .social,
        a {
          display: flex;
          align-items: center;
          justify-content: center;
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

        @media screen and (min-width: 1024px) {
          .social {
            position: fixed;
            left: 7%;
            flex-direction: column;
            bottom: calc(2vw + 2vh);
          }

          .social a {
            display: inline-block;
          }

          .social svg {
            height: calc(1.82vw + 1.82vh);
            width: calc(1vw + 1vh);
          }
        }
      `}
      </style>
    </>
  )
}