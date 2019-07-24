const fs = require('fs');
const path = require('path');
const prefix = "data/";

module.exports = function (keyword) {
    let filePath = path.resolve(prefix);

    return filterFiles(filePath, keyword);
}

async function filterFiles(filePath, keyword){
    return new Promise((resolve, reject) => {
        fs.readdir(filePath, async (err,files) => {
            let data = [];
            if(err){
                reject(err)
            }else{
                for(let filename of files) {
                    let filedir = path.join(filePath,filename);
                    let isFile = await checkFile(filedir);
                    if(isFile && filename.indexOf(keyword) !== -1) {
                        data.push(filename);
                    }
                };
                resolve(data);
            }
        });
    }) 
}

async function checkFile(filedir) {
    return new Promise((resolve, reject) => {
        fs.stat(filedir,function(eror,stats){
            if(eror){
                return resolve(false);
            }else{
                let isFile = stats.isFile(); // 是文件
                let isDir = stats.isDirectory(); // 是文件夹
                if(isFile){
                    return resolve(true);
                }
                if(isDir){
                    return resolve(false);
                }
            }
        })
    })
}