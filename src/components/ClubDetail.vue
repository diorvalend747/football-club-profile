<template>
    <div class="flex flex-wrap mx-3">

        <p class="text-xl font-semibold mb-2 lg:mb-0 pb-5">Football Club Details</p>

        <div class="bg-gray-100 p-3">
            <div class="container mx-auto my-5">
                <div class="flex flex-wrap mx-3 mb-20">
                    <div class="w-full md:w-3/12 md:mx-2">
                        <div class="image overflow-hidden">
                            <img class="h-auto w-full mx-auto"
                                :src="$store.state.clubData.crestUrl" onerror="this.onerror=null; this.src='https://lh3.googleusercontent.com/proxy/G2IjJt--SEqXbr4KYraEz_u3SDjlOjhed0tiq8OLqA5Mt0flVs18MoyXN5qu5izT9eogy2va2aUotJxBLdBGHLybh4WCRvo'"
                                alt="">
                        </div>
                        <div class="my-4"></div>
                    </div>

                    <div class="w-full md:w-7/12 mx-3 h-64 shadow-lg">
                        <div class="bg-white shadow-sm rounded-sm">
                            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                <span class="tracking-wide pl-4">About</span>
                            </div>
                            <div class="text-gray-700">
                                <div class="grid md:grid-cols-2 text-sm">
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Club Name</div>
                                        <div class="px-4 py-2">{{ $store.state.clubData.name }}</div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Address</div>
                                        <div class="px-4 py-2">{{ $store.state.clubData.address }}</div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Contact</div>
                                        <div class="px-4 py-2">{{ $store.state.clubData.phone }}</div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Founded</div>
                                        <div class="px-4 py-2">{{ $store.state.clubData.founded }}</div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Club Colors</div>
                                        <div class="px-4 py-2">{{ $store.state.clubData.clubColors }}</div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Venue</div>
                                        <div class="px-4 py-2">{{ $store.state.clubData.venue }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="my-4"></div>

                    </div>
                </div>
            </div>
        </div>

        <div class="align-middle inline-block w-full shadow overflow-hidden bg-white shadow-dashboard px-4 mt-8 rounded-bl-lg rounded-br-lg">
            <table class="w-full">
                <thead>
                    <tr>
                        <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-grey-700 tracking-wider">PLAYER LIST</th>
                        <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider"></th>
                    </tr>
                </thead>
                <tbody v-for="(squad, i) in $store.state.clubData.squad" :key="i" :squad="squad" class="bg-white">
                        <tr>
                            <td class="py-4 px-6 border-b border-grey-light">
                                <div class="text-sm leading-5 text-blue-900">{{ squad.name }}</div>
                            </td>
                            <td class="py-4 px-6 border-b border-grey-light">
                                <button @click="pickPlayer(squad.id)" class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                            </td>
                    </tr>                 
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ClubDetail',
    methods: {
    pickPlayer (id) {
      this.$store.dispatch('pickPlayer', id)
      .then(() => {
        this.$router.push('/player-info')
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
#img {
    width: 90%;
}
</style>