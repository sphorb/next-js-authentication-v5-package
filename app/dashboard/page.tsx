import Link from "next/link";

export default function DashBoard() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>DASHBOARD PAGE</h1>
      <Link href={"/"} className="bg-[#F1C617] text-black">
        GO TO HOME
      </Link>
    </main>
  );
}
