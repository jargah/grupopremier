<template>
    <header class="absolute w-full z-30">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
            <div class="flex items-center justify-between md:h-20 lg:h-40">

                <!-- Site branding -->
                <div class="flex-shrink mr-4">
                    <router-link to="/">
                        <!-- Logo -->
                        <img src="../../assets/images/logo/gpo-premier.png" class="w-3/4">
                    </router-link>
                </div>

                <!-- Desktop navigation -->
                <nav class="hidden md:flex md:flex-grow">

                    <!-- Desktop menu links -->
                    <ul class="flex flex-grow justify-end flex-wrap items-center">
                        <li>
                            <router-link to="/somos" class="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">SOMOS</router-link>
                        </li>
                        <li>
                            <router-link to="/productos" class="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">PRODUCTOS</router-link>
                        </li>
                        <li>
                            <router-link to="/ocean_spray" class="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">OCEAN SPRAY</router-link>
                        </li>
                        <li>
                            <router-link to="/contacto" class="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">CONTACTO</router-link>
                        </li>
                    </ul>
                </nav>

                <!-- Mobile menu -->
                <div class="md:hidden">

                    <!-- Hamburger button -->
                    <button class="hamburger" ref="hamburger" :class="{ active: mobileNavOpen }" aria-controls="mobile-nav" :aria-expanded="mobileNavOpen" @click="mobileNavOpen = !mobileNavOpen">
                      <span class="sr-only">Menu</span>
                      <svg class="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect y="4" width="24" height="2" rx="1" />
                        <rect y="11" width="24" height="2" rx="1" />
                        <rect y="18" width="24" height="2" rx="1" />
                      </svg>
                    </button>

                    <!-- Mobile navigation -->
                    <nav id="mobile-nav" ref="mobileNav" class="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" :style="[ mobileNavOpen ? { maxHeight: $refs.mobileNav.scrollHeight + 'px', opacity: 1 } : { maxHeight: 0, opacity: .8 } ]">
                      <ul class="bg-gray-800 px-4 py-2">
                        <li>
                          <router-link to="/somos" class="flex text-gray-300 hover:text-gray-200 py-2">SOMOS</router-link>
                        </li>
                        <li>
                          <router-link to="/productos" class="flex text-gray-300 hover:text-gray-200 py-2">PRODUCTOS</router-link>
                        </li>
                        <li class="hidden md:block">
                          <router-link to="/ocean_spray" class="flex text-gray-300 hover:text-gray-200 py-2">OCEAN SPRAY</router-link>
                        </li>
                        <li class="hidden md:block">
                          <router-link to="/contacto" class="flex text-gray-300 hover:text-gray-200 py-2">CONTACTO</router-link>
                        </li>
                      </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

export default {
    name: 'header_main',
    data: function () {
        return {
            mobileNavOpen: false
        }
    },
    methods: {
        clickOutside(e) {
            if (!this.mobileNavOpen || this.$refs.mobileNav.contains(e.target) || this.$refs.hamburger.contains(e.target)) return
            this.mobileNavOpen = false
        },
        keyPress() {
            if (!this.mobileNavOpen || event.keyCode !== 27) return
            this.mobileNavOpen = false
        }    
    },  
    mounted() {
        document.addEventListener('click', this.clickOutside)    
        document.addEventListener('keydown', this.keyPress)
    },
    beforeUnmount() {
        document.removeEventListener('click', this.clickOutside)
        document.removeEventListener('keydown', this.keyPress)
    }
};
</script>