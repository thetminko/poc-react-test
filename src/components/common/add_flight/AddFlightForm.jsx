import React, { useState } from 'react';
import { TextField, makeStyles, FormLabel, FormControl, RadioGroup, FormControlLabel, Radio, Typography, Grid, Button, Divider } from '@material-ui/core';
import { FlightType, DateTimeFormat } from '../../../constants';
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import moment from 'moment';

const styles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  formNote: {
    fontSize: 12,
    marginBottom: theme.spacing(0),
    color: theme.palette.font.faded,
  },
  flightTypeControl: {
    margin: theme.spacing(1),
  },
  flightTypeLegend: {
    fontSize: 12
  },
  divider: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  buttons: {
    marginRight: theme.spacing(1)
  }
}));

const AddFlightForm = props => {
  const { root, flightTypeControl, flightTypeLegend, formNote, divider, buttons } = styles();

  const [error, setError] = useState({
    destination: '',
    arrival: ''
  });


  const minDepartureTime = moment(new Date()).add(12, 'hours');
  const initialDepartureTime = moment(minDepartureTime).add(12, 'hours');
  const [departureDateTime, setDepartureDateTime] = useState(initialDepartureTime);

  const minArrivalTime = moment(departureDateTime).add(10, 'minutes');
  const initialArrivalTime = moment(minArrivalTime).add(10, 'minutes');
  const [arrivalDateTime, setArrivalDateTime] = useState(initialArrivalTime);

  const [flightType, setFlightType] = useState(FlightType.CHEAP);

  const onFlightTypeChange = (event) => setFlightType(event.target.value);

  return (
    <div className={root}>
      <Typography variant="body2" className={formNote}>
        Note: All fields are required to fill in
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            id="addflight-form-destination"
            label="Destination"
            placeholder="E.g. Singapore"
            style={{ marginTop: 8 }}
            helperText={error.destination}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            error={!!error.destination}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <KeyboardDateTimePicker
            variant="standard"
            ampm={true}
            label="Departure Time"
            style={{ marginTop: 8, minWidth: '100%' }}
            value={departureDateTime}
            minDate={minDepartureTime}
            strictCompareDates={true}
            onChange={setDepartureDateTime}
            onError={console.log}
            disablePast
            format={DateTimeFormat.display}
            minDateMessage={'Departure time should be at least 5 hours later from now'}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            id="addflight-form-arrival"
            label="Arrival"
            placeholder="E.g. Japan"
            style={{ marginTop: 8 }}
            helperText={error.arrival}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            error={!!error.arrival}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <KeyboardDateTimePicker
            variant="standard"
            ampm={true}
            label="Arrival Time"
            style={{ marginTop: 8, minWidth: '100%' }}
            minDate={minArrivalTime}
            value={arrivalDateTime}
            onChange={setArrivalDateTime}
            strictCompareDates={true}
            onError={console.log}
            disablePast
            format={DateTimeFormat.display}
            minDateMessage={'Arrival time should be after departure time'}
          />
        </Grid>
        <FormControl component="fieldset" className={flightTypeControl}>
          <FormLabel component="legend" className={flightTypeLegend}>Flight Type</FormLabel>
          <RadioGroup aria-label="flighType" name="flightType" value={flightType} row onChange={onFlightTypeChange}>
            <FormControlLabel value={FlightType.CHEAP} control={<Radio color="primary" />} label="Budget" />
            <FormControlLabel value={FlightType.BUSINESS} control={<Radio color="primary" />} label="Business" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Divider className={divider} />
      <Button variant="contained" color="primary" size="medium" className={buttons}>
        Add Flight
      </Button>
      <Button variant="outlined" color="primary" size="medium" className={buttons}>
        Back to Listing
      </Button>
    </div>
  );
};

export default AddFlightForm;;;;;