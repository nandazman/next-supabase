CREATE TABLE lessons (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  title TEXT NOT NULL,
  description TEXT NOT NULL
);