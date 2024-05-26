import userService from "../services/user.js";

const createUser = async (req, res) => {
  const userData = req.body;

  // Todo - Move incoming data validation logic
  if (!userData.name) {
    return res.status(400).send(`Name is required`);
  }

  try {
    const newUser = await userService.createUser(userData);
    res.json(newUser);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getUserById = async (req, res) => {
  const userId = req.params.id;

  if (!userId) {
    return res.status(400).send(`User id is required`);
  }

  try {
    const user = await userService.getUserById(userId);
    res.json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateUser = async (req, res) => {
  const userId = req.params.id;
  const dataToUpdate = req.body;

  if (!userId || !dataToUpdate.name) {
    return res.status(400).send(`User id and name are required`);
  }

  try {
    const updatedUser = await userService.updateUser(userId, dataToUpdate);
    res.json(updatedUser);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export default {
  createUser,
  getUsers,
  getUserById,
  updateUser,
};
