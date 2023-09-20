// Define an array of button elements and their corresponding reasons
const reasons = [
  { element: document.getElementById('BreakdownButton'), reason: 'Breakdown' },
  { element: document.getElementById('No_Machine_OperatorButton'), reason: 'No_Machine_Operator' },
  { element: document.getElementById('No_Setup_OperatorButton'), reason: 'No_Setup_Operator' },
  { element: document.getElementById('Quality_Out_of_SpecButton'), reason: 'Quality_Out_of_Spec' },
  { element: document.getElementById('Wrap_around_Jam_upButton'), reason: 'Wrap_around_Jam_up' },
  //{ element: document.getElementById('Change_OverButton'), reason: 'Quality_Out_of_Spec' },
  { element: document.getElementById('Roll_ChangeButton'), reason: 'Quality_Out_of_Spec' },
  { element: document.getElementById('Header_ChangeButton'), reason: 'Header_Change' },
  { element: document.getElementById('Zipper_ChangeButton'), reason: 'Quality_Out_of_Spec' },
  //{ element: document.getElementById('Knife_ChangeButton'), reason: 'Quality_Out_of_Spec' },
  { element: document.getElementById('Planned_MaintenanceButton'), reason: 'Quality_Out_of_Spec' },
  //{ element: document.getElementById('Knife_ChangeButton'), reason: 'Quality_Out_of_Spec' },
  { element: document.getElementById('BreakButton'), reason: 'Quality_Out_of_Spec' },
  { element: document.getElementById('LunchButton'), reason: 'Quality_Out_of_Spec' },
  { element: document.getElementById('Clean_Draw_RollersButton'), reason: 'Quality_Out_of_Spec' },
  { element: document.getElementById('Change_zip_Teflon_beltbutton'), reason: 'Quality_Out_of_Spec' },
  { element: document.getElementById('Change_Teflon_RollerButton'), reason: 'Quality_Out_of_Spec' },
  { element: document.getElementById('Team_MeetingButton'), reason: 'Quality_Out_of_Spec' },
  { element: document.getElementById('Not_ScheduledButton'), reason: 'Quality_Out_of_Spec' },
  { element: document.getElementById('Start_New_Down_EventButton'), reason: 'Quality_Out_of_Spec' }
];

const parts = [
  { element: document.getElementById('Reg_bag_4-10_draw'), part: 'Reg bag (4\"-10\" draw)' },
  { element: document.getElementById('Reg_bag_10-20_draw'), part: 'Reg bag (>10\"-20\" draw)' },
  { element: document.getElementById('Reg_bag_20-24_draw'), part: 'Reg bag (>20\"-24\" draw)' },
  { element: document.getElementById('Reg_bag_24-38_draw'), part: 'Reg bag (>24\"-38\" draw)' },
  { element: document.getElementById('Zipper_bag_6-10_draw'), part: 'Zipper bag (6\"-10\" draw)' },
  { element: document.getElementById('Zipper_bag_10-18_draw'), part: 'Zipper bag >10\"-18\" draw' }
];

// Add click event listeners to all buttons
reasons.forEach(button => {
  button.element.addEventListener('click', () => 
  postReasonToAPI('http://10.100.100.131/api/v0/process_state/reason', { value: button.reason }));
});

parts.forEach(button => {
  button.element.addEventListener('click', () => 
  postReasonToAPI('http://10.100.100.131/api/v0/part_run', { part_id: button.part }));
});

function postReasonToAPI(apiUrl, data) {
  fetch(apiUrl, {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify(data)
  })
    .then(response => {
      // if (!response.ok) {
      //   throw new Error();
      // }
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




// const BreakdownBtn = document.getElementById('BreakdownButton');
// const No_Machine_OperatorBtn = document.getElementById('No_Machine_OperatorButton');
// const No_Setup_OperatorBtn = document.getElementById('No_Setup_OperatorButton');
// const Quality_Out_of_SpecBtn = document.getElementById('Quality_Out_of_SpecButton');
// const part1 = document.getElementById('Quality_Out_of_SpecButton');
// const part2 = document.getElementById('Quality_Out_of_SpecButton');



// BreakdownBtn.addEventListener('click', reasonBreakdown);
// No_Machine_OperatorBtn.addEventListener('click', reasonNoOperator);
// No_Setup_OperatorBtn.addEventListener('click', reasonNoSteupOp);
// Quality_Out_of_SpecBtn.addEventListener('click', reasonOutOfSpec);
// Quality_Out_of_SpecBtn.addEventListener('click', part1);
// Quality_Out_of_SpecBtn.addEventListener('click', part2);

// function reasonBreakdown(){
//     const apiUrl = "http://10.100.100.131/api/v0/process_state/reason";
//     postReasonToAPI(apiUrl, {value: 'Breakdown'});
// }
// function reasonNoOperator(){
//   const apiUrl = "http://10.100.100.131/api/v0/process_state/reason";
//   postReasonToAPI(apiUrl, {value: 'No_Machine_Operator'});
// }
// function reasonNoSteupOp(){
//   const apiUrl = "http://10.100.100.131/api/v0/process_state/reason";
//   postReasonToAPI(apiUrl, {value: 'No_Setup_Operator'});
// }
// function reasonOutOfSpec(){
//   const apiUrl = "http://10.100.100.131/api/v0/process_state/reason";
//   postReasonToAPI(apiUrl, {value: 'Quality_Out_of_Spec'});
// }
// function part1(){
//   const apiUrl = "http://10.100.100.131/api/v0/part_run";
//   postReasonToAPI(apiUrl, {value: 'Quality_Out_of_Spec'});
// }
// function part2(){
//   const apiUrl = "http://10.100.100.131/api/v0/part_run";
//   postReasonToAPI(apiUrl, {value: 'Zipper_bag_010Yj18Y_draw'});
// }

// function postReasonToAPI(apiUrl , data) {
//     fetch(apiUrl, {
//       mode: 'cors',
//       method: 'POST',
//       body: JSON.stringify(data)
//     })
//       .then(response => {
//         if (!response.ok) { 
//           throw new Error('Check the passed value name for complexity OR check the API URL fior that particular code using postman.');
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


//   const Wrap_around_Jam_upButton = document.getElementById('Wrap_around_Jam_upButton');
// const Change_OverButton = document.getElementById('Change_OverButton');
// const Roll_ChangeButton = document.getElementById('Roll_ChangeButton');
// const Valve_ChangeButton = document.getElementById('Valve_ChangeButton');
// const Zipper_ChangeButton = document.getElementById('Zipper_ChangeButton');
// const Knife_ChangeButton = document.getElementById('Knife_ChangeButton');
// const Planned_MaintenanceButton = document.getElementById('Planned_MaintenanceButton');
// const Turn_Change_TeflonButton = document.getElementById('Turn_Change_TeflonButton');
// const MeetingButton = document.getElementById('MeetingButton');
// const Not_ScheduledButton = document.getElementById('Not_ScheduledButton');
// const Optional_Shift_ScheduledButton = document.getElementById('Optional_Shift_ScheduledButton');
// const Shift_Ended_EarlyButton = document.getElementById('Shift_Ended_EarlyButton');