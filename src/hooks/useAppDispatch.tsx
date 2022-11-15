import { useDispatch } from "react-redux";
import type { appDispatch } from "../store";

export const useAppDispatch: () => appDispatch = useDispatch;
