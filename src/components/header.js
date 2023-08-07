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
          <svg width="100" height="24" viewBox="0 0 117 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.3032 26.9202C13.0167 27.6401 11.2635 28 9.04357 28C6.14256 28 3.91005 27.3174 2.34603 25.9521C0.78201 24.5621 0 22.4894 0 19.734V2.68085H8.55166V8.37766H12.7897V14.5213H8.55166V19.6596C8.55166 20.2801 8.71563 20.7642 9.04357 21.1117C9.37151 21.4592 9.80035 21.633 10.3301 21.633C11.0617 21.633 11.7049 21.4468 12.2599 21.0745L14.3032 26.9202Z" fill="#F5F5F7"/>
          <path d="M49.6684 7.26064V18.5053C49.6684 21.5337 48.735 23.8794 46.8683 25.5426C45.0016 27.1809 42.3907 28 39.0356 28C37.6229 28 36.349 27.8262 35.2138 27.4787C34.0786 27.1064 33.0948 26.4982 32.2624 25.6543C31.4047 26.4982 30.4208 27.1064 29.3109 27.4787C28.2009 27.8262 26.927 28 25.4891 28C22.1088 28 19.4853 27.1809 17.6186 25.5426C15.7771 23.9043 14.8563 21.5585 14.8563 18.5053V7.26064H23.408V17.9468C23.408 20.1809 24.1648 21.2979 25.6783 21.2979C27.2171 21.2979 27.9865 20.1809 27.9865 17.9468V7.26064H36.5382V17.9468C36.5382 20.1809 37.3076 21.2979 38.8464 21.2979C39.6284 21.2979 40.196 21.0372 40.5491 20.516C40.9275 19.9947 41.1167 19.1383 41.1167 17.9468V7.26064H49.6684Z" fill="#F5F5F7"/>
          <path d="M62.7844 28C60.4888 28 58.4203 27.5532 56.5788 26.6596C54.7625 25.7411 53.3372 24.4876 52.3029 22.8989C51.2687 21.2855 50.7515 19.461 50.7515 17.4255C50.7515 15.3901 51.2687 13.578 52.3029 11.9894C53.3372 10.3759 54.7625 9.12234 56.5788 8.22872C58.4203 7.33511 60.4888 6.8883 62.7844 6.8883C65.1052 6.8883 67.1737 7.33511 68.99 8.22872C70.8315 9.12234 72.2568 10.3759 73.2659 11.9894C74.3001 13.578 74.8173 15.3901 74.8173 17.4255C74.8173 19.461 74.3001 21.2855 73.2659 22.8989C72.2568 24.4876 70.8315 25.7411 68.99 26.6596C67.1737 27.5532 65.1052 28 62.7844 28ZM62.7844 21.4468C63.7682 21.4468 64.5755 21.0993 65.2061 20.4043C65.8368 19.6844 66.1521 18.6915 66.1521 17.4255C66.1521 16.1596 65.8368 15.1791 65.2061 14.484C64.5755 13.789 63.7682 13.4415 62.7844 13.4415C61.8006 13.4415 60.9933 13.789 60.3627 14.484C59.732 15.1791 59.4167 16.1596 59.4167 17.4255C59.4167 18.6915 59.732 19.6844 60.3627 20.4043C60.9933 21.0993 61.8006 21.4468 62.7844 21.4468Z" fill="#F5F5F7"/>
          <path d="M84.1157 9.45745C85.6292 7.74468 87.8617 6.8883 90.8132 6.8883V14.3351C90.1321 14.2358 89.5014 14.1862 88.9212 14.1862C85.995 14.1862 84.5319 15.6507 84.5319 18.5798V27.6277H75.9802V7.26064H84.1157V9.45745Z" fill="#F5F5F7"/>
          <path d="M101.637 21.3723L100.275 22.8245V27.6277H91.7234V0H100.275V13.1809L106.216 7.26064H116.319L107.767 16.0851L117 27.6277H106.67L101.637 21.3723Z" fill="#F5F5F7"/>
          </svg>
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