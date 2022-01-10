import {
  Collapse,
  CircularProgress,
  Link,
  makeStyles,
  Snackbar,
  TextField,
  Typography,
  Alert,
  styled,
} from "@mui/material";
import { useRouter } from "next/dist/client/router";
import NextLink from "next/link";
import { ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "src/actions";
import { RootState } from "types/RootState";
import RectangleButton from "../design/RectangleButton";

const Dialog = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "20%",
  padding: "1em",
  margin: "0 auto",
  textAlign: "center",
  [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
    width: "50%",
  },
  [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
    width: "80%",
  },
}));

const RegistrationForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "1em",
  width: "100%",
});

const Header = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  backgroundImage: `linear-gradient(180deg, ${theme.palette.gradient.start} 19.64%, ${theme.palette.gradient.end} 69.64%)`,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  marginBottom: "1em",
}));

const SwitchAuthContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "1em",
});

const StyledLink = styled(Link)({
  "&:hover": {
    textDecoration: "none",
    filter: "brightness(85%)",
  },
});

const AuthenticationDialog = ({
  registration = false,
}: {
  registration: boolean;
}): ReactElement => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const errorMessage = useSelector(
    (state: RootState) => state?.accounts?.error
  );

  const register = async () => {
    setLoading(true);
    try {
      await dispatch(actions.auth.register(email, password));
      router.push("/");
    } catch (err) {
      console.error(err);
      setError(true);
    }
    setLoading(false);
  };
  const login = async () => {
    setLoading(true);
    try {
      await dispatch(actions.auth.login(email, password));
      router.push("/");
    } catch (err) {
      console.error(err);
      setError(true);
    }
    setLoading(false);
  };

  return (
    <Dialog>
      <Snackbar
        open={error}
        autoHideDuration={5000}
        onClose={(e) => setError(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity="error">{errorMessage}</Alert>
      </Snackbar>
      <RegistrationForm
        onSubmit={(e) => {
          e.preventDefault();

          if (registration) {
            register();
          } else {
            login();
          }
        }}
      >
        <Header variant="h4">Welcome</Header>
        <Collapse in={loading}>
          <CircularProgress />
        </Collapse>
        <TextField
          required
          name="email"
          size="medium"
          label="Email"
          variant="outlined"
          fullWidth={true}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          required
          type="password"
          name="password"
          size="medium"
          label="Password"
          variant="outlined"
          fullWidth={true}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <RectangleButton type="submit">
          {registration ? "Register" : "Login"}
        </RectangleButton>
        <SwitchAuthContainer>
          <Typography variant="body1">
            {registration
              ? "Already have an account?"
              : "Don't have an account?"}
          </Typography>
          <NextLink href={registration ? "/login" : "/register"} passHref>
            <StyledLink>{registration ? "Log In" : "Sign Up"}</StyledLink>
          </NextLink>
          {registration ? null : (
            <NextLink href="/forgot-password" passHref>
              <Link>Forgot password</Link>
            </NextLink>
          )}
        </SwitchAuthContainer>
      </RegistrationForm>
    </Dialog>
  );
};

export default AuthenticationDialog;
