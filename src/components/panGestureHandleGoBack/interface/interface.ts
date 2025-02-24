import { StackRoutesTypeProps } from "@/src/routes/stackRoutes/@types";
import { ReactNode } from "react";

export interface PanGestureGoBackProps {
  children: ReactNode;
  route: keyof StackRoutesTypeProps;
}
