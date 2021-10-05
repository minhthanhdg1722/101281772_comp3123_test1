const fs = require('fs')

const logDirPath = __dirname + "/logs";

if (fs.existsSync(logDirPath)) {
    console.log('Directory exists!');
} else {
    fs.mkdirSync(logDirPath);
    console.log('Directory not found.');
}

process.chdir(logDirPath);

for(i =0; i < 10; i++){
    fs.writeFile(`log${i}.txt`, `file ${i}`, function (err) {
        if (err) throw err;
    });
}
fs.readdir(logDirPath, function (err, files) {
    if (err) {
        return console.log('Error: ' + err);
    } 
    files.forEach(function (file) {
        console.log(file); 
    });
});

