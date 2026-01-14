import Script from "next/script";
import { ABTestingPage } from "./ABTestPage";
import FlagshipService from "../components/Flagship";

export default async function Page() {
  return (
    <>
      <Script
        key="abtasty-tag"
        strategy="beforeInteractive"
        type="application/javascript"
        src="https://dev-try-v3.abtasty.com/36ad5e4d1a4e0f94c06814a7a02d3c3f.js"
      />
      <FlagshipService />
      <ABTestingPage />
    </>
  );
}
