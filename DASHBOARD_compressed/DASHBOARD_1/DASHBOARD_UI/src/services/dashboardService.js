import { API_ROOT } from "../config";
import ApiRequest from "./ApiService";

export function getComponentData(dashboardId, componentId){
    return ApiRequest.get(`${API_ROOT}dashboard/${dashboardId}/${componentId}`)

}