<template>
  <footer class="footer">
    <div class="container">
      <nav>
        <ul>
          <li>
            <router-link :to="{path:'/colors'}">Colors</router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright text-center">
        &copy; {{ new Date().getFullYear() }} Arnold
      </div>
    </div>
  </footer>

</template>
<script>
export default {}
</script>
<style>
</style>
