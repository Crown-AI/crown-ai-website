import Image from "next/image";
export function Mice() {
  return (
    <div>
      <Image
        src={"/cursor.png"}
        alt="cursor"
        id="mouse"
        width={30}
        height={30}
        style={{
          display: "block",
          zIndex: 9999,
          position: "absolute",
          pointerEvents: "none",
        }}
        onClick={(l) => {
          return true;
        }}
      ></Image>
      <Image
        src={"/pointer.png"}
        alt="cursor"
        id="pointer"
        width={20}
        height={30}
        style={{
          display: "none",
          zIndex: 9999,
          position: "absolute",
          pointerEvents: "none",
        }}
        onClick={(l) => {
          return true;
        }}
      ></Image>
    </div>
  );
}
