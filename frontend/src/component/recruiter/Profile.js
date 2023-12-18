import { useState } from "react";
import {
  Button,
  Grid,
  Typography,
  Paper,
  makeStyles,
  TextField,
} from "@material-ui/core";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

const useStyles = makeStyles((theme) => ({
  body: {
    height: "inherit",
  },
  popupDialog: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Profile = () => {
  const classes = useStyles();

  const [profileDetails, setProfileDetails] = useState({
    name: "",
    bio: "",
    contactNumber: "",
  });

  const handleInput = (key, value) => {
    setProfileDetails({
      ...profileDetails,
      [key]: value,
    });
  };

  return (
    <>
      <Grid
        container
        item
        direction="column"
        alignItems="center"
        style={{ padding: "30px", minHeight: "93vh" }}
      >
        
        <Grid item xs style={{ width: "100%" }}>
          <Paper
            style={{
              padding: "20px",
              outline: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid container direction="column" alignItems="stretch" spacing={3}>
            <Grid item >
              <Typography variant="h3" component="h2" style={{color:"#3f51b5",fontWeight:"bold"}}>
                Profile
              </Typography>
            </Grid>
              <Grid item>
                <TextField
                  label="Name"
                  value={profileDetails.name}
                  onChange={(event) => handleInput("name", event.target.value)}
                  className={classes.inputBox}
                  variant="outlined"
                  fullWidth
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Bio (upto 250 words)"
                  multiline
                  rows={8}
                  style={{ width: "100%" }}
                  variant="outlined"
                  onChange={(event) => {
                    if (
                      event.target.value.split(" ").filter(function (n) {
                        return n != "";
                      }).length <= 250
                    ) {
                      handleInput("bio", event.target.value);
                    }
                  }}
                />
              </Grid>
              <Grid
                item
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <PhoneInput
                  country={"id"}
                  style={{ width: "auto" }}
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              style={{ padding: "10px 50px", marginTop: "30px" }}
            >
              Update Details
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
