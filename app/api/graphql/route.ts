import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { gql } from "graphql-tag";
import { NextRequest } from "next/server";
import { goals } from "./goals";

const server = new ApolloServer({
    typeDefs: gql`
        type Query {
            ${goals.queries}
        }
        type Mutation {
           ${goals.mutations}
        }
    `,
    resolvers: {
        Query: {
            ...goals.resolvers.queries
        },
        Mutation: {
            ...goals.resolvers.mutations
        }
    }
});

const handler = startServerAndCreateNextHandler<NextRequest>(server);

export async function GET(request: NextRequest) {
    return handler(request);
}

export async function POST(request: NextRequest) {
    return handler(request);
}
