import { useState } from "react";
import {
  Button,
  Chip,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  Paper,
  TextField,
  Typography,
  Modal,
  Slider,
  FormControlLabel,
  MenuItem,
  Checkbox,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from "@material-ui/icons/FilterList";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";


const useStyles = makeStyles((theme) => ({
  body: {
    height: "inherit",
  },
  button: {
    width: "100%",
    height: "100%",
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
  statusBlock: {
    width: "100%",
    height: "15%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "uppercase",
  },
}));

const JobTile = (props) => {
  const classes = useStyles();
  const { job } = props;

  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [jobDetails, setJobDetails] = useState(job);

  const handleInput = (key, value) => {
    setJobDetails({
      ...jobDetails,
      [key]: value,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };

  const postedOn = new Date('2023-11-10');

  return (
    <Paper className={classes.jobTileOuter} elevation={3}>
      <Grid container>
        <Grid container item xs={9} spacing={1} direction="column">
          <Grid item>
            <Typography variant="h5">{'Software Engineer'}</Typography>
          </Grid>
          <Grid item>
            <Rating value={5} readOnly />
          </Grid>
          <Grid item>Role : {'Junior Software Engineer'}</Grid>
          <Grid item>Salary : &#36;{'1000'} per month</Grid>
          <Grid item>
            Duration :{"1 month"}
          </Grid>
          <Grid item>Date Of Posting: {postedOn.toLocaleDateString()}</Grid>
          <Grid item>Number of Applicants: {'5'}</Grid>
          <Grid item>
            Remaining Number of Positions:{'3'}
          </Grid>
          <Grid item>
            <Chip label={'React'} style={{ marginRight: "2px" }} />
            <Chip label={'Node Js'} style={{ marginRight: "2px" }} />
          </Grid>
        </Grid>
        <Grid item container direction="row" xs={3}>
          <Grid item xs={3} container direction="column" style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
            <div></div>
            <Button
              variant="contained"
              color="primary"
              className={classes.statusBlock}
            >
              View Applicant
            </Button>
          </Grid>
          <Grid item xs={3} container direction="column" style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
            <div> </div>
            <Button
              variant="contained"
              className={classes.statusBlock}
              onClick={() => {
                setOpenUpdate(true);
              }}
              style={{
                background: "#FC7A1E",
                color: "#fff",
              }}
            >
              Update
            </Button>
          </Grid>
          <Grid item xs={2} container direction="column" style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.statusBlock}
              onClick={() => {
                setOpen(true);
              }}
            >
              Delete
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
          <Typography variant="h4" style={{ marginBottom: "10px" }}>
            Are you sure?
          </Typography>
          <Grid container justify="center" spacing={5}>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                style={{ padding: "10px 50px" }}
              >
                Delete
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                style={{ padding: "10px 50px" }}
                onClick={() => handleClose()}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
      <Modal
        open={openUpdate}
        onClose={handleCloseUpdate}
        className={classes.popupDialog}
      >
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
          <Typography variant="h4" style={{ marginBottom: "10px" }}>
            Update Details
          </Typography>
          <Grid
            container
            direction="column"
            spacing={3}
            style={{ margin: "10px" }}
          >
            <Grid item>
              <TextField
                label="Application Deadline"
                type="datetime-local"
                onChange={(event) => {
                  handleInput("deadline", event.target.value);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                label="Maximum Number Of Applicants"
                type="number"
                variant="outlined"
                onChange={(event) => {
                  handleInput("maxApplicants", event.target.value);
                }}
                InputProps={{ inputProps: { min: 1 } }}
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                label="Positions Available"
                type="number"
                variant="outlined"
                onChange={(event) => {
                  handleInput("maxPositions", event.target.value);
                }}
                InputProps={{ inputProps: { min: 1 } }}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container justify="center" spacing={5}>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                style={{ padding: "10px 50px" }}
              >
                Update
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                style={{ padding: "10px 50px" }}
                onClick={() => handleCloseUpdate()}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </Paper>
  );
};

const FilterPopup = (props) => {
  const classes = useStyles();
  const { open, handleClose, searchOptions, setSearchOptions, getData } = props;
  return (
    <Modal open={open} onClose={handleClose} className={classes.popupDialog}>
      <Paper
        style={{
          padding: "50px",
          outline: "none",
          minWidth: "50%",
        }}
      >
        <Grid container direction="column" alignItems="center" spacing={3}>
          <Grid container item alignItems="center">
            <Grid item xs={3}>
              Job Type
            </Grid>
            <Grid
              container
              item
              xs={9}
              justify="space-around"
            >
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="fullTime"
                      checked={searchOptions.jobType.fullTime}
                      onChange={(event) => {
                        setSearchOptions({
                          ...searchOptions,
                          jobType: {
                            ...searchOptions.jobType,
                            [event.target.name]: event.target.checked,
                          },
                        });
                      }}
                    />
                  }
                  label="Full Time"
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="partTime"
                      checked={searchOptions.jobType.partTime}
                      onChange={(event) => {
                        setSearchOptions({
                          ...searchOptions,
                          jobType: {
                            ...searchOptions.jobType,
                            [event.target.name]: event.target.checked,
                          },
                        });
                      }}
                    />
                  }
                  label="Part Time"
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="wfh"
                      checked={searchOptions.jobType.wfh}
                      onChange={(event) => {
                        setSearchOptions({
                          ...searchOptions,
                          jobType: {
                            ...searchOptions.jobType,
                            [event.target.name]: event.target.checked,
                          },
                        });
                      }}
                    />
                  }
                  label="Work From Home"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid container item alignItems="center">
            <Grid item xs={3}>
              Salary
            </Grid>
            <Grid item xs={9}>
              <Slider
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => {
                  return value * (100000 / 100);
                }}
                marks={[
                  { value: 0, label: "0" },
                  { value: 100, label: "100000" },
                ]}
                value={searchOptions.salary}
                onChange={(event, value) =>
                  setSearchOptions({
                    ...searchOptions,
                    salary: value,
                  })
                }
              />
            </Grid>
          </Grid>
          <Grid container item alignItems="center">
            <Grid item xs={3}>
              Duration
            </Grid>
            <Grid item xs={9}>
              <TextField
                select
                label="Duration"
                variant="outlined"
                fullWidth
                value={searchOptions.duration}
                onChange={(event) =>
                  setSearchOptions({
                    ...searchOptions,
                    duration: event.target.value,
                  })
                }
              >
                <MenuItem value="0">All</MenuItem>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
                <MenuItem value="6">6</MenuItem>
                <MenuItem value="7">7</MenuItem>
              </TextField>
            </Grid>
          </Grid>
          <Grid container item alignItems="center">
            <Grid item xs={3}>
              Sort
            </Grid>
            <Grid item container direction="row" xs={9}>
              <Grid
                item
                container
                xs={4}
                justify="space-around"
                alignItems="center"
                style={{ border: "1px solid #D1D1D1", borderRadius: "5px" }}
              >
                <Grid item>
                  <Checkbox
                    name="salary"
                    checked={searchOptions.sort.salary.status}
                    onChange={(event) =>
                      setSearchOptions({
                        ...searchOptions,
                        sort: {
                          ...searchOptions.sort,
                          salary: {
                            ...searchOptions.sort.salary,
                            status: event.target.checked,
                          },
                        },
                      })
                    }
                    id="salary"
                  />
                </Grid>
                <Grid item>
                  <label for="salary">
                    <Typography>Salary</Typography>
                  </label>
                </Grid>
                <Grid item>
                  <IconButton
                    disabled={!searchOptions.sort.salary.status}
                    onClick={() => {
                      setSearchOptions({
                        ...searchOptions,
                        sort: {
                          ...searchOptions.sort,
                          salary: {
                            ...searchOptions.sort.salary,
                            desc: !searchOptions.sort.salary.desc,
                          },
                        },
                      });
                    }}
                  >
                    {searchOptions.sort.salary.desc ? (
                      <ArrowDownwardIcon />
                    ) : (
                      <ArrowUpwardIcon />
                    )}
                  </IconButton>
                </Grid>
              </Grid>
              <Grid
                item
                container
                xs={4}
                justify="space-around"
                alignItems="center"
                style={{ border: "1px solid #D1D1D1", borderRadius: "5px" }}
              >
                <Grid item>
                  <Checkbox
                    name="duration"
                    checked={searchOptions.sort.duration.status}
                    onChange={(event) =>
                      setSearchOptions({
                        ...searchOptions,
                        sort: {
                          ...searchOptions.sort,
                          duration: {
                            ...searchOptions.sort.duration,
                            status: event.target.checked,
                          },
                        },
                      })
                    }
                    id="duration"
                  />
                </Grid>
                <Grid item>
                  <label for="duration">
                    <Typography>Duration</Typography>
                  </label>
                </Grid>
                <Grid item>
                  <IconButton
                    disabled={!searchOptions.sort.duration.status}
                    onClick={() => {
                      setSearchOptions({
                        ...searchOptions,
                        sort: {
                          ...searchOptions.sort,
                          duration: {
                            ...searchOptions.sort.duration,
                            desc: !searchOptions.sort.duration.desc,
                          },
                        },
                      });
                    }}
                  >
                    {searchOptions.sort.duration.desc ? (
                      <ArrowDownwardIcon />
                    ) : (
                      <ArrowUpwardIcon />
                    )}
                  </IconButton>
                </Grid>
              </Grid>
              <Grid
                item
                container
                xs={4}
                justify="space-around"
                alignItems="center"
                style={{ border: "1px solid #D1D1D1", borderRadius: "5px" }}
              >
                <Grid item>
                  <Checkbox
                    name="rating"
                    checked={searchOptions.sort.rating.status}
                    onChange={(event) =>
                      setSearchOptions({
                        ...searchOptions,
                        sort: {
                          ...searchOptions.sort,
                          rating: {
                            ...searchOptions.sort.rating,
                            status: event.target.checked,
                          },
                        },
                      })
                    }
                    id="rating"
                  />
                </Grid>
                <Grid item>
                  <label for="rating">
                    <Typography>Rating</Typography>
                  </label>
                </Grid>
                <Grid item>
                  <IconButton
                    disabled={!searchOptions.sort.rating.status}
                    onClick={() => {
                      setSearchOptions({
                        ...searchOptions,
                        sort: {
                          ...searchOptions.sort,
                          rating: {
                            ...searchOptions.sort.rating,
                            desc: !searchOptions.sort.rating.desc,
                          },
                        },
                      });
                    }}
                  >
                    {searchOptions.sort.rating.desc ? (
                      <ArrowDownwardIcon />
                    ) : (
                      <ArrowUpwardIcon />
                    )}
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              color="primary"
              style={{ padding: "10px 50px" }}
            >
              Apply
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
};

const MyJobs = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchOptions, setSearchOptions] = useState({
    query: "",
    jobType: {
      fullTime: false,
      partTime: false,
      wfh: false,
    },
    salary: [0, 100],
    duration: "0",
    sort: {
      salary: {
        status: false,
        desc: false,
      },
      duration: {
        status: false,
        desc: false,
      },
      rating: {
        status: false,
        desc: false,
      },
    },
  });
  
  return (
    <>
      <Grid
        container
        item
        direction="column"
        alignItems="center"
        style={{ padding: "30px", minHeight: "93vh" }}
      >
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs>
            <Typography variant="h4" style={{color:"white",fontWeight:"bold", alignItems: "center"}}>My Jobs</Typography>
          </Grid>
          <Grid item xs>
            <TextField
              label="Search Jobs"
              value={searchOptions.query}
              onChange={(event) =>
                setSearchOptions({
                  ...searchOptions,
                  query: event.target.value,
                })
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              style={{ width: "500px",backgroundColor:"white", borderRadius:"12px"}}
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <IconButton onClick={() => setFilterOpen(true)}>
              <FilterListIcon />
            </IconButton>
          </Grid>
        </Grid>

        <Grid
          container
          item
          xs
          direction="column"
          alignItems="stretch"
          justify="center"
        >
          <JobTile/>;
        </Grid>
      </Grid>
      <FilterPopup
        open={filterOpen}
        searchOptions={searchOptions}
        setSearchOptions={setSearchOptions}
        handleClose={() => setFilterOpen(false)}
        getData={() => {
          setFilterOpen(false);
        }}
      />
    </>
  );
};

export default MyJobs;
