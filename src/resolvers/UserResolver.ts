import { Resolver, Query } from "@nestjs/graphql";
import { User } from "@models";

@Resolver((_of) => User)
export default class UserResolver {
    @Query((_returns) => User)
    getUser(): User {
        return {
            id: 1,
            name: "Marcos"
        };
    }
}
