import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-slate-50 pt-32 pb-24">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <span className="pill">Get in touch</span>
            <h1 className="mt-6 text-5xl font-display text-slate-900 sm:text-6xl">
              We'd love to <span className="text-emerald-800">hear from you.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-500 max-w-lg">
              Have questions about our dairy products or subscription plans? Our team is here to help you.
            </p>

            <div className="mt-12 space-y-8">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-800">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Call us</h3>
                  <p className="text-slate-500">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-yellow-50 text-yellow-950">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Email us</h3>
                  <p className="text-slate-500">hello@gaonfresh.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-800">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Visit us</h3>
                  <p className="text-slate-500">Mohali, Punjab, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-white p-8 shadow-sm border border-slate-200 lg:p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-900">Full Name</label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 transition-smooth"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-900">Email Address</label>
                  <input
                    type="email"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 transition-smooth"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Subject</label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 transition-smooth"
                  placeholder="How can we help?"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Message</label>
                <textarea
                  className="w-full h-32 rounded-2xl border border-slate-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 transition-smooth resize-none"
                  placeholder="Tell us more..."
                ></textarea>
              </div>
              <button className="h-14 w-full rounded-full bg-emerald-600 text-white font-semibold shadow-sm hover:bg-emerald-800 transition-smooth">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
