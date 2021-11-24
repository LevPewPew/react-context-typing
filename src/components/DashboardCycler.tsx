import { useContext } from "react";
import { DASHBOARD_KINDS } from "../types/general.d";
import * as dashboard from "../contexts/dashboard/DashboardProvider";

function DashboardCycler() {
  const [dashboardState, dashboardDispatch] = useContext(dashboard.context);

  function getNextDashboardKind() {
    const isAtLastIndex =
      DASHBOARD_KINDS.indexOf(dashboardState.kind) ===
      DASHBOARD_KINDS.length - 1;
    const nextDashboardKindIndex = isAtLastIndex
      ? 0
      : DASHBOARD_KINDS.indexOf(dashboardState.kind) + 1;

    return DASHBOARD_KINDS[nextDashboardKindIndex];
  }

  function cycleDashboard() {
    dashboardDispatch({
      type: "SET_DASHBOARD",
      payload: getNextDashboardKind(),
    });
  }

  return (
    <button type="button" onClick={cycleDashboard}>
      CYCLE DASHBOARD
    </button>
  );
}

export default DashboardCycler;
