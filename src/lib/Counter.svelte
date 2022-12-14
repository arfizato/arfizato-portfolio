<script lang="ts">
  let count: number = 1
  const increment = () => {
    count *= 11
  }
</script>

<button on:click={increment}>
  count is {count}
</button>
