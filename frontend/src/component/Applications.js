import { useState } from "react";
import {
  Button,Chip,Grid,makeStyles,Paper,
  Typography,Modal
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles(() => ({
  body: {
    height: "inherit",
  },
  statusBlock: {
    width: "100%",
    height: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "uppercase",
  },
  jobTileOuter: {
    padding: "30px",
    margin: "20px 0",
    boxSizing: "border-box",
    width: "100%",
  },
  popupDialog: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const ApplicationTile = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const colorSet = {
    applied: "#3454D1",
    shortlisted: "#DC851F",
    accepted: "#09BC8A",
    rejected: "#D1345B",
    deleted: "#B49A67",
    cancelled: "#FF8484",
    finished: "#4EA5D9",
  };

  return (
    <Paper className={classes.jobTileOuter} elevation={3}>
      <Grid container>
        <Grid container item xs={9} spacing={1} direction="column">
          <Grid item>
            <Typography variant="h5"> Software Engineer</Typography>
          </Grid>
          <Grid item>Posted By: Putri</Grid>
          <Grid item>Role : Junior Software Engineer</Grid>
          <Grid item>Salary : &#36;{'1000'} per month</Grid>
          <Grid item>
            Duration :{"1 month "}
          </Grid>
          <Grid item>
              <Chip label={'React'} style={{ marginRight: "2px" }} />
              <Chip label={'Node Js'} style={{ marginRight: "2px" }} />
          </Grid>
          <Grid item>Applied On: 11/11/2023</Grid>
            <Grid item>Joined On: 12/11/2023</Grid>
        </Grid>
        <Grid item container direction="row" xs={3}>
          <Grid item xs>
            {/* <Paper
               style={{
                background: colorSet['#09BC8A'],
                color: "#09BC8A3",
              }}
            >
              Accepted
            </Paper> */}
          </Grid>
            <Grid item xs={3} container direction="column" style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
              <div></div>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                style={{ width: '100%', height: '25%', fontSize: '14px' }}
                onClick={() => {
                  setOpen(true);
                }}
              >
                Rate Job
              </Button>
            </Grid>
        </Grid>
      </Grid>
         
      
      <Modal open={open} onClose={handleClose} className={classes.popupDialog}>
        <Paper
          style={{
            padding: "20px",
            outline: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minWidth: "30%",
            alignItems: "center",
          }}
        >
          <Rating
            name="simple-controlled"
            style={{ marginBottom: "30px" }}
            value= {0}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ padding: "10px 50px" }}
          >
            Submit
          </Button>
        </Paper>
      </Modal>
    </Paper>
  );
};

const Applications = () => {

  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2" style={{color:"white",fontWeight:"bold"}}>Applications</Typography>
      </Grid>

      <Grid
        container
        item
        xs
        direction="column"
        style={{ width: "100%" }}
        alignItems="stretch"
        justify="center"
      >
            <Grid item>
              <ApplicationTile/>
            </Grid>
      </Grid>
    </Grid>
  );
};

export default Applications;
