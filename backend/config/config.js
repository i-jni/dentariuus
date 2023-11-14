import * as dotenv from 'dotenv';

dotenv.config();

const config = {
    db: {
        host: process.env.DB_HOST,
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    },
};

const NODE_ENV = 'dev';

export default config;