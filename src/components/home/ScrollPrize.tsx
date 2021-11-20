import { Button, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { ReactElement } from "react";

type Prize = {
  name: string,
  description: string,
  _id: string
}

const useStyles = makeStyles((theme) => ({
  allPrizes: {
    display: "flex",
    overflowX: "scroll",
    flexDirection: "row",
  },
  box: {
    display: "flex", 
    flexWrap: "wrap", 
    flexDirection: "column", 
    alignContent: "center", 
    width: "25%",
    height: "25%",
    background: "linear-gradient(316.54deg, rgba(255, 255, 255, 0.85) 35.13%, rgba(255, 227, 227, 0.7565) 126.39%)",
    boxShadow: "0px 4px 4px rgba(200, 116, 56, 0.25)",
    backdropFilter: "blur(4px)",
    borderRadius: "25px",
    textAlign: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  prizeTitle: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    //fontWeight: "600",
    fontSize: "22px",
    lineHeight: "33px",
    color: "#AA5418",
    alignSelf: "center",
  },
  prizeInfo: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#AA5418",
    alignSelf: "center",
  },
  prizeSelect: {
    background: "#F7C062",
    boxShadow: "0px, 4px, 4px, rgba(219, 121, 52, 0.5)",
    borderRadius: "10px",
    width: "25%", //based on box height and width (need to change if these change)
    height: "20%", //based on box height and width (need to change if these change)
    alignSelf: "center",
  }
}));

const ScrollPrize = ({
  //prizeSelectArray
}: {
  // prizeSelectArray: Prize[]
}): ReactElement => {
  const classes = useStyles();
  //const lengthArray: number = prizeSelectArray.length;
  const prizeSelectArray = [{ name: "A", description: "A"}, { name: "B", description: "B"}, //test array
  { name: "C", description: "C"},{ name: "D", description: "D"}, 
  { name: "A", description: "A"}, { name: "A", description: "A"}]
  return (
    <div className={classes.allPrizes}>
      {
        prizeSelectArray.map((prize) => {
          const { name, description } = prize;
          return <Box className={classes.box}>
            <div className={classes.prizeTitle}>
              <Typography variant="h4">
                {name}
              </Typography>   
            </div>
            <div className={classes.prizeInfo}>
              <Typography variant="body2">
                {description}
              </Typography>
            </div>
            <div className={classes.prizeSelect}>
              <Button variant="text" size="large">View</Button>
            </div>
          </Box>
        })
      }
    </div>
  );
};

export default ScrollPrize;


