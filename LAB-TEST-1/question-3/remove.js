const fs = require('fs')

const logDirPath = __dirname + "/logs";

if (fs.existsSync(logDirPath)) {
    process.chdir(logDirPath);
    for(i =0; i < 10; i++){
        fs.unlink(`log${i}.txt`, function (err) {
            if (err) throw err;
            console.log(err);
        });
        console.log(`delete files...log${i}.txt`);
    }
    fs.rmdirSync(logDirPath);
}





