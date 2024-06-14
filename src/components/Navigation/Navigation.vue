<template>
    <div class="flex flex-col items-center bg min-h-screen justify-center ">
        <div class="container mx-auto navigator">
            <h1 class="text-2xl font-bold mb-6">Sanatoriyamizga xush kelibsiz</h1>
            <div class="flex justify-between mb-6">
                <div class="w-2/3">
                    <img src="@/assets/img/XARITA.png" alt="Xarita" class="rounded-lg shadow-lg">
                </div>
                <div class="w-1/3 pl-6">
                    <p class="text-lg font-semibold mb-4">Qayerga borishni istaysiz?</p>
                    <select v-model="selectedBlock"
                        class="block w-full mb-4 p-2 rounded-lg border-2 border-solid border-[#114E05]">
                        <option>A blok</option>
                        <option>B blok</option>
                        <option>Kirish</option>
                        <option>Qabul bolimi</option>

                    </select>
                    <div class="flex flex-col space-y-4">
                        <img v-if="selectedBlock === 'A blok'" src="@/assets/img/outside.jpg" alt="Image 1"
                            class="rounded-lg shadow-lg w-[500px] h-[180px] object-cover">
                        <img v-if="selectedBlock === 'A blok'" src="@/assets/img/outside.jpg" alt="Image 1"
                            class="rounded-lg shadow-lg w-[500px] h-[180px] object-cover">

                        <img v-if="selectedBlock === 'B blok'" src="@/assets/img/images.jpg" alt="Image 1"
                            class="rounded-lg shadow-lg w-[500px] h-[180px]  object-cover">
                        <img v-if="selectedBlock === 'B blok'" src="@/assets/img/images.jpg" alt="Image 2"
                            class="rounded-lg shadow-lg w-[500px] h-[180px] object-cover">
                        <img v-if="selectedBlock === 'Kirish'" src="@/assets/img/enterance.jpg" alt="Image 1"
                            class="rounded-lg shadow-lg w-[500px] h-[180px]  object-cover">
                        <img v-if="selectedBlock === 'Kirish'" src="@/assets/img/enterance.jpg" alt="Image 2"
                            class="rounded-lg shadow-lg w-[500px] h-[180px] object-cover">
                        <img v-if="selectedBlock === 'Qabul bolimi'" src="@/assets/img/res.jpg" alt="Image 1"
                            class="rounded-lg shadow-lg w-[500px] h-[180px]  object-cover">
                        <img v-if="selectedBlock === 'Qabul bolimi'" src="@/assets/img/res.jpg" alt="Image 2"
                            class="rounded-lg shadow-lg w-[500px] h-[180px] object-cover">
                    </div>
                    <router-link to="/Error" class="block mt-3 w-full bg-[#114E05] text-white py-2 rounded-lg text-center">
                        Navigatorni ishga tushirish
                    </router-link>
                </div>
            </div>
            <div class="text">
                <p v-if="selectedBlock === 'A blok'" class="text-lg font-semibold">A Blok (OSHQOZON BILAN BO'GLIQ MUAMMOLAR)
                </p>
                <p v-if="selectedBlock === 'A blok'">Asosan muolaja vaqtida borishdan avval doktor huzuriga navbatga
                    yozilish kerak.</p>
                <p v-if="selectedBlock === 'A blok'">Navbatga yozilishni istaysizmi?!</p>

                <p v-if="selectedBlock === 'B blok'" class="text-lg font-semibold">B Blok (YURAK BILAN BO'GLIQ MUAMMOLAR)
                </p>
                <p v-if="selectedBlock === 'B blok'">B blokda muolaja uchun navbat talab etilmaydi, to'g'ridan-to'g'ri
                    tashrif buyurishingiz mumkin.</p>
                <p v-if="selectedBlock === 'B blok'">Yangi muolajalarni boshlashni istaysizmi?!</p>
                <p v-if="selectedBlock === 'Kirish'" class="text-lg font-semibold">Kirish (YURAK BILAN BO'GLIQ MUAMMOLAR)
                </p>
                <p v-if="selectedBlock === 'Kirish'">Kirish muolaja uchun navbat talab etilmaydi, to'g'ridan-to'g'ri
                    tashrif buyurishingiz mumkin.</p>
                <p v-if="selectedBlock === 'Kirish'">Yangi muolajalarni boshlashni istaysizmi?!</p>
                <p v-if="selectedBlock === 'Qabul bolimi'" class="text-lg font-semibold">Qabul bolimi (YURAK BILAN BO'GLIQ
                    MUAMMOLAR)
                </p>
                <p v-if="selectedBlock === 'Qabul bolimi'">Qabul bolimi muolaja uchun navbat talab etilmaydi,
                    to'g'ridan-to'g'ri
                    tashrif buyurishingiz mumkin.</p>
                <p v-if="selectedBlock === 'Qabul bolimi'">Yangi muolajalarni boshlashni istaysizmi?!</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedBlock: 'A blok'
        };
    }
}
</script>

<style scoped>
.bg {
    background-image: url('@/assets/img/bg.png');
    background-size: cover;
    background-position: center;
}
</style>
