export default function StatCard({ label, value }) {
    return (
        <div className="
      rounded-xl p-6
      bg-white/80 text-slate-900
      border border-slate-200
      dark:bg-slate-900/60 dark:text-slate-100 dark:border-slate-800
      backdrop-blur
    ">
            <p className="text-sm opacity-70">{label}</p>
            <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
    );
}
