export const getOrigin = (): string => {
  if (process.env.VERCEL_ENV === 'production') {
    return 'https://portfolio.skippy-ai.com';
  } else if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return 'http://localhost:3000';
};
