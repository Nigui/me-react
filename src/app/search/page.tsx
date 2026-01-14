import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchPage() {
  return (
    <div className="w-full bg-primary">
      <main
        role="main"
        className="w-full flex flex-col h-screen content-center justify-center p-10 gap-5"
      >
        <div className="w-full sm:w-1/2 lg:w-1/3 bg-gray-50 rounded-xl m-auto">
          <div className="bg-white rounded-3xl shadow px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex gap-3 items-center text-xl font-bold">
            <MagnifyingGlassIcon className="w-10" />
            Search
          </div>
        </div>
        <iframe src="https://www.nigui.fr/random" className="flex-grow" />
      </main>
    </div>
  );
}
