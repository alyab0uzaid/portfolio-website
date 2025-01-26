<script lang="ts">
    import Icon from "@iconify/svelte";
    import * as Dialog from "$lib/components/ui/dialog";
    import { onMount } from "svelte";
    import BlurFade from "$lib/BlurFade.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import { toggleMode } from "mode-watcher";
  
    // Define a type for sunset objects
    type Sunset = {
      src: string;
      alt: string;
      location: string;
      date: string;
      description: string;
      palette: string[];
      colSpan: string;
      rowSpan: string;
      orientation: string;
    };
  
    // Define the array of sunsets
    const sunsetPics: Sunset[] = [
      {
        src: "/images/sunsets/sunset1.jpg",
        alt: "Sunset 1",
        location: "Edwardsville, IL",
        date: "January 16, 2025",
        description: "A serene evening with hues of orange and pink fading into the horizon.",
        palette: ["#FF7F50", "#FFD700", "#87CEEB", "#FF4500", "#FFFFFF"],
        colSpan: "col-span-2",
        rowSpan: "row-span-1",
        orientation: "landscape",
      },
      {
        src: "/images/sunsets/sunset2.jpg",
        alt: "Sunset 2",
        location: "New York, NY",
        date: "Dec 30, 2024",
        description: "A vibrant sunset over the iconic New York skyline.",
        palette: ["#F08080", "#FFA07A", "#F0E68C", "#FF6347", "#2E8B57"],
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
        orientation: "portrait",
      },
      {
        src: "/images/sunsets/sunset5.jpg",
        alt: "Sunset 5",
        location: "Glen Carbon, IL",
        date: "March 29, 2024",
        description: "Golden light reflecting on a peaceful lake.",
        palette: ["#FF4500", "#FFD700", "#ADFF2F", "#20B2AA", "#1E90FF"],
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
        orientation: "portrait",
      },
      {
        src: "/images/sunsets/sunset3.jpg",
        alt: "Sunset 3",
        location: "Edwardsville, IL",
        date: "November 5, 2024",
        description: "A mesmerizing sunset casting long shadows across the fields.",
        palette: ["#FF6347", "#FFA500", "#FFDAB9", "#40E0D0", "#00008B"],
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
        orientation: "portrait",
      },
      {
        src: "/images/sunsets/sunset4.jpg",
        alt: "Sunset 4",
        location: "Edwardsville, IL",
        date: "August 22, 2024",
        description: "Fiery clouds illuminating the autumn sky.",
        palette: ["#FF8C00", "#FFD700", "#FFB6C1", "#6495ED", "#FFFFFF"],
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
        orientation: "portrait",
        
      },
    ];
  
    // Define the selectedSunset as type Sunset or null
    let selectedSunset: Sunset | null = null;
  </script>
  


  <div class="flex justify-center items-start min-h-screen">
    <div class="w-full max-w-2xl px-6 sm:px-6 py-20">
          	  <!-- Header Section -->
                    <header class="flex items-center mb-16">
                      <!-- Profile Picture and Name -->
                      
                      <div class="flex items-center">
                        <a href="/">
                            <img
                            src="/images/profilepicv2.jpeg"
                            alt="Profile Picture"
                            class="w-20 h-20 rounded-full border-2 border-neutral-300 dark:border-neutral-700"
                            />
                        </a>
                        <div class="ml-4">
                          <h1 class="text-xl font-bold">Aly Abou-Zaid</h1>
                          <p class="text-lg text-neutral-500">Web Developer</p>
                        </div>
                      </div>
                    
                      <!-- Dark Mode Button -->
                      <Button
                        on:click={toggleMode}
                        variant="outline"
                        size="icon"
                        class="ml-auto"
                      >
                        <Icon
                          icon="si:sun-duotone"
                          class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                        />
                        <Icon
                          icon="solar:moon-line-duotone"
                          class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                        />
                        <span class="sr-only">Toggle theme</span>
                      </Button>
                    </header>

      <!-- Title Section -->
      <section id="about" class="mb-8 fadeInUp-animation">
        <h2 class="text-2xl font-semibold mb-2">Aly's Sunset Archive</h2>
        <p class="text-neutral-500 leading-relaxed">
          Sunsets are a reminder of nature’s fleeting beauty. Here’s a collection of my favorite ones I’ve snapped on my phone over the years.
        </p>
      </section>
  
      <!-- Bento Grid -->
      <div
  class="grid grid-cols-2 sm:grid-cols-3 gap-4 fadeInUp-animation"
>
  {#each sunsetPics as pic}
    <div
      tabindex="0"
      role="button"
      class={`relative overflow-hidden rounded-lg shadow hover:shadow-lg transition cursor-pointer ${pic.colSpan} ${pic.rowSpan}`}
      on:click={() => (selectedSunset = pic)}
      on:keydown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          selectedSunset = pic;
        }
      }}
    >
      <!-- Wrapping the image and overlay for scaling -->
      <div class="transition-transform duration-300 ease-in-out hover:scale-105 h-full w-full">
        <!-- Sunset Image -->
        <img
          src={pic.src}
          alt={pic.alt}
          class="w-full h-full object-cover"
        />

        <!-- Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
      </div>

      <!-- Text Content -->
      <div class="absolute bottom-0 left-0 p-4 text-white">
        <!-- Location -->
        <div class="flex items-center space-x-1 text-sm font-mono">
          <Icon icon="fe:location" />
          <span>{pic.location}</span>
        </div>
        <!-- Date -->
        <p class="text-xs font-mono text-neutral-400">{pic.date}</p>
      </div>
    </div>
  {/each}
</div>

      
      
    </div>
  </div>
  
  <!-- Modal -->
  <!-- <Dialog.Root open={!!selectedSunset} onOpenChange={() => (selectedSunset = null)}>
    <Dialog.Content
      class="rounded-lg shadow-xl bg-white dark:bg-neutral-900 flex items-center justify-center p-0"
      style="display: inline-block;"
    >
      {#if selectedSunset}
        <div
          class={`relative rounded-lg overflow-hidden ${
            selectedSunset.orientation === "portrait" ? "h-[450px] w-auto" : "h-auto w-[700px]"
          }`}
        >
          <img
            src={selectedSunset.src}
            alt={selectedSunset.alt}
            class="rounded-lg w-full h-full object-contain"
          />
        </div>
      {/if}
    </Dialog.Content>
  </Dialog.Root>
   -->
  
  

  