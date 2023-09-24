import { Request, Response } from "express";
import { hasAnomaly } from "../../core/business/AnomalyDetection";
import { saveAnomalyRecord, getStats } from "../../data/repositories/AnomalyRecordRepository";
import { updateStats } from "../../data/repositories/AnomalyStatsRepository";

export const validateAnomaly = async (req: Request, res: Response) => {
  const dna = req.body.dna;
  const anomalyExists = hasAnomaly(dna);
  
  await saveAnomalyRecord(dna, anomalyExists);
  await updateStats(anomalyExists);
  
  return res.status(anomalyExists ? 200 : 403).json({ hasAnomaly: anomalyExists });
};

export const stats = async (_: Request, res: Response) => {
  const { count_anomalies, count_no_anomalies } = await getStats();
  const ratio = count_anomalies / (count_anomalies + count_no_anomalies);

  return res.status(200).json({
    count_anomalies,
    count_no_anomalies,
    ratio
  });
};
