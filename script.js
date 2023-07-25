document.addEventListener('DOMContentLoaded', function () {
  const lunchButton = document.getElementById('lunchButton');
  lunchButton.addEventListener('click', handleLunchClick);

  function handleLunchClick() {
    const apiUrl = 'http://10.0.0.129/api/v0/process_state/reason';
    const data = {
      value: 'lunch'
    };

    // const headers = new Headers();
    // headers.append('Authorization', 'Basic ' + btoa('be1b4c0b-96e6-4640-baab-173388cdadae:aragorn'));
    // headers.append('Content-Type', 'application/json');

    // console.log(headers);

    const requestOptions = {
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify(data)
    };

    fetch(apiUrl, requestOptions)
      .then(response => {
        // console.log(response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
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








// document.addEventListener('DOMContentLoaded', function () {
//   const lunchButton = document.getElementById('lunchButton');
//   lunchButton.addEventListener('click', handleLunchClick);

//   function handleLunchClick() {
//     const apiUrl = 'http://10.0.0.129/api/v0/process_state/reason';
//     const data = {
//       value: 'lunch'
//     };

//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', apiUrl);
//     xhr.setRequestHeader('Authorization', 'Basic ' + btoa('Administrator:aragorn'));
//     xhr.setRequestHeader('Content-Type', 'application/json');

//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           // Process the JSON response here
//           const data = JSON.parse(xhr.responseText);
//           console.log(data);
//           // You can display the response on the webpage if needed.
//         } else {
//           console.error('Error:', xhr.status);
//           // Handle the error here or display an error message on the webpage.
//         }
//       }
//     };

//     xhr.onerror = function () {
//       console.error('Network error occurred');
//       // Handle the error here or display an error message on the webpage.
//     };

//     xhr.send(JSON.stringify(data));
//   }
// });














// document.addEventListener('DOMContentLoaded', function () {
//     const lunchButton = document.getElementById('lunchButton');
//     lunchButton.addEventListener('click', handleLunchClick);
  
//     function handleLunchClick() {
//       const apiUrl = 'http://10.0.0.129/api/v0/process_state/reason';
//       const data = {
//         value: 'lunch'
//       };
  
//       const headers = new Headers();
//       headers.append('Authorization', 'Basic ' + btoa('Administrator:aragorn'));
//       headers.append('Content-Type', 'application/json');
  
//       const requestOptions = {
//         method: 'POST',
//         headers: headers,
//         body: JSON.stringify(data)
//       };
  
//       fetch(apiUrl, requestOptions)
//         .then(response => response.json())
//         .then(data => {
//           // Process the JSON response here
//           console.log(data);
//           // You can display the response on the webpage if needed.
//         })
//         .catch(error => {
//           console.error('Error:', error);
//           // Handle the error here or display an error message on the webpage.
//         });
//     }
//   });
  