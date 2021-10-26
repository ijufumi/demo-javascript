import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: () => ({
      height: "100vh"
    }),
  })
);

const App = () => {
  const styles = useStyles();
  return(
    <Grid className={styles.root} container direction="column" justifyContent="flex-end">
      <Button color="primary" variant="outlined">Bottom Button</Button>
    </Grid>
);
};

export default App;