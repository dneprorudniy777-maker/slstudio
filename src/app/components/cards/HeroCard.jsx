import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HeroCard({ icon: Icon, title, description, href }) {
    return (
        <div className="
            p-5 rounded-xl
            bg-transparent
            border border-white/5
            hover:border-white/10
            transition
            flex flex-col gap-3 h-full min-h-[280px]"
        >
            {/* Header */}
            <div className="flex items-center gap-3">
                <Icon className="text-white/70 w-5 h-5" />
                <h2 className="text-base font-semibold text-white/90">
                    {title}
                </h2>
            </div>
            {/* Description */}
            <p className="text-white/60 text-sm leading-relaxed flex-1">
                {description}
            </p>
            {/* Button */}
            <Link
                href={href}
                className="
                    mt-auto inline-flex items-center gap-2
                    text-black text-sm font-medium
                    px-4 py-2 rounded-lg
                    hover:opacity-90 transition"
                style={{backgroundColor: "#C9A84C"}}
            >
                Learn More
                <ArrowRight size={14} />
            </Link>
        </div>
    )
}