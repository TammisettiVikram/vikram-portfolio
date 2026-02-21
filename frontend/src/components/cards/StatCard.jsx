export default function StatCard({ label, value }) {
    return (
        <div className="
      rounded-2xl border border-[var(--border-color)] bg-[var(--surface-elevated)] p-6 backdrop-blur
    ">
            <p className="text-sm text-[var(--text-muted)]">{label}</p>
            <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
    );
}
