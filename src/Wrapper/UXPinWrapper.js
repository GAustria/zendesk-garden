import React from "react";
import { ThemeProvider } from '@zendeskgarden/react-theming';

/** 
EXAMPLE OF A THEME

Details: https://garden.zendesk.com/react-components/theming/

const theme = {
  'buttons.button': `
    && {
      color: red;

      :hover {
        color: blue;
      }
    }
  `
};

You can pass your theme to <ThemeProvider>, like that:
<ThemeProvider theme={theme}>
*/

export default function UXPinWrapper({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
