import Social from '../molecule/Social';

export default function Footer () {
  return (
    <>
      <footer>
        <Social />
        <p>{`© marioroca ${new Date().getFullYear()}. All rights reserved.`}</p>
      </footer>

      <style jsx>{`
        footer {
          display: grid;
          grid-template-columns: 1.5rem 1fr 1.5rem;
        }

        p {
          grid-column: 2;
          grid-row: 2;
          text-align: center;
          font-size: 1rem;
          line-height: 1.12;
          margin: 0.72rem auto 1rem auto;
        }

        @media screen and (min-width: 1024px) {
          p {
            font-size: calc(0.62vw + 0.62vh);
            margin: 0 auto calc(2vw + 2vh) auto;
          }
        }
      `}
      </style>
    </>
  )
}
