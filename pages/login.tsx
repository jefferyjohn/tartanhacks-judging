import { styled } from "@mui/material/styles"
import { NextPage } from "next"
import React, { ReactElement, useEffect } from "react"
import AuthenticationDialog from "src/components/auth/AuthenticationDialog"
import ScottyLabsIcon from "src/components/design/ScottyLabsIcon"
import WaveHeader from "src/components/design/WaveHeader"

const Dialog = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "10em",
  boxSizing: "border-box",
  [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
    paddingTop: "3em"
  }
}))

const ScottyContainer = styled("div")({
  zIndex: -1,
  opacity: 0.3,
  bottom: 0,
  width: "100%",
  height: "100%",
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "end"
})

const ScottyIcon = styled(ScottyLabsIcon)(({ theme }) => ({
  position: "relative",
  width: "40%",
  bottom: 0,
  [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
    width: "100%"
  }
}))

const LoginPage: NextPage = (): ReactElement => {
  useEffect(() => {
    window.localStorage.removeItem("accessToken")
  }, [])
  return (
    <div>
      <WaveHeader />
      <ScottyContainer>
        <ScottyIcon />
      </ScottyContainer>
      <Dialog>
        <AuthenticationDialog registration={false} />
      </Dialog>
    </div>
  )
}

export default LoginPage
