export default function StatCard({ label, value }) {
    return (
        <div className="rounded-xl bg-slate-900 p-6 border border-slate-800 hover:border-blue-500/50 transition">
            <p className="text-slate-400 text-sm">{label}</p>
            <p className="text-3xl font-bold mt-2">{value}</p>
        </div>
    );
}
