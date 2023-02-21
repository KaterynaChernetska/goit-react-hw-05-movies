import css from './GoBackBtn.module.css';
import { Link, useLocation } from 'react-router-dom';

export const GoBackBtn = () => {
  const location = useLocation();
  return (
    <Link to={location.state?.from || location} className={css.btn}>
      Go back
    </Link>
  );
};
