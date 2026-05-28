"use client";
import { useState } from "react";
import { Mail, Send, Music2 } from "lucide-react";

export default function Hero() {
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
    };

    return (
        <section className="max-w-5xl mx-auto">
            <div className="flex flex-col gap-3 mb-12">
                <span className="text-white/30 text-xs uppercase tracking-[0.3em]">Get In Touch</span>
                <h1 className="text-4xl md:text-6xl font-semibold tracking-wide">
                    <span>{"Let's "}</span><span className="text-gold2">Work.</span>
                </h1>
                <p className="text-white/50 text-[15px] leading-relaxed max-w-xl mt-2">
                    Send me your track. Tell me what you are going for, and I will tell you what I can do with it. First conversation is always free.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <a href="mailto:sl.studio.music@gmail.com" className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.03] hover:border-white/10 transition">
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                                <Mail className="w-5 h-5 text-gold2" />
                            </div>
                            <div>
                                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Email</p>
                                <p className="text-white/80 text-sm">sl.studio.music@gmail.com</p>
                            </div>
                        </a>
                        <a href="https://www.youtube.com/@SLStudio_Guitar" target="_blank" className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.03] hover:border-white/10 transition">
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                                <Music2 className="w-5 h-5 text-gold2" />
                            </div>
                            <div>
                                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">YouTube</p>
                                <p className="text-white/80 text-sm">@SLStudio_Guitar</p>
                            </div>
                        </a>
                        <a href="https://t.me/serhii_lazariev" target="_blank" className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.03] hover:border-white/10 transition">
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                                <Send className="w-5 h-5 text-gold2" />
                            </div>
                            <div>
                                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Telegram</p>
                                <p className="text-white/80 text-sm">@serhii_lazariev</p>
                            </div>
                        </a>
                    </div>
                    <div className="p-6 rounded-xl border border-white/5 bg-white/[0.03]">
                        <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Response time</p>
                        <p className="text-white/70 text-sm leading-relaxed">I usually respond within 24 hours. For urgent projects feel free to reach out via Telegram.</p>
                    </div>
                </div>
                <div>
                    {sent ? (
                        <div className="flex flex-col items-center justify-center gap-4 text-center p-8 rounded-xl border border-white/5 bg-white/[0.03]">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                                <Send className="w-6 h-6 text-gold2" />
                            </div>
                            <h3 className="text-xl font-semibold">Message Sent!</h3>
                            <p className="text-white/50 text-sm">I will get back to you within 24 hours.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2">
                                    <label className="text-white/40 text-xs uppercase tracking-widest">Name</label>
                                    <input type="text" placeholder="John Smith" required className="bg-white/[0.03] border border-white/5 rounded-xl px-4 py-3 text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:border-white/20 transition" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-white/40 text-xs uppercase tracking-widest">Email</label>
                                    <input type="email" placeholder="john@email.com" required className="bg-white/[0.03] border border-white/5 rounded-xl px-4 py-3 text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:border-white/20 transition" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-white/40 text-xs uppercase tracking-widest">Service</label>
                                <select required className="bg-white/[0.03] border border-white/5 rounded-xl px-4 py-3 text-sm text-white/80 focus:outline-none focus:border-white/20 transition">
                                    <option value="">Select a service...</option>
                                    <option>Mixing and Mastering</option>
                                    <option>Arrangement and Production</option>
                                    <option>Sound Enhancement</option>
                                    <option>Not sure yet</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-white/40 text-xs uppercase tracking-widest">About your project</label>
                                <textarea rows={5} placeholder="Genre, what you have recorded, what you are going for..." required className="bg-white/[0.03] border border-white/5 rounded-xl px-4 py-3 text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:border-white/20 transition resize-none" />
                            </div>
                            <button type="submit" className="mt-2 bg-gold2 text-black font-medium text-sm px-6 py-3 rounded-xl hover:opacity-90 transition flex items-center justify-center gap-2">
                                Send Message
                                <Send size={14} />
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
