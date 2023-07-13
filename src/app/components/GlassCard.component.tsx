import { PropsWithChildren } from "react";

export function GlassCard({ children }: PropsWithChildren) {
  return (
    <div className="bg-white p-10 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
      {children}
    </div>
  );
}
