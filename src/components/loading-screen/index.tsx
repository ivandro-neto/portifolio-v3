import Image from "next/image";
const Loading: React.FC = () => {
  return (
    <div
      className={
        "logo pulsing flex justify-center items-center w-full h-[100dvh] absolute z-10 top-0 bg-background"
      }
    >
      <Image
        className="lg:w-16"
        src={"/logo.png"}
        width={48}
        height={48}
        alt="Ivandro Neto logo"
      />
    </div>
  );
};

export default Loading;
