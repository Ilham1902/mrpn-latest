import React, {useEffect} from "react";
import EmptyState from "@/components/empty";
import {IconEmptyData} from "@/components/icons";
import CardItem from "@/components/cardTabItem";
import useCardIntervensiVM from "@/app/executive-summary/partials/tab4Cascading/cardIntervensi/cardIntervensiVM";
import TableProfilIntervensi from "@/app/executive-summary/partials/tab4Cascading/table-profil-intervensi";
import useRkpVM from "@/components/dropdown/rkpVM";

export default function CardProfileIntervensi() {

  useRkpVM()

  const {
    exsum,
    data,
    getData,
  } = useCardIntervensiVM()

  useEffect(() => {
      if (exsum !== undefined && exsum.id != 0) {
        getData()
      }
  }, [exsum]);

  const filterData = data.filter(x => x.intervention)

  return (
    <CardItem
      title="Profil Intervensi Kunci"
    >
      {data.length == 0 ? (
        <EmptyState
          dense
          icon={<IconEmptyData width={100}/>}
          title="Data Kosong"
          description="Silahkan isi profil intervensi pada halaman executive summary"
        />
      ) : (
        <TableProfilIntervensi data={filterData}/>
      )}

    </CardItem>
  );
}
