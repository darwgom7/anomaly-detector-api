import { Request, Response } from "express";
import { hasAnomaly } from "../../core/business/AnomalyDetection";
import {
  saveAnomalyRecord,
  getStats,
  resetAnomalyRecords,
} from "../../data/repositories/AnomalyRecordRepository";

import {
  updateStats,
  resetAnomalyStats,
} from "../../data/repositories/AnomalyStatsRepository";

export const validateAnomaly = async (req: Request, res: Response) => {
  const dna = req.body.dna;
  const anomalyExists = hasAnomaly(dna);

  await saveAnomalyRecord(dna, anomalyExists);
  await updateStats(anomalyExists);

  return res
    .status(anomalyExists ? 200 : 403)
    .json({ hasAnomaly: anomalyExists });
};

export const stats = async (_: Request, res: Response) => {
  const { count_anomalies, count_no_anomalies } = await getStats();
  let ratio = count_anomalies / (count_anomalies + count_no_anomalies);
  ratio = Number(ratio.toFixed(1));
  
  return res.status(200).json({
    count_anomalies,
    count_no_anomalies,
    ratio,
  });
};

export const reset = async (_: Request, res: Response) => {
  await resetAnomalyRecords();
  await resetAnomalyStats();

  return res.status(200).json({ message: "Data reset successfully" });
};
