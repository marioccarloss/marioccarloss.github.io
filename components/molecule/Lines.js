export default function Lines() {
  return(
    <>
      <div className="lines">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <style jsx>{`
        .lines {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          grid-template-columns: repeat(6,1fr);
          grid-template-rows: 1fr;
          z-index: 1;
          display: none;
        }

        span {
          width: 1px;
          height: 100%;
          background: var(--color-tertiary);
        }

        @media screen and (min-width: 1024px) {
          .lines {
            display: grid;
          }
        }
      `}
      </style>
    </>
  )
}
