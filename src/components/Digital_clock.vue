<template>
    <div class="digitalClock">
        <h2>Digital Clock</h2>
        <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="customSwitch"  @click="toggleCheckbox">
            <label class="custom-control-label" for="customSwitch">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                </svg>
            </label>
        </div>
        
        <div class="circle small">
            <h3>{{ time }}</h3>
            <h1 v-if="checkbox===true" >{{ date }}</h1>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checkbox: false,
                date: '',
                time : ''
            }
        },
        methods : {
            toggleCheckbox() {
                this.checkbox = !this.checkbox
                this.$emit('setCheckboxVal', this.checkbox)
            },
            getNow: function() {
                const today = new Date();
                var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                const date = days[today.getDay()] + ' ' + today.getDate() + ' ' + months[today.getMonth()] + ' ' + today.getFullYear();
                const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                this.time = time;
                this.date = date 
            }
        },
        created() {
            setInterval(() => {
            this.getNow();
            }, 1000)
        },
    }
</script>

<style scoped>
    .custom-switch {
        margin-top: 20px;
        padding-left: 2.25rem;
        padding-bottom: 3rem;
    }

    .custom-control-label { 
        padding-top: 0.2rem;
        padding-left: 2rem;
        padding-bottom: 0.1rem;
    }

    .custom-switch .custom-control-label::before {
        left: -2.25rem;
        height: 2rem;
        width: 3.5rem;   
        pointer-events: all;
        border-radius: 1rem;
    }

    .custom-switch .custom-control-label::after {
        top: calc(0.25rem + 2px);
        left: calc(-2.25rem + 2px);
        width: calc(2rem - 4px);  
        height: calc(2rem - 4px); 
        background-color: #adb5bd;
        border-radius: 2rem; 
        transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out;
        transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out;
    }

    .custom-switch .custom-control-input:checked ~ .custom-control-label::after {
        background-color: #fff;
        -webkit-transform: translateX(1.5rem); 
        transform: translateX(1.5rem); 
    }
   
    .digitalClock {
        margin-top: 50px;
        border: 1px solid black;
        width: 400px;
        height: 450px;
        margin-left: 20%;
        margin-bottom: 50px;
    }
    h2 {
        background-color: black;
        color: cornsilk;
        padding: 20px;
    }
    .circle.small {
        border: 18px solid #413366;
        border-radius: 50%;
        width: 220px;
        height: 220px;
        z-index: 86;
        margin-left: 85px;
    }

.circle.filled {
	background-color: rgb(0, 255, 21);
}

.circle h3 {
    margin-top: 60px;
    text-align: center;
    font-family:  Arial, sans-serif;
    font-weight: 700;
    font-size: 40px;
    color: #d9dfde;
    letter-spacing: -0.01em;
    text-decoration: none;
    display: block;
}

.circle h1 {
    text-align: center;
    font-family:  Times, serif;
    font-size: 14px;
    color: rgb(185, 161, 161);
    text-decoration: none;
    letter-spacing: -0.02em;
    word-spacing: -0.02em;
    line-height: 1;
    vertical-align: middle;
}

</style>