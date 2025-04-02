type IconDarkModeProps = {
  type: boolean;
  width: number | string;
}

export default function IconDarkMode({type, width}: IconDarkModeProps) {
  return type === false ? (
    <svg viewBox="0 0 32 32" width={width} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="m30.706 19.721a1 1 0 0 0 -1.042-.234 13.423 13.423 0 0 1 -17.151-17.152 1 1 0 0 0 -1.276-1.278 15.214 15.214 0 0 0 -5.727 3.623 15.422 15.422 0 0 0 21.81 21.81 15.213 15.213 0 0 0 3.623-5.728 1 1 0 0 0 -.237-1.041zm-4.8 5.355a13.422 13.422 0 1 1 -15.859-21.312 15.514 15.514 0 0 0 4.2 13.985 15.51 15.51 0 0 0 13.985 4.2 13.357 13.357 0 0 1 -2.326 3.127z"/>
    </svg>
  ) : (
    <svg viewBox="0 0 32 32" width={width} xmlns="http://www.w3.org/2000/svg">
      <path d="m30.706 19.721a1 1 0 0 0 -1.042-.234 13.423 13.423 0 0 1 -17.151-17.152 1 1 0 0 0 -1.276-1.278 15.214 15.214 0 0 0 -5.727 3.623 15.422 15.422 0 0 0 21.81 21.81 15.214 15.214 0 0 0 3.623-5.728 1 1 0 0 0 -.237-1.041z" fill="#fdc830"/>
    </svg>
  )
}
