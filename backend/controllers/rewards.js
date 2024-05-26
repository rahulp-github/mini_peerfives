import rewardService from "../services/rewards.js";

const createReward = async (req, res) => {
  const userId = req.params.userId;
  const awardeeId = req.params.awardeeId;
  const reward = req.body;

  if (!userId || !awardeeId) {
    return res.status(400).send("User ids are required");
  }

  if (!reward.points || reward.points <= 0 || reward.points > 100) {
    return res.status(400).send("Invalid reward amount");
  }

  try {
    const awarded = await rewardService.createReward(
      userId,
      awardeeId,
      reward.points
    );
    res.json(awarded);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getAllRewards = async (req, res) => {
  try {
    const rewards = await rewardService.getAllRewards();
    res.json(rewards);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export default {
  createReward,
  getAllRewards,
};
