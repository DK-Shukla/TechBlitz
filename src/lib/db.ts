import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  console.warn("Please define the MONGODB_URI environment variable inside .env.local");
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }
  
  // If no URI or dummy URI during build, skip
  if (!MONGODB_URI || MONGODB_URI.includes('dummy')) {
    console.warn('Skipping MongoDB connection');
    return null;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 2000, // Fail fast if DB is down
    };
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    console.warn('MongoDB connection failed, continuing without DB');
    cached.promise = null;
    return null;
  }

  return cached.conn;
}

export default dbConnect;
