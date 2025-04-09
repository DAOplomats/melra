export default function Block({ title, description }) {
  return (
    <div className="flex flex-col">
      <div className="flex w-full gap-2 items-center">
        <div className="border border-[var(--foreground)] border-t border-b-0 border-r-0 rounded-tl-lg w-2 h-2"></div>
        <p className="text-4xl font-bold mb-2">{title}</p>
        <div className="border border-[var(--foreground)] border-t border-b-0 border-l-0 flex-1 rounded-tr-lg w-20 h-2"></div>
      </div>
      <div className="flex flex-col w-full gap-2 border border-[var(--foreground)] p-3 px-4 pb-5 rounded-br-lg rounded-bl-lg -mt-5 pt-5 border-t-0 text-xl">
        {description}
      </div>
    </div>
  );
}
