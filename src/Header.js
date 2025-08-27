import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Badge,
} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const useStyles = makeStyles((theme) => ({
  logo: {
    width: 100,
    objectFit: "contain",
    marginRight: theme.spacing(2),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: "100%",
  },
  section: {
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing(2),
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <img
          className={classes.logo}
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon"
        />
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{ root: classes.inputRoot, input: classes.inputInput }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <div className={classes.section}>
          <Typography variant="body2">Hello Guest</Typography>
        </div>
        <div className={classes.section}>
          <Typography variant="body2">Orders</Typography>
        </div>
        <div className={classes.section}>
          <Typography variant="body2">Prime</Typography>
        </div>
        <IconButton color="inherit">
          <Badge badgeContent={0} color="secondary">
            <ShoppingBasketIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

