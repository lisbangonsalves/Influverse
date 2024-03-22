import * as React from "react";
import { alpha } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import "./HomeLanding.css";
import { ReactComponent as Homesvg } from "./hom.svg";
// import SvgIcon from "@material-ui/core/SvgIcon";
const theme = createTheme({
  palette: {
    secondary: {
      main: "#E98EAD",
      light: "#f0bdcf",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#47008F",
    },
  },
});
export default function Hero() {
  return (
    <>
      {/* <SvgIcon> */}
      <Homesvg />
      {/* </SvgIcon> */}

      <Box
        id="hero"
        sx={(theme) => ({
          width: "100%",
          backgroundImage: theme.palette.mode === "light",
          // ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
          // : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
          backgroundSize: "100% 20%",
          backgroundRepeat: "no-repeat",
        })}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
          }}
        >
          <Stack
            spacing={2}
            useFlexGap
            sx={{ width: { xs: "100%", sm: "70%" } }}
          >
            <Typography
              component="h1"
              variant="h1"
              className="text-style"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignSelf: "center",
                textAlign: "center",
                color: "white",
              }}
            >
              Empower your brand&apos;s journey by connecting with influencers.
              seamlessly
            </Typography>
            <Typography
              variant="body1"
              textAlign="center"
              color="text.secondary"
            >
              Discover our innovative dashboard, curated to deliver top-tier
              solutions tailored precisely to your needs. <br />
              Elevate your marketing experience with our cutting-edge features
              and services.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignSelf="center"
              spacing={1}
              useFlexGap
              sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
            >
              <ThemeProvider theme={theme}>
                <Button variant="contained" color="secondary">
                  Explore Now
                </Button>
              </ThemeProvider>
            </Stack>
          </Stack>
          <Box
            className="background-img"
            id="image"
            sx={(theme) => ({
              mt: { xs: 8, sm: 10 },
              alignSelf: "center",
              height: { xs: 200, sm: 700 },
              width: "100%",
              backgroundSize: "cover",
              borderRadius: "10px",
              outline: "1px solid",
              outlineColor:
                theme.palette.mode === "light"
                  ? alpha("#BFCCD9", 0.5)
                  : alpha("#9CCCFC", 0.1),
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`
                  : `0 0 24px 12px ${alpha("#033363", 0.2)}`,
            })}
          ></Box>
        </Container>
      </Box>
    </>
  );
}
