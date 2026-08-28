async function apiRequest(path, options = {}) {
  const token = localStorage.getItem("ax_token");
  const headers = {"Content-Type":"application/json", ...(options.headers || {})};
  if (token) headers.Authorization = `Bearer ${token}`;
  const response = await fetch(`${API_BASE_URL}${path}`, {...options, headers});
  let data = null;
  try { data = await response.json(); } catch (_) {}
  return {ok: response.ok, status: response.status, data};
}
