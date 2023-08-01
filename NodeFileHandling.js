const file = require('fs'); 
function countWords(filename) { 
	let wordCount = 0;
	fs.readFile(filename , 'utf8' , (err , data) => {
		if(err) {
			console.error('Error in reading the file' , err);
		} else {
			wordCount = data.split(/\s+/).length;
			console.log('Total word count in the data.txt file is : ${wordCount}');
		}
	});
	return wordCount;
}