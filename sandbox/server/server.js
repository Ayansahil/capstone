import app from './src/app.js';

const HOST = '0.0.0.0';
const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, HOST, () => {
    console.log(`sandbox server is running on http://${HOST}:${PORT}`);
});