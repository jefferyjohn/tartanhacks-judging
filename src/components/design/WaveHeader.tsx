import { Link, makeStyles, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { ReactElement } from "react";
import NextLink from "next/link";

const WaveContainer = styled("div")({
  position: "absolute",
  width: "100%",
  overflow: "hidden",
  lineHeight: 0,
});

const Title = styled(Typography)(({ theme }) => ({
  position: "absolute",
  zIndex: 1,
  color: "#fff",
  opacity: 0.6,
  marginLeft: "0.5em",
  marginTop: "0.3em",
  [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
    marginLeft: "0.5em",
    marginTop: "0.5em",
    fontSize: "5em",
  },
  [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
    marginLeft: "0.7em",
    marginTop: "0.7em",
    fontSize: "3em",
  },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  position: "absolute",
  zIndex: 1,
  color: "#fff",
  opacity: 0.6,
  marginLeft: "1.7em",
  marginTop: "4em",
  [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
    marginLeft: "1.7em",
    marginTop: "4em",
    fontSize: "2em",
  },
  [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
    marginLeft: "2.5em",
    marginTop: "5.5em",
    fontSize: "1em",
  },
}));

const WaveSVG = styled("svg")(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "250px",
  filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2))",
  [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
    height: "15em",
  },
  [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
    height: "10em",
  },
}));

const WaveHeader = (): ReactElement => {
  const theme = useTheme();
  return (
    <WaveContainer>
      <NextLink href="/" passHref>
        <Link>
          <Title variant="h1">TartanHacks</Title>
          <Subtitle variant="h4">Feb 4-6, 2022</Subtitle>
        </Link>
      </NextLink>
      <WaveSVG viewBox="0 0 1440 420" preserveAspectRatio="none">
        <path
          d="M1440 251.445C1337.08 331.37 1135.65 328.667 662.609 328.667C246.957 328.667 117.54 329.706 0 407L5.72619e-05 -248L1440 -248L1440 251.445Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="720"
            y1="407"
            x2="720"
            y2="-248"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={theme.palette.waveGradient.start} />
            <stop
              offset="1"
              stopColor={theme.palette.waveGradient.end}
              stopOpacity="0.88"
            />
          </linearGradient>
        </defs>
      </WaveSVG>
    </WaveContainer>
  );
};

export default WaveHeader;
