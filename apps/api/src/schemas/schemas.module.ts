import { Module } from '@nestjs/common';
import { SchemasService } from './schemas.service';
import { SchemasController } from './schemas.controller';
import { PrismaService } from '../prisma.service';
@Module({ controllers:[SchemasController], providers:[SchemasService, PrismaService] }) export class SchemasModule {}
