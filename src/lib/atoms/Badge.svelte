<script>
  let { text } = $props();
</script>

<span>{text}</span>

<style>
  span {
    color: white;
    font-size: 1.5em;
  }

  span:not(:last-child)::after {
    content: ", ";
  }
</style>