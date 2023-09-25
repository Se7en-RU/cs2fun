<template>
<main class="relative min-h-screen flex flex-col justify-center bg-violet-950 overflow-hidden">
        <div class="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
    
            <div class="text-center">

                <!-- Illustration #1 -->
                <div class="absolute top-0 left-0 rotate-180 -translate-x-3/4 -scale-x-100 blur-3xl opacity-70 pointer-events-none" aria-hidden="true">
                    <Shape />
                </div>
                
                <!-- Illustration #2 -->
                <div class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 blur-3xl opacity-70 pointer-events-none" aria-hidden="true">
                    <Shape />
                </div>

                <!-- Particles animation -->
                <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
                    <canvas data-particle-animation></canvas>
                </div>
            
                <div class="relative">
                  <video class="mx-auto mb-7" preload="none" loop autoplay muted width="150px">
                    <source src="/logo/logo.webm" type="video/mp4">
                    <source src="/logo/logo.mp4" type="video/mp4">
                </video>
                    <h1 class="inline-flex font-extrabold text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">CSGO.SU</h1>
                    <div class="max-w-3xl mx-auto mb-8">
                        <p class="text-lg text-slate-400">Добро пожаловать на сервер Шизофрения</p>
                    </div>
                    <div class="inline-flex justify-center space-x-4">
                        <div>
                            <a class="inline-flex justify-center whitespace-nowrap rounded-lg bg-discord px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 group" href="https://discord.com/invite/yH8NRqM">
                                Наш Discord <span class="tracking-normal text-indigo-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"></span>
                            </a>
                        </div>
                        <!-- <div>
                            <a class="inline-flex justify-center whitespace-nowrap rounded-lg bg-slate-700 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-slate-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                                Read the docs
                            </a>
                        </div> -->
                    </div>
                </div>
            </div>
    
        </div>
    </main>
</template>
<script setup lang="ts">
import Shape from '../assets/svg/shape.svg?component'
useHead({
  title: 'CSGO.SU',
}),
useHead({
script: [
  {
    src: `./js/particle-animation.js`,
    tagPosition: 'bodyClose'
  },
 ],
})


</script>