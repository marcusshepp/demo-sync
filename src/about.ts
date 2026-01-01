import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <!-- Navigation -->
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="/" class="flex items-center gap-2">
        <div class="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
          <span class="text-white font-bold text-xl">S</span>
        </div>
        <span class="text-2xl font-bold gradient-text">SyncLC</span>
      </a>
      <div class="hidden md:flex items-center gap-8">
        <a href="/#services" class="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Services</a>
        <a href="/#results" class="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Results</a>
        <a href="/about.html" class="text-indigo-600 font-medium transition-colors">About</a>
        <a href="/#contact" class="btn-primary !py-3 !px-6 !text-base">Get Started</a>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
    <div class="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900"></div>
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div class="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
    </div>
    <div class="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
      <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-8 border border-white/20">
        <span class="text-white/90 text-sm font-medium">Est. 2016</span>
      </div>
      <h1 class="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
        About <span class="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">SyncLC</span>
      </h1>
      <p class="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
        We're on a mission to transform how businesses convert online visitors into customers through strategic design and data-driven optimization.
      </p>
    </div>
  </section>

  <!-- Our Story Section -->
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span class="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">Our Story</span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Born From <span class="gradient-text">Frustration</span>
          </h2>
          <div class="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              In 2016, our founders Marcus and Sarah were running marketing campaigns for local businesses and kept hitting the same wall: beautiful websites that didn't convert.
            </p>
            <p>
              Companies were spending thousands on ads, driving traffic to sites that looked great but failed to capture leads. The disconnect between design and conversion optimization was costing businesses real money.
            </p>
            <p>
              We knew there had to be a better way. So we built it.
            </p>
            <p>
              SyncLC was founded on a simple principle: <strong class="text-slate-900">every pixel should serve a purpose, and that purpose is growth.</strong> We combine stunning design with conversion psychology, A/B testing, and continuous optimization to build websites that don't just look good—they perform.
            </p>
          </div>
        </div>
        <div class="relative">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl">
            <div class="aspect-square bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1">
              <div class="w-full h-full bg-white rounded-xl flex items-center justify-center">
                <div class="text-center p-8">
                  <div class="text-6xl font-extrabold gradient-text mb-4">8+</div>
                  <div class="text-2xl font-bold text-slate-900 mb-2">Years</div>
                  <div class="text-slate-600">Transforming Businesses</div>
                </div>
              </div>
            </div>
          </div>
          <div class="absolute -bottom-6 -right-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-6 text-white max-w-xs">
            <div class="text-3xl font-extrabold mb-2">50+</div>
            <div class="text-indigo-100">Businesses Scaled</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Our Values Section -->
  <section class="py-24 bg-slate-50">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">Our Values</span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
          What <span class="gradient-text">Drives Us</span>
        </h2>
        <p class="text-xl text-slate-600 max-w-2xl mx-auto">
          These aren't just words on a wall—they're the principles that guide every decision we make.
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="card-hover group">
          <div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-3">Results Over Everything</h3>
          <p class="text-slate-600 leading-relaxed">
            We're not here to win design awards. We're here to drive conversions, generate leads, and grow your revenue. Period.
          </p>
        </div>

        <div class="card-hover group">
          <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-3">Radical Transparency</h3>
          <p class="text-slate-600 leading-relaxed">
            You'll always know exactly what we're doing, why we're doing it, and what results we're achieving. No smoke and mirrors.
          </p>
        </div>

        <div class="card-hover group">
          <div class="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-3">Continuous Optimization</h3>
          <p class="text-slate-600 leading-relaxed">
            Launch isn't the finish line—it's the starting gun. We constantly test, learn, and optimize to improve your results.
          </p>
        </div>

        <div class="card-hover group">
          <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-3">Data-Driven Decisions</h3>
          <p class="text-slate-600 leading-relaxed">
            Every change is backed by data. We don't guess—we test, measure, and iterate based on real user behavior.
          </p>
        </div>

        <div class="card-hover group">
          <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-3">Speed to Market</h3>
          <p class="text-slate-600 leading-relaxed">
            Time is money. We move fast to get your campaigns live, then optimize them while they're driving results.
          </p>
        </div>

        <div class="card-hover group">
          <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-3">Partnership Mindset</h3>
          <p class="text-slate-600 leading-relaxed">
            Your success is our success. We're not just vendors—we're partners invested in your long-term growth.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Timeline Section -->
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">Our Journey</span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
          <span class="gradient-text">Milestones</span> That Shaped Us
        </h2>
      </div>

      <div class="relative">
        <!-- Timeline Line -->
        <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"></div>

        <!-- Timeline Items -->
        <div class="space-y-12">
          <!-- 2016 -->
          <div class="relative grid md:grid-cols-2 gap-8 items-center">
            <div class="md:text-right">
              <div class="inline-block md:block">
                <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">2016</div>
                <h3 class="text-2xl font-bold text-slate-900 mb-2">The Beginning</h3>
                <p class="text-slate-600">Founded by Marcus and Sarah with a simple mission: make websites that actually convert.</p>
              </div>
            </div>
            <div class="hidden md:block"></div>
            <div class="absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
          </div>

          <!-- 2018 -->
          <div class="relative grid md:grid-cols-2 gap-8 items-center">
            <div class="hidden md:block"></div>
            <div>
              <div class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">2018</div>
              <h3 class="text-2xl font-bold text-slate-900 mb-2">First $1M Generated</h3>
              <p class="text-slate-600">Our client campaigns crossed the million-dollar revenue milestone. Proof that our approach works.</p>
            </div>
            <div class="absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
          </div>

          <!-- 2020 -->
          <div class="relative grid md:grid-cols-2 gap-8 items-center">
            <div class="md:text-right">
              <div class="inline-block md:block">
                <div class="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">2020</div>
                <h3 class="text-2xl font-bold text-slate-900 mb-2">Team Expansion</h3>
                <p class="text-slate-600">Grew to a team of 12 specialists in design, development, copywriting, and analytics.</p>
              </div>
            </div>
            <div class="hidden md:block"></div>
            <div class="absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 bg-pink-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
          </div>

          <!-- 2022 -->
          <div class="relative grid md:grid-cols-2 gap-8 items-center">
            <div class="hidden md:block"></div>
            <div>
              <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">2022</div>
              <h3 class="text-2xl font-bold text-slate-900 mb-2">50+ Clients</h3>
              <p class="text-slate-600">Reached a major milestone serving over 50 businesses across industries, generating 3.2M+ leads.</p>
            </div>
            <div class="absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
          </div>

          <!-- 2024 -->
          <div class="relative grid md:grid-cols-2 gap-8 items-center">
            <div class="md:text-right">
              <div class="inline-block md:block">
                <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">2024</div>
                <h3 class="text-2xl font-bold text-slate-900 mb-2">Looking Forward</h3>
                <p class="text-slate-600">Expanding our services with AI-powered optimization and predictive analytics for even better results.</p>
              </div>
            </div>
            <div class="hidden md:block"></div>
            <div class="absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Team Principles Section -->
  <section class="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="inline-block text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-4">Why Choose Us</span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
          We're <span class="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Different</span>
        </h2>
        <p class="text-xl text-slate-300 max-w-2xl mx-auto">
          And we can prove it.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all">
          <div class="text-5xl font-extrabold gradient-text mb-4">247%</div>
          <div class="text-xl font-bold text-white mb-2">Average ROI Increase</div>
          <div class="text-slate-400">Our clients see an average of 247% increase in ROI within the first 6 months.</div>
        </div>

        <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all">
          <div class="text-5xl font-extrabold gradient-text mb-4">2 Weeks</div>
          <div class="text-xl font-bold text-white mb-2">From Brief to Launch</div>
          <div class="text-slate-400">We move fast without sacrificing quality. Your campaign can be live in as little as 14 days.</div>
        </div>

        <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all">
          <div class="text-5xl font-extrabold gradient-text mb-4">98%</div>
          <div class="text-xl font-bold text-white mb-2">Client Satisfaction</div>
          <div class="text-slate-400">We don't just meet expectations—we exceed them. Our retention rate speaks for itself.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-24 bg-white">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
        Ready to <span class="gradient-text">Work Together?</span>
      </h2>
      <p class="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
        Let's have a conversation about your goals and how we can help you achieve them.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/#contact" class="btn-primary">
          <span>Schedule a Call</span>
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
        <a href="/" class="btn-secondary">
          Back to Home
        </a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-12 bg-slate-900 text-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="/" class="flex items-center gap-2">
          <div class="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
            <span class="text-white font-bold text-xl">S</span>
          </div>
          <span class="text-2xl font-bold">SyncLC</span>
        </a>
        <div class="flex items-center gap-8 text-slate-400">
          <a href="/#services" class="hover:text-white transition-colors">Services</a>
          <a href="/#results" class="hover:text-white transition-colors">Results</a>
          <a href="/about.html" class="hover:text-white transition-colors">About</a>
          <a href="/#contact" class="hover:text-white transition-colors">Contact</a>
        </div>
        <div class="text-slate-500 text-sm">© 2024 SyncLC. All rights reserved.</div>
      </div>
    </div>
  </footer>
`
