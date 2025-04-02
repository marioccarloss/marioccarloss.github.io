type IconGithubProps = {
  width: number | string;
  height: number | string;
}

export default function IconGithub({width,height}: IconGithubProps) {
  return(
    <svg viewBox="0 0 26 25" fill="currentColor" width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      <path d="M13 0C5.8175 0 0 5.72 0 12.7747C0 18.4199 3.7245 23.2072 8.88875 24.895C9.53875 25.0153 9.77708 24.6198 9.77708 24.2808C9.77708 23.9774 9.76625 23.1736 9.76083 22.1087C6.14467 22.8789 5.382 20.3948 5.382 20.3948C4.7905 18.9204 3.93575 18.5261 3.93575 18.5261C2.75817 17.7342 4.02675 17.7504 4.02675 17.7504C5.33217 17.8393 6.01792 19.0667 6.01792 19.0667C7.17708 21.0199 9.061 20.4555 9.80417 20.1294C9.92117 19.3028 10.2559 18.7406 10.6275 18.421C7.74042 18.1014 4.706 17.0029 4.706 12.1084C4.706 10.7142 5.20975 9.5745 6.04392 8.68075C5.89767 8.35792 5.45892 7.059 6.15767 5.29967C6.15767 5.29967 7.24642 4.95733 9.73267 6.60942C10.7727 6.32558 11.8777 6.18475 12.9827 6.17825C14.0877 6.18475 15.1927 6.32558 16.2327 6.60942C18.7027 4.95733 19.7914 5.29967 19.7914 5.29967C20.4902 7.059 20.0514 8.35792 19.9214 8.68075C20.7502 9.5745 21.2539 10.7142 21.2539 12.1084C21.2539 17.0159 18.2152 18.096 15.3227 18.4102C15.7777 18.7937 16.2002 19.5769 16.2002 20.774C16.2002 22.4835 16.1839 23.8572 16.1839 24.2721C16.1839 24.6068 16.4114 25.0066 17.0777 24.8788C22.2788 23.2018 26 18.4113 26 12.7747C26 5.72 20.1793 0 13 0Z"/>
    </svg>
  )
}
