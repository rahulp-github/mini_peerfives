import mongoose from "mongoose";

const rewardHistorySchema = new mongoose.Schema(
  {
    points: {
      type: Number,
      required: true,
    },
    givenTo: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    givenBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("RewardHistory", rewardHistorySchema);
