<template>
    <div class="flex items-center justify-center">
        <div class="products__create  w-1/2 my-12">

            <div class="products__create__titlebar dflex justify-content-between align-items-center">
                <div class="products__create__titlebar--item">

                    <button class="pointer-events-auto rounded-md bg-indigo-700 py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-indigo-100 hover:bg-indigo-900 hover:text-indigo-100">Add Product</button>
                </div>
                <div class="products__create__titlebar--item">

                    <button class="pointer-events-auto rounded-md bg-indigo-700 py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-indigo-100 hover:bg-indigo-900 hover:text-indigo-100">
                        Save
                    </button>
                </div>
            </div>

            <div class="products__create__cardWrapper mt-2">
                <div class="products__create__main">
                    <div class="products__create__main--addInfo card py-2 px-2 bg-white">
                        <p class="mb-1">Name</p>
                        <input type="text" class="input">

                        <p class="my-1">Description (optional)</p>
                        <textarea cols="10" rows="5" class="textarea"></textarea>

                        <div class="products__create__main--media--images mt-2 lg:w-full">
                            <ul class="products__create__main--media--images--list list-unstyled">
                                <li class="products__create__main--media--images--item">
                                    <div class="products__create__main--media--images--item--imgWrapper">
                                        <img class="products__create__main--media--images--item--img" alt="" />
                                    </div>
                                </li>
                                <!-- upload image small -->
                                <li class="products__create__main--media--images--item">
                                    <form class="products__create__main--media--images--item--form">
                                        <label class="products__create__main--media--images--item--form--label"
                                            for="myfile">Add Image</label>
                                        <input class="products__create__main--media--images--item--form--input"
                                            type="file" id="myfile">
                                    </form>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
                <div class="products__create__sidebar">
                    <!-- Product Organization -->
                    <div class="card py-2 px-2 bg-white">

                        <!-- Product unit -->
                        <div class="my-3">
                            <p>Product type</p>
                            <input type="text" class="input">
                        </div>
                        <hr>

                        <!-- Product invrntory -->
                        <div class="my-3">
                            <p>Inventory</p>
                            <input type="text" class="input">
                        </div>
                        <hr>

                        <!-- Product Price -->
                        <div class="my-3">
                            <p>Price</p>
                            <input type="text" class="input">
                        </div>
                    </div>

                </div>
            </div>
            <!-- Footer Bar -->
            <div class="dflex justify-content-between align-items-center my-3">
                <p></p>
                <button class="btn btn-secondary">Save</button>
            </div>

        </div>

    </div>
</template>
