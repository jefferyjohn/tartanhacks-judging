import { Button } from "@mui/material"
import { styled } from "@mui/material/styles"
import React, { ReactElement } from "react"

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.button.main,
  borderRadius: "10px",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
  color: "white",
  "&:hover": {
    backgroundColor: theme.palette.button.focused
  }
}))

const RectangleButton = ({
  className,
  children,
  type,
  onClick
}: {
  className?: string
  children?: ReactElement | string
  type: "button" | "reset" | "submit" | undefined
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}): ReactElement => {
  return (
    <>
      <StyledButton
        variant="contained"
        type={type}
        className={className}
        onClick={onClick}
      >
        {children}
      </StyledButton>
    </>
  )
}

export default RectangleButton
