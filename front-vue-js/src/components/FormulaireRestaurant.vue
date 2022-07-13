<template>
    <div>

        <h1> Ajouter un restaurant</h1>

        <form id="app" @submit.prevent="checkForm" action="">

           <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
            <ul>
                <li :key="index" v-for="(error, index) in errors">{{ error }}</li>
            </ul>
            </p>


            <label for="name">Nom du restaurant</label>
            <input id="name" v-model="newResto.name" type="text" name="name" > <br><br>

            <label for="city">Ville</label>
            <input id="city" v-model="newResto.city" type="text" name="city" min="0" ><br><br>

            <label for="nbcouverts">Nombre de couverts</label>
            <input id="nbcouverts" v-model.number="newResto.nbcouverts" type="number" name="nbcouverts" ><br><br>

            <label for="terrasse">Terrasse</label>
            <select v-model="newResto.terrasse" >
                <option :key="index" v-for="(ch, index) in choix ">{{ ch }}</option>

            </select><br><br>

            <label for="parking">Parking</label>
            <select v-model="newResto.parking" >
                <option :key="index" v-for="(ch, index) in choix ">{{ ch }}</option>
            </select><br><br>

            <input type="submit" value="Enregistrer">

        </form>

        <p>{{ newResto }}</p>
    </div>
</template>

<script>
// Charger la bibliothèque axios
import axios from "axios"
 import { required, minLength } from 'vuelidate/lib/validators'
export default {
     name: 'FormResto',

    data() {
        return {

            errors: [],
            choix: ['Oui', 'Non'],
            newResto: {
                name: null,
                city: null,
                nbcouverts: null,
                terrasse: null,
                parking: null,
            },
        }
    },
validations: {
    name: {
  required,
      minLength: minLength(6),
    }
  },

    methods: {
        checkForm()  {
          
           
            if (!this.newResto.name) {
                this.errors.push("Veuillez saisir un nom de restaurant");
            }
            if (!this.newResto.city) {
                this.errors.push('Veuillez saisir une ville');
            }

            if (!this.newResto.nbcouverts) {
                this.errors.push('Veuillez saisir le nombre de couverts');
            }
            if (!this.newResto.terrasse) {
                this.errors.push("Veuillez sélectioner la disponibilité d'une terrasse");
            }

            if (!this.newResto.parking) {
                this.errors.push("Veuillez sélectioner la disponibilité d'une terrasse");
            }
            if (this.errors.length) {
                return true;
            }

    

             axios.post("http://127.0.0.1:5000/restaurant", this.newResto)
        }

    }

}
</script>

<style>
</style>