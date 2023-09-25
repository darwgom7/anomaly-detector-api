import mongoose from "mongoose";

const AnomalyStatsSchema = new mongoose.Schema({
  count_anomalies: { type: Number, default: 0 },
  count_no_anomalies: { type: Number, default: 0 },
  ratio: { type: Number, default: 0.0 },
});

export default mongoose.model("AnomalyStats", AnomalyStatsSchema);