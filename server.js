const http = require('node:http'); // http模块
const fs = require('fs'); // 读写模块
const path = require('path'); // 目录模块

const hostname = '127.0.0.1'; // ip
const port = 3000; // 端口

let root = path.resolve();

// 创建一个服务器
const server = http.createServer((req, res) =>
{
    let myURL = new URL(req.url, `http://${hostname}:${port}/`);
    console.log("req.url =", req.url);

    let pathname = myURL.pathname;
    console.log("pathname =", pathname);
    
    let filepath = path.join(root, pathname);
    console.log("filepath =", filepath);

    fs.stat(filepath, (err, stats) =>
    {
        if(err)
        {
            res.statusCode = 404;
            res.end("404 Not Found");
        }
        else
        {
            res.statusCode = 200;
            fs.createReadStream(filepath).pipe(res);
        }
    });
});

// 监听端口
server.listen(port, hostname, () =>
{
    console.log(`Server running at http://${hostname}:${port}/`);
});
