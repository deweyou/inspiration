import classnames from 'classnames';
import styles from './index.module.less';
import { useDocumentTitle } from '@uidotdev/usehooks';

export const Home = () => {

  useDocumentTitle('Home');

  return (
    <div className={styles.home}>
      <div className={styles.text}>Share some inspiration UX.</div>
      <div onClick={() => window.open('https://github.com/deweyou/inspiration')} className={classnames('i-iconoir:github-circle', styles.github)} />
    </div>
  );
};
