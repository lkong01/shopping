import "../styles/home.css";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function Home(props) {
  return (
    <div className="home">
      <div className="home-info">
        <h1>Welcome to Pet Clothing Store</h1>
        <Link to="/products">View Products</Link>
      </div>
    </div>
  );
}

export default Home;
