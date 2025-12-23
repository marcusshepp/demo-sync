import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <!-- Navigation -->
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <div class="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
          <span class="text-white font-bold text-xl">S</span>
        </div>
        <span class="text-2xl font-bold gradient-text">SyncLC</span>
      </div>
      <div class="hidden md:flex items-center gap-8">
        <a href="#services" class="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Services</a>
        <a href="#results" class="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Results</a>
        <a href="#about" class="text-slate-600 hover:text-indigo-600 font-medium transition-colors">About</a>
        <a href="#contact" class="btn-primary !py-3 !px-6 !text-base">Get Started</a>
      </div>
    </div>
  </nav>

  <!-- Hero Section with Video Background -->
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover">
      <source src="/videos/hero-bg.mp4" type="video/mp4">
    </video>
    <div class="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-indigo-900/70 to-purple-900/80"></div>
    <div class="relative z-10 max-w-5xl mx-auto px-6 text-center">
      <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-8 border border-white/20">
        <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
        <span class="text-white/90 text-sm font-medium">Now accepting new clients for Q1 2024</span>
      </div>
      <h1 class="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
        Turn Visitors Into
        <span class="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> Paying Customers</span>
      </h1>
      <p class="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
        We build high-converting lead funneling websites that capture attention, nurture prospects, and drive revenue for your business.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#contact" class="btn-primary">
          <span>Schedule a Call</span>
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </a>
        <a href="#services" class="btn-secondary !bg-white/10 !text-white !border-white/30 hover:!bg-white/20">
          See Our Work
        </a>
      </div>
    </div>
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <svg class="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
    </div>
  </section>

  <!-- Stats Section -->
  <section class="py-16 bg-white border-y border-slate-200">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div class="text-center">
          <div class="text-4xl md:text-5xl font-extrabold gradient-text mb-2">247%</div>
          <div class="text-slate-600 font-medium">Average ROI Increase</div>
        </div>
        <div class="text-center">
          <div class="text-4xl md:text-5xl font-extrabold gradient-text mb-2">50+</div>
          <div class="text-slate-600 font-medium">Clients Served</div>
        </div>
        <div class="text-center">
          <div class="text-4xl md:text-5xl font-extrabold gradient-text mb-2">3.2M</div>
          <div class="text-slate-600 font-medium">Leads Generated</div>
        </div>
        <div class="text-center">
          <div class="text-4xl md:text-5xl font-extrabold gradient-text mb-2">98%</div>
          <div class="text-slate-600 font-medium">Client Satisfaction</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section id="services" class="py-24 bg-slate-50">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">What We Do</span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Lead Funneling <span class="gradient-text">Done Right</span></h2>
        <p class="text-xl text-slate-600 max-w-2xl mx-auto">We don't just build websites. We engineer conversion machines that transform your traffic into qualified leads.</p>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="card-hover group">
          <div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-3">Custom Landing Pages</h3>
          <p class="text-slate-600 leading-relaxed">Stunning, conversion-optimized landing pages tailored to your brand and audience. Every pixel designed to convert.</p>
        </div>
        <div class="card-hover group">
          <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-3">Funnel Optimization</h3>
          <p class="text-slate-600 leading-relaxed">Data-driven A/B testing and continuous optimization to maximize your conversion rates and ROI.</p>
        </div>
        <div class="card-hover group">
          <div class="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-3">Lead Nurturing</h3>
          <p class="text-slate-600 leading-relaxed">Automated email sequences and retargeting campaigns that keep your brand top-of-mind.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Results Section -->
  <section id="results" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span class="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">Proven Results</span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Real Impact for <span class="gradient-text">Real Businesses</span></h2>
          <p class="text-xl text-slate-600 mb-8 leading-relaxed">Our clients don't just get pretty websites—they get measurable growth. Here's what working with SyncLC looks like.</p>
          <div class="space-y-6">
            <div class="flex gap-4">
              <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <h4 class="font-bold text-slate-900 text-lg">3x More Qualified Leads</h4>
                <p class="text-slate-600">Smart targeting and compelling CTAs that attract the right prospects.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <h4 class="font-bold text-slate-900 text-lg">40% Lower Acquisition Cost</h4>
                <p class="text-slate-600">Efficient funnels mean you spend less to acquire each customer.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <h4 class="font-bold text-slate-900 text-lg">Launch in 2 Weeks</h4>
                <p class="text-slate-600">Fast turnaround without compromising on quality or results.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="relative">
          <img src="/images/analytics.jpg" alt="Team analyzing results" class="rounded-2xl shadow-2xl w-full">
          <div class="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <span class="text-slate-600 text-sm font-medium">Live Results</span>
            </div>
            <div class="text-3xl font-extrabold text-slate-900">+127%</div>
            <div class="text-slate-600">Conversion rate this month</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="relative">
          <img src="/images/team.jpg" alt="SyncLC Team" class="rounded-2xl shadow-2xl w-full">
          <div class="absolute -top-6 -right-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white">
            <div class="text-4xl font-extrabold">8+</div>
            <div class="text-indigo-100">Years Experience</div>
          </div>
        </div>
        <div>
          <span class="inline-block text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-4">About SyncLC</span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">We're Obsessed With <span class="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Your Growth</span></h2>
          <p class="text-xl text-slate-300 mb-8 leading-relaxed">Founded by marketers and engineers who got tired of seeing businesses struggle with underperforming websites. We combine stunning design with data-driven strategy to deliver results that matter.</p>
          <div class="grid grid-cols-2 gap-6">
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-5">
              <div class="text-2xl font-bold text-white mb-1">50+</div>
              <div class="text-slate-400 text-sm">Happy Clients</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-5">
              <div class="text-2xl font-bold text-white mb-1">$12M+</div>
              <div class="text-slate-400 text-sm">Revenue Generated</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section id="contact" class="py-24 bg-white">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <span class="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">Ready to Grow?</span>
      <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Let's Build Your <span class="gradient-text">Lead Machine</span></h2>
      <p class="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">Schedule a free strategy call and discover how we can transform your website into a conversion powerhouse.</p>
      <form class="max-w-xl mx-auto">
        <div class="flex flex-col sm:flex-row gap-4 mb-4">
          <input type="text" placeholder="Your Name" class="flex-1 px-6 py-4 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg">
          <input type="email" placeholder="Your Email" class="flex-1 px-6 py-4 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg">
        </div>
        <input type="text" placeholder="Your Company" class="w-full px-6 py-4 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg mb-4">
        <button type="submit" class="btn-primary w-full sm:w-auto">
          <span>Book Your Free Strategy Call</span>
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </button>
      </form>
      <p class="text-slate-500 text-sm mt-6">No commitment required. Let's just talk about your goals.</p>
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-12 bg-slate-900 text-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-2">
          <div class="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
            <span class="text-white font-bold text-xl">S</span>
          </div>
          <span class="text-2xl font-bold">SyncLC</span>
        </div>
        <div class="flex items-center gap-8 text-slate-400">
          <a href="#services" class="hover:text-white transition-colors">Services</a>
          <a href="#results" class="hover:text-white transition-colors">Results</a>
          <a href="#about" class="hover:text-white transition-colors">About</a>
          <a href="#contact" class="hover:text-white transition-colors">Contact</a>
        </div>
        <div class="text-slate-500 text-sm">© 2024 SyncLC. All rights reserved.</div>
      </div>
    </div>
  </footer>
`
