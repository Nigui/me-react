import { ABTestingPage } from "../ABTestPage";
import Script from "next/script";

export default function Page() {
  return (
    <>
      <Script
        key="abtasty-tag"
        strategy="beforeInteractive"
        type="module"
        src="https://dev-try-v3.abtasty.com/36ad5e4d1a4e0f94c06814a7a02d3c3f.js"
      />
      <ABTestingPage />
    </>
  );
}
