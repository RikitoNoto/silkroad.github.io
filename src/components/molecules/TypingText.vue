<template>
  <span class="typing_text">{{ displayText }}</span>
</template>

<script>
export default {
  name: 'TypingText',
  props: {
    // the texts to type.
    texts: {
      type: Array,
      default: () => [""],
    },
    // a time from typed full text to begin to delete.
    typingTime: {
      type: Number,
      default: () => 1000
    },
    // a time display full text.
    displayTextTime: {
      type: Number,
      default: () => 2000
    },
    // the time until type a text next.
    nextStartTime: {
      type: Number,
      default: () => 500
    },

  },
  data() {
    return {
      currentIndex: 0,
      displayText: '',
      isDeleting: false,
    };
  },
  methods: {
    tick() {
      const fullTxt = this.texts[this.currentIndex];
      if (this.isDeleting) {
        this.displayText = fullTxt.substring(0, this.displayText.length - 1);
      } else {
        this.displayText = fullTxt.substring(0, this.displayText.length + 1);
      }

      var that = this;
      var sleepTime = 0;


      // end typing
      if (!this.isDeleting && this.displayText === fullTxt) {
        sleepTime = this.displayTextTime;
        this.isDeleting = true;
      }
      // end deleting
      else if (this.isDeleting && this.displayText === '') {
        sleepTime = this.nextStartTime;
        this.isDeleting = false;

        // select random a text in texts.
        this.currentIndex = Math.floor(Math.random() * this.texts.length);
      }
      else if(this.isDeleting){
        sleepTime = this.typingTime / fullTxt.length / 2;
      }
      else {
        sleepTime = this.typingTime / fullTxt.length; // time of type a char
        // sleepTime = this.typeInterval;
      }

      setTimeout(function() {
        that.tick();
      }, sleepTime);
    },
  },
  mounted() {
    this.tick();
  },
}
</script>

<style lang="scss">
.typing_text {
  animation: blinkBorder 1s infinite;
  border-right: 0.2rem solid;
}

@keyframes blinkBorder {
  0% {
    border-color: transparent;
  }
  50% {
    border-color: transparent;
  }
  51% {
    border-color: #666;
  }
  100% {
    border-color: #666;
  }
}
</style>
