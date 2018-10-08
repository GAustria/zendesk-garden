import React from "react";
import { ThemeProvider } from '@zendeskgarden/react-theming';

export default function UXPinWrapper({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
