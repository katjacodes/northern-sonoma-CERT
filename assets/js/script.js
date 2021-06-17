
/* credit: form built based on a tutorial on https://medium.com/@mheavers/storing-form-data-from-a-website-in-google-spreadsheets-using-javascript-react-a15aeb9143cb and edited to fit project needs */

import { Form, Input, Select, FormState } from 'informed'; // credit: https://github.com/joepuzzo/informed
import React from 'react';

const SPREADSHEET_ID = '12Ocf0Hj97W3NcyyEjO3rf8k6HUWatiVBkqkMjUFg3DA';
const CLIENT_ID = '202876707132-ptmjd8dn2vt3a5pb1rktophldjkjti5r.apps.googleusercontent.com';
const API_KEY = 'AIzaSyCZ3OCzibOlXQR8lbL_OE10gL2NpuAQ-hE';
const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

export default class ContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount(){ 
    this.handleClientLoad(); 
  }

  handleClientLoad =()=> { 
    gapi.load('client:auth2', this.initClient);
  }

  initClient =()=> { 
    gapi.client.init({
      'apiKey': API_KEY,
      'clientId': CLIENT_ID,
      'scope': SCOPE,
      'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(()=> {
      gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSignInStatus);
      this.updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
  }

  onFormSubmit(submissionValues) {

    const params = {
      spreadsheetId: SPREADSHEET_ID, 
      range: 'Sheet1', 
      valueInputOption: 'RAW', 
      insertDataOption: 'INSERT_ROWS',
    };

    const valueRangeBody = {
      'majorDimension': 'ROWS', 
      'values': [submissionValues] 
    };

    let request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
    request.then(function (response) {
      // TODO: Insert desired response behaviour on submission
      console.log(response.result);
    }, function (reason) {
      console.error('error: ' + reason.result.error.message);
    });
  }

  render() {
    return (

/* credit: form code taken from https://github.com/joepuzzo/informed and edited to fit project needs */
        <Form onSubmit={this.onFormSubmit}>
            <Input field="name" label="Name" required="Name Required" />
            <Input field="email" label="Email" required="Email Required" />
            <Select field="event1" label="Event 1" initialValue="">
                <option value="yes">Yes, I would like to participate in this activity.</option>
                <option value="si">Sí, me gustaría participar en esta actividad.</option>
            </Select>
            <button type="submit">Submit</button>
        </Form>
        )
    }
}
