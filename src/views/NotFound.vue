<template>
  <div class="bg">
   
    <div class="mars"></div>
     <div class="button-back">
      	<div class="btn-back" @click="ToIndex()">跟我回到首页    </div>
    </div>
    <img src="https://assets.codepen.io/1538474/404.svg" class="logo-404" />
    <img src="https://assets.codepen.io/1538474/meteor.svg" class="meteor" />



    <img
      src="https://assets.codepen.io/1538474/astronaut.svg"
      class="astronaut"
    />
    <img
      src="https://assets.codepen.io/1538474/spaceship.svg"
      class="spaceship"
    />
  </div>
</template>

<script>
export default {
  name: "NotFound",
  data: function() {
    return {
     
    };
  },
  mounted: function() {
    this.$nextTick(function() {
    
    });
  },
  methods: {
    ToIndex(){
     this.$router.push({
       path:`/`
     })
    }
  },
};
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito:400,600,700');
$nunito-font: 'Nunito', sans-serif;

// mixins
@mixin breakpoint($point) {
  @if $point==mobile {
    @media (max-width: 480px) and (min-width: 320px) {
      @content;
    }
  }
}

.button-back{
  display: flex;
  justify-content: center;
  align-content: center;
 
  width: 100vw;
  position: absolute;
  top: 50vh;
}
.btn-back{
  border: 1px solid white;
  color: white;
  padding: 12px;
  padding-top: 16px;
  font-family: $nunito-font;
  text-decoration: none;
	border-radius: 5px;
  font-weight: bold;
  &:hover{
    background: white;
    color: #4D007D;
  }

  @include breakpoint(mobile){
    font-size: 3.5vmin;
  }
}

// keyrames
@keyframes floating {
  from {
    transform: translateY(0px);
  }
  65% {
    transform: translateY(50px);
  }
  to {
    transform: translateY(-0px);
  }
}

.bg{
  height: 100vh;
  width: 100vw;
  background-image: url("https://assets.codepen.io/1538474/star.svg"),
    linear-gradient(to bottom, #1712a5, #290768);
}
.mars {
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  height: 27vmin;
  background: url("https://assets.codepen.io/1538474/mars.svg") no-repeat bottom
    center;
  background-size: cover;
}

.logo-404 {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 16vmin;
  width: 30vmin;

  @include breakpoint(mobile) {
    top: 45vmin;
  }
}

.meteor {
  position: absolute;
  right: 2vmin;
  top: 16vmin;
}

.astronaut {
  position: absolute;
  top: 18vmin;
  left: 10vmin;
  height: 30vmin;
  animation: floating 3s infinite ease-in-out;

  @include breakpoint(mobile) {
    top: 2vmin;
  }
}

.spaceship {
  position: absolute;
  bottom: 15vmin;
  right: 24vmin;

  @include breakpoint(mobile) {
    width: 45vmin;
    bottom: 18vmin;
  }
}
</style>
