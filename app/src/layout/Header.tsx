import { Autocomplete, TextField } from "@mui/material";

const Header = () => {
  return (
    <header className="main-header">
      <h1>
        <span>E</span>asy<span>S</span>ells
      </h1>
      <button className="header-avatar">
        <img src="./gta.png" alt="" />
      </button>
    </header>
  );
};

export default Header;
