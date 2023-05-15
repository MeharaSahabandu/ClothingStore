import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "black" }}>
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 16px", // Adjust padding as needed
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" style={{ color: "white" }}>
           <b> FunkyPop</b>
          </Typography>
        </div>
        <div>
          <Button color="inherit" onClick={handleLogin}>
            Login
          </Button>
          <Button color="inherit" onClick={handleSignup}>
            Signup
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
