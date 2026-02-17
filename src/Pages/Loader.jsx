import "./Loader.css";
import logo from "../Images/Logo.png"; // path check kar lena

function Loader() {
  return (
    <div className="loader-wrapper">
      <img src={logo} alt="Company Logo" className="logo-loader" />
      <p>Please wait ...</p>
    </div>
  );
}

export default Loader;
