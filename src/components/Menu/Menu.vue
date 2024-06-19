<template>
    <div class="bg min-h-screen flex flex-col items-center">
        <div class="w-full flex justify-start pt-4 pl-4">
            <router-link to="/Page" class="text-left px-6 py-2 bg-[#022511] text-white max-w-xs rounded-lg">
                <img src="../../assets/img/exit.png" alt=""></router-link>
        </div>

        <div class="container flex flex-col items-center pt-16 pb-5">
            <div class="flex flex-col justify-center items-center">
                <h1 class="text-3xl font-black text-[#14532D]">Restoran va Menu</h1>
                <p class="max-w-[75%] text-xl font-medium text-[#14532D] mt-5">
                    Sanatoriy restorani bir vaqtning o'zida 248 nafar mehmonni qabul qila oladi; sanatoriyning barcha tibbiy
                    muolajalari dam olish va ovqatlanish bilan uyg'unlashgan. Ovqatlar bufet tarzida taqdim etiladi.
                    Ovqatlar
                    bufetga asoslanadi, menyuda o'zbek, uyg'ur, rus, xitoy va yevropa oshxonalarining eng xilma-xil taomlari
                    -
                    sut
                    mahsulotlari, go'sht (mol go'shti, tovuq, baliq, quyon, kurka), sabzavotlar, mevalar, pishiriqlarning
                    katta
                    tanlovi mavjud. tovarlar va shirinliklar, qandolat mahsulotlari , salatlar, quritilgan va xom mevalar,
                    sharbatlar.
                    Sanatoriy shifokorlarining tavsiyasi bilan restoran oshpazlari tomonidan tayyorlangan parhez taomlar
                    taklif
                    etiladi. Diyet ovqatlari uchun 9.10 stol, burchak diabetga chalinganlar uchun turli xil mahsulotlar
                    bilan
                    to'ldirilgan, bundan tashqari, mehmonlarning iltimosiga binoan, nonushta uchun "Omlet" kiritilgan.
                    Restoranning
                    qandolatchi oshpazi sizni ko'plab yangi va mazali uy qurilishi pishiriqlari, shirin tortlar, pechene va
                    shirinliklar bilan xursand qiladi.
                    Taqdim etilgan menyularning keng assortimenti, idishlarni ko'rish, o'zingiz uchun qulay qismni
                    shakllantirish va
                    stolga xohlaganingizcha ko'p marta kelish qobiliyati - bu afzalliklar uni dam oluvchilar uchun sevimli
                    oziq-ovqat tizimiga aylantiradi. Dam oluvchilarga grilda pishirilgan baliq, parranda, mol va qo'zichoq
                    go'shtidan tayyorlangan turli xil taomlar taklif etiladi.
                    Yozda dam oluvchilar uchun ochiq havoda hovuz bo'yida sayrlar tashkil etiladi, bu erda dam oluvchilar
                    turli
                    xil
                    go'shtli taomlar va ajoyib musiqiy muhitdan bahramand bo'lishlari mumkin.
                </p>
                <div class="flex flex-wrap items-center justify-center gap-5 mt-10">
                    <img src="@/assets/img/Menu.jpg" alt="" class="w-[370px] h-[370px] object-cover">
                    <img src="@/assets/img/second.jpg" alt="" class="w-[370px] h-[370px] object-cover">
                    <img src="@/assets/img/Third.jpg" alt="" class="w-[370px] h-[370px] object-cover">
                    <img src="@/assets/img/Four.jpg" alt="" class="w-[370px] h-[370px] object-cover">
                    <img src="@/assets/img/Five.jpg" alt="" class="w-[370px] h-[370px] object-cover">
                    <img src="@/assets/img/Six.jpg" alt="" class="w-[370px] h-[370px] object-cover">
                </div>
            </div>
        </div>
        <p class="text-3xl font-black text-[#14532D] my-10">Sanatoriyamizning Menyusi :</p>
        <MenuSec />
    </div>
</template>

<script>
import MenuSec from "@/components/MenuSec/MenuSec.vue"
export default {
    components: {
        MenuSec
    }
};
</script>

<style>
.bg {
    background-image: url('@/assets/img/bg.png');
    background-size: cover;
    background-position: center;
}
</style>
