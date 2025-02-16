import { Link } from "react-router-dom";

export const MainPage = () => {
  return (
    <h2>
      Main page <Link to="/auth">Auth</Link>
    </h2>
  );
};
