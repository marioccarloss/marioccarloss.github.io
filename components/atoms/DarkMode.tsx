import { useTheme } from 'next-themes';
import IconDarkMode from './IconDarkMode';

export default function DarkMode() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        className="darkMode"
        onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}
      >
        <IconDarkMode width={26} type={theme === 'dark' ? true : false} />
      </button>

      <style jsx global>{`
        .darkMode {
          width: 50px;
          height: 50px;
        }
      `}
      </style>
    </>
  )
};
