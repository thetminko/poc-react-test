import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const styles = makeStyles(theme => ({
  header: {
    paddingBottom: theme.spacing(2),
  }
}));

const PageHeader = props => {
  const { header } = styles();
  return (
    <Typography variant="h6" className={header}>
      {props.header}
    </Typography>
  );
};


export default PageHeader;