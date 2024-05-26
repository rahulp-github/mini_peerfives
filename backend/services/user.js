import User from "../models/User.js";

const createUser = async (userData) => {
  try {
    const newUser = await User.create({
      name: userData.name,
    });

    if (!newUser) {
      throw new Error(
        `Failed to create User. Please try again after some time`
      );
    }

    return newUser;
  } catch (error) {
    throw error;
  }
};

const getUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    console.log('user ', user);
    if (!user) {
      throw new Error(`User not found or doesnt exists`);
    }

    return user;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (userId, dataToUpdate) => {
  try {
    const updateduser = await User.findByIdAndUpdate(
      userId,
      {
        name: dataToUpdate.name,
      },
      {
        new: true,
      }
    );

    if (!updateduser) {
      throw new Error(
        `User details not updated, Please try again after some time`
      );
    }

    return updateduser;
  } catch (error) {
    throw error;
  }
};

export default {
  createUser,
  getUsers,
  getUserById,
  updateUser,
};
