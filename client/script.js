document.addEventListener("DOMContentLoaded", function () {
  const fetchDataBtn = document.getElementById('fetchDataBtn');

  fetchDataBtn.addEventListener('click', () => {
    axios.get('http://localhost:3000/data') // Assuming server is running on localhost:3000
      .then(response => {
        console.log('Data received from server:', response.data);
        // Do something with the received data, such as updating the UI
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // Handle errors, such as displaying an error message to the user
      });
  });
});




