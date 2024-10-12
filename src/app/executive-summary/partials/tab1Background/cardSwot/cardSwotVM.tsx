import {
  useExsumContext,
  useGlobalModalContext,
  useLoading,
} from "@/lib/core/hooks/useHooks";
import { useEffect, useState } from "react";
import { API_CODE } from "@/lib/core/api/apiModel";
import {
  ExsumSWOTRequestDto,
  ExsumSWOTResponseDto,
  initExsumSWOTRequestDto,
  initExsumSWOTResponseDto,
  LISTSWOT,
} from "./cardSwotModel";
import { doCreate, doDelete, doGet, doUpdate } from "./cardSwotService";

const useCardSWOTVM = () => {
  const loadingContext = useLoading();
  const errorModalContext = useGlobalModalContext();
  const { exsum } = useExsumContext();

  const [data, setData] = useState<ExsumSWOTResponseDto>({
    ...initExsumSWOTResponseDto,
  });
  const [request, setRequest] = useState<ExsumSWOTRequestDto>({
    ...initExsumSWOTRequestDto,
  });
  const [modal, setModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const handleModalDelete = () => {
    setModalDelete(true);
  };

  async function getData() {
    const response = await doGet({
      body: {
        exsum_id: exsum.id,
      },
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    });

    if (response?.code == API_CODE.success) {
      let result: ExsumSWOTResponseDto = response.result;
      if (result) {
        setData(result);

        let initReqState: ExsumSWOTRequestDto = {
          id: result.id,
          exsum_id: exsum.id,
          values: result.values,
        };
        setRequest(initReqState);
      } else {
        setData({ ...initExsumSWOTResponseDto });
        setRequest({ ...initExsumSWOTRequestDto });
      }
    }
  }

  useEffect(() => {
    if (exsum.id !== 0) {
      getData();
    }
  }, [exsum]);

  async function updateData() {
    const req: ExsumSWOTRequestDto = {
      ...request,
      exsum_id: exsum.id,
    };

    const params = {
      body: req,
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    };

    if (request.id !== 0) {
      const response = await doUpdate(params);
      if (response?.code == API_CODE.success) {
        getData();
        setModal(false);
      }
    } else {
      const response = await doCreate(params);
      if (response?.code == API_CODE.success) {
        getData();
        setModal(false);
      }
    }
  }

  async function deleteData() {
    const params = {
      body: request,
      loadingContext: loadingContext,
      errorModalContext: errorModalContext,
    };
    await doDelete(params);
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
    deleteData,
    modalDelete,
    setModalDelete,
    handleModalDelete,
  };
};

export default useCardSWOTVM;
