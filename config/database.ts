import { registerAs } from '@nestjs/config';
import { basePath } from '@libs/core';

export default registerAs('db', () => ({
  uri: process.env.MONGODB_URI,
}));
