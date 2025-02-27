import { getAllDinosThunk } from "@/entities/dino";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";


export const useDinoList = () => {
  const dispatch = useAppDispatch();
  const dinos = useAppSelector((state) => state.dino.dinos);

  useEffect(() => {
    dispatch(getAllDinosThunk());
  }, [dispatch]);

  return {
    dinos,
  };
};
