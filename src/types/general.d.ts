export const DASHBOARD_KINDS = ["airplane", "boat", "car"] as const;
type DashboardKindTuple = typeof DASHBOARD_KINDS;
export type DashboardKind = DashboardKindTuple[number];
