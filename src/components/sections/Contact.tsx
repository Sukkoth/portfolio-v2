import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react"
import { useState } from "react"

export function Contact() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus('submitting')

        const form = e.currentTarget
        const formData = new FormData(form)

        try {
            const response = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })

            if (response.ok) {
                setStatus('success')
                form.reset()
                setTimeout(() => setStatus('idle'), 5000)
            } else {
                setStatus('error')
                setTimeout(() => setStatus('idle'), 5000)
            }
        } catch {
            setStatus('error')
            setTimeout(() => setStatus('idle'), 5000)
        }
    }

    return (
        <section id="contact" className="py-32 px-4 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-[var(--accent)]/5" />
            
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="flex items-center gap-8 mb-16">
                    <span className="text-6xl font-bold text-[var(--primary)]">05</span>
                    <h2 className="text-5xl md:text-6xl">
                        Let's <span className="italic">Connect</span>
                    </h2>
                </div>

                <div className="bg-[var(--surface)] border-2 border-[var(--border)] p-8 md:p-12">
                    <p className="text-lg text-[var(--text-secondary)] mb-12 leading-relaxed">
                        Have a project in mind? Let's build something exceptional together. 
                        I'm always open to discussing new opportunities and collaborations.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-xs tracking-[0.2em] uppercase text-[var(--text-secondary)] font-bold">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    disabled={status === 'submitting'}
                                    className="w-full px-4 py-4 bg-[var(--bg)] border-2 border-[var(--border)] focus:outline-none focus:border-[var(--primary)] transition-colors disabled:opacity-50"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs tracking-[0.2em] uppercase text-[var(--text-secondary)] font-bold">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    disabled={status === 'submitting'}
                                    className="w-full px-4 py-4 bg-[var(--bg)] border-2 border-[var(--border)] focus:outline-none focus:border-[var(--primary)] transition-colors disabled:opacity-50"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-xs tracking-[0.2em] uppercase text-[var(--text-secondary)] font-bold">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                required
                                disabled={status === 'submitting'}
                                className="w-full px-4 py-4 bg-[var(--bg)] border-2 border-[var(--border)] focus:outline-none focus:border-[var(--primary)] transition-colors resize-none disabled:opacity-50"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>

                        {/* Status Messages */}
                        {status === 'success' && (
                            <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 text-green-700 dark:text-green-400">
                                <CheckCircle size={20} />
                                <p className="font-bold text-sm">Message sent successfully! I'll get back to you soon.</p>
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border-2 border-red-500 text-red-700 dark:text-red-400">
                                <AlertCircle size={20} />
                                <p className="font-bold text-sm">Oops! Something went wrong. Please try again.</p>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="group w-full py-5 bg-[var(--primary)] text-white font-bold tracking-wider uppercase relative overflow-hidden transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span className="relative z-10 flex justify-center items-center gap-2">
                                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-[var(--primary-dark)] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                        </button>
                    </form>

                    <div className="mt-12 pt-8 border-t-2 border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-6">
                        <a href="mailto:hello@gadisa.dev" className="flex items-center gap-3 text-sm hover:text-[var(--primary)] transition-colors group">
                            <div className="p-2 border border-[var(--border)] group-hover:border-[var(--primary)] transition-colors">
                                <Mail size={16} />
                            </div>
                            <span className="font-bold">suukootj@gmail.com</span>
                        </a>
                        <span className="text-xs tracking-[0.2em] uppercase text-[var(--text-secondary)]">
                            Addis Ababa, Ethiopia
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
