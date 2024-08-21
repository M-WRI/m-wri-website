import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white h-screen flex flex-col">
      <h1
        style={{
          fontSize: "calc((100vw - 360px) * 0.12)",
          lineHeight: "0.8",
          textAlign: "center",
        }}
      >
        MORITZ WRIGHT
      </h1>
      <h4
        style={{
          fontSize: "calc((100vw - 360px) * 0.037)",
          lineHeight: "1.2",
          textAlign: "center",
        }}
      >
        Web Developer / Designer / Berlin DE / Managua NIC
      </h4>
      <Image
        src="./assets/logo.svg"
        width={500}
        height={500}
        alt="Picture of the author"
        className="mx-auto"
        style={{ height: "calc(100vh - 122px)" }}
      />
      <div className="flex-1 w-full bg-pink-100" />
    </main>
  );
}
