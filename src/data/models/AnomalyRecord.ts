import mongoose from "mongoose";

const AnomalyRecordSchema = new mongoose.Schema({
  dna: { type: Array, required: true },
  hasAnomaly: { type: Boolean, required: true },
});

export default mongoose.model("AnomalyRecord", AnomalyRecordSchema);
