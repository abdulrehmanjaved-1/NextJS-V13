import { Schema, model, models } from 'mongoose';

const GoalsSchema = new Schema({
  creator: {
    type: String,
  },
  goals: [
    {
      id: Number,
      value: String,
    }
  ],
  label: {
    type: String,
    required: [true, 'label is required.'],
  },
  date:{
    type:String,
    required: [true, 'Date is required.'],
  }
},{timestamps:true});

const Goals = models.Goals || model('Goals', GoalsSchema);

export default Goals;