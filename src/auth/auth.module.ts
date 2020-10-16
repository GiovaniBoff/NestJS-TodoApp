import { AuthController } from './auth.controller';
import { AuthService } from './shared/auth.service';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './shared/local.strategy';
import { UserModule } from 'src/users/user.module';
import { JwtStrategy } from './shared/jwt.strategy';
import { jwtConstants } from './shared/constants';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '600s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
