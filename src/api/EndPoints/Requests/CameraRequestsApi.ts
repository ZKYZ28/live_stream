import axiosInstance from "../../Axios.ts";
import CONFIGURATION from "../Configuration.ts";
import {Channel} from "../../Models/Channel.ts";

class CameraRequestsApi {
    static async updateAlarmStatus(status: boolean) {
        const response = await axiosInstance.post(`/alarm-status`, {status} );
        return response.data;
    }

    static async getChannel() {
        return axiosInstance.get<Channel>(`${CONFIGURATION.API_ENDPOINT}/channel/`);
    }
}

export default CameraRequestsApi;