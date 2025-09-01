import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Link to={"/dashboard"}>Link to Dashboard</Link>
    </div>
  );
};

export default Home;
