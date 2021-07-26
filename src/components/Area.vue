<template>
    <div class="w-2/3 md:w-1/3 lg:w-64 fixed md:top-0 md:left-0 h-screen lg:block bg-gray-100 border-r z-50 scroll" :class="sideBarOpen ? '' : 'hidden'" id="main-nav">
          <div class="w-full h-20 flex px-4 items-center mb-2">
            <img src="../assets/football.png" alt="">
            <img src="../assets/football.png" alt="">
            <img src="../assets/football.png" alt="">
            <img src="../assets/football.png" alt="">
            <img src="../assets/football.png" alt="">
            <img src="../assets/football.png" alt="">
          </div>

          <div class="mb-4 px-6">
            <h1 class="pl-4 text-lg font-semibold mb-3">SELECT AREA</h1>
            <div v-for="area in $store.state.areas" :key="area.id" @click="pickArea(area.id)" class="w-full flex items-center mb-3 h-10 pl-4 hover:bg-gray-300 rounded-lg cursor-pointer">
              <span  class="text-gray-700">{{ area.name }}</span>
            </div>
          </div>
        </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Area',
  computed: {
      ...mapState(['sideBarOpen'])
  },
  methods: {
    pickArea (id) {
      this.$store.dispatch('pickArea', id)
      .then(() => {
        this.$router.push('/')
      })
      .catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.$store.dispatch('getArea');
  }
}
</script>

<style>
.scroll {
  overflow-y: scroll;
}
</style>