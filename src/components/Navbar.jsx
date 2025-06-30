import "../App.css";
const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav_logo">
          <img src="/public/images/Sleek Logo with Circuit Icon.png" alt="" />
        </div>

        <div className="nav_link">
          <ul>
            <li>Home </li>
            <li>About </li>
            <li>Contact us </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
