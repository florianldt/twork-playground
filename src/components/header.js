class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
     <!-- Header -->
  <header class="fixed left-0 right-0 top-0 z-30 backdrop-blur ">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
      <div class="flex md:flex-1">
        <a href="index.html" class="-m-1.5 p-1.5">
          <img src="../assets/images/logo-twork-white.svg" width="100" />
        </a>
      </div>
      <div class="hidden uppercase md:flex md:gap-x-12">
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Trending</a>
        <a href="category/index.html" class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Categories</a>
        <a href="home.html" class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">About</a>
      </div>
      <div class="hidden md:flex md:flex-1 md:justify-end">
        <a href="signin.html" class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Sign in <span
            aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>
  </header>



  <!-- Mobile menu -->
  <div class="fixed bottom-0 left-0 right-0 z-50">
    <div class="uppercase md:hidden">
      <nav class="isolate flex divide-x divide-gray-200 shadow" aria-label="Tabs">
        <a href="#"
          class="group relative min-w-0 flex-1 overflow-hidden bg-white px-4 py-3 text-center text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-10"
          aria-current="page">
          <i class="fas fa-home"></i><br />
          <span>Home</span>
          <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-500"></span>
        </a>
        <a href="#"
          class="group relative min-w-0 flex-1 overflow-hidden bg-white px-3 py-3 text-center text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 focus:z-10">
          <i class="far fa-calendar-alt"></i><br />
          <span>Search</span>
          <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-0.5 bg-transparent"></span>
        </a>
        <a href="#"
          class="group relative min-w-0 flex-1 overflow-hidden bg-white px-3 py-3 text-center text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 focus:z-10">
          <i class="fas fa-briefcase"></i><br />
          <span>Tools</span>
          <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-0.5 bg-transparent"></span>
        </a>
        <a
          class="group relative min-w-0 flex-1 overflow-hidden bg-white px-3 py-3 text-center text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 focus:z-10">
          <i class="fas fa-user-circle"></i><br />
          <span>Profile</span>
          <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-0.5 bg-transparent"></span>
        </a>
        <a href="#"
          class="group relative min-w-0 flex-1 overflow-hidden bg-white px-3 py-3 text-center text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 focus:z-10"
          onclick="toggleSlideover()">
          <i class="fas fa-ellipsis-h"></i><br />
          <span>More</span>
          <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-0.5 bg-transparent"></span>
        </a>
      </nav>
    </div>
  </div>

  <!-- Mobile Slideout Menu-->
  <div id="slideover-container" class="invisible fixed inset-0 z-40 h-full w-full overflow-auto">
    <div onclick="toggleSlideover()" id="slideover-bg"
      class="absolute inset-0 h-full w-full bg-gray-900 opacity-0 transition-all duration-500 ease-out"></div>
    <div id="slideover"
      class="absolute right-0 h-full w-96 translate-x-full bg-white transition-all duration-300 ease-out">
      <div onclick="toggleSlideover()"
        class="absolute right-0 top-0 mr-5 mt-2 flex h-8 w-8 cursor-pointer items-center justify-center text-gray-600">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </div>
      <div class="mt-5"></div>
      <img src="assets/images/logo-twork.svg" height="20" alt="Creative Tokyo logo" width="220" class="pb-3 ps-4" />

      <ul role="list" class="divide-y divide-gray-100 ps-3">
        <li class="relative flex justify-between gap-x-6 px-4 py-2 hover:bg-gray-50 sm:px-6 lg:px-8">
          <div class="flex gap-x-4">
            <div class="min-w-0 flex-auto">
              <p class="text-sm font-semibold leading-6 text-gray-900">
                <a href="#">
                  <span class="absolute inset-x-0 -top-px bottom-0"></span>
                  Home
                </a>
              </p>
              <p class="mt-1 flex text-xs leading-5 text-gray-500">
                <a href="mailto:leslie.alexander@example.com" class="relative truncate hover:underline">Your home
                  dashboard</a>
              </p>
            </div>
          </div>
          <div class="flex items-center gap-x-4">
            <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clip-rule="evenodd" />
            </svg>
          </div>
        </li>
        <li class="relative flex justify-between gap-x-6 px-4 py-2 hover:bg-gray-50 sm:px-6 lg:px-8">
          <div class="flex gap-x-4">
            <div class="min-w-0 flex-auto">
              <p class="text-sm font-semibold leading-6 text-gray-900">
                <a href="#">
                  <span class="absolute inset-x-0 -top-px bottom-0"></span>
                  Our Mission
                </a>
              </p>
              <p class="mt-1 flex text-xs leading-5 text-gray-500">
                <a href="mailto:leslie.alexander@example.com" class="relative truncate hover:underline">Learn more about
                  Creative Tokyo</a>
              </p>
            </div>
          </div>
          <div class="flex items-center gap-x-4">
            <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clip-rule="evenodd" />
            </svg>
          </div>
        </li>
        <li class="relative flex justify-between gap-x-6 px-4 py-2 hover:bg-gray-50 sm:px-6 lg:px-8">
          <div class="flex gap-x-4">
            <div class="min-w-0 flex-auto">
              <p class="text-sm font-semibold leading-6 text-gray-900">
                <a href="#">
                  <span class="absolute inset-x-0 -top-px bottom-0"></span>
                  Events
                </a>
              </p>
              <p class="mt-1 flex text-xs leading-5 text-gray-500">
                <a href="mailto:leslie.alexander@example.com" class="relative truncate hover:underline">Browse upcoming
                  Events</a>
              </p>
            </div>
          </div>
          <div class="flex items-center gap-x-4">
            <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clip-rule="evenodd" />
            </svg>
          </div>
        </li>
        <li class="relative flex justify-between gap-x-6 px-4 py-2 hover:bg-gray-50 sm:px-6 lg:px-8">
          <div class="flex gap-x-4">
            <div class="min-w-0 flex-auto">
              <p class="text-sm font-semibold leading-6 text-gray-900">
                <a href="#">
                  <span class="absolute inset-x-0 -top-px bottom-0"></span>
                  Job Board
                </a>
              </p>
              <p class="mt-1 flex text-xs leading-5 text-gray-500">
                <a href="mailto:leslie.alexander@example.com" class="relative truncate hover:underline">Find or Post a
                  Job</a>
              </p>
            </div>
          </div>
          <div class="flex items-center gap-x-4">
            <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clip-rule="evenodd" />
            </svg>
          </div>
        </li>
        <li class="relative flex justify-between gap-x-6 px-4 py-2 hover:bg-gray-50 sm:px-6 lg:px-8">
          <div class="flex gap-x-4">
            <div class="min-w-0 flex-auto">
              <p class="text-sm font-semibold leading-6 text-gray-900">
                <a href="#">
                  <span class="absolute inset-x-0 -top-px bottom-0"></span>
                  Sponsorships
                </a>
              </p>
              <p class="mt-1 flex text-xs leading-5 text-gray-500">
                <a href="mailto:leslie.alexander@example.com" class="relative truncate hover:underline">Learn about
                  Sponsorships</a>
              </p>
            </div>
          </div>
          <div class="flex items-center gap-x-4">
            <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clip-rule="evenodd" />
            </svg>
          </div>
        </li>
        <li class="relative flex justify-between gap-x-6 px-4 py-2 hover:bg-gray-50 sm:px-6 lg:px-8">
          <div class="flex gap-x-4">
            <div class="min-w-0 flex-auto">
              <p class="text-sm font-semibold leading-6 text-gray-900">
                <a href="#">
                  <span class="absolute inset-x-0 -top-px bottom-0"></span>
                  Get In Touch
                </a>
              </p>
              <p class="mt-1 flex text-xs leading-5 text-gray-500">
                <a href="mailto:leslie.alexander@example.com" class="relative truncate hover:underline">Contact us</a>
              </p>
            </div>
          </div>
          <div class="flex items-center gap-x-4">
            <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clip-rule="evenodd" />
            </svg>
          </div>
        </li>
      </ul>

      <div class="p-5"></div>
    </div>
  </div>
    `;
  }
}

customElements.define('header-component', Header);