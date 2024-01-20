import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

const defaultTheme = createTheme();

export default function SignIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState(null);
  const [passwordError, setPasswordError] = React.useState(null);

  const validateEmail = () => {
    setEmailError(emailRegex.test(email) ? null : "Invalid email address");
  };

  const validatePassword = () => {
    setPasswordError(
      passwordRegex.test(password)
        ? null
        : "The password must contain at least one lowercase letter, one uppercase letter, one digit, and be at least 8 characters in length."
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate email
    validateEmail();

    // Validate password
    validatePassword();

    // If there are validation errors, do not proceed with form submission
    if (emailError || passwordError) {
      return;
    }

    // Proceed with form submission
    console.log({
      email,
      password,
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            // marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={Logo} style={{ width: "10%" }}></img>

          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
              error={Boolean(emailError)}
              helperText={emailError}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validatePassword}
              error={Boolean(passwordError)}
              helperText={passwordError}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <RouterLink>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </RouterLink>
              </Grid>
              <Grid item>
                <RouterLink to="/">
                  <Link variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
