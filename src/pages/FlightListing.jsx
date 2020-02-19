import React from 'react';
import { Paper } from '@material-ui/core';
import { FlightListingTable } from '../components/flight_listing';
import { connect, } from 'react-redux';
import { FlightAction } from '../redux/action_creators';
import { FlightType } from '../constants';
import { Link, withRouter } from 'react-router-dom';

class FlightListing extends React.Component {

  state = {
    loading: true
  };

  componentDidMount() {
    // Currently, just fetch all flights
    this.props.fetchFlights(FlightType.ALL);
    console.log('asdfas', this.props.location);
  }

  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(prevProps.flights) !== JSON.stringify(this.props.flights)) {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <>
        <Paper>
          <Link className="link" to={{
            pathname: '/modal/add',
            state: { background: this.props.location }
          }}>
            Home
          </Link>
          <FlightListingTable data={this.props.flights} />
        </Paper>
      </>
    );
  }
}

const mapStateToProps = state => ({
  flights: state.flights.data,
  flightError: state.flights.error
});

const mapDispatchToProps = {
  fetchFlights: FlightAction.fetchFlights
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FlightListing));