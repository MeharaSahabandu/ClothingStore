import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiInputLabel-root": {
      color: "black",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
  },
  button: {
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: "black",
      opacity: 0.9,
    },
  },
  formBox: {
    padding: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
}));

export default function Signup() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Paper className={classes.formBox} elevation={3}>
        <Typography variant="h4" component="h1" color="black" align="center">
          <b>Signup</b>
        </Typography>
        <form className={classes.root} style={{ marginTop: "20px" }}>
          <TextField
            label="Full Name"
            fullWidth
            margin="normal"
            variant="outlined"
            color="primary"
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            variant="outlined"
            color="primary"
          />
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            variant="outlined"
            color="primary"
          />
          <TextField
            label="Password"
            fullWidth
            margin="normal"
            variant="outlined"
            color="primary"
            type="password"
          />
          <TextField
            label="Confirm Password"
            fullWidth
            margin="normal"
            variant="outlined"
            color="primary"
            type="password"
          />
          <Button
            type="submit"
            variant="outlined"
            maxWidth="50%"
            fullWidth
            className={classes.button}
            style={{ marginTop: "20px" }}
          >
            <b>Sign Up</b>
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
