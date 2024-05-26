import httpClient from "@/httpClient/index";

async function fetchUsers() {
  const { data } = await httpClient.get("/users");
  return data;
}

export { fetchUsers };
