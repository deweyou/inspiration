import { useCallback, useEffect } from 'react';
import styles from './index.module.less';
import { useLocalStorage } from '@uidotdev/usehooks';
import { Theme } from '##/types';
import { StorageKey } from '##/constants';
import { useWillMount } from '##/hooks';

const getSystemTheme = () => (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

export const ToggleTheme = () => {
  const [{ theme, isSystemTheme }, setTheme] = useLocalStorage<{ theme: Theme; isSystemTheme: boolean }>(StorageKey.THEME, {
    theme: getSystemTheme(),
    isSystemTheme: true,
  });


  const onThemeChange = useCallback((theme: Theme, isSystemTheme = false) => {
    document.documentElement.setAttribute('data-theme', theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      setTheme({
        isSystemTheme,
        theme,
      });
  }, [setTheme]);

  useWillMount(() => {
    onThemeChange(theme, isSystemTheme)
  })

  useEffect(() => {
    if (!isSystemTheme) {
      return;
    }
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      onThemeChange(e.matches ? 'dark' : 'light', true)
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [isSystemTheme, onThemeChange, setTheme]);

  const toggleTheme = useCallback((evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const x = evt.clientX;
    const y = evt.clientY;

    const newTheme = theme === 'dark'? 'light' : 'dark';

    document.documentElement.style.setProperty('--x', `${x}px`);
    document.documentElement.style.setProperty('--y', `${y}px`);

    if(document.startViewTransition) {
      document.startViewTransition(() => onThemeChange(newTheme));
    }else {
      onThemeChange(newTheme);
    }
  }, [theme, onThemeChange])

  return (
    <div className={styles.toggleTheme} onClick={(evt) => toggleTheme(evt)}>
      You can click 
      <span className={styles.hl}>anywhere</span> 
      to switch themes.
    </div>
  );
};
