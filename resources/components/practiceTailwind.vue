<style>
/* .flex-container {
        border: 1px solid black;
        background-color: darkgray;
        display: flex;
        flex-wrap: nowrap;
        margin: 0 auto;
        width: 50%;
        height: 500px;
    } */

.flex-container {
    display: flex;
    border: 1px solid #ccc;
    margin: 2rem;
    flex-direction: column;
}


.box {
    border: 1px solid red;
    background-color: aquamarine;
    color: black;
    font-weight: bold;
    width: 120px;
    height: 120px;
    text-align: center;
    margin: 5px;
}

/* .box1 {
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
    } */

.layout {
    display: flex;
    width: 100%;
    flex-direction: column;
}

.top {
    border: 1px solid black;
    width: 100%;
}

.bottom {
    border: 1px solid black;
    width: 100%;
    display: flex;
    flex-direction: row;
}

.bottom .square,
.top .square {
    width: 100%;
}

.middle {
    border: 1px solid black;
    width: 80%;
    height: 500px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
}

.middle-1, .middle-2, .middle-3 {
    border: 1px solid yellow;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
}

.middle-2 {
    justify-content: space-evenly;
}

.square {
    border: 1px solid maroon;
    width: 250px;
    padding: 2.5rem;
    text-align: center;
    font-size: 2.5rem;
}

@media only screen and (max-width: 600px) {
    .middle {
        height: auto;
    }
    .bottom {
        flex-direction: column;
    }
}
</style>

<template>
    <div>
        <h1>Titulo 1</h1>
        <section class="layout">
            <div class="top">
                <div class="square">1</div>
            </div>
            <div class="middle">
                <div class="middle-1">
                    <div class="square">1</div>
                </div>
                <div class="middle-2">
                    <div class="square">2</div>
                    <div class="square">3</div>
                </div>
                <div class="middle-3">
                    <div class="square">4</div>
                </div>
            </div>

            <div class="bottom">
                <div class="square">5</div>
                <div class="square">6</div>
                <div class="square">7</div>
            </div>
        </section>
        <section class="flex-container">
            <div class="box box1">Box 1</div>
            <div class="box box2">Box 2</div>
            <div class="box box3">Box 3</div>
        </section>
    </div>
</template>
