import express from "express";
import * as AnomalyController from "../controllers/AnomalyController";

const router = express.Router();

router.post("/validate-anomaly", AnomalyController.validateAnomaly);
router.get("/stats", AnomalyController.stats);
router.post("/reset", AnomalyController.reset);

export default router;