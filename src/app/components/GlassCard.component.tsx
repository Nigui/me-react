import { PropsWithChildren } from "react";

export function GlassCard({ children }: PropsWithChildren) {
  return (
    <div className="bg-white p-10 rounded-xl bg-opacity-40 backdrop-filter backdrop-blur-md">
      {children}
    </div>
  );
}
