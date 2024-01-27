import React, { useState } from "react";
import "./SignUp.scss";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../assets/Bvive_logo_new.png";
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
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YoutubeIcon from "@mui/icons-material/YouTube";
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
  const [mobile, setMobile] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [startDate, setStartDate] = useState(null);

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

    setSubmitSuccess(true);
    setTimeout(() => {
      window.location.href = "https://bvive.shop/";
    }, 3000);
  };
  const handleDateChange = (date) => {
    const currentDate = new Date();
    
    if (date > currentDate) {
      alert("Please select a date in the past or today.");
      // Optionally, you can reset the date to the current date
      setStartDate(currentDate);
    } else {
      setStartDate(date);
    }
  };  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {submitSuccess ? (
          <Box
            sx={{
              marginTop: 2,
              marginBottom: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "antiquewhite",
              padding: 2,
            }}
          >
            {/* <Typography  variant="body2" color="primary" align="center">
              Thank you for submitting the form!
            </Typography> */}
            <div class="circle__box">
              <div class="circle__wrapper circle__wrapper--right">
                <div class="circle__whole circle__right"></div>
              </div>
              <div class="circle__wrapper circle__wrapper--left">
                <div class="circle__whole circle__left"></div>
              </div>
              <div class="circle__checkmark"></div>
            </div>
            <div style={{ textAlign: "center" }}>
              {" "}
              Thank you for subscribing!
              <br></br>
              We'll redirect you to shop in 2-3 seconds...
            </div>
          </Box>
        ) : (
          <Box
            sx={{
              marginTop: 2,
              marginBottom: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "antiquewhite",
              padding: 2,
            }}
          >
            <img
              src={Logo}
              style={{ width: "45%", marginBottom: "10px" }}
            ></img>
            <Typography
              component="h1"
              variant="h6"
              sx={{ textAlign: "center" }}
            >
              Get early access to our new fitness app launching in a few weeks
              <br></br>
              pre-register now!
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
                  <FormControl fullWidth>
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
                      <MenuItem value="CourseProvider">
                        Course Provider
                      </MenuItem>
                      <MenuItem value="Google">Google</MenuItem>
                      <MenuItem value="Referral">Referral</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <TextField
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
                    dateFormat="dd/MM/yyyy"
                    selected={startDate}
                    onChange={(date) => handleDateChange(date)}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    popperClassName="some-custom-class"
                    popperPlacement="top"
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
                      />
                    }
                    style={{ width: "100%", important: "true" }}
                    maxDate={new Date()}  
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I agree to receive product launch updates"
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
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <Link
                href="https://www.facebook.com/profile.php?id=61551652394165"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon
                  style={{ fontSize: 30, color: "#0866ff", marginRight: 10 }}
                />
              </Link>
              <Link
                href="https://www.instagram.com/bviveofficial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon
                  style={{ fontSize: 30, color: "#E4405F", marginRight: 10 }}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/bvive/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon
                  style={{ fontSize: 30, color: "#0a66c2", marginRight: 10 }}
                />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UC7De0VCT97KHKca4mQSugBQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YoutubeIcon style={{ fontSize: 30, color: "#ff0000" }} />
              </Link>
            </Box>
          </Box>
        )}
      </Container>
    </ThemeProvider>
  );
}
