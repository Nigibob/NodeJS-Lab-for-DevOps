const url = require('url')
const qs = require('querystring')

module.exports = {
  serverHandle: function (req, res) {
    const route = url.parse(req.url)
    const path = route.pathname
    const params = qs.parse(route.query)

    res.writeHead(200, {'Content-Type': 'text/plain'});

    if (path === '/'){
      res.write('Hi, if you want more info about me, go to /hello?name=nelson')
    }
    else if (path === '/hello' && 'name' in params){
      if (params['name']==='nelson'){
        res.write("I'm Nelson, I'm a student in ECE Paris")
      }
      else{
        res.writeHead(404)
        res.write('Page not found')
      }
    } else {
      res.writeHead(404)
      res.write('Page not found')
    }

      res.end();
    }
}
