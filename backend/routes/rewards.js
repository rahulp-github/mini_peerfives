import { Router } from "express";
import rewardControllers from "../controllers/rewards.js";
const router = Router();

// All Routes for '/rewards'

router.route("/").get(rewardControllers.getAllRewards);

router.route("/:userId/users/:awardeeId").post(rewardControllers.createReward);

export default router;
