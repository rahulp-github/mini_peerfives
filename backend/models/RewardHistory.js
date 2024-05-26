import mongoose from "mongoose";

const rewardHistorySchema = new mongoose.Schema(
  {
    points: {
      type: Number,
      required: true,
    },
    givenTo: {
      type: String,
      required: true,
    },
    givenBy: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("RewardHistory", rewardHistorySchema);
