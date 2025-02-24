import { ROUTES_STACK_ENUM } from "@/src/routes/routes.enum";
import { ReactNode } from "react";

export interface PanGestureGoBackProps {
  children: ReactNode;
  route: ROUTES_STACK_ENUM;
}
