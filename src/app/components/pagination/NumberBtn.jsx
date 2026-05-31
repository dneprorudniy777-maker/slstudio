export default function NumberBtn({page, num, onClick}) {
    return (
        <button
            key={num}
            onClick={onClick}
            className="w-9 h-9 rounded-lg text-sm font-medium transition"
            style={{
                backgroundColor: page === num ? "#C9A84C" : "rgba(255,255,255,0.05)",
                color: page === num ? "#000" : "rgba(255,255,255,0.5)",
                border: page === num ? "1px solid #C9A84C" : "1px solid rgba(255,255,255,0.05)"
            }}
        >
            {num}
        </button>
    )
}