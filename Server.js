const express = require('express') // importing express from the express library
const app = express(); // calling the constructor
const portNumber = 3000;

// Inbuilt function provided by express to send the respone as 'Hello World' when the user hits the URL '/'
app.get('/' , (req , res) => {
	res.send('Hello World !!');
});

// Inbuilt function provided by express to specify node that at which port number the application is going to run
app.listen(portNumber , () => {
	console.log('Server is running !!');
});