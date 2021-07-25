<template>
    <div class="sticky top-0 z-50">
      <div class="w-full h-20 px-6 bg-gray-100 border-b flex items-center justify-between">
          <div class="flex">

                <!-- mobile hamburger -->
              <div class="inline-block lg:hidden flex items-center mr-4">
                <button class="hover:text-blue-500 hover:border-white focus:outline-none navbar-burger" @click="toggleSidebar()">
                  <svg class="h-5 w-5" v-bind:style="{ fill: 'black' }" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
              </div>

              <div class="relative text-gray-600">
                <a class="font-semibold text-2xl text-gray-900">
                  <router-link href="" :to="{ path: '/' }">FOOTBALL CLUB PROFILE</router-link>
                </a>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Navbar',
    computed: {
        ...mapState(['sideBarOpen'])
    },
    data() {
        return {
            dropDownOpen: false
        }
    },
    methods: {
        toggleSidebar() {
            this.$store.dispatch('toggleSidebar')
        }
    }
}
</script>

<style scoped>
a {
  cursor: pointer;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>