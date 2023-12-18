import { AppBar } from '@mui/material'
// import Drawer from '@material-ui/core/Drawer';
// import Hidden from '@material-ui/core/Hidden';
// import IconButton from '@material-ui/core/IconButton';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import MenuIcon from '@material-ui/icons/Menu';
// import { Logo } from 'common/components';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useStyles } from '../styles';
// import { TabMenu } from '../TabMenu/TabMenu';
// import { UserMenu } from '../UserMenu/UserMenu';

interface AppBarSceneProps {
  title: string;
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
}

const copy = {
  title: 'Billing',
  mainMenu: 'Main menu',
};

export const AppBarScene = ({
  title,
  isMobileMenuOpen,
  onToggleMobileMenu,
}: AppBarSceneProps) => {
  // const classes = useStyles();

  return (
    <AppBar position="fixed">
      <div><p>APP BAR</p></div>
      {/* <Toolbar classes={{ root: classes.toolbar }}>
        <section className={classes.brand}>
          <Link className={classes.link} to="/">
            <Logo className={classes.logo} />
          </Link>
          <Typography variant="h6" component="span">
            {copy.title}
          </Typography>
          <Hidden smDown>
            <Typography
              variant="h6"
              component="span"
              className={classes.pageTitle}
            >
              {title}
            </Typography>
          </Hidden>
        </section>
        <Hidden mdUp>
          <nav className={classes.navigationMobile}>
            <IconButton
              id="mobile-menu-toggle"
              color="inherit"
              aria-label="toggle menu"
              onClick={onToggleMobileMenu}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Drawer
              anchor="right"
              open={isMobileMenuOpen}
              onClose={onToggleMobileMenu}
              className={classes.drawerMobile}
              classes={{
                paper: classes.drawerMobilePaper,
              }}
            >
              <TabMenu orientation="vertical" />
            </Drawer>
          </nav>
        </Hidden>
        <Hidden smDown>
          <nav className={classes.navigationDesktop}>
            <TabMenu orientation="horizontal" />
          </nav>
        </Hidden>
        <section className={classes.user}>
          <UserMenu />
        </section>
      </Toolbar> */}
    </AppBar>
  );
};
