<template>
    <div>
        <p class="text-2xl font-semibold mb-2 lg:mb-0 pb-5">List of Football Club</p>

        <div class="flex flex-wrap mx-3 mb-20">
            <div v-for="(club, i) in $store.state.clubList" :key="i" class="cover w-full bg-gray-100 border rounded-lg flex justify-between items-center px-4 py-2 mb-4">
                <div>
                    <p @click="pickClub(club.id)" class="font-semibold text-l">{{ club.name }}</p>
                </div>
                <img :src="club.crestUrl" onerror="this.onerror=null; this.src='https://lh3.googleusercontent.com/proxy/G2IjJt--SEqXbr4KYraEz_u3SDjlOjhed0tiq8OLqA5Mt0flVs18MoyXN5qu5izT9eogy2va2aUotJxBLdBGHLybh4WCRvo'" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Club',
    methods: {
        pickClub (id) {
          this.$store.dispatch('pickClub', id)
          .then(() => {
            this.$router.push('/club-info')
          })
          .catch((err) => {
            console.log(err)
          })
        }
    },
    mounted () {
      this.$store.dispatch('pickAreaDefault')
    }
}
</script>

<style>
p {
    cursor: pointer;
}

img {
    width: 30px;
}

.cover {
    box-shadow: 0 15px 35px #ffffffa1;
    transition: all ease 0.4s;
}
.cover:hover {
    box-shadow: none;
    transform: scale(0.98) translateY(5px);
}
</style>