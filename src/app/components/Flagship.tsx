"use client";

import { Flagship } from "@flagship.io/js-sdk";
import { useEffect, useState } from "react";

function generateVisitorId() {
  return "visitor" + Math.round(Math.random() * 1000);
}

export default function FlagshipService() {
  const [value, setValue] = useState<string>("Flagship not initialized");

  useEffect(() => {
    Flagship.start(
      process.env.NEXT_PUBLIC_ABTASTY_FEAR_ENVIRONMENT_ID!,
      process.env.NEXT_PUBLIC_ABTASTY_FEAR_API_KEY!
    );

    const visitor = Flagship.newVisitor({
      visitorId: generateVisitorId(),
      hasConsented: true,
    });
    (async () => {
      const [flags, status] = await Promise.all([
        visitor.fetchFlags(),
        Flagship.getStatus(),
      ]);
      console.log("visitor flags", { flags, status });

      setValue(JSON.stringify({ flags, status }));
    })();
  }, []);

  return (
    <div>
      <h3>Flagship</h3>
      <div>{value}</div>
    </div>
  );
}
