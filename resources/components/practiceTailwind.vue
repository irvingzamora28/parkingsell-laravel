
<template>
    <div>
        <!-- https://picsum.photos/200 -->
        <h1>Titulo 1</h1>
        <div class="chat-container">

            <div class="flex mx-auto items-center space-x-4 p-4 bg-gray-100 shadow-xl rounded-xl max-w-sm">
                <div class="flex shrink-0">
                    <img class="h-14 w-14 rounded-md" src="http://picsum.photos/200" alt="Image">
                </div>
                <div class="">
                    <div class="flex font-medium text-slate-900">
                        You have a message
                    </div>
                    <p class="text-slate-600">Message askjdsakjd ksajdkasdjsa kdjaskdjsakjdkajs dkjasdkjaskj kj sdkjas dkj asdj askdj askjdsakjdksaj k</p>

                </div>
            </div>

            <div class="mt-8 flex p-4 space-x-4 max-w-sm mx-auto bg-slate-50 rounded-xl shadow-xl">
                <div class="flex">
                    <img class=" block rounded-full w-14 h-14" src="https://picsum.photos/200" alt="" srcset="">
                </div>
                <div class="space-y-0.5 w-full">
                    <p class="text-medium text-slate-800 text-lg">You have a message</p>
                    <p class="text-medium text-slate-500">You have 400 new messages from your friends!</p>
                    <div class="text text-right">
                        <button class="bg-white border border-indigo-900 text-indigo-900 px-4 py-1 rounded-md shadow-md hover:text-white hover:bg-indigo-800 hover:shadow-2xl">OK</button>
                    </div>
                </div>
            </div>

            <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://picsum.photos/200" alt="Woman's Face">
                <div class="text-center space-y-2 sm:text-left">
                  <div class="space-y-0.5">
                    <p class="text-lg text-black font-semibold">
                      Erin Lindford
                    </p>
                    <p class="text-slate-500 font-medium">
                      Product Engineer
                    </p>
                  </div>
                  <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
                </div>
              </div>
        </div>
    </div>
</template>
