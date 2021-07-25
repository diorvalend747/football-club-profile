<template>
    <div class="flex flex-wrap mx-3 mb-20">
        
        <div class="bg-white p-3 shadow-sm rounded-sm w-full shadow-lg">
            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <p class="text-xl font-semibold mb-2 lg:mb-0 pb-5 pl-4">Player Details</p>  
            </div>
            <div class="text-gray-700">
                <div class="grid md:grid-cols-2 text-sm">
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Name</div>
                        <div class="px-4 py-2">{{ $store.state.player.name }}</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Date Of Birth</div>
                        <div class="px-4 py-2">{{ $store.state.player.dateOfBirth }}</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Country Of Birth</div>
                        <div class="px-4 py-2">{{ $store.state.player.countryOfBirth }}</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Nationality</div>
                        <div class="px-4 py-2">{{ $store.state.player.nationality }}</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Position</div>
                        <div class="px-4 py-2">{{ $store.state.player.position }}</div>
                    </div>
                </div>
            </div>
        </div>
</div>
</template>