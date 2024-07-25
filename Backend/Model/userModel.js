const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  batchName: { type: String, required: true },
  exitExamMark: { type: Number, required: true },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
    // This field will initially be null or undefined
    // and will be assigned a value after the student selects a project
},
projectSelectionDate: {
    type: Date
}
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('Use', userSchema);

module.exports = User;
