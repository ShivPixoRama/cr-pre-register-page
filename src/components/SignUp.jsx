import React, { useState } from "react";
import "./SignUp.scss";
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
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
const mobileRegex = /^\d{10,15}$/;

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profession, setProfession] = useState("");
  const [howDidYouHear, setHowDidYouHear] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  // const [gender, setGender] = useState(''); // Uncomment this line if you decide to use gender
  const [mobile, setMobile] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [mobileError, setMobileError] = useState("");

  const formatDate = (date) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const validateEmail = () => {
    setEmailError(emailRegex.test(email) ? "" : "Invalid email address");
  };

  const validatePassword = () => {
    setPasswordError(
      passwordRegex.test(password)
        ? ""
        : "The password must contain at least one lowercase letter, one uppercase letter, one digit, and be at least 8 characters in length."
    );
  };

  const validateMobile = () => {
    setMobileError(mobileRegex.test(mobile) ? "" : "Invalid mobile number");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate each field
    validateEmail();
    validatePassword();
    validateMobile();

    // If there are validation errors, do not proceed with form submission
    if (emailError || passwordError || mobileError) {
      return;
    }

    // Proceed with form submission
    console.log({
      firstName,
      lastName,
      email,
      profession,
      howDidYouHear,
      password,
      birthday,
      mobile,
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
            backgroundColor: "antiquewhite",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}> */}
          {/* <LockOutlinedIcon /> */}
          <img src={Logo} style={{ width: "10%" }}></img>
          {/* </Avatar> */}
          <Typography component="h1" variant="h5">
            Pre-Register
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={validateEmail}
                  error={Boolean(emailError)}
                  helperText={emailError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  // required
                  fullWidth
                  id="profession"
                  label="Profession"
                  name="profession"
                  autoComplete="profession"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth >
                  <InputLabel id="how-did-you-hear-label">
                    How did you hear about us?
                  </InputLabel>
                  <Select
                    labelId="how-did-you-hear-label"
                    id="how-did-you-hear"
                    value={howDidYouHear}
                    name="howDidYouHear"
                    label="How did you hear about us?"
                    autoComplete="How did you hear about us?"
                    onChange={(e) => setHowDidYouHear(e.target.value)}
                  >
                    <MenuItem value="Instagram">Instagram</MenuItem>
                    <MenuItem value="Facebook">Facebook</MenuItem>
                    <MenuItem value="CourseProvider">Course Provider</MenuItem>
                    <MenuItem value="Google">Google</MenuItem>
                    <MenuItem value="Referral">Referral</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {/* <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={validatePassword}
                  error={Boolean(passwordError)}
                  helperText={passwordError}
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  // required
                  fullWidth
                  id="mobile"
                  label="Mobile Number"
                  name="mobile"
                  autoComplete="phone-number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  onBlur={validateMobile}
                  error={Boolean(mobileError)}
                  helperText={mobileError}
                />
              </Grid>

              <Grid container item xs={12}>
                <DatePicker
                  selected={birthday}
                  onChange={(date) => setBirthday(date)}
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  dateFormat="yyyy"
                  placeholderText="Select a date"
                  customInput={
                    <TextField
                      required
                      fullWidth
                      id="birthday"
                      label="DOB *"
                      name="birthday"
                      InputProps={{
                        readOnly: true,
                      }}
                      // error={Boolean(!birthday)}
                      // helperText={
                      //   Boolean(!birthday) ? "Please select a date" : ""
                      // }
                    />
                  }
                  style={{ width: '100%', important: 'true' }}
                />
              </Grid>

              {/* <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="gender"
                  label="gender"
                  // type="radio"
                  id="gender"
                  autoComplete="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </Grid> */}
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I hereby agree to receive updates about the product launch"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Register
            </Button>
            {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <RouterLink to="SignIn">
                  <Link variant="body2">Already have an account? Sign in</Link>
                </RouterLink>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
