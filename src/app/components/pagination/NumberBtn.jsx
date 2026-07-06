export default function NumberBtn({ page, num, onClick }) {
    const isActive = page === num;
    return (
        <button
            onClick={onClick}
            aria-label={`Page ${num}`}
            aria-current={isActive ? "page" : undefined}
            className={`w-9 h-9 rounded-lg text-sm font-medium transition border ${
                isActive
                    ? "bg-gold text-black border-gold"
                    : "bg-white/5 text-white/60 border-white/5 hover:text-white/80"
            }`}
        >
            {num}
        </button>
    );
}
