import { useExsumContext, useGlobalModalContext, useLoading } from "@/lib/core/hooks/useHooks";
import { ExsumSegmentDto, initExsumSegmentDto } from "./cardSegmentModel";
import { useEffect, useState } from "react";
import { doCreate, doDelete, doGet, doUpdate } from "./cardSegmentService";
import { API_CODE } from "@/lib/core/api/apiModel";

const useCardSegmentVM = () => {

    const loadingContext = useLoading();
    const errorModalContext = useGlobalModalContext();
    const { exsum } = useExsumContext()

    const [data, setData] = useState<ExsumSegmentDto>({ ...initExsumSegmentDto })
    const [request, setRequest] = useState<ExsumSegmentDto>({ ...initExsumSegmentDto })
    const [modal, setModal] = useState(false);

    async function getData() {
        const response = await doGet({
            body: {
                exsum_id: exsum.id
            },
            loadingContext: loadingContext,
            errorModalContext: errorModalContext,
        });

        if (response?.code == API_CODE.sucess) {
            let result: ExsumSegmentDto = response.result;
            if (result) {
                setData(result)
                setRequest(result)
            } else {
                setData({ ...initExsumSegmentDto })
                setRequest({ ...initExsumSegmentDto })
            }
        }
    }

    useEffect(() => {
        if (exsum.id !== 0) {
            getData();
        }
    }, [exsum]);


    async function updateData(param: ExsumSegmentDto) {
        const req: ExsumSegmentDto = {
            ...param,
            exsum_id: exsum.id
        }

        const params = {
            body: req,
            loadingContext: loadingContext,
            errorModalContext: errorModalContext,
        }

        if (request.id !== 0) {
            const response = await doUpdate(params);
            if (response?.code == API_CODE.sucess) {
                getData();
                setModal(false)
            }
        } else {
            const response = await doCreate(params);
            if (response?.code == API_CODE.sucess) {
                getData();
                setModal(false)
            }
        }

    }

    async function deleteData() {
        const params = {
          body: request,
          loadingContext: loadingContext,
          errorModalContext: errorModalContext,
        }
        await doDelete(params)
        getData();
      }

    return {
        data,
        setData,
        modal,
        setModal,
        getData,
        request,
        setRequest,
        updateData,
        deleteData
    }

}

export default useCardSegmentVM;