import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cors from 'cors';
import express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors({ origin: true }));
  app.use(express.json({ limit: '10mb' }));
  await app.listen(4000);
  console.log('API listening on http://localhost:4000');
}
bootstrap();
