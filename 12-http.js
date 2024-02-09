const http = require('http')
const server = http.createServer((req, res)=>{
    if(req.url ==='/'){
        res.end('welcome to out home page...')
    }
    if (req.url==='/abour'){
        res.end('here is our short history')
    }
    res.end(` 
        <h1> Ooops!! </h1>
        <p> We cant seem to find the page you are looking for </p>
        <a href="/"> back home </a>
    `)
    //console.log(req)
    // res.write('Welcome...')
    // res.end() 
})

server.listen(5000)