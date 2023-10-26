<script lang="ts">
    import { page } from '$app/stores'

    /* @type { import('./$houdini').PageData } */
    export let data
    $: ({ ProductData } = data)
    $: product = $ProductData.data.product

    $: ProductData, console.log(ProductData);

</script>

<div>
    <div
        class="bg-background5 z-0 absolute left-0 right-0 rounded-full"
        style={{
          bottom: "10%",
          top: "20%",
          zIndex: "-1",
        }}
      ></div>

      <div class="py-5">
        <div class="flex lg:flex-row flex-col items-center mt-10 mb-5">
          <div class="flex flex-col text-text w-6/12">
            <h1 class="font-extrabold text-5xl mb-3">{product.name}</h1>
            {@html product.brief.content.html}
          </div>
          <img width="400px" class="w-full rounded-sm" alt={product.defaultVariant.firstImage.altText} src={product.defaultVariant.firstImage.url} />
        </div>
        <div class="flex z-10 justify-between lg:w-5/12 w-8/12 mx-auto bg-white p-5 text-text rounded-xl">
        <div>
          <p class="font-semibold text-sm">Total price</p>
          <p class="font-bold text-lg">${product.defaultVariant.price}</p>
        </div>
        <button          
          class="bg-background2 px-4 rounded-xl"
        >
          Add to Cart
        </button>
      </div>
      <div>
        <div class="flex flex-col gap-3 my-10 lg:w-9/12 w-full mx-auto z-10"></div>
            <div class="flex flex-col justify-between">
                <div class="my-3 text-text md:px-20">
                {#if product.body.content}
                    {#each product.body.content.paragraphs as paragraph}
                        <h2 class="font-semibold text-2xl mb-4">{paragraph.title?.text}</h2>
                        <div>{@html paragraph.body.html}</div>
                        
                        {#if paragraph.images}
                        <div class="my-5">
                            {#each paragraph.images as image}
                                <img width="200px" class="rounded-xl overflow-hidden" alt={image.altText} src={image.url} />
                            {/each}
                        </div>
                        {/if}        
                    {/each}
                {/if}
                </div>
            </div>
            <div class="flex lg:flex-row flex-col justify-between text-text my-20">
                {#if product.nutrition.content}
                    {#each product.nutrition.content.sections as section}
                        <div>
                            <h3 class="font-bold text-2xl py-2">{section.title}</h3>
                            <p class="italic">per 50 g</p>
                        </div>
                        <div class="lg:w-7/12 w-full">
                        {#each section.properties as prop}
                        <div class="flex justify-between my-3 even:bg-grey px-5 py-2">
                            <p>{prop.key}</p>
                            <p>{prop.value}</p>
                        </div>
                        {/each}
                        </div>
                    {/each}
                {/if}        
            </div>
            <p class="text-text mb-4 font-semibold">Related do(u)nuts</p>
      </div>
        RELATED PRODUCTS HERE
        
    </div>
</div>

    <hr />
<pre>
    {JSON.stringify($ProductData, null, 2)}
</pre>
