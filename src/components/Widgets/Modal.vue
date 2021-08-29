<template>
  <div class="modal">
    <div :class="[isWide ? 'modal-content-wide' : 'modal-content']">
      <div v-if="hasHeaderSlot" class="modal-header">
        <span v-if="!disableClose" @click="$emit('close')" class="close"> &times;</span>
        <h4>
          <slot name="header"></slot>
        </h4>
      </div>
      <div class="modal-body">
        <span
          v-if="!hasHeaderSlot && !disableClose"
          @click="$emit('close')"
          class="close close-body"
        >
          &times;
        </span>
        <slot name="body"></slot>
      </div>
      <div v-if="hasFooterSlot" class="modal-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Modal",
  props: {
    isWide: {
      type: Boolean,
      required: false,
      default: false,
    },
    disableClose: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27) {
        this.$emit("close");
      }
    });
  },
  computed: {
    hasHeaderSlot() {
      return !!this.$slots["header"];
    },
    hasBodySlot() {
      return !!this.$slots["body"];
    },
    hasFooterSlot() {
      return !!this.$slots["footer"];
    },
  },
};
</script>
