import AnomalyStats from "../models/AnomalyStats";

export const getOrCreateStats = async () => {
  let stats = await AnomalyStats.findOne();
  if (!stats) {
    stats = new AnomalyStats();
    await stats.save();
  }
  return stats;
};

export const updateStats = async (hasAnomaly: boolean) => {
  const stats = await getOrCreateStats();

  if (hasAnomaly) {
    stats.count_anomalies += 1;
  } else {
    stats.count_no_anomalies += 1;
  }

  stats.ratio =
    stats.count_anomalies / (stats.count_anomalies + stats.count_no_anomalies);

  await stats.save();
};
export const resetAnomalyStats = async () => {
  await AnomalyStats.deleteMany({});
  const stats = new AnomalyStats();
  await stats.save();
};
