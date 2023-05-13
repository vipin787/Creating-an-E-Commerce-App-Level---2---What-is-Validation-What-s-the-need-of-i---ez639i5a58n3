const User = require('../models/User');

/*

Implement a controller to retrieve a paginated list of users from the database.

Instructions:

The input for pagination will be passed as query parameters in the request object.
The default values for page and limit will be 1 and 5 respectively.
The User model should be imported before the function.
The function should use the User.find() method to retrieve the list of users from the database.
The function should use the limit and skip methods to implement pagination.
The function should retrieve the total count of users using the User.countDocuments() method.
The function should return a JSON response with a status code of 200 and the following format:
{
"status": "success",
"data": {
"count": <total number of users in the database>,
"users": <an array of user objects>
}
}
If no users are found, the function should return a JSON response with a status code of 404 and the following format:
{
"message": "Users Not Found",
"status": "Error",
"error": <the error object>
}
*/
const getAllUsers = async (req, res) => {
    try {
        // Implement the function here
    } catch (err) {
        res.status(404).json({
            message: "Users Not Found",
            status: "Error",
            error: err,
        });
    }
};

/*

Implement a controller to retrieve the details of a single user with the given ID.

Instructions:

The ID of the user to be retrieved will be passed as a parameter in the request object.
The User model should be imported before the function.
The function should use the User.findById() method to retrieve the user details from the database.
If the user is not found, the function should return a JSON response with a status code of 404 and the following format:
{
"status": "Error",
"message": "User Not Found"
}
If the user is found, the function should return a JSON response with a status code of 200 and the following format:
{
"status": "success",
"data": {
"user": <user object>
}
}
If an error occurs during the retrieval, the function should return a JSON response with a status code of 400 and the following format:
{
"message": "User Fetching Failed",
"status": "Error",
"error": <the error object>
}
*/
const getUserByID = async (req, res) => {
    try {
        // Implement the function here
    } catch (err) {
        res.status(400).json({
            message: "User Fetching Failed",
            status: "Error",
            error: err,
        });
    }
};

/*

Implement a controller to create a new user.

Instructions:

The input for the new user will be passed as a JSON object in the request body.
The User model should be imported before the function.
The function should check if the username, email, and password are present in the request body. If any of them are missing, the function should return a JSON response with a status code of 400 and the following format:
{
"message": "<field name> Missing",
"status": "Error",
}
If all the required fields are present, the function should use the User.create() method to create a new user with the provided details.
If the user is created successfully, the function should return a JSON response with a status code of 201 and the following format:
{
"status": "success",
"message": "User Created Successfully",
"data": {
"user": <user object>
}
}
If an error occurs during the creation, the function should return a JSON response with a status code of 400 and the following format:
{
"message": "User Creation Failed",
"status": "Error",
"error": <the error object>
}
*/
const createUser = async (req, res) => {
    try {
        // Implement the function here
    } catch (err) {
        res.status(400).json({
            message: "User Creation failed",
            status: "Error",
            error: err,
        });
    }
};

/*

Implement a controller to update user details.

Instructions:

The function should accept the updated user details as a JSON object in the request body.
The User model should be imported before the function.
The function should check if the required fields are present in the request body. If any of them are missing, the function should return a JSON response with a status code of 400 and the following format:
{
"message": "<field name> Missing",
"status": "Error",
}
If all the required fields are present, the function should use the User.findByIdAndUpdate() method to update the user with the provided details.
If the user is updated successfully, the function should return a JSON response with a status code of 200 and the following format:
{
"status": "success",
"message": "User Updated Successfully",
"data": {
"updatedUser": <user object>
}
}
If the user to be updated is not found, the function should return a JSON response with a status code of 404 and the following format:
{
"message": "User Not Found",
"status": "Error",
}
If an error occurs during the updation, the function should return a JSON response with a status code of 400 and the following format:
{
"message": "User Updation Failed",
"status": "Error",
"error": <the error object>
}
*/
const updateUser = async (req, res) => {
    try {
        // Write your function here
    } catch (err) {
        res.status(400).json({
            message: "User Updation Failed",
            status: "Error",
            error: err,
        });
    }
};

/*

Implement a controller to delete a user.

Instructions:

The function should accept the user ID to be deleted as a parameter in the request URL.
The User model should be imported before the function.
The function should use the User.findByIdAndDelete() method to delete the user with the provided ID.
If the user is deleted successfully, the function should return a JSON response with a status code of 201 and the following format:
{
"status": "success",
"message": "User Deleted Successfully",
"data": {
"user": <deleted user object>
}
}
If the user to be deleted is not found, the function should return a JSON response with a status code of 404 and the following format:
{
"message": "User Not Found",
"status": "Error",
}
If an error occurs during the deletion, the function should return a JSON response with a status code of 400 and the following format:
{
"message": "User Deletion Failed",
"status": "Error",
"error": <the error object>
}
*/
const deleteUser = async (req, res) => {
    try {
        // Write your function here.
    } catch (err) {
        res.status(400).json({
            message: "User Deletion Failed",
            status: "Error",
            error: err,
        });
    }
};

module.exports = { getAllUsers, getUserByID, createUser, updateUser, deleteUser };

