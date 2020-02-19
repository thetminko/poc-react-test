import React, { useState } from 'react';
import { TextField, makeStyles, FormLabel, FormControl, RadioGroup, FormControlLabel, Radio, Typography, Grid } from '@material-ui/core';
import { FlightType } from '../../../constants';
import { KeyboardDateTimePicker } from "@material-ui/pickers";

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
  }
}));

const AddFlightForm = props => {
  const { root, flightTypeControl, flightTypeLegend, formNote } = styles();

  const [error, setError] = useState({
    destination: '',
    arrival: ''
  });

  const [departureDate, handleDepartureDateChange] = useState(new Date("2018-01-01T00:00:00.000Z"));
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
            ampm={false}
            label="Departure Time"
            style={{ marginTop: 8, minWidth: '100%' }}
            value={departureDate}
            onChange={handleDepartureDateChange}
            onError={console.log}
            disablePast
            format="yyyy/MM/dd HH:mm"
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
            ampm={false}
            label="Arrival Time"
            style={{ marginTop: 8, minWidth: '100%' }}
            value={departureDate}
            onChange={handleDepartureDateChange}
            onError={console.log}
            disablePast
            format="yyyy/MM/dd HH:mm"
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
    </div>
  );
};

export default AddFlightForm;;;;;