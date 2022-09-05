import express from 'express';
import dotenv from 'dotenv';


dotenv.config()
const port = process.env.PORT;

async function serverSetup() {
    const app: express.Application = express();
    await startServer(app);
}


async function startServer(app :express.Application) {
    try {
        const serverStarted: Promise<void> = new Promise((resolve) => {
        app.listen(port, resolve);
        });
        await serverStarted;
    } catch (err) {
        console.log(err);
        return err; 
    }
}

export {serverSetup}