<template>
  <div class="flex min-h-screen bg-cover bg-admin-dash">
    <div class="container mx-auto items-center mt-10 flex justify-between">
      <div>
        <div class="flex items-center space-x-4 mb-6">
          <img :src="accountImage" alt="Account Image" class="w-12 h-12 rounded-full" />
          <div>
            <p class="font-bold text-xl">YULDASHEV SHOXRUX</p>
            <p class="text-gray-600">Oshqozon osti bezi</p>
          </div>
        </div>
        <div class="flex items-center space-x-2 mb-6">
          <button class="bg-[#022511] text-white px-6 py-3 rounded">A75 XONA</button>
          <button class="bg-[#022511] p-2 rounded" @click="refreshRoom">
            <img src="@/assets/img/change.svg" alt="Change Icon" class="w-7 h-7" />
          </button>
        </div>

        <div class="space-y-2 flex flex-col">
          <router-link to="/Navigation" class="text-left px-6 py-2 bg-[#022511] text-white max-w-xs rounded-lg">
            Sanatoriya xaritasi va navigator
          </router-link>
          <button class="text-left px-6 py-2 bg-[#022511] text-white max-w-xs rounded-lg">
            Ovqatlanish vaqtlari va menu
          </button>
          <button class="text-left px-6 py-2 bg-[#022511] text-white max-w-xs rounded-lg">
            Elektron kutubxona
          </button>
          <button class="text-left px-6 py-2 bg-[#022511] text-white max-w-xs rounded-lg">
            Biz haqimizda
          </button>
          <button class="text-left px-6 py-2 bg-[#022511] text-white max-w-xs rounded-lg">
            Kontakt
          </button>
          <button class="text-left px-6 py-2 bg-[#022511] text-white max-w-xs rounded-lg">
            Kasallik va davolanish haqida batafsil
          </button>
        </div>
      </div>

      <div>
        <div class="countdown text-center mb-4 bg-[#022511] p-4 rounded-lg">
          <p class="text-white">Muolaja boshlanishiga qoldi:</p>
          <h2 class="text-2xl font-semibold text-white">{{ formattedTime }}</h2>
        </div>
        <router-link to="/Loading" class="block mt-3 w-full bg-[#022511] text-white py-2 rounded-lg text-center">
          Hamshiraga Habar yo'llang !
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
import moment from 'moment'
import accountImage from '@/assets/img/user.png'

export default {
  data() {
    return {
      accountImage,
      treatmentTime: moment().add(1, 'hours').add(15, 'minutes').add(45, 'seconds'),
      timeRemaining: '',
      showSignIn: false
    }
  },
  computed: {
    formattedTime() {
      return this.timeRemaining
        ? moment.utc(this.timeRemaining.asMilliseconds()).format('HH:mm:ss')
        : '00:00:00'
    }
  },
  methods: {
    refreshRoom() {
      // Logic for refreshing room
    },
    updateTime() {
      this.timeRemaining = moment.duration(this.treatmentTime.diff(moment()))
    },
  },

  mounted() {
    this.updateTime()
    setInterval(this.updateTime, 1000)
  }
}
</script>

<style>
.bg-admin-dash {
  background-image: url('@/assets/img/Admin-dash.png');
  background-size: cover;
  background-position: center;
}
</style>
