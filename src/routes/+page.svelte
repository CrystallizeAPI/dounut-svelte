
<script>
    /* @type { import('./$houdini').PageData } */
    export let data
    
    // pull the store reference from the route props
    $: ({ FrontPageGrid } = data)

    $: FrontPageGrid, console.log(FrontPageGrid);
</script>


{$FrontPageGrid.data.grid.name}

{#each $FrontPageGrid.data.grid.rows as row}
    <div>
    row
        {#each row.columns as col}
            <div>
                <h2 class="text-2xl font-bold"><a href="{col.item.path}">{col.item.name}</a></h2>
                <span>{col.item.price}</span>
                <img width="300px" alt={col.item.defaultVariant.firstImage.altText} src={col.item.defaultVariant.firstImage.url} />
                {#if col.item.topics}
                    {#each col.item.topics as topic}
                        <div>{topic.name}</div>
                    {/each}
                {/if}
            </div>
        {/each}
    </div>
{/each}
