import React from 'react';
import { Paper } from '@material-ui/core';
import { FlightListingTable } from '../components/flight_listing';
import { Link, useLocation } from 'react-router-dom';

const FlightListing = props => {
  const location = useLocation();
  return (
    <>
      <Paper>
        <Link className="link" to={{
          pathname: '/flight/add',
          state: { background: location }
        }}>
          Home
          </Link>
        <FlightListingTable />
      </Paper>
    </>
  );
};

export default FlightListing;

// class FlightListing extends React.Component {

//   state = {
//     loading: true
//   };

//   componentDidMount() {
//     // Currently, just fetch all flights
//     this.props.fetchFlights(FlightType.ALL);
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (JSON.stringify(prevProps.flights) !== JSON.stringify(this.props.flights)) {
//       this.setState({ loading: false });
//     }
//   }

//   render() {
//     return (

//     );
//   }
// }

// const mapStateToProps = state => ({
//   flights: state.flights.data,
//   flightError: state.flights.error
// });

// const mapDispatchToProps = {
//   fetchFlights: FlightAction.fetchFlights
// };

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FlightListing));