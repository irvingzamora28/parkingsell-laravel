
<template>
    <header class="bg-slate-700 font-sans text-slate-50 md:h-12 h-36">
        <div class="flex container mx-auto w-4/5 h-full md:flex-row flex-col">
            <div id="logo" class="flex items-center justify-center mx-auto flex-1 md:flex-grow-0">
                <div class="flex w-48 h-8 px-8 items-center space-x-4 justify-center
                    text-center bg-slate-400 tracking-wider cursor-pointer overflow-hidden
                    transition duration-300 rounded-sm
                    hover:bg-slate-800 hover:text-slate-50 group">
                    <i class="fa-solid fa-gear block float-left text-2xl animate-spin-slow group-hover:animate-none group-hover:animate-from-bottom"></i>
                    <h3 class="block float-right text-2xl drop-shadow-2xl group-hover:animate-from-right">TAILWIND</h3>
                </div>
            </div>
            <nav class="flex w-full h-full flex-1">
                <ul class="flex w-full items-center justify-end text-2xl space-x-4 tracking-wide">
                    <li class="menu-item"><a class="" href="#">INICIO</a></li>
                    <li class="menu-item"><a class="" href="#">BLOG</a></li>
                    <li class="menu-item"><a class="" href="#">FORMACION</a></li>
                    <li class="menu-item"><a class="" href="#">CONTACTO</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section class="container w-11/12 mx-auto">
        <div id="banner" class="w-full h-28 mx-auto border-8 border-white overflow-hidden
        bg-banner bg-banner-position animate-bg-banner shadow m-5">
            <h1 class="block text-banner text-center text-slate-50
            font-normal tracking-wider m-7 animate-text-banner text-lg md:text-4xl">TAILWIND PRACTICE</h1>
        </div>
    </section>
</template>
