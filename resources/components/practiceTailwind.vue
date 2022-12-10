<style>
.chat-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

.chat-notification {
    display: flex;
    background-color: azure;
    color: slategrey;
    border-radius: 0.6rem;
    margin-right: 1rem;
    max-width: 24rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.chat-notification-logo-wrapper {
    height: 100%;
    min-width: 5rem;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.chat-notification-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 1rem;
}

.chat-notification-title {
    font-size: 1.2rem;
    font-weight: 500;
    color: #404041;
}

.chat-notification-logo {
    border-radius: 0.2rem;
    width: 5rem;
    margin: 0.5rem;
}
</style>

<template>
    <div>
        <h1>Titulo 1</h1>
        <div class="chat-container">
            <div class="chat-notification">
                <div class="chat-notification-logo-wrapper">
                    <img src="https://picsum.photos/200" alt="Logo" class="chat-notification-logo">
                </div>
                <div class="chat-notification-content">
                    <h4 class="chat-notification-title">ChitChat</h4>
                    <p class="chat-notification-message">You have a new ,m ,cmzx,cmzx,cmzx ajds sjdhf jsdhf jsd hfjsd
                        fjsd fjaksjjas dkjasdkj asd!</p>
                </div>
            </div>

            <div class="flex max-w-sm bg-slate-500 space-x-4 items-center rounded-xl p-2 shadow-lg hover:bg-slate-700 cursor-pointer">
                <div class="flex w-16 h-16 shrink-0">
                    <img src="https://picsum.photos/200" alt="Logo" class="rounded-md">
                </div>
                <div class="border-red-100 flex items-start flex-col odd:bg-white">
                    <h4 class="text-xl text-black">ChitChat</h4>
                    <p class="text-slate-100">You have a new message!</p>
                </div>
            </div>
        </div>
    </div>
</template>
