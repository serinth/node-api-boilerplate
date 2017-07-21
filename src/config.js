import env from '../env';

export const nodeEnvironment = process.env.NODE_ENV || 'development';

const config = env[nodeEnvironment] || {};
config.common = env.common || {};
config.error = env.error || {};

export default config;
