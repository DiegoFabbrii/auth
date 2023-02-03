import { model, Schema } from 'mongoose';
import { hash } from 'bcrypt';

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

userSchema.pre('save', async function (next) {
  this.password = await hash(this.password, 10);
  next();
});

const User = model('users', userSchema);

export { User };
