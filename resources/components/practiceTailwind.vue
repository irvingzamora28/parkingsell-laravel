
<template>
    <header class="bg-slate-700 font-sans text-slate-50 md:h-12 h-36">
        <div class="flex container mx-auto w-4/5 h-full md:flex-row flex-col">
            <div id="logo" class="flex items-center justify-center mx-auto flex-1 md:flex-grow-0">
                <div class="flex w-48 h-8 px-8 items-center space-x-4 justify-center
                    text-center bg-slate-400 tracking-wider cursor-pointer overflow-hidden
                    transition duration-300 rounded-sm
                    hover:bg-slate-800 hover:text-slate-50 group">
                    <i
                        class="fa-solid fa-gear block float-left text-2xl animate-spin-slow group-hover:animate-none group-hover:animate-from-bottom"></i>
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

        <!-- <div id="cards-container" class="flex flex-nowrap justify-between"> -->
        <div id="cards-container"
            class="grid grid-flow-row grid-cols-1 sm:grid-cols-2 sm:gap-12 lg:grid-cols-5 lg:gap-16 justify-between">

            <div class="card group">
                <p class="card-icon"> <i class="fas fa-code fa-fw"></i> </p>
                <h2 class="card-category">DESARROLLO</h2>
                <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis</p>
            </div>

            <div class="card group">
                <p class="card-icon"> <i class="fas fa-terminal fa-fw"></i> </p>
                <h2 class="card-category">SISTEMAS OPERATIVOS</h2>
                <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis</p>
            </div>

            <div class="card group">
                <p class="card-icon"> <i class="fa-solid fa-computer"></i> </p>
                <h2 class="card-category">HARDWARE</h2>
                <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis</p>
            </div>

            <div class="card group">
                <p class="card-icon"> <i class="fa-solid fa-network-wired"></i> </p>
                <h2 class="card-category">REDES E INTERNET</h2>
                <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis</p>
            </div>

            <div class="card group">
                <p class="card-icon"> <i class="fa-solid fa-database"></i> </p>
                <h2 class="card-category">REDES E INTERNET</h2>
                <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis</p>
            </div>
        </div>
    </section>

    <main>
        <aside id="side-section">
            <h3>BUSCAR</h3>
            <div id="search_box">
                <form action="">
                    <input type="text" name="search" id="input_search">
                    <input type="button" value="Buscar">
                </form>
            </div>

            <h3>LOGIN</h3>
            <div id="login_box">
                <form action="">
                    <label for="email">Usuario</label>
                    <input type="email" name="email" id="input_email">

                    <label for="password">Contrasena</label>
                    <input type="password" name="password" id="input_password">
                    <input type="submit" value="Entrar">
                    <input type="reset" value="Limpiar">

                    <a href="#">Registrate aqui</a>
                    <a href="#">Has olvidado tu contrasena?</a>
                </form>
            </div>

            <h3>REDES SOCIALES</h3>
            <div id="social_media_box">
                <div class="twitter_box">
                    <a href="#">Twitter</a>
                    <p>Twitter</p>
                </div>
                <div class="facebook_box">
                    <a href="#">Facebook</a>
                    <p>Facebook</p>
                </div>
                <div class="youtube_box">
                    <a href="#">Youtube</a>
                    <p>Youtube</p>
                </div>
            </div>

            <h3>PATROCINADORES</h3>
            <div id="sponsors_box">
            </div>
        </aside>
        <section>
            <h2>Ultimos articulos</h2>
            <article>
                <div>
                    <span>Fecha: 10 marz</span>
                    <span>Categoria: Pruebas</span>
                </div>

                <h4> <a href="#">Titulo de articulo</a> </h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magni id odit facilis eum similique ducimus qui ea itaque vero.</p>
            </article>
        </section>
    </main>
</template>
