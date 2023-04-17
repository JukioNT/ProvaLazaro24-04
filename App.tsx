import React, { useState, Dispatch, SetStateAction } from 'react';
import { Pag1 } from "./src/screens/Pag1";
import { Pag2 } from "./src/screens/Pag2";

export interface IPage {
  setPageI: Dispatch<SetStateAction<number>>
  pageNumber: number
}

export default function App(){
  const [page, setPage] = useState(1)
  switch(page){
    case 1:
      return <Pag1 setPageI={setPage} pageNumber={2}/>
    default:
      return <Pag2 setPageI={setPage} pageNumber={1}/>
  }
}
