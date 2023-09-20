//import { machines } from './home.js';
// const { machines } = require('./home.js');
// const apiUrl = 'http://10.0.0.70/api/v0/process_state/reason';

document.addEventListener('DOMContentLoaded', function () {
  
  const apiUrl = decodeURIComponent(window.location.search.split('=')[1]);
  console.log(apiUrl);

  const buttons = [
    'Lunch', 'Breakdown', 'No_Machine_Operator', 'No_Setup_Operator',
     'Quality_Out_of_Spec', 'Wrap_around_Jam_up', 'Meeting', 
     'Not_Scheduled', 'Optional_Shift_Scheduled', 'Shift_Ended_Early', 
     'Change_Over', 'Roll_Change', 'Valve_Change', 'Zipper_Change', 
     'Knife_Change', 'Planned_Maintenance', 'Turn_Change_Teflon'
  ];

  buttons.forEach(buttonValue => {
    const button = document.getElementById(buttonValue + 'Button');
    button.addEventListener('click', () => postReasonToAPI(apiUrl, { value: buttonValue }));
  });

  function postReasonToAPI(apiUrl , data) {
    fetch(apiUrl, {
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Check the passed value name for complexity OR check the API URL fior that particular code using postman.');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        alert('Reason Added');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
});


















  // document.addEventListener('DOMContentLoaded', function () {

  //  //Lunch Break 
  //   const lunchButton = document.getElementById('lunchButton');
  //   lunchButton.addEventListener('click', handleLunchClick);
  //   function handleLunchClick() {
  //     const apiUrl = 'http://10.0.0.144/api/v0/process_state/reason';
  //     const data = {
  //       value: 'lunch'
  //     };
  //     return postReasonToAPI(apiUrl, data);
  //   }
  // //Down:Breakdown
  //   const breakdownButton = document.getElementById('breakdownButton');
  //   breakdownButton.addEventListener('click', handleBreakdownClick);
  //   function handleBreakdownClick() {
  //     const apiUrl = 'http://10.0.0.144/api/v0/process_state/reason';
  //     const data = 
  //     {
  //       value: 'Breakdown'
  //     }
  //     return postReasonToAPI(apiUrl, data);
  //   }
  // //Down:No machine operator
  //   const noMachineOperatorButton = document.getElementById('noMachineOperatorButton');
  //   noMachineOperatorButton.addEventListener('click', handleNoMachineOperatorClick);
  //   function handleNoMachineOperatorClick() {
  //     const apiUrl = 'http://10.0.0.144/api/v0/process_state/reason';
  //     const data = 
  //     {
  //       value: 'No_machine_operator'
  //     }
  //     return postReasonToAPI(apiUrl, data);
  //   }
  // //Down: No set up operator
  //   const noSetupOperatorButton = document.getElementById('noSetupOperatorButton');
  //   noSetupOperatorButton.addEventListener('click', handleNoSetupOperatorClick);
  //   function handleNoSetupOperatorClick() {
  //     const apiUrl = 'http://10.0.0.144/api/v0/process_state/reason';
  //     const data = 
  //     {
  //       value: 'No_Setup_Operator'
  //     }
  //     return postReasonToAPI(apiUrl, data);
  //   }
  // //Down: Quality out of spec
  //   const qualityOutOfSpecButton = document.getElementById('qualityOutOfSpecButton');
  //   qualityOutOfSpecButton.addEventListener('click', handleQualityOutOfSpecClick);
  //   function handleQualityOutOfSpecClick() {
  //     const apiUrl = 'http://10.0.0.144/api/v0/process_state/reason';
  //     const data = 
  //     {
  //       value: 'Quality_Out_of_Spec'
  //     }
  //     return postReasonToAPI(apiUrl, data);
  //   }
  // //Down: Wrap artound Jam up
  //   const wrapAroundJamUpButton = document.getElementById('wrapAroundJamUpButton');
  //   wrapAroundJamUpButton.addEventListener('click', handleWrapAroundJamUpClick);
  //   function handleWrapAroundJamUpClick() {
  //     const apiUrl = 'http://10.0.0.144/api/v0/process_state/reason';
  //     const data = 
  //     {
  //       value: 'Wrap_around_Jam_up'
  //     }
  //     return postReasonToAPI(apiUrl, data);
  //   }

  //     // const headers = new Headers();
  //     // headers.append('Authorization', 'Basic ' + btoa('be1b4c0b-96e6-4640-baab-173388cdadae:aragorn'));
  //     // headers.append('Content-Type', 'application/json');
  //     // console.log(headers);

  //     function postReasonToAPI(apiUrl, data){

  //     const requestOptions = {
  //       mode: 'cors',
  //       method: 'POST',
  //       body: JSON.stringify(data)
  //     };

  //     fetch(apiUrl, requestOptions)
  //       .then(response => {
  //         // console.log(response);
  //         if (!response.ok) {
  //           throw new Error('Check the passed value name. Fix it in Vorne, it is complicated for the system.');
  //         }
  //         return response.json();
  //       })
  //       .then(data => {
  //         // Process the JSON response here
  //         console.log(data);
  //         alert('Reason Added')
  //         // You can display the response on the webpage if needed.
  //       })
  //       .catch(error => {
  //         console.error('Error:', error);
  //         // Handle the error here or display an error message on the webpage.
  //       });
  //   }
  // });
