<template>
  <div class="leading-normal tracking-normal" id="main-body">
    <div class="flex flex-wrap">

      <Area />

      <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" :class="sideBarOpen ? 'overlay' : ''" id="main-content">

        <Navbar />

        <div class="p-6 bg-gray-100 mb-20">
          <ClubDetail />
        </div>

        <Footer />

      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Area from '../components/Area'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ClubDetail from '../components/ClubDetail'

export default {
  name: 'Home',
  computed: {
    ...mapState(['sideBarOpen'])
  },
  components: {
    Area,
    Navbar,
    Footer,
    ClubDetail
  }
}
</script>
