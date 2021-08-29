<template>
  <div class="card">
    <template slot="header" />
    <img src="img_avatar.png" alt="Avatar" style="width: 100%" />
    <div class="content">
      <slot name="content" />
    </div>
    <div class="actions">
      <slot name="actions" />
    </div>
  </div>
</template>
