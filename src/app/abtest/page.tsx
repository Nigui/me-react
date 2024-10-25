export default function ABTestingPage() {
  return (
    <div className="w-full h-screen bg-primary text-white flex flex-col">
      <h1 className="text-3xl text-center p-10 font-bold">
        Demo page to do some ABTesting
      </h1>
      <iframe src="https://beta.nigui.fr/search" className="flex-grow" />
    </div>
  );
}
