<template>
    <div>

        <h1> Ajouter un Employe</h1>

        <form id="app" @submit="checkForm()">

            <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
            <ul>
                <li :key="index" v-for="(error, index) in errors">{{ error }}</li>
            </ul>
            </p>


            <label for="first_name">Prénom de l'employe</label>
            <input id="first_name" v-model="newEmploye.first_name" type="text" name="first_name"> <br>

            <label for="last_name">Nom de l'employe</label>
            <input id="last_name" v-model="newEmploye.last_name" type="text" name="last_name"><br>

            <label for="hire_date">Date d'entrée</label>
            <input id="hire_date" v-model="newEmploye.hire_date" type="date" name="hire_date"><br>


           <label for="restaurant_id">Nom du restaurant</label>
            <select v-model.number="newEmploye.restaurant_id" >
                  <option disabled> Choisir un restaurant </option>
                <option :key="index" v-for="(resto,index) in restaurants" v-bind:value="resto.Id"> {{resto.name}}</option>
            </select><br>

          <!-- <p :key="index" v-for="(resto, index) in restaurants"> {{resto.name}} {{resto.Id}}</p>-->

            <button type="submit">Enregistrer</button>


        </form>


    </div>
</template>

<script>
// Charger la bibliothèque axios
import axios from "axios"

export default {
    name: 'FormEmployes',

    data() {
        return {
            errors: [],
            restaurants: null,
            newEmploye: {
                first_name: null,
                last_name: null,
                hire_date: null,
                restaurant_id : null,

            },
        }
    },

    mounted() {
        this.update()

    },

    methods: {
        checkForm() {
          

            //                if (this.newResto.name && this.newResto.city && newResto.nbcouverts && this.newResto.terrasse && this.newResto.parking) {
            //     return true;
            //   }
            //         this.errors = [];

            //         if (!this.newResto.name) {
            //             this.errors.push("Name required.");
            //         }
            //         if (!this.newResto.city) {
            //             this.errors.push('city required.');
            //         }

            //         if (!this.newResto.nbcouverts) {
            //             this.errors.push('couverts required.');
            //         }
            //         if (!this.newResto.terrasse) {
            //             this.errors.push('terrasse required.');
            //         }

            //         if (!this.newResto.parking) {
            //             this.errors.push('parking required.');
            //         }

            //         e.preventDefault();

             axios.post("http://127.0.0.1:5000//restaurant", this.newEmploye)
        },

        update() {
            axios.get("http://127.0.0.1:5000/restaurants")

                .then(res => this.restaurants = res.data)
                .catch(error => this.restaurants = [{ "name": "Erreur de chargement" }])

       
        },

        
    }

}
</script>

<style>
</style>