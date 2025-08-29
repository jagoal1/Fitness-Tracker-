import axios from "axios";

const api = axios.create({
  baseURL: "https://wger.de/api/v2",
  timeout: 10000,
});

export async function fetchExercises({ search = "", muscle = null, page = 1, limit = 20 } = {}) {
  try {
    const params = { page, limit };
    if (search) params.search = search;
    if (muscle) params.muscle = muscle;
    const res = await api.get("/exercise/", { params });
    // res.data.results is typical paginated list: {count, next, previous, results}
    return res.data;
  } catch (err) {
    // rethrow with friendly message
    throw new Error(err?.response?.data?.detail || "Failed to fetch exercises from WGER");
  }
}

export async function fetchExerciseInfo(id) {
  try {
    const res = await api.get(`/exerciseinfo/${id}/`);
    return res.data;
  } catch (err) {
    throw new Error("Failed to fetch exercise details");
  }
}