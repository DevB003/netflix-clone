import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import Action from "../../components/action/Action";
import Comedy from "../../components/comedy/Comedy";
import Entertainment from "../../components/entertainment/Entertainment";
import Thriller from "../../components/thriller/Thriller";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured/>
      <Action/>
      <Comedy/>
      <Entertainment/>
      <Thriller/>
    </div>
  );
};

export default Home;
