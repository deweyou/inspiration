import { Outlet } from 'react-router';
import styles from './index.module.less';
import cls from 'classnames';
import { Sidebar } from '##/components';
import { useCallback } from 'react';
import { Theme } from '##/types';
import { useLocalStorage } from '@uidotdev/usehooks';
import { useWillMount } from '##/hooks';
import { StorageKey } from '##/constants';

const getSystemTheme = () => (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

export const Layout = () => {
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
    
  return (
    <div className={cls(styles.layout ,'font-mono')}>
      <div className={styles.sidebar}><Sidebar /></div>
      <div className={styles.outlet}><Outlet /></div>
    </div>
  );
}