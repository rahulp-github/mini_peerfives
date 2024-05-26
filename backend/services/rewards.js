import User from "../models/User.js";
import RewardHistory from "../models/RewardHistory.js";

const createReward = async (userId, awardeeId, points) => {
  try {
    const user = await User.findById(userId);
    const awardee = await User.findById(awardeeId);

    if (!user || !awardee) {
      throw new Error(`Either of the users doesnt exists`);
    }

    const rewardsGiven = await RewardHistory.aggregate([
      {
        $match: {
          givenBy: userId,
        },
      },
      {
        $group: {
          _id: "$givenBy",
          totalPoints: { $sum: "$points" },
        },
      },
      {
        $project: {
          _id: 0,
          totalPoints: 1,
        },
      },
    ]);

    const pointsGiven = rewardsGiven?.[0] ? rewardsGiven[0].totalPoints : 0;
    const pointsAvailable = 100 - pointsGiven;

    if (pointsAvailable < points) {
      throw new Error(`User has insufficient points to give ${points} points`);
    }

    const reward = await RewardHistory.create({
      givenBy: userId,
      givenTo: awardeeId,
      points,
    });

    return reward;
  } catch (error) {
    throw error;
  }
};

export default {
  createReward,
};
