import { connect, ConnectOptions } from 'mongoose';
import { config } from 'dotenv';

config();  // Load environment variables from .env

export const dbConnect = () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    console.error('MongoDB URI is not defined in the environment variables.');
    return;
  }

  connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions).then(
    () => console.log('Connected to MongoDB'),
    (error) => console.error('Error connecting to MongoDB:', error)
  );
};
