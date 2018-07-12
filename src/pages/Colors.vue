<template>
  <div class="content">
    <div class="md-layout">
        <div>
            <article v-for="(color, idx) in colors" :key="idx">
                <div :class="['base-color base-' + color.name ]">
                    <h2>{{ color.number }} {{ color.name }}</h2>
                </div>
                <!-- <button @click="deleteColor(color.id)">Delete Color</button> -->
            </article>
            <!-- <form @submit="addColor(name, number)">
                <input v-model="name" placeholder="color Name">
                <input v-model="number" placeholder="color Number">
                <button type="submit">Add New Color</button>
            </form> -->
        </div>
    </div>
  </div>
</template>

<script>
import { firestore } from '../main'
export default {
  data () {
    return {
      colors: [],
      name: '',
      number: ''
    }
  },
  firestore () {
    return {
      colors: firestore.collection('colors').orderBy('createdAt')
    }
  }
  //   methods: {
  //     addColor(name, number) {
  //       const createdAt = new Date();
  //       firestore.collection("colors").add({ name, number, createdAt });
  //     },
  //     deleteColor(id) {
  //       firestore
  //         .collection("colors")
  //         .doc(id)
  //         .delete();
  //     }
  //   }
}
</script>

<style scoped>
.base-color {
  height: 100px;
  padding: 20px;
}
.base-color h2 {
  text-align: center;
}

.base-orange {
  background: #ffa338;
}
.base-blue {
  background: #4079ff;
  color: white;
}
.base-green {
  background: #98f55d;
}
.base-red {
  background: #ed376e;
  color: white;
}
.base-silver {
  background: #bae9eb;
}
.base-purple {
  color: white;
  background: #a550cc;
}
</style>
