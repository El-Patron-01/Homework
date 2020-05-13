const fs = require('fs');
const util = require('util');
const path = require('path');

if (!fs.existsSync('new-folder')) {
    fs.mkdirSync('new-folder')
};



const writeFileAsync = util.promisify(fs.writeFile);

const files = ['first.txt', 'second.txt', 'third.txt'];

async function run () {
	try {
		const res = files.map(file => writeFileAsync(file, 'HELLO WORLD'));
		await Promise.all(res)
	} catch(err) {
		console.log(err)
	}
}
run()



const readdir = util.promisify(fs.readdir);
const unlink = util.promisify(fs.unlink);

async function deleteFiles(directory) {
	try {
	  const files = await readdir(directory);
	  const unlinkPromises = files.map(filename => unlink(`${directory}/${filename}`));
	  return Promise.all(unlinkPromises);
	} catch(err) {
	  console.log(err);
	}
  }
  
  deleteFiles('temp');



fs.writeFileSync('temp/text.txt', 'HELLO, WORLD');
let fileContent = fs.readFileSync('temp/text.txt', "utf8");
fs.writeFileSync('temp/text2.txt', `${fileContent}`);


