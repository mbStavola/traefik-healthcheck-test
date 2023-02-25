import http from 'http';

const port = process.env.SERVICE_PORT ?? 3000;
const delay = process.env.SERVICE_DELAY ?? 0;

const getDateString = () => new Date().toUTCString();

const server = http.createServer((req, res) => {
    setTimeout(() => {
        const currentDate = getDateString();
        console.log(`[${currentDate}] Received request`);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Healthy!');
    }, delay);
});

server.listen(port, '0.0.0.0', () => {
    const currentDate = getDateString();
    console.log(`[${currentDate}] Server started`);
});