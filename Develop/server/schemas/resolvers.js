//need to make edits on this page. 
const { User } = require (`../models`);
const {AuthenticationError } = require (`apollo-server-express`);
const {signToken} = require (`apollo-server-express`)


const resolvers = {
    //Query type which returns a user type User or nonUser
    Query: {
        me: async (parent, args, context) => {

            if (context.user) {
                const bookUser = await User.findOne({
                    _id: context.User._id
                }).select (`-_v -password`)
                return bookUser;
            }
            if (!bookUser) {
                    return resolvers.status(400).json({message:`User doesn't Exist`});
            }
        }
    },
    //Login accepts email and password as params returns auth type
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken (user);
            return {user,token};
            }
        },

        login: async (parent, {email,password}) => {
            const user = await User.findOne ({email});
            if(!user){
                throw new AuthenticationError (`Email and/or Password is incorrect. Please enter again`)
            }

            const authpasswordCorrect = await user.isCorrectPassword(password);

            if(!authpasswordCorrect) {
                throw new AuthenticationError (`Email and/or Password incorrect. Please enter again`)
            }

            const token = signToken(user);
            return {token,user};

        },
//need more explanation on this data. 
        saveBook: async (parent, args, context) => {
            if (context.user)[
                const updateUser = await User.findOneAndUpdate(
                    {_id: context.user_id},
                    {$adToData: {savedBooks: args.input}},
                    {new:true}
                )
                return updateUser;
            ]
        },
         
        removeBook: async (parent, args, context) => {
            if (context.user) {
                const updateUser: await User.findOneAndUpdate(
                    {_id: context.user_id},
                    {$addToData: {savedBooks: args.bookID}},
                    {new:true}
                    );
                    return updateUser;
            }
            throw new AuthenticationError(`User Must Login`)
        }
}
}

module.exports = resolvers;