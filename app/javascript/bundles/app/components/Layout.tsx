import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppRouter from "../routes/AppRouter";

const useStyles = makeStyles({
  Layout: {
    width: "100vw",
    display: "flex",
    flexDirection: "column"
  },
  Page: {
    flex: "1 1",
    overflow: "auto"
  }
});

export default function Layout(props) {
  const classes = useStyles();
  return (
    <div className={classes.Layout}>
      <div className={classes.Page}>
        <AppRouter {...props} />
      </div>
    </div>
  );
}
