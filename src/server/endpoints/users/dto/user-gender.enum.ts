import { registerEnumType } from '@nestjs/graphql';

export enum UserGender {
  Male = 'male',
  Female = 'female',
}

registerEnumType(UserGender, {
  name: 'UserGender',
});
