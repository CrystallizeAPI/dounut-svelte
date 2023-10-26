<script lang="ts">
    import { page } from '$app/stores'

    /* @type { import('./$houdini').PageData } */
    export let data
    $: ({ ProductData } = data)
    $: product = $ProductData.data.product

    $: ProductData, console.log(ProductData);
</script>

{$page.params.slug}


<div>
    <h1 class="text-2xl font-bold">{product.name}</h1>

    <div class="text-xl font-bold">$ {product.defaultVariant.price}</div>

    {@html product.brief.content.html}

    <img width="300px" alt={product.defaultVariant.firstImage.altText} src={product.defaultVariant.firstImage.url} />

    {#if product.topics}
        {#each product.topics as topic}
            <div>{topic.name}</div>
        {/each}
    {/if}

    <div>
        {#if product.body.content}
            {#each product.body.content.paragraphs as paragraph}
                <h2 class="text-xl font-bold">{paragraph.title.text}</h2>
                <div>{@html paragraph.body.html}</div>
                
                {#if paragraph.images}
                    {#each paragraph.images as image}
                        <div>{image.url}</div>
                        <img width="200px" alt={image.altText} src={image.url} />
                    {/each}
               {/if}

            {/each}
        {/if}
    </div>


    <div>
        {#if product.nutrition.content}
            {#each product.nutrition.content.sections as section}
                <h2 class="text-xl font-bold">{section.title}</h2>
                {#each section.properties as prop}
                <div>{prop.key}</div>
                <div>{prop.value}</div>
                {/each}
            {/each}
        {/if}

    </div>
</div>

<hr />
<pre>
    {JSON.stringify($ProductData, null, 2)}
</pre>
