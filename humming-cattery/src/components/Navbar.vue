<template>
    <div class="pageContent">
        <div class="navbarContent">
            <!-- navbar -->
            <!-- create a component!!! -->
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <div class="d-flex justify-content-around">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <router-link to="/">Etusivu</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/News">Uutiset</router-link>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Kissat</a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <!-- <li><a class="dropdown-item" href="#">Naaraat</a></li> -->
                                        <li><router-link to="/Mollies">Naaraat</router-link></li>
                                        <li><router-link to="/Tomcats">Urokset</router-link></li>
                                        <li><router-link to="/Castrates">Kastraatit</router-link></li>
                                        <li><router-link to="/InMemoriam">Muistoissa</router-link></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/KittenBasket">Pentukori</router-link>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pentueet</a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a class="dropdown-item" href="#">1. pentue</a></li>
                                        <li><a class="dropdown-item" href="#">2. pentue</a></li>
                                        <li><a class="dropdown-item" href="#">3. pentue</a></li>
                                        <li><a class="dropdown-item" href="#">4. pentue</a></li>
                                        <li><a class="dropdown-item" href="#">5. pentue</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Kissala</a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><router-link to="/Breeder">Kasvattaja</router-link></li>
                                        <li><router-link to="/KittenInfo">Pentu-info</router-link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <router-view />
</template>
