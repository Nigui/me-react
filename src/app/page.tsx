import InfoCard from "./home/components/InfoCard.component";

export default function HomePage() {
  return (
    <main className="flex justify-center items-center min-h-screen p-24 bg-deepblue ">
      <div className="relative">
        <div className="w-48 h-48 bg-lime-500 rounded-full absolute blur-sm -left-20 -top-20 animate-background-vertical-1 opacity-20" />
        <div className="w-36 h-36 bg-amber-500 rounded-full absolute blur-sm -right-20 -bottom-20 animate-background-vertical-1 opacity-20" />
        <InfoCard />
      </div>
    </main>
  );
}
