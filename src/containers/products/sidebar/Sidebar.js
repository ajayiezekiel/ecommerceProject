import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import { GiGemChain, GiClothes, GiPoloShirt, GiShoppingBag } from 'react-icons/gi';

import useStyles from './Sidebar.styles';

const Sidebar = (props) => {
  const classes = useStyles();

  const onChange = (data) => {
    props.handleChange(data);
  };

  return (
    <List
      subheader={<ListSubheader className={classes.subHeader}>Categories</ListSubheader>}
      className={classes.root}
    >
      <ListItem
        className={classes.typo}
        button
        onClick={() => {
          onChange('all');
        }}
      >
        <ListItemIcon>
          <GiShoppingBag className={classes.icon1} />
        </ListItemIcon>
        <ListItemText id="switch-list-label-electronics" primary="All" />
      </ListItem>
      <ListItem
        button
        className={classes.typo}
        onClick={() => {
          onChange('electronics');
        }}
      >
        <ListItemIcon>
          <LiveTvIcon className={classes.icon2} />
        </ListItemIcon>
        <ListItemText id="switch-list-label-electronics" primary="Electronics" />
      </ListItem>
      <ListItem
        button
        className={classes.typo}
        onClick={() => {
          onChange('jewelery');
        }}
      >
        <ListItemIcon>
          <GiGemChain className={classes.icon3} />
        </ListItemIcon>
        <ListItemText id="switch-list-label-jewelery" primary="Jewelery" />
      </ListItem>
      <ListItem
        button
        className={classes.typo}
        onClick={() => {
          onChange('men clothing');
        }}
      >
        <ListItemIcon>
          <GiClothes className={classes.icon4} />
        </ListItemIcon>
        <ListItemText id="switch-list-label-menClothing" primary="Men clothing" />
      </ListItem>
      <ListItem
        button
        className={classes.typo}
        onClick={() => {
          onChange('women clothing');
        }}
      >
        <ListItemIcon>
          <GiPoloShirt className={classes.icon5} />
        </ListItemIcon>
        <ListItemText id="switch-list-label-womenClothing" primary="Women clothing" />
      </ListItem>
    </List>
  );
};

export default Sidebar;
