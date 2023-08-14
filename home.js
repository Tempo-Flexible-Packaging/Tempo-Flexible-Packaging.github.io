const machines = [
  { value: 'Pouch2', apiUrl: 'http://10.0.0.70/api/v0/process_state/reason' },
  { value: 'Pouch5', apiUrl: 'http://10.0.0.106/api/v0/process_state/reason' },
  { value: 'Pouch6', apiUrl: 'http://10.0.0.117/api/v0/process_state/reason' },
  { value: 'Genesis', apiUrl: 'http://10.0.0.144/api/v0/process_state/reason' },
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
