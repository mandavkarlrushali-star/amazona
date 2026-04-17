import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    isAdmin: { type: Boolean, default: false },
    isSeller: { type: Boolean, default: false },

    // ✅ FIXED SELLER STRUCTURE
    seller: {
      _id: false, // prevent confusion
      name: { type: String, default: '' },
      logo: { type: String, default: '' },
      description: { type: String, default: '' },
      rating: { type: Number, default: 0 },
      numReviews: { type: Number, default: 0 },
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
export default User;