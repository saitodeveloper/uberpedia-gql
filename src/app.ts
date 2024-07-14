import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import * as path from "path";

import { UserResolver } from "@resolvers";

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: path.join(process.cwd(), "src/schema.gql"),
            playground: true
        })
    ],
    controllers: [],
    providers: [UserResolver]
})
export class AppModule {}
