import Image from "next/image";

const url = "https://random.danielpetrica.com/api/random";
export default function RandomBackgroundPage() {
  return (
    <div className="w-full">
      <Image
        src="https://random.danielpetrica.com/api/random"
        alt="random background"
        fill
      />
    </div>
  );
}
