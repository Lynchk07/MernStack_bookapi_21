//ask about returns auth types for the user under mutation 

const { gql } = require(`apollo-server-express`);

const typeDefs = gql`
    input SavedBook {
        bookId: String
        authors:[String]
        description: String
        title: String
        image: String
        link: String
    }

    type Query {
        me: User
    }

    type Mutation {
            loginUser(
            email:String!,
            password: String! 
            
            ):
            Auth addUser (
                username: String!,
                email: String!,
                password: String!
            ):
            User saveBook:(
                book: SavedBook
                //look into an input type to handle all of these parameters.
            )
            User removeBook:(
                bookID: String!,
                bookUser:
            )
    }
        type User {
            _id: _id
            username: String
            email: String 
            bookCount: Int
            savedBooks: [Book]
        }
        type Book {
            bookId: String
            authors: [String]
            description: String
            title: String
            image: String
            link: String
        }

        type Auth {
            token: ID!
            user: User
        }
    `;

    module.exports = typeDefs;