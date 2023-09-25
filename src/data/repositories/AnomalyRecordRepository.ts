import AnomalyRecord from "../models/AnomalyRecord";

export const saveAnomalyRecord = async (
  dna: string[][],
  hasAnomaly: boolean
) => {
  const record = new AnomalyRecord({ dna, hasAnomaly });
  return await record.save();
};

export const getStats = async () => {
  const count_anomalies = await AnomalyRecord.countDocuments({
    hasAnomaly: true,
  });
  const count_no_anomalies = await AnomalyRecord.countDocuments({
    hasAnomaly: false,
  });
  return { count_anomalies, count_no_anomalies };
};

export const resetAnomalyRecords = async () => {
  await AnomalyRecord.deleteMany({});
};

