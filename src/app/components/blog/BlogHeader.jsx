export default function BlogHeader({topic, date, title, description}) {
    return (
        <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
                <span className="text-white/30 text-xs uppercase tracking-widest">{topic}</span>
                <span className="text-white/20 text-xs">·</span>
                <span className="text-white/30 text-xs">{date}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-wide leading-tight mb-6">
                {title}
            </h1>
            <p className="text-white/50 text-lg leading-relaxed">
                {description}
            </p>
        </div>

    )
}