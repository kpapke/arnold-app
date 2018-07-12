<template>
  <div 
    v-click-outside="closeDropDown" 
    :class="{open:isOpen}" 
    class="dropdown" 
    @click="toggleDropDown">
    <slot name="title">
      <a 
        class="dropdown-toggle" 
        data-toggle="dropdown" 
        href="javascript:void(0)">
        <i :class="icon"/>
        <p class="notification">{{ title }}
          <b class="caret"/>
        </p>
      </a>
    </slot>
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'DropDown',
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleDropDown() {
      this.isOpen = !this.isOpen
    },
    closeDropDown() {
      this.isOpen = false
    }
  }
}
</script>
