const { Schema, model } = require("mongoose");

const donationSchema = new Schema(
  {
    placeId: String,
    author: { type: Schema.Types.ObjectId, ref: "User" },
    title: String,
    phoneNumber: String,
    foodTypes: {
      type: [String],
      enum: ['Fancy', 'General', 'Fast', 'Take-Out']
  },
    description: [String],
    budget: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Donation = model("Donation", donationSchema);

module.exports = Donation;
