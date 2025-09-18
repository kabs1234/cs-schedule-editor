import { createTheme } from '@mui/material';
import { getObjectWithErrorMessage } from './utils/utils';

export const FIELD_REQUIRED_ERROR_MESSAGE =
  getObjectWithErrorMessage('Must be filled');

export const MEDIA_QUERY_THEMES = createTheme({
  breakpoints: {
    values: {
      mobile: 320,
      tablet: 660,
      desktop: 1200,
    },
  },
});

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    desktop: true;
  }
}
