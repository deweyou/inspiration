import { useState } from "react"
import styles from './index.module.less';
import classnames from "classnames";
import { ROUTES } from "##/constants";
import { useNavigate, useLocation } from "react-router";

const SidebarList = () => {
  const location = useLocation()
  const nav = useNavigate();

  return <div className={styles.list}>{ROUTES.map((route) => {
    return (
      <div 
        key={route.title} 
        className={classnames(styles.listItem, {[styles.active]: location.pathname === route.path})}
        onClick={() => nav(route.path)}
        >
      {route.title}
      </div>
    )
  })}</div>
}

export const Sidebar = () => {
  const [expand, setExpand] = useState(true);

  return (
    <>
    <div className={classnames(styles.sidebar, {
      [styles.expand]: expand,
    })}><SidebarList /></div>
    <div 
      onClick={() => setExpand(pre => !pre)} 
      className={
        classnames(
          expand ? 'i-iconoir:nav-arrow-left' : 'i-iconoir:list', styles.listIcon,
          {[styles.expand]: expand}
        )
      } 
    />
    </>
  )
}