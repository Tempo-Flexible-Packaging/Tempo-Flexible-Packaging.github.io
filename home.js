const machines = [
  { value: 'Pouch2', apiUrl: 'http://10.0.0.69/api/v0/process_state/reason' },
  { value: 'Pouch5', apiUrl: 'http://10.0.0.51/api/v0/process_state/reason' },
  { value: 'Pouch6', apiUrl: 'http://10.0.0.64/api/v0/process_state/reason' },
  { value: 'Genesis', apiUrl: 'http://10.0.0.60/api/v0/process_state/reason' },
  { value: 'Deacro1', apiUrl: 'http://10.0.0.109/api/v0/process_state/reason' },
  { value: 'Deacro2', apiUrl: 'http://10.0.0.68/api/v0/process_state/reason' },
  { value: 'Cason', apiUrl: 'http://10.0.0.39/api/v0/process_state/reason' },
];

document.addEventListener('DOMContentLoaded', function () {
  machines.forEach(machine => {
    const machineElement = document.getElementById(machine.value + 'Button');
    machineElement.addEventListener('click', () => redirectToIndexPageWithAPI(machine.apiUrl));
  });
});

function redirectToIndexPageWithAPI(apiUrl) {
  const indexPageUrl = 'SimpleThemed.html';
  window.location.href = `${indexPageUrl}?apiUrl=${encodeURIComponent(apiUrl)}`;
}
