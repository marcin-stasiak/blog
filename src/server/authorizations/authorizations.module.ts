import { Module } from '@nestjs/common';

import { UsersModule } from '../endpoints/users/users.module';
import { AuthorizationsService } from './authorizations.service';

@Module({
  imports: [UsersModule],
  providers: [AuthorizationsService],
})
export class AuthorizationsModule {}
