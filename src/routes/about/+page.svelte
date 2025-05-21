<script lang="ts">
    let { data } = $props();
</script>

<h1>About</h1>

<main>
    <h2>Credits</h2>
</main>

<aside>
    <h2>Build information</h2>
    <dl>
        <dt>Version</dt>
        <dd>{data.version}</dd>
        <dt>Build date</dt>
        <dd>{data.buildDate}</dd>
        <dt>Commit</dt>
        <dd>{data.commit}</dd>
    </dl>
</aside>
