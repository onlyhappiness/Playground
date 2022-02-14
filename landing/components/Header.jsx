import React from 'react';
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import { Button } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: 'none',
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar>
          <h1>로고</h1>
          <Button>회원가입</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
