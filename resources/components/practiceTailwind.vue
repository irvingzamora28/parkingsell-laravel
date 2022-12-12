
<template>
    <header class="bg-slate-700 font-sans text-slate-50 h-12">
        <div class="flex container mx-auto w-4/5 h-full">
            <div id="logo" class="flex items-center">
                <div class="flex w-48 h-8 px-8 items-center space-x-4 justify-center
                    text-center bg-slate-400 tracking-wider cursor-pointer overflow-hidden
                    transition duration-300 rounded-sm
                    hover:bg-slate-800 hover:text-slate-50">
                    <i class="fa-solid fa-gear block float-left text-2xl"></i>
                    <h3 class="block float-right text-2xl drop-shadow-2xl">TAILWIND</h3>
                </div>
            </div>
            <nav class="flex w-full h-full border border-red-400">
                <ul class="flex w-full items-center justify-end text-2xl space-x-4 tracking-wider">
                    <li><a class="block transition duration-500
                    hover:text-slate-400 transform hover:scale-110 drop-shadow-2xl" href="#">INICIO</a></li>
                    <li><a href="#">BLOG</a></li>
                    <li><a href="#">FORMACION</a></li>
                    <li><a href="#">CONTACTO</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>
