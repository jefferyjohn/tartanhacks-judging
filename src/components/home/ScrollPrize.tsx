import { Button, Box, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import React, { ReactElement } from "react"

type Prize = {
  name: string
  description: string
  _id: string
}

const PrizeContainer = styled("div")({
  display: "flex",
  overflowX: "scroll",
  flexDirection: "row"
})

const StyledBox = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
  alignContent: "center",
  width: "25%",
  height: "25%",
  background:
    "linear-gradient(316.54deg, rgba(255, 255, 255, 0.85) 35.13%, rgba(255, 227, 227, 0.7565) 126.39%)",
  boxShadow: "0px 4px 4px rgba(200, 116, 56, 0.25)",
  backdropFilter: "blur(4px)",
  borderRadius: "25px",
  textAlign: "center",
  justifyContent: "center",
  flexShrink: 0
})

const PrizeTitle = styled("div")({
  fontFamily: "Poppins",
  fontStyle: "normal",
  //fontWeight: "600",
  fontSize: "22px",
  lineHeight: "33px",
  color: "#AA5418",
  alignSelf: "center"
})

const PrizeInfo = styled("div")({
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "14px",
  lineHeight: "21px",
  color: "#AA5418",
  alignSelf: "center"
})

const PrizeSelect = styled("div")({
  background: "#F7C062",
  boxShadow: "0px, 4px, 4px, rgba(219, 121, 52, 0.5)",
  borderRadius: "10px",
  width: "25%", //based on box height and width (need to change if these change)
  height: "20%", //based on box height and width (need to change if these change)
  alignSelf: "center"
})

const ScrollPrize = (): ReactElement => {
  //const lengthArray: number = prizeSelectArray.length;
  const prizeSelectArray = [
    { name: "A", description: "A" },
    { name: "B", description: "B" }, //test array
    { name: "C", description: "C" },
    { name: "D", description: "D" },
    { name: "A", description: "A" },
    { name: "A", description: "A" }
  ]
  return (
    <PrizeContainer>
      {prizeSelectArray.map((prize, idx) => {
        const { name, description } = prize
        return (
          <StyledBox key={idx}>
            <PrizeTitle>
              <Typography variant="h4">{name}</Typography>
            </PrizeTitle>
            <PrizeInfo>
              <Typography variant="body2">{description}</Typography>
            </PrizeInfo>
            <PrizeSelect>
              <Button variant="text" size="large">
                View
              </Button>
            </PrizeSelect>
          </StyledBox>
        )
      })}
    </PrizeContainer>
  )
}

export default ScrollPrize
