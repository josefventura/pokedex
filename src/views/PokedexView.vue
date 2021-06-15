<template>
  <div class="card-expansion">
    <md-card>
      <md-card-media>
        <img src="" alt="">
      </md-card-media>

      <md-card-header>
        <div class="md-title">nombre_pokemon</div>
        <div class="md-subhead">type</div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions md-alignment="space-between">
          <md-card-expand-trigger>
            <md-button>info</md-button>
          </md-card-expand-trigger>
        </md-card-actions>

        <md-card-expand-content>
          <md-card-content>
           
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>
  </div>
</template>

<script>
  export default {
    name: 'CardExpansion'
  }
</script>

<style lang="scss" scoped>
  .card-expansion {
    height: 480px;
  }

  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>