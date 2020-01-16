import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import mock_avatar from "../images/mock_avatar.png";
import Divider from "@material-ui/core/Divider";
import LinearProgress from "@material-ui/core/LinearProgress";
import styles from "./InfoCard.css";

const useStyles = makeStyles(theme => ({
  root: {
    width: "33%",
    backgroundColor: "#F5F5F5",
    height:'800px'
  },
  avatars: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(2)
    }
  },
  small: {
    backgroundColor: "#7A7A7A",
    width: theme.spacing(7),
    height: theme.spacing(7)
  },
  large: {
    width: theme.spacing(13),
    height: theme.spacing(13)
  },
  unit: {
    fontSize: "10px"
  },
  username: {
    fontSize: "25px",
    textAlign: "center"
  },
  calNumbers: {
    fontSize: "22px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "30px 20px 0px 20px"
  },
  calUnits: {
    fontSize: "12px",
    color: "#7C7C7C",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "0px 20px 20px 20px"
  },
  mealsNum: {
    fontSize: "18px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& > *": {
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4)
      }
  
  },
  meals: {
    fontSize: "12px",
    color: "#7C7C7C",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& > *": {
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4)
      }
  }
}));

export default function InfoCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.avatars}>
        <Avatar alt="mock_avatar" className={classes.small}>
          <div>59</div>
          <div className={classes.unit}>kg</div>
        </Avatar>
        <Avatar alt="mock_avatar" src={mock_avatar} className={classes.large} />
        <Avatar alt="mock_avatar" className={classes.small}>
          <div>163</div>
          <div className={classes.unit}>cm</div>
        </Avatar>
      </div>
      <div className={classes.username}>Jane Appleseed</div>
      <br />
      <br />
      <Divider light />
      <div className={classes.calNumbers}>
        <div>1289 cal</div>
        <div>1500 cal</div>
      </div>
      <div className={classes.calUnits}>
        <div>comsumed</div>
        <div>daily goal </div>
      </div>
      <LinearProgress
        style={{ width: "90%", margin: "0 auto" }}
        variant={"determinate"}
        value={65}
      />
      <div
        style={{
          fontSize: "14px",
          fontWeight: "bold",
          color: "#7C7C7C",
          textAlign: "center",
          margin: "10px"
        }}
      >
        65%
      </div>
      <div className={classes.mealsNum}>
        <div>153</div>
        <div>570</div>
        <div>453</div>
        <div>113</div>
      </div>
      <div className={classes.meals}>
        <div>Breakfast</div>
        <div>Lunch</div>
        <div>Dinner</div>
        <div>Snacks</div>
      </div>
    </div>
  );
}
