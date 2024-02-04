<script setup lang="ts">
import { useAttrs } from "vue";

const layoutCustomProps = useAttrs();

console.log(layoutCustomProps.title); // I am a custom layout
</script>
