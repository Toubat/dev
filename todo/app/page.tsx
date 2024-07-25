import { cn } from "@/lib/utils";

export default function Home() {
  // justify-start
  // justify-center
  // justify-end px, rem  block, flex, inline-block, inline 1 = 0.25rem
  // padding, margin
  // x, y, t, l, r, b
  return (
    <main className="min-h-screen flex justify-center items-center bg-gradient-to-b from-gray-200">
      <div
        className={cn(
          "absolute w-[48rem] h-[48rem] -rotate-6 rounded-3xl",
          "bg-gradient-to-r from-cyan-500"
        )}
      ></div>
      <div
        className={cn(
          "w-[45rem] h-[45rem] bg-white rounded-3xl shadow-md z-10 px-12 pb-12",
          "flex flex-col"
        )}
      >
        <span className="text-3xl font-semibold text-center m-8">Todo App</span>
        <span className="text-xl text-center text-muted-foreground mb-8 leading-[0rem]">
          Manage your life easier
        </span>
        <div className="h-full flex flex-col">
          <div className="bg-slate-100 h-full">123</div>
          <div className="flex flex-row"></div>
        </div>
      </div>
    </main>
  );
}
