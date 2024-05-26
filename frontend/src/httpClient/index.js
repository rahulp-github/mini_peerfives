import axios from "axios";
import appConfig from "@/config";

const httpClient = axios.create({
  baseURL: appConfig.app.apiUrl,
});

export default httpClient;
