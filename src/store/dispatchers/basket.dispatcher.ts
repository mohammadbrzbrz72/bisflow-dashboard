import { useCallback } from "react";

import { useAppDispatch } from "../hooks";
import { userSlice } from "../features/user-slice";

export function useBasketDispatcher() {
  const dispatch = useAppDispatch();

  const dispatchNewData = useCallback(() => {
    dispatch(userSlice.actions.get());
  }, []);

  return { dispatchNewData };
}
