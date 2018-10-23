import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function NavButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button id='buttonNav' size="small" variant="outlined" onClick={props.onClick} lassName={classes.button}>
        {props.label}
      </Button>
    </div>
  );
}

NavButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavButtons);
