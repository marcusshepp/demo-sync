export function renderAboutPage(): string {
  return `
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
        <a href="/" class="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Home</a>
        <a href="/#services" class="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Services</a>
        <a href="/#results" class="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Results</a>
        <a href="/about" class="text-indigo-600 font-medium transition-colors">About</a>
        <a href="/#contact" class="btn-primary !py-3 !px-6 !text-base">Get Started</a>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="pt-32 pb-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="inline-block text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-4">About SyncLC</span>
        <h1 class="text-5xl md:text-6xl font-extrabold text-white mb-6">
          We're Obsessed With <span class="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Your Growth</span>
        </h1>
        <p class="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Founded by marketers and engineers who got tired of seeing businesses struggle with underperforming websites. 
          We combine stunning design with data-driven strategy to deliver results that matter.
        </p>
      </div>
    </div>
  </section>

  <!-- Our Story Section -->
  <section class="py-24 bg-white">
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
          <span class="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">Our Story</span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Built by Marketers, <span class="gradient-text">For Marketers</span></h2>
          <p class="text-lg text-slate-600 mb-6 leading-relaxed">
            SyncLC was born from frustration. As marketing consultants, we watched too many businesses pour money into beautiful websites that didn't convert. 
            The problem wasn't the design—it was the lack of strategic thinking behind it.
          </p>
          <p class="text-lg text-slate-600 mb-6 leading-relaxed">
            We realized that what businesses needed wasn't just another web design agency. They needed a partner who understood both the art of design 
            and the science of conversion optimization.
          </p>
          <p class="text-lg text-slate-600 leading-relaxed">
            Today, we've helped over 50 businesses transform their online presence into revenue-generating machines. Our approach combines 
            psychology-driven design, data analytics, and continuous optimization to ensure every dollar you spend delivers measurable results.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Values Section -->
  <section class="py-24 bg-slate-50">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">Our Values</span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">What Drives <span class="gradient-text">Everything We Do</span></h2>
        <p class="text-xl text-slate-600 max-w-2xl mx-auto">Our values aren't just words on a wall—they're the foundation of every project we take on.</p>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="card-hover">
          <div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-3">Results First</h3>
          <p class="text-slate-600 leading-relaxed">We don't chase awards or trends. We chase metrics that matter—leads, conversions, and revenue growth for our clients.</p>
        </div>
        <div class="card-hover">
          <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-3">Radical Transparency</h3>
          <p class="text-slate-600 leading-relaxed">No smoke and mirrors. We show you exactly what we're doing, why we're doing it, and what results you're getting.</p>
        </div>
        <div class="card-hover">
          <div class="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-3">Continuous Improvement</h3>
          <p class="text-slate-600 leading-relaxed">Your funnel is never "done." We constantly test, learn, and optimize to keep improving your results month after month.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Team Section -->
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">Our Team</span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Meet the <span class="gradient-text">Experts</span></h2>
        <p class="text-xl text-slate-600 max-w-2xl mx-auto">A diverse team of designers, developers, marketers, and data analysts united by one mission: your success.</p>
      </div>
      <div class="grid md:grid-cols-4 gap-8">
        <div class="text-center">
          <div class="w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span class="text-white text-4xl font-bold">JD</span>
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-1">John Doe</h3>
          <p class="text-indigo-600 font-medium mb-2">Founder & CEO</p>
          <p class="text-slate-600 text-sm">Former growth marketer turned conversion optimization expert.</p>
        </div>
        <div class="text-center">
          <div class="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span class="text-white text-4xl font-bold">SE</span>
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-1">Sarah Evans</h3>
          <p class="text-indigo-600 font-medium mb-2">Head of Design</p>
          <p class="text-slate-600 text-sm">Award-winning designer with a passion for user-centered experiences.</p>
        </div>
        <div class="text-center">
          <div class="w-32 h-32 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span class="text-white text-4xl font-bold">MC</span>
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-1">Mike Chen</h3>
          <p class="text-indigo-600 font-medium mb-2">Lead Developer</p>
          <p class="text-slate-600 text-sm">Full-stack engineer who builds lightning-fast, conversion-optimized sites.</p>
        </div>
        <div class="text-center">
          <div class="w-32 h-32 bg-gradient-to-br from-rose-500 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span class="text-white text-4xl font-bold">AP</span>
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-1">Anna Patel</h3>
          <p class="text-indigo-600 font-medium mb-2">Data Analyst</p>
          <p class="text-slate-600 text-sm">Numbers geek who turns analytics into actionable insights.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Stats Section -->
  <section class="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">Our Impact <span class="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">By the Numbers</span></h2>
      </div>
      <div class="grid md:grid-cols-4 gap-8">
        <div class="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <div class="text-5xl font-extrabold text-white mb-2">50+</div>
          <div class="text-slate-300">Happy Clients</div>
        </div>
        <div class="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <div class="text-5xl font-extrabold text-white mb-2">$12M+</div>
          <div class="text-slate-300">Revenue Generated</div>
        </div>
        <div class="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <div class="text-5xl font-extrabold text-white mb-2">3.2M</div>
          <div class="text-slate-300">Leads Generated</div>
        </div>
        <div class="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <div class="text-5xl font-extrabold text-white mb-2">247%</div>
          <div class="text-slate-300">Avg ROI Increase</div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-24 bg-white">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <span class="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">Ready to Grow?</span>
      <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Let's Build Your <span class="gradient-text">Lead Machine</span></h2>
      <p class="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">Schedule a free strategy call and discover how we can transform your website into a conversion powerhouse.</p>
      <a href="/#contact" class="btn-primary">
        <span>Book Your Free Strategy Call</span>
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
      </a>
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
          <a href="/" class="hover:text-white transition-colors">Home</a>
          <a href="/#services" class="hover:text-white transition-colors">Services</a>
          <a href="/#results" class="hover:text-white transition-colors">Results</a>
          <a href="/about" class="hover:text-white transition-colors">About</a>
          <a href="/#contact" class="hover:text-white transition-colors">Contact</a>
        </div>
        <div class="text-slate-500 text-sm">© 2024 SyncLC. All rights reserved.</div>
      </div>
    </div>
  </footer>
  `;
}
