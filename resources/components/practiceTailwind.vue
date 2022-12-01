<style>
    .flex-container {
        border: 1px solid black;
        background-color: darkgray;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        flex-flow: row wrap;
        align-content: center;
        margin: 0 auto;
        width: 50%;
        height: 500px;
    }

    .box{
        border: 1px solid red;
        background-color: aquamarine;
        color:black;
        font-weight: bold;
        width: 120px;
        height: 120px;
        text-align: center;
        margin: 5px;
    }
    .box1 {
        background-color: lightblue;
        flex-grow: 1;
    }
    .box2 {
        background-color: lightcoral;
        flex-grow: 2;
    }
    .box3 {
        background-color: lightgreen;
        flex-grow: 3;
    }
</style>

<template>
    <div>
        <h1>Titulo 1</h1>
        <section class="flex-container">
            <div class="box box1">Box 1</div>
            <div class="box box2">Box 2</div>
            <div class="box box3">Box 3</div>
        </section>
    </div>
</template>
