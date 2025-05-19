<template>
  <div class="matrix-card">
    <div class="card-image-wrapper">
      <img :src="image" alt="Building" class="card-image" />
      <div class="card-overlay">
        <span class="card-number-badge">8.7</span>
      </div>
    </div>
    <div class="card-title">Residential home</div>
    <div class="card-attributes">
      <div class="attribute" v-for="(attr, i) in attributes" :key="i">
        <span class="attr-label">{{ attr.label }}</span>
        <div class="bar-container">
          <div class="bar-bg">
            <div class="bar-fill" :style="barStyle(attr.value)"></div>
          </div>
          <span class="bar-value">{{ attr.value }}</span>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <img :src="logo" alt="Logo" class="logo-footer" />
      <span class="footer-text"> | Pararii</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: String,
  logo: String
});

const attributes = [
  { label: 'Transport', value: 5.0 },
  { label: 'Security', value: 8.1 },
  { label: 'Amenities', value: 2.4 },
  { label: 'Energy', value: 9.1 },
  { label: 'Accessibility', value: 7.1 },
];

function barColor(val) {
  if (val <= 3) return '#e53935'; // red
  if (val <= 5) return '#ffb300'; // amber
  if (val <= 8) return '#ffe082'; // yellow
  return '#43a047'; // green
}

function barStyle(val) {
  return {
    width: `${(val / 10) * 100}%`,
    background: barColor(val)
  };
}
</script>

<style scoped>
.matrix-card {
  background: #01151c;
  color: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  padding: 0 0 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
  max-width: 420px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.card-image-wrapper {
  position: relative;
  width: 100%;
  height: 220px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.card-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}
.card-overlay {
  position: absolute;
  top: 0.7rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0 1.2rem;
  pointer-events: none;
  z-index: 2;
}
.card-number-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  font-size: 2.1rem;
  font-weight: 900;
  background: linear-gradient(135deg, #0a2a36 0%, #16475a 100%);
  color: #e0f7fa;
  text-shadow: 0 2px 8px #fff8, 0 1px 2px #0008;
  letter-spacing: -1px;
  transition: transform 0.2s;
  pointer-events: auto;
}
.card-number-badge:hover {
  transform: scale(1.08) rotate(-2deg);
}
.card-title {
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  margin: 0.5rem 0 0.7rem 0;
}
.card-attributes {
  background: rgba(0,0,0,0.13);
  border-radius: 12px;
  padding: 0.7rem 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.attribute {
  display: flex;
  align-items: center;
  font-size: 1.08rem;
  justify-content: space-between;
  gap: 0.7rem;
}
.attr-label {
  flex: 1;
  text-align: left;
}
.bar-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 160px;
  max-width: 160px;
  width: 160px;
  justify-content: flex-end;
}
.bar-bg {
  background: #e0e0e0;
  border-radius: 6px;
  width: 90px;
  height: 14px;
  overflow: hidden;
  flex-shrink: 0;
  position: relative;
}
.bar-fill {
  height: 100%;
  border-radius: 6px;
  transition: width 0.3s;
  position: absolute;
  left: 0;
  top: 0;
}
.bar-value {
  font-size: 1.05rem;
  font-weight: bold;
  min-width: 2.2rem;
  text-align: right;
  color: #fff;
  text-shadow: 0 1px 2px #0008;
  margin-left: 0.5rem;
}
.card-footer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.2rem;
  gap: 0.3rem;
}
.logo-footer {
  height: 1.3rem;
  width: auto;
  display: inline-block;
  vertical-align: middle;
  filter: brightness(1.2) drop-shadow(0 1px 2px #0008);
}
.footer-text {
  color: #e0f7fa;
  font-size: 1.08rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  vertical-align: middle;
}
</style> 