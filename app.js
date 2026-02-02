const url = require('url');
const fs = require('fs');
const path = require('path');
const utils = require('./modules/utils');
const lang = require('./lang/en/en');

class App {
  constructor() {
    this.numberOfRequests = 0;
    this.filePath = path.join(__dirname, 'file.txt');
  }

  handleRequest(req, res) {
    this.numberOfRequests++;
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    console.log(`Request #${this.numberOfRequests} for: ${pathname}`);

    switch (pathname) {
      case '/COMP4537/labs/3/getDate/':
        this.handleGetDate(query, res);
        break;

      case '/COMP4537/labs/3/writeFile/':
        this.handleWriteFile(query, res);
        break;

      case '/COMP4537/labs/3/readFile/file.txt':
        this.handleReadFile(res);
        break;

      case '/favicon.ico':
        res.writeHead(204);
        res.end();
        break;

      default:
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end(`404 Not Found: ${pathname}`);
    }
  }

  handleGetDate(query, res) {
    const name = query.name || 'Guest';
    const message = lang.greeting.replace('%1', name) + utils.getDate();
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<p style="color: blue;">${message}</p>`);
  }

  handleWriteFile(query, res) {
    const text = query.text || '';
    fs.appendFile(this.filePath, text + '\n', (err) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error writing file');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Success! Appended: ${text}`);
    });
  }

  handleReadFile(res) {
    fs.readFile(this.filePath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end(`404 Error: file.txt not found`);
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    });
  }
}

module.exports = App;
