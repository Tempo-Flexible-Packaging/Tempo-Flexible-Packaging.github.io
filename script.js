// document.addEventListener('DOMContentLoaded', function () {
//   const apiUrl = 'http://10.0.0.144/api/v0/process_state/reason';
//   const buttons = [
//     'lunch', 'Breakdown'
//   ];
//   // , 'No_machine_operator', 'No_set_up_operator', 'Quality_out_of_spec'

//   buttons.forEach(buttonValue => {
//     const button = document.getElementById(buttonValue + 'Button');
//     button.addEventListener('click', () => postReasonToAPI(apiUrl, { value: buttonValue }));
//   });

//   function postReasonToAPI(apiUrl, data) {
//     fetch(apiUrl, {
//       mode: 'cors',
//       method: 'POST',
//       body: JSON.stringify(data)
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Check the passed value name. Fix it in Vorne, it is complicated for the system.');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log(data);
//         alert('Reason Added');
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }
// });

















document.addEventListener('DOMContentLoaded', function () {

 //Lunch Break 
  const lunchButton = document.getElementById('lunchButton');
  lunchButton.addEventListener('click', handleLunchClick);
  function handleLunchClick() {
    const apiUrl = 'http://10.0.0.144/api/v0/process_state/reason';
    const data = {
      value: 'lunch'
    };
    return postReasonToAPI(apiUrl, data);
  }
//Down:Breakdown
  const breakdownButton = document.getElementById('breakdownButton');
  breakdownButton.addEventListener('click', handleBreakdownClick);
  function handleBreakdownClick() {
    const apiUrl = 'http://10.0.0.144/api/v0/process_state/reason';
    const data = 
    {
      value: 'Breakdown'
    }
    return postReasonToAPI(apiUrl, data);
  }
//Down:No machine operator
  const noMachineOperatorButton = document.getElementById('noMachineOperatorButton');
  noMachineOperatorButton.addEventListener('click', handleNoMachineOperatorClick);
  function handleNoMachineOperatorClick() {
    const apiUrl = 'http://10.0.0.144/api/v0/process_state/reason';
    const data = 
    {
      value: 'No_machine_operator'
    }
    return postReasonToAPI(apiUrl, data);
  }
//Down: No set up operator
  const noSetupOperatorButton = document.getElementById('noSetupOperatorButton');
  noSetupOperatorButton.addEventListener('click', handleNoSetupOperatorClick);
  function handleNoSetupOperatorClick() {
    const apiUrl = 'http://10.0.0.144/api/v0/process_state/reason';
    const data = 
    {
      value: 'No_set_up_operator'
    }
    return postReasonToAPI(apiUrl, data);
  }
//Down: Quality out of spec
  const qualityOutOfSpecButton = document.getElementById('qualityOutOfSpecButton');
  qualityOutOfSpecButton.addEventListener('click', handleQualityOutOfSpecClick);
  function handleQualityOutOfSpecClick() {
    const apiUrl = 'http://10.0.0.144/api/v0/process_state/reason';
    const data = 
    {
      value: 'Knife_change'
    }
    return postReasonToAPI(apiUrl, data);
  }

    // const headers = new Headers();
    // headers.append('Authorization', 'Basic ' + btoa('be1b4c0b-96e6-4640-baab-173388cdadae:aragorn'));
    // headers.append('Content-Type', 'application/json');
    // console.log(headers);

    function postReasonToAPI(apiUrl, data){

    const requestOptions = {
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify(data)
    };

    fetch(apiUrl, requestOptions)
      .then(response => {
        // console.log(response);
        if (!response.ok) {
          throw new Error('Check the passed value name. Fix it in Vorne, it is complicated for the system.');
        }
        return response.json();
      })
      .then(data => {
        // Process the JSON response here
        console.log(data);
        alert('Reason Added')
        // You can display the response on the webpage if needed.
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle the error here or display an error message on the webpage.
      });
  }
});
