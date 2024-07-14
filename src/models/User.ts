import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export default class User {
    @Field((_type) => Int, { nullable: true })
    id?: number;

    @Field({ nullable: true })
    email?: string;

    @Field({ nullable: true })
    phone?: string;

    @Field({ nullable: true })
    password?: string;

    @Field({ nullable: true })
    name?: string;
}
