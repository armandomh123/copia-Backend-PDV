import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from '../common/prisma.service'; // Assuming common/prisma.service exists based on file list, or I'll check/create it.

@Module({
    providers: [UsersService, PrismaService],
    exports: [UsersService],
})
export class UsersModule { }
