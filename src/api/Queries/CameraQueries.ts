import {useMutation, useQueryClient} from "@tanstack/react-query";
import {channelKeys} from "../QueryKeys.ts";
import CameraRequestsApi from "../EndPoints/Requests/CameraRequestsApi.ts";

export const useUpdateAlarmStatus= () => {
    const client = useQueryClient();

    return useMutation({
        mutationFn: (status: boolean) => CameraRequestsApi.updateAlarmStatus(status),
        onSuccess: () => {
            client.invalidateQueries(channelKeys.all);
        },
    });
};

/*export const useGetChannel = () => {
    return useQuery({
        queryKey: channelKeys.list(),
        queryFn: () => CameraRequestsApi.getChannel().then((content) => content.data),
        initialData: [],
    });
};*/

