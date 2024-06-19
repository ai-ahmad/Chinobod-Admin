<template >
    <div class="bg min-h-screen flex flex-col gap-10 items-center justify-center">
       <h1 class="text-red-600 text-3xl font-black">Siz Sanatoriya hududida emassiz !</h1> 
       <img src="@/assets/img/sad.png" alt=""> 
       <div class="flex justify-end">
           <router-link to="/Page" class="text-left px-6 py-2 bg-[#022511] text-white max-w-xs rounded-lg">
                <img src="../../assets/img/exit.png" alt=""></router-link>
       </div>
    
    </div>
</template>
<script>
export default {
    
}
</script>
<style >
    .bg {
    background-image: url('@/assets/img/bg.png');
    background-size: cover;
    background-position: center;
}

</style>