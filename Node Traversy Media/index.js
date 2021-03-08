const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer( (req, res) => {
    //console.log(req.url);
    // if (req.url === '/'){
        
    //     fs.readFile(
    //         path.join(__dirname, 'public', 'index.html'),
    //         {},
    //         (err, content) => {
    //             if (err) throw err;
    //             console.log("/ : Home page");
    //             res.writeHead(200, {'Content-type': 'text/html'} )
    //             res.write(content);
    //             res.end();
    //         }
    //     )
    // }

    // if (req.url === '/api/users'){
    //     users = [
    //         {name: 'Amir', age: 20},
    //         {name: 'Bob', age: 40}
    //     ]

    //     res.writeHead(200, {'Content-type': 'application/json'})
    //     res.write(JSON.stringify(users))
    //     res.end()
    // }

    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    let extname = path.extname(filePath);
    let contentType = 'text/html';

    //console.log(req.url);
    switch(extname){
        case '.js':
            contentType = 'text/javascript';
            break;

        case '.html':
            contentType = 'text/html';
            break;

        case '.css':
            contentType = 'text/css';
            break;
        
        case '.json':
            contentType = 'application/json'
            break;
        
        case '.png':
            contentType = 'image/png'
            break;

        case '.jpg':
            contentType = 'image/jpg'
            break;
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if(err.code == 'ENOENT'){
                fs.readFile( path.join(__dirname, 'public', '404.html'), (err, content) =>{
                    res.writeHead(404, {'Content-Type': 'text/html'})
                    res.end(content, 'utf-8')
                } )
            } else{
                res.writeHead(500);
                res.write(`Server Error: ${err.code}`)
            }
        } else{
            res.writeHead(200, { "Content-Type": contentType });
            res.write(content, 'utf8')
            res.end()
        }
    })

})

port = process.env.port || 5000;

server.listen(port, () => console.log(`Server running on port ${port}`) )