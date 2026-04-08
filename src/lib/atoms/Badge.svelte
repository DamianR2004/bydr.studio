<script>
  let { text } = $props();
</script>

<span class="badge">{text}</span>

<style>
  .badge {
    padding: 0.2rem 0.6rem;
    background: #eee;
    border-radius: 4px;
    font-size: 0.7rem;
    font-weight: bold;
  }
</style>