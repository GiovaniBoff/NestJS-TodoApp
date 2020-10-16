import { Injectable } from '@nestjs/common';
import { Document } from 'mongoose';
@Injectable()
export class User extends Document {
  name: string;
  email: string;
  password: string;
}
