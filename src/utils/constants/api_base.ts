const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
const BALLOTS_URL = `${BASE_URL}/api/ballots`;

export { BASE_URL, BALLOTS_URL };
