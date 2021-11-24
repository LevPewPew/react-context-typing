import { DashboardKind } from "../../types/general.d";

export interface Dashboard {
  kind: DashboardKind;
}

export type Action = { type: "SET_DASHBOARD"; payload: DashboardKind };
