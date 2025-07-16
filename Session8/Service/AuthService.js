const bcrypt = require("bcrypt");
const UserModel = require("../Models/User.Model");
class AuthService {

    static async createUser(username, email, password, name) {

            // business logic - SEVICE

        const nationality = "TEST_USER";
        try {
            const userModelObj = UserModel({
            name,
            username,
            email,
            password,
            nationality
        });
            const response = await userModelObj.save();
            return response;
        } catch(error) {
            return error;
        }

    }

    static async login(userName, password) {
        const loginResponse = {
            isLogged: false
            // by default every one is lgged out 
        }

        try {
            const userArray = await AuthService.findUserByUserName(userName);
            console.log('userArray', userArray);

            if(!userArray || userArray.length === 0) {
                return loginResponse
            } else {
                const user =  userArray[0];
                const res = await bcrypt.compare(password, user.password) // plain TExt (asdf1234) || user.password -> $2b$10$.tFAfPR5xo9vAo6hRwHOKutkmmrs01/0M4lBsisELWtsbAe6jyJcu
                // true false
                return {
                    isLogged: res
                };
            }

        } catch(error) {
            return {
                    isLogged: false
                };
        }

    }

    static async encryptPassword(plainPassword) {
        // asdf1234 -> e21ac044039452dbe1e686da1371a0321bf3b79ac032efccb31864242e90831a
        const salt = await bcrypt.genSalt(); // 1, 2,3,41.5
        const hashedPassword = await bcrypt.hash(plainPassword, salt);
        return hashedPassword;
    }

    // array of users 
    static async findUserByUserName(username) {
        const user = await UserModel.find({username: username})
        return user;
    }



}

module.exports = AuthService;