import { useExsumContext, useGlobalModalContext, useLoading } from "@/lib/core/hooks/useHooks";
import { useEffect, useState } from "react";
import { API_CODE } from "@/lib/core/api/apiModel";
import { ExsumSWOTDto, initExsumSWOTDto } from "./cardSwotModel";
import { doCreate, doDelete, doGet, doUpdate } from "./cardSwotService";

const useCardSWOTVM = () => {

    const loadingContext = useLoading();
    const errorModalContext = useGlobalModalContext();
    const { exsum } = useExsumContext()

    const [data, setData] = useState<ExsumSWOTDto>({ ...initExsumSWOTDto })
    const [request, setRequest] = useState<ExsumSWOTDto>({ ...initExsumSWOTDto })
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
            let result: ExsumSWOTDto = response.result;
            if (result) {
                setData(result)
                setRequest(result)
            } else {
                setData({ ...initExsumSWOTDto })
                setRequest({ ...initExsumSWOTDto })
            }
        }
    }

    useEffect(() => {
        if (exsum.id !== 0) {
            getData();
        }
    }, [exsum]);


    async function updateData() {
        const req: ExsumSWOTDto = {
            ...request,
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

export default useCardSWOTVM;