import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('Genre')
export class GenreType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;
}
