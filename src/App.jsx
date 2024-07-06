import "./app.scss";

// Components
import Navbar from "./component/navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";


const App = () => {
  return (
    <>
      <Navbar />
      <HomePage/>
    </>
  );
};

export default App;
