import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from '../styles/Colors';
import '../styles/index.scss';

export default function ThemeProvider(props) {
  const { primaryColor, secondaryColor } = props;
  const themeConfig = {
    fontFamily: 'Roboto, sans-serif',
    appBar: {
      color: Colors.WHITE,
      textColor: Colors.SUB_TEXT,
      height: 48,
    },
    toolbar: {
      backgroundColor: Colors.BODY_BACKGROUND,
      titleFontSize: 18,
      iconColor: Colors.TEXT,
    },
    palette: {
      primary1Color: primaryColor || Colors.PRIMARY,
      accent1Color: secondaryColor || Colors.SECONDARY,
    },
    tabs: {
      backgroundColor: Colors.TRANSPARENT,
      selectedTextColor: primaryColor || Colors.PRIMARY,
      textColor: Colors.TEXT,
    },
    inkBar: {
      backgroundColor: primaryColor || Colors.PRIMARY,
    },
    card: {
      titleColor: primaryColor || Colors.PRIMARY,
    },
    spacing: {
      desktopSubheaderHeight: 56,
    },
    dropDownMenu: {
      accentColor: Colors.TEXT,
    },
    button: {
      textTransform: 'capitalize',
    },
    datePicker: {
      headerColor: primaryColor || Colors.PRIMARY,
      selectColor: primaryColor || Colors.PRIMARY,
    },
    icon: {
      color: primaryColor,
    }
  };
  return (
    <MuiThemeProvider muiTheme={getMuiTheme(themeConfig)}>
      {props.children}
    </MuiThemeProvider>
  );
}
