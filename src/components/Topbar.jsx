import { Mail, Phone, User, UserPlus } from 'lucide-react'

const Topbar = () => {
    const text = "FREE SHIPPING ON ORDERS ABOVE ₹999 • EASY 30-DAY RETURNS • CASH ON DELIVERY AVAILABLE • NEW ARRIVALS EVERY WEEK"

    return (
        <>
            <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 30s linear infinite;
        }
      `}</style>

            <div className="bg-[#02225E] border-b border-white/[0.07] font-sans">
                <div className="flex items-center justify-between h-10 w-full px-16">

                    {/* Contact Info */}
                    <div className="flex items-center gap-5">
                        <div className="flex items-center gap-1.5 text-white/90 text-xs font-bold">
                            <Mail size={16} className="opacity-80" />
                            <span className="text-white/90 tracking-wide">milktofo@gmail.com</span>
                        </div>

                        <div className="w-px h-4 bg-white/80" />

                        <div className="flex items-center gap-1.5 text-white/90 text-xs font-bold">
                            <Phone size={16} className="opacity-80" />
                            <span className="text-white/90 tracking-wide">+91-9568816858</span>
                        </div>
                    </div>

                    {/* Marquee */}
                    <div className="hidden md:flex flex-1 min-w-0 max-w-[200px] lg:max-w-[340px] xl:max-w-[560px] 2xl:max-w-[720px] overflow-hidden relative h-full items-center justify-center px-4 ml-6">
                        <div className="marquee-track whitespace-nowrap font-bold uppercase tracking-[0.1em] text-[10px] flex items-center text-white/90">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="flex items-center">
                                    <span>{text}</span>
                                    <span style={{ margin: '0 10px' }}>✦</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-5">
                        <button className="flex items-center gap-1.5 px-3.5 py-1 rounded-sm text-xs font-semibold tracking-wide text-white bg-white/[0.08] border border-white hover:bg-[#447901] transition-colors duration-150">
                            <User size={13} />
                            Login
                        </button>

                        <button className="flex items-center gap-1.5 px-4 py-1 rounded-sm text-xs font-semibold tracking-wide text-[#02225E] bg-white border border-transparent hover:bg-blue-100 transition-colors duration-150">
                            <UserPlus size={13} />
                            Register
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Topbar