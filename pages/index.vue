<script  setup >
const initMap = () => {
  console.log({ window })
  if (document.getElementById('container')) {
    let map = new TMap.Map(document.getElementById('container'), {
      center: new TMap.LatLng(30.43758, 120.2817), //设置中心点坐标
      zoom: 10,
      viewMode: "2D",
    });
    console.log({ map })
  }

}
onMounted(() => {
  initMap()
})

</script>

<template>
  <div>
    <!-- <ClientOnly> -->
    <div id="container" style="width: 100%; height: 400px"></div>
    <!-- </ClientOnly> -->
    Page: foo
  </div>
</template>

<style scoped></style>
