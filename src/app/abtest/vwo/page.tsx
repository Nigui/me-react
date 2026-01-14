import { ABTestingPage } from "../ABTestPage";
import { VWOScript } from "vwo-smartcode-nextjs";
import Script from "next/script";

export default function Page() {
  return (
    <>
      <VWOScript accountId="1182811" />

      <ABTestingPage className="bg-red-500" />
    </>
  );
}
