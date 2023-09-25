import express from "express";
import * as AnomalyController from "../controllers/AnomalyController";

const router = express.Router();

router.post("/validate-anomaly", AnomalyController.validateAnomaly);
router.get("/stats", AnomalyController.stats);
router.post("/reset", AnomalyController.reset);

router.get("/", (req, res) => {
  res.send(`<p>¡Hi, welcome to anomaly detector api! 👋</p>`);
});

export default router;
