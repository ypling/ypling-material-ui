import React, { Component } from 'react';
import {
  ThemeProvider,
  PrimaryButton,
  DatePicker,
} from 'ypling-material-ui';

class App extends Component {
  render() {
    return (
      <ThemeProvider
        primaryColor="#27ae60"
        secondaryColor="#2c3e50"
      >
        <div>
          <PrimaryButton
            label="Primary"
          />
          <DatePicker hintText="Portrait Dialog" />
          This is a roboto text
          <small>small</small>
          <strong>strong</strong>
          <a href="">a Link</a>
        </div>
      </ThemeProvider>
    )
  }
}

export default App;