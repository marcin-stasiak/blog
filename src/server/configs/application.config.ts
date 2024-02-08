import { registerAs } from '@nestjs/config';

export default registerAs('application', () => ({
  adminPath: process.env.APP_ADMIN_PATH || 'admin',
}));
