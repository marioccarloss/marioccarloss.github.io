import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import IconLinkTo from '../atoms/IconLinkTo';
import ClipPathBrand from '../atoms/ClipPathBrand';
import IconArrow from '../atoms/IconArrow';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';

export default function CarouselPortfolio({portfolio}) {

  const [slide, setSlide] = useState({ active: 0, translate: 0 })

  const goLeft = params => {
    portfolio &&
    slide.active === 0 ? setSlide({ active: portfolio.length - 1 , translate: -100 * (portfolio.length - 1) }) : setSlide({ active: params.active - 1 , translate: slide.translate + 100 })
  }

  const goRight = () => {
    portfolio &&
    slide.translate === - 100 * (portfolio.length - 1) ? setSlide({ active: 0, translate: 0}) : setSlide({ active: (slide.active + 1) % portfolio.length, translate: slide.translate - 100 })
  }

  const portolioSorted = portfolio.map(project => project).sort((a, b) => a.order - b.order);

  return(
    <>
      <div className="portfolio">
        <ReactScrollWheelHandler
          rightHandler={() => goLeft(slide)}
          leftHandler={() => goRight()}
          disableKeyboard={true}
        >
        <ul className="portfolio__list">
          {portfolio && portolioSorted.map((project, index) => (
            <li key={index}
              style={{ transform: `translateX(${slide.translate}%)` }}
              className={index === slide.active ?  `slide-project active` : `slide-project `}>
              <Image
                src={project?.image[0]?.url}
                width={618.88}
                height={693.67}
                layout="responsive"
                loading="eager"
                alt={project.title}
              />
              <Link href={project.url} target="_blank" className="btn-link">
                <span className="f f-ac">Visit <IconLinkTo /></span>
                <small>{project.title}</small>
              </Link>
            </li>
          ))}
        </ul>
        </ReactScrollWheelHandler>
        <ClipPathBrand id='brandClipPath' />
        <div className="arrows f">
          <button className="btn--left" onClick={() => goLeft(slide)} alt="Atrás">
            <IconArrow type="left" width="25px"/>
          </button>
          <button className="btn--right" onClick={() => goRight()} alt="Siguiente">
            <IconArrow type="right" width="25px"/>
          </button>
        </div>
      </div>

      <style jsx>{`
        .portfolio {
          grid-column: 2;
          grid-row: 3;
          width: 100%;
          height: calc(36vw + 36vh);
        }

        .btn-link {
          font-size: 1rem;
        }

        @media screen and (min-width: 1024px) {
          .portfolio {
            grid-row: span 2;
            grid-column: 4;
            width: calc(20.75vw + 20.75vh);
            height: calc(20.75vw + 20.75vh);
          }

          .btn-link {
            font-size: calc(.75vw + .75vh);
          }

          .btn-link svg {
            width: calc(.75vw + .75vh);
            height: calc(.75vw + .75vh);
          }
        }
      `}
      </style>
    </>
  )
}
