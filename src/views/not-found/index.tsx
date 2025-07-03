import cls from 'classnames';
import styles from './index.module.less';
import { Link } from 'react-router';
import { useDocumentTitle } from '@uidotdev/usehooks';

export const NotFound = () => {
  useDocumentTitle('404');

  return (
    <div className={styles.not_found}>
      <div className={styles.text}>404</div>
      <Link to={'/'}>
        <div className={cls('i-iconoir:home', styles.icon)}></div>
      </Link>
    </div>
  );
};
