import { Theme } from './Theme';

export default function GlobalStyle() {
  return(
    <style jsx global>{`
      :root {
        --color-light: #a9a9a9;
        --color-danger: #e53e3e;
      }

      [data-theme="dark"] {
        --color-bg: ${Theme.dark.background};
        --color-primary: ${Theme.dark.primary};
        --color-secondary: ${Theme.dark.secondary};
        --color-tertiary: ${Theme.dark.tertiary};
      }

      [data-theme="light"] {
        --color-bg: ${Theme.light.background};
        --color-primary: ${Theme.light.primary};
        --color-secondary: ${Theme.light.secondary};
        --color-tertiary: ${Theme.light.tertiary};
      }

      @font-face {
        font-family: "Cabin Regular";
        src: url("/fonts/Cabin-Regular.woff");
        font-style: normal;
        font-weight: 400;
        font-display: swap;
      }

      @font-face {
        font-family: "Cabin Bold";
        src: url("/fonts/Cabin-Bold.woff");
        font-style: normal;
        font-weight: 600;
        font-display: swap;
      }

      @font-face {
        font-family: "Questrial Regular";
        src: url("/fonts/Questrial-Regular.woff");
        font-style: normal;
        font-weight: 400;
        font-display: swap;
      }

      * {
        box-sizing: border-box;
      }

      *:focus {
        outline: none;
      }

      body,
      html,
      #__next {
        background-color: var(--color-bg);
      }

      body,
      #__next {
        color: var(--color-primary);
        font-family: "Questrial Regular";
        font-size: 16px;
        font-weight: 400;
        display: flex;
        margin: 0;
        width: 100%;
        min-height: calc(var(--vh, 1vh) * 100);
        flex-direction: column;
        scroll-behavior: smooth;
        text-rendering: optimizeSpeed;
        -webkit-font-smoothing: antialiased;
      }

      a {
        text-decoration: none;
        color: unset;
        cursor: pointer;
      }

      ul {
        list-style: none;
        margin: 0;
      }

      main {
        display: grid;
        grid-template-columns: 1.5rem 1fr 1.5rem;
        margin: auto;
      }

      button {
        background-color: transparent;
        border: none;
        color: unset;
        cursor: pointer;
      }

      .btn {
        background-color: var(--color-primary);
        color: var(--color-secondary);
        border-radius: 10rem;
        padding: 1.12rem 2.72rem;
        font-weight: bold;
        font-size: 1.2rem;
        display: inline-block;
      }

      main,
      footer {
        width: 100%;
        z-index: 2;
      }

      header {
        display: grid;
        grid-template-columns: 1.5rem 80px 1fr 50px 0.5rem 50px 1.5rem;
        grid-template-rows: 0.82rem 1fr 0.82rem;
        align-items: center;
        z-index: 3;
      }

      .logo {
        grid-column: 2;
        grid-row: 2;
        width: 3.25rem;
        z-index: 2;
      }

      .logo svg {
        width: 68px;
        height: 47px;
      }

      .info {
        grid-column: 2;
        grid-row: 2;
      }

      .title {
        font-family: 'Cabin', sans-serif;
        font-size: 2.2rem;
        line-height: 1.2;
      }

      .paragraph {
        font-size: 1.2rem;
        line-height: 1.5;
        margin: 0 0 1.2rem;
      }

      .cover__image {
        display: none;
      }

      .portfolio {
        display: flex;
        flex-direction: column;
        position: relative;
        margin-top: auto;
      }

      .portfolio img {
        width: 100%;
        display: block;
        transition: all .3s ease;
        z-index: 1;
        transform: scale(1.12)
      }

      .portfolio__list,
      .portfolio li {
        min-width: 100%;
        width: 100%;
        overflow: hidden;
      }

      .portfolio__list {
        clip-path: url(#brandClipPath);
        cursor: grab;
        z-index: 2;
        display: flex;
        align-items: center;
        overflow: hidden;
        padding: 0;
      }

      .portfolio li {
        position: relative;
        transition: all .5s cubic-bezier(0.7, 0, 0.3, 1);
      }

      .portfolio li span span {
        padding-top: 100% !important;
      }

      .portfolio small {
        opacity: 0;
      }

      .portfolio li.active img {
        transform: scale(1);
      }

      .portfolio li:hover::after{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        opacity: .3780;
      }

      .portfolio li:hover .btn-link{
        opacity: 1;
      }

      .portfolio li:hover img {
        transform: scale(1.02);
      }

      .portfolio > svg{
        position: absolute;
        top: 0;
        left: 0;
      }

      .btn-link{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 4;
        color: #FFFFFF;
        opacity: 0;
        text-decoration: none;
        padding: calc(1vw + 1vh);
        text-align: center;
        text-shadow: 0 4px 14px rgba(0, 0, 0, 0.92);
      }

      .btn-link span{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .btn-link svg{
        fill: #FFF;
        width: 1.25rem;
        height: 1.25rem;
        margin-left: .5rem;
      }

      .arrows{
        position: absolute;
        z-index: 2;
        right: 0;
        bottom: 8%;
      }

      .arrows button[disabled=disabled] svg{
        fill: #ccc;
      }

      .arrows button svg{
        fill: var(--color-primary);
      }

      .btn--left,.btn--right{
        font-size: 0;
        width: 40px;
        height: 40px;
        padding: 10px;
      }

      .btn--left{
        margin-left: auto;
        margin-right: .25rem;
      }

      form {
        grid-column: 2;
        grid-row: 3;
        display: flex;
        flex-direction: column;
        grid-gap: 0.5rem;
        margin-bottom: 2rem;
      }

      .field {
        position: relative;
        width: 100%;
      }

      .field label {
        position: absolute;
        top: 1rem;
        left: 1.25rem;
        transition: all 0.24s ease;
        font-size: 0.82rem;
        display: none;
      }

      .field label.move__top {
        top: 0.25rem;
      }

      .field input,
      .field textarea {
        appearance: none;
        border: none;
        box-shadow: inset 0 0 0 2px var(--color-tertiary);
        padding: 0;
        margin: 0;
        width: 100%;
        height: 50px;
        padding: 1rem 1.25rem;
        border-radius: 8vw;
        font-size: 1rem;
        font-family: "Questrial Regular";
      }

      .field input.is-invalid,
      .field textarea.is-invalid {
        box-shadow: inset 0 0 0 2px var(--color-danger);
      }

      .field textarea {
        min-height: 70px;
        resize: none;
      }

      .error {
        font-size: 0.82rem;
        display: block;
        line-height: 1;
        margin: 0.25rem 0;
        color: var(--color-danger);
        font-weight: 600;
        padding: 0 1rem;
      }

      form .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
      }

      form .btn:hover .spinner {
        border: 0.25em solid var(--color-primary);
      }

      .message {
        text-align: center;
        margin: 0.25rem auto 0 auto;
        font-size: 1rem;
        line-height: 1.25;
        width: 100%;
      }

      @media screen and (min-width: 1024px) {
        header {
          grid-template-columns: 5.25% calc(3.8vw + 3.8vh) 1fr 1fr 5.25%;
          grid-template-rows: calc(1.25vw + 1.25vh) 1fr 0.82rem;
        }

        .logo,
        .logo svg {
          width: calc(3.12vw + 3.12vh);
          height: calc(2.5vw + 2.5vh);
        }

        main {
          grid-template-columns: 16.75% calc(22vw + 22vh) 2% 1fr 7.5%;
          grid-template-rows: 1rem calc(22vw + 22vh) 1rem;
          overflow-x: hidden;
        }

        .btn {
          font-size: calc(1vw + 1vh);
          padding: calc(0.82vw + 0.82vh) calc(2.32vw + 2.32vh);
          transition: all .3s ease;
          font-weight: 500;
        }

        .btn:hover {
          background-color: transparent;
          box-shadow: inset 0 0 0 calc(0.072vw + 0.072vh) var(--color-primary);
          color: var(--color-primary);
        }

        .title {
          font-size: calc(2.26vw + 2.16vh);
          line-height: 1.052;
          margin: 0 0 calc(1vw + 1vh);
        }

        .paragraph {
          font-size: calc(1.1vw + 1.1vh);
          margin: 0 0 calc(0.82vw + 0.82vh);
        }

        .info {
          margin-top: auto;
        }

        .cover__image {
          display: flex;
          flex-direction: column;
          position: relative;
          grid-row: span 2;
          grid-column: 4;
          width: calc(20.52vw + 20.52vh);
          height: calc(23vw + 23vh);
          margin: 0;
        }

        form {
          grid-column: 4;
          grid-row: 2;
          margin: auto 0;
          width: 100%;
          display: flex;
          flex-direction: inherit;
          flex-wrap: wrap;
          justify-content: center;
          grid-gap: calc(0.62vw + 0.62vh);
        }

        .field {
          width: calc(50% - (0.35vw + 0.35vh));
        }

        .field:nth-child(3n) {
          width: 100%;
        }

        .field input,
        .field textarea {
          font-size: calc(0.7vw + 0.7vh);
          padding: calc(0.92vw + 0.92vh) calc(1vw + 1vh);
          height: auto;
        }

        .field textarea {
          height: calc(5vw + 5vh);
          border-radius: calc(1.32vw + 1.32vh);
        }

        form .btn {
          padding: calc(0.72vw + 0.72vh) calc(2.52vw + 2.52vh);
          font-size: calc(0.92vw + 0.92vh);
        }

        .message {
          margin-top: calc(0.5vw + 0.5vh);
          font-size: calc(0.82vw + 0.82vh);
        }
      }
    `}
    </style>
  )
}
