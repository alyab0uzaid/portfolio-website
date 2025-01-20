<script>
    const sunsetPics = [
      { src: "/images/sunsets/sunset1.jpg", alt: "Sunset 1", colSpan: "col-span-2", rowSpan: "row-span-1" },
      { src: "static/images/sunsets/sunset2.jpg", alt: "Sunset 2", colSpan: "col-span-1", rowSpan: "row-span-1" },
      { src: "static/images/sunsets/sunset5.jpg", alt: "Sunset 5", colSpan: "col-span-1", rowSpan: "row-span-1" },
      { src: "static/images/sunsets/sunset3.jpg", alt: "Sunset 3", colSpan: "col-span-2", rowSpan: "row-span-2" },
      { src: "static/images/sunsets/sunset4.jpg", alt: "Sunset 4", colSpan: "col-span-1", rowSpan: "row-span-1" },

    ];

    import BlurFade from "$lib/BlurFade.svelte";
  </script>


  <div class="flex justify-center items-start min-h-screen">
    <!-- Single Column Wrapper -->
    <div class="w-full max-w-2xl px-6 sm:px-8 py-20">
        <section id="about" class="mb-8 fadeInUp-animation">
            <h2 class="text-4xl font-semibold mb-2">Aly's Sunset Archive</h2>
                <p class="text-neutral-500 leading-relaxed">
                    Sunsets are a reminder of nature’s fleeting beauty. Here’s a collection of my favorite ones I’ve snapped on my phone over the years.
                </p>
          </section>
    
  
      <!-- Bento Grid -->
      <div class="grid grid-cols-3 gap-4 fadeInUp-animation">
        {#each sunsetPics as pic}
          <div class={`relative overflow-hidden rounded-lg shadow hover:shadow-lg transition ${pic.colSpan} ${pic.rowSpan}`}>
            <img
              src={pic.src}
              alt={pic.alt}
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        {/each}
      </div>
    </div>
  </div>
  