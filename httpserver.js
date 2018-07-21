const http = require('http');
const hostname = '172.21.0.12';//服务器上的内网ip
const port = 8888;//端口
const server = http.createServer((req, res) => {
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/html');
 res.write('<head><meta charset="utf-8"/></head>');
	// res.charset = 'utf-8';   不行
 
	var htmlDiv = '<div style="width: 200px;height: 200px;background-color: #f0f;">赵悦二狗砸</div>';
	res.write('<b>赵悦二狗砸</b>');
	res.write(htmlDiv);

 res.end('<h1>little two dog</h>');
 });
 server.listen(port,hostname,() => {
 console.log('success in',hostname,port);
});
//this is second version
