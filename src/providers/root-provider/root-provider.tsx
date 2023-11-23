import { MuiProvider } from "@/modules/mui/providers/mui-provider/mui-provider";
import React from "react";

export function RootProvider({ children }: { children: React.ReactNode }) {
  return <MuiProvider>{children}</MuiProvider>;
}
