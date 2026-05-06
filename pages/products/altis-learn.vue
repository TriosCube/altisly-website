<template>
  <div>
    <AppHeader />
    <main>

      <!-- Hero -->
      <section class="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#060809] overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-learn" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" stroke-width="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-learn)" />
          </svg>
        </div>
        <div class="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500 rounded-full opacity-10 blur-3xl"></div>
        <div class="absolute bottom-1/4 left-1/3 w-72 h-72 bg-[#15c411] rounded-full opacity-10 blur-3xl"></div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col lg:flex-row items-center gap-16">
            <div class="lg:w-1/2 text-center lg:text-left">
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-6">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477-4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                Altis Learn — Technology Coaching
              </div>
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Hands-on STEM learning with real kits & gadgets
              </h1>
              <p class="text-lg md:text-xl text-white/80 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                Altis Learn is a technology coaching platform that brings education to life. We provide students with physical STEM-based science kits, electrical electronics, design tools, and drone manipulation hardware.
              </p>
              <p class="text-base text-white/60 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                It's not just theory on a screen. With expert coaching and actual gadgets in hand, students build, fly, design, and engineer their way to mastering the technology of tomorrow.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <NuxtLink to="/contact" class="btn-primary px-8 py-4 text-base">Get a Starter Kit</NuxtLink>
                <NuxtLink to="/contact" class="px-8 py-4 text-base border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors font-semibold">School Partnerships</NuxtLink>
              </div>
            </div>

            <!-- Learning Platform Mockup -->
            <div class="lg:w-1/2 w-full">
              <div class="bg-[#111418] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                <div class="bg-[#1a1f24] px-4 py-3 border-b border-white/5 flex items-center gap-2">
                  <div class="flex gap-1.5">
                    <div class="w-3 h-3 rounded-full bg-red-500"></div>
                    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div class="mx-auto text-[10px] text-white/40 font-mono">Altis Learn — Student Dashboard</div>
                </div>
                <div class="p-6">
                  <!-- Active project -->
                  <div class="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-4 mb-6">
                    <div class="flex items-start justify-between mb-2">
                      <div>
                        <p class="text-indigo-300 text-[10px] font-bold uppercase tracking-wider mb-1">Active Project</p>
                        <h4 class="text-white font-bold text-sm">Assemble & Program Drone Module Alpha</h4>
                      </div>
                      <span class="text-[10px] font-bold bg-[#15c411]/20 text-[#15c411] px-2 py-0.5 rounded-full">Flight Test Ready</span>
                    </div>
                    <div class="w-full bg-white/10 rounded-full h-1.5 mt-3">
                      <div class="bg-[#15c411] h-1.5 rounded-full w-[85%]"></div>
                    </div>
                    <p class="text-white/40 text-xs mt-2">Hardware Kit: Quadcopter Pro · Connected</p>
                  </div>
                  <!-- Skills being earned -->
                  <p class="text-white/40 text-xs uppercase tracking-wider mb-3">Skills Being Mastered</p>
                  <div class="flex flex-wrap gap-2 mb-6">
                    <span v-for="skill in mockSkills" :key="skill.name" class="text-[10px] font-bold px-2 py-1 rounded-lg" :class="skill.class">{{ skill.name }}</span>
                  </div>
                  <!-- Leaderboard -->
                  <p class="text-white/40 text-xs uppercase tracking-wider mb-3">Coaching Cohort Leaderboard</p>
                  <div class="space-y-2">
                    <div v-for="(learner, i) in mockLearners" :key="learner.name" class="flex items-center gap-3 p-2 rounded-lg" :class="i === 0 ? 'bg-[#15c411]/10 border border-[#15c411]/20' : 'bg-white/5'">
                      <span class="text-xs font-black w-5 text-center" :class="i === 0 ? 'text-[#15c411]' : 'text-white/30'">{{ i + 1 }}</span>
                      <div class="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold" :class="learner.avatarClass">{{ learner.initials }}</div>
                      <span class="text-white text-xs flex-1">{{ learner.name }}</span>
                      <span class="text-xs font-bold" :class="i === 0 ? 'text-[#15c411]' : 'text-white/40'">{{ learner.xp }} Points</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats -->
      <section class="py-12 bg-white border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div v-for="stat in stats" :key="stat.value" class="text-center">
              <p class="text-3xl md:text-4xl font-bold text-[#15c411] mb-1">{{ stat.value }}</p>
              <p class="text-sm text-gray-500 font-medium">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- The STEMbase Difference -->
      <section class="py-20 bg-white">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">The Physical Difference</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">Learning you can touch, build, and fly</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-red-50 border border-red-100 rounded-2xl p-6">
              <p class="font-bold text-red-600 text-sm uppercase tracking-wider mb-4 flex items-center gap-2"><span>✕</span> Traditional Screen-Only Learning</p>
              <ul class="space-y-3">
                <li v-for="pain in traditional" :key="pain" class="flex items-start gap-3 text-sm text-gray-700">
                  <svg class="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  {{ pain }}
                </li>
              </ul>
            </div>
            <div class="bg-[#ebfaeb] border border-[#15c411]/20 rounded-2xl p-6">
              <p class="font-bold text-[#15c411] text-sm uppercase tracking-wider mb-4 flex items-center gap-2"><span>✓</span> Altis Learn Hardware Coaching</p>
              <ul class="space-y-3">
                <li v-for="gain in stembase" :key="gain" class="flex items-start gap-3 text-sm text-gray-700">
                  <svg class="w-4 h-4 text-[#15c411] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  {{ gain }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Learning Tracks -->
      <section class="py-20 bg-gray-50 border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Our Core Kits & Tracks</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">Mastery through physical hardware</h2>
            <p class="text-gray-500 max-w-2xl mx-auto">We provide the physical kits and the expert coaching needed to turn curious students into confident creators.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="track in tracks" :key="track.title" class="bg-white rounded-2xl border border-gray-100 p-6 hover:border-[#15c411] hover:shadow-md transition-all duration-300">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" :class="track.iconBg">
                <svg class="w-6 h-6" :class="track.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" :d="track.icon" />
                </svg>
              </div>
              <h3 class="font-bold text-navy-900 mb-1">{{ track.title }}</h3>
              <p class="text-xs text-gray-400 font-medium mb-3">{{ track.hardware }} Included</p>
              <p class="text-sm text-gray-600 leading-relaxed mb-4">{{ track.description }}</p>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="skill in track.skills" :key="skill" class="text-[10px] font-semibold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{{ skill }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- How it works -->
      <section class="py-20 bg-white border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">The Coaching Method</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">Unbox. Build. Learn.</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="(step, i) in method" :key="step.title" class="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#15c411] transition-colors">
              <div class="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mx-auto mb-4">
                <svg class="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" :d="step.icon" />
                </svg>
              </div>
              <div class="w-6 h-6 rounded-full bg-[#15c411] text-white text-xs font-black flex items-center justify-center mx-auto mb-3">{{ i + 1 }}</div>
              <h3 class="font-bold text-navy-900 mb-2">{{ step.title }}</h3>
              <p class="text-xs text-gray-500 leading-relaxed">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Who it's for -->
      <section class="py-20 bg-gray-50 border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-14">
            <p class="section-label text-[#15c411] font-semibold tracking-wider text-sm mb-2 uppercase">Who We Serve</p>
            <h2 class="section-title text-3xl font-bold text-navy-900 mb-5">Bringing hands-on tech to every student</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="audience in audiences" :key="audience.title" class="bg-white rounded-2xl border border-gray-100 p-8 hover:border-[#15c411] hover:shadow-md transition-all">
              <div class="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-5">
                <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" :d="audience.icon" />
                </svg>
              </div>
              <h3 class="font-bold text-navy-900 text-lg mb-3">{{ audience.title }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed mb-5">{{ audience.description }}</p>
              <ul class="space-y-2">
                <li v-for="point in audience.points" :key="point" class="flex items-center gap-2 text-xs text-gray-500">
                  <svg class="w-3.5 h-3.5 text-[#15c411] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                  {{ point }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to transform how your students learn?"
        subtitle="Get our hardware kits and expert coaching platform to inspire the next generation of engineers and creators."
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Altis Learn | STEM Kits & Tech Coaching',
  description: 'Altis Learn is a technology coaching platform that brings education to life with physical STEM science kits, electronics, graphics, and drone manipulation gadgets.',
})

const mockSkills = [
  { name: 'Circuit Design', class: 'bg-blue-500/20 text-blue-300' },
  { name: 'Drone Flight Dynamics', class: 'bg-purple-500/20 text-purple-300' },
  { name: 'Robotics', class: 'bg-[#15c411]/20 text-[#15c411]' },
  { name: '3D Graphics', class: 'bg-orange-500/20 text-orange-300' },
  { name: 'Physics Mechanics', class: 'bg-yellow-500/20 text-yellow-300' },
]

const mockLearners = [
  { name: 'Amara Osei', initials: 'AO', xp: '4,820', avatarClass: 'bg-[#15c411]/20 text-[#15c411]' },
  { name: 'Kemi Adeyemi', initials: 'KA', xp: '4,210', avatarClass: 'bg-blue-500/20 text-blue-400' },
  { name: 'Chidera Nwosu', initials: 'CN', xp: '3,990', avatarClass: 'bg-purple-500/20 text-purple-400' },
]

const stats = [
  { value: 'Physical Kits', label: 'Delivered to students' },
  { value: '4 Core', label: 'Hardware Learning Tracks' },
  { value: '1-on-1', label: 'Expert Coaching' },
  { value: 'Hands-on', label: 'Real-world projects' },
]

const traditional = [
  'Reading about physics from a dry textbook',
  'Watching videos of experiments without doing them',
  'Software-only learning that lacks tangible feedback',
  'No exposure to physical hardware or electronics',
  'Standardized tests instead of creative building',
  'Students lose interest due to lack of engagement',
]

const stembase = [
  'Physical STEM kits delivered right to the student',
  'Real electrical components, wires, and breadboards',
  'Hands-on drone manipulation and flight testing',
  'Coaching from expert mentors who guide the build',
  'Learning by assembling, failing, and succeeding',
  'Creates genuine excitement for technology and science',
]

const tracks = [
  {
    title: 'STEM Science Kits',
    hardware: 'Physical STEM Box',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    iconBg: 'bg-[#ebfaeb]',
    iconColor: 'text-[#15c411]',
    description: 'Hands-on physics, chemistry, and mechanics. Students build catapults, simple machines, and conduct experiments that prove the science.',
    skills: ['Physics', 'Mechanics', 'Scientific Method', 'Problem Solving'],
  },
  {
    title: 'Electrical & Electronics',
    hardware: 'Circuit & Microcontroller Kit',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    description: 'Master circuits, breadboards, LEDs, and sensors. Students learn the fundamentals of electricity and program their own hardware gadgets.',
    skills: ['Circuit Design', 'Soldering Basics', 'Microcontrollers', 'Logic'],
  },
  {
    title: 'Drone Manipulation',
    hardware: 'Quadcopter & Controller',
    icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    description: 'Understand aerodynamics, motor control, and programming logic. Students assemble, calibrate, and fly their own programmable drones.',
    skills: ['Aerodynamics', 'Flight Calibration', 'Motor Control', 'Spatial Logic'],
  },
  {
    title: 'Graphics & Design',
    hardware: 'Digital Drawing Pad',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    description: 'Merge technology with creativity. Students learn 3D modeling, digital illustration, and interface design using professional-grade tools.',
    skills: ['3D Modeling', 'Digital Art', 'UI/UX Basics', 'Visual Communication'],
  },
]

const method = [
  {
    title: 'Get Your Gadget',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    description: 'We supply the physical hardware—whether its a science kit, a drone, or an electronics breadboard—delivered directly to the student.',
  },
  {
    title: 'Connect with a Coach',
    icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
    description: 'Students log into the platform to meet their dedicated tech coach who guides them through the assembly and engineering process.',
  },
  {
    title: 'Build & Experiment',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    description: 'Hands-on time. Wire the circuits, calibrate the drone propellers, or run the science experiment while seeing the immediate physical results.',
  },
  {
    title: 'Master the Tech',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    description: 'Once the project works, students earn their badges, showcase their functional hardware, and move on to more advanced technology kits.',
  },
]

const audiences = [
  {
    title: 'Students & Parents',
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
    description: 'Parents who want to give their children an edge in the modern world by moving them away from passive screen time to active technology creation.',
    points: ['Hardware kits mailed to your door', '1-on-1 virtual coaching sessions', 'Safe, supervised project building', 'Tangible results parents can see'],
  },
  {
    title: 'Schools & Educators',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1',
    description: 'Forward-thinking schools looking to integrate real hardware labs, robotics, and drone clubs into their curriculum without hiring specialized staff.',
    points: ['Bulk kits for classrooms', 'Group coaching and curriculum support', 'After-school tech club facilitation', 'Engages students in physical science'],
  },
  {
    title: 'Tech Camps & Programs',
    icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    description: 'Organizations running holiday tech camps or youth empowerment programs that need exciting, pre-packaged hardware projects and expert guides.',
    points: ['Ready-to-deploy hardware modules', 'Exciting drone and robotics showcases', 'Train-the-trainer support', 'Memorable physical takeaways for kids'],
  },
]
</script>
