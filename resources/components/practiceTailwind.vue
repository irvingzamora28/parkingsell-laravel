<style>
.chat-notification {
    display: flex;
    max-width: 24rem;
    margin: 0 auto;
    padding: 1.25rem;
    border-radius: 0.5rem;
    background-color: aliceblue;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.chat-notification-logo-wrapper {
    flex-shrink: 0;
}

.chat-notification-logo {
    width: 3rem;
    height: 3rem;
    margin-top: 0.25rem;
}

.chat-notification-content {
    flex-shrink: 1;
    margin: 0px;
    padding: 0px;
    margin-left: 1.5rem;
}

.chat-notification-title {
    color: black;
    font-size: 1.2rem;
    margin: 0px;
    padding: 0px;
}

.chat-notification-message {
    color: grey;
    font-size: 1rem;
    line-height: 1.2rem;
    padding-top: 0.25rem;
}
</style>

<template>
    <div>
        Tailwind Tutorial
        <br>
        https://tailwindcss.com/docs/utility-first
        <div class="chat-notification">
            <div class="chat-notification-logo-wrapper">
                <img src="https://picsum.photos/200" alt="Logo" class="chat-notification-logo">
            </div>
            <div class="chat-notification-content">
                <h4 class="chat-notification-title">Title message</h4>
                <p class="chat-notification-message">You have a new message!</p>
            </div>
        </div>
    </div>
</template>
