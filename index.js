const http = require('http'); 
const fs = require('fs');   
const path = require('path'); 
const url = require('url');
const getMime = (fs,extname)=>{
	let data = fs.readFileSync('./data/mime.json');
	let Mimes = JSON.parse(data.toString());
	return Mimes[extname] || 'text/html';
}
const server = http.createServer((req,res)=>{   
	let pathName = url.parse(req.url).pathname;  
    console.log(pathName); 

    if(pathName=='/'){  
    	pathName = '/index.html';
    }

    if(pathName=='/favicon.ico'){  
    	res.end();
    }
	if(pathName!= '/favicon.ico'){
        let extName = path.extname(pathName);
         fs.readFile(path.join(__dirname,pathName), function(err,data){   
         	if(err){    
         		console.log(err);
         		fs.readFile(path.join(__dirname,`404.html`),(err,data)=>{
         			res.writeHead(404,{"Content-Type":"text/html;chartset='utf8'"})
         			res.write(data);
         			res.end();
         		})
         	}else{
         		console.log(data)
         		let mime = getMime(fs,extName);
         		res.writeHead(200,{"Content-Type":`${mime};chartset='utf8'`});
         		res.write(data); 
         		res.end();
         	}
         });

    }
});

server.listen('8082');