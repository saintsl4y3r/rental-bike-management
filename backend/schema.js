const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLInt, GraphQLList } = require("graphql");
const Bike = require("./models/Bike");

const BikeType = new GraphQLObjectType({
    name: "Bike",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        price: { type: GraphQLInt },
        quantity: { type: GraphQLInt },
    }),
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        bikes: {
            type: new GraphQLList(BikeType),
            resolve() {
                return Bike.find();
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});