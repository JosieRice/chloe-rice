import Image from "next/image";

export function Languages() {
  return (
    <div className="flex flex-col mt-8">
      <h1 className="text-5xl font-bold text-center">Languages</h1>
      <div className="flex flex-wrap gap-8 justify-center mt-8">
        <Image
          alt="javascript"
          src={"/depIcons/javascript.png"}
          width={80}
          height={80}
        />
        <Image
          alt="typescript"
          src={"/depIcons/typescript.png"}
          width={80}
          height={80}
        />
      </div>
    </div>
  );
}
