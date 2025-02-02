<script lang="ts">
	import * as Card from "$lib/components/ui/card";
	import { Badge } from "$lib/components/ui/badge";
	import { Button } from "$lib/components/ui/button";
	import Icon from "@iconify/svelte";
	import { toggleMode } from "mode-watcher";
	import BlurFade from "$lib/BlurFade.svelte";
	import AnimatedGradientText from "$lib/AnimatedGradientText.svelte";
	import { cn } from "$lib/utils";

    const projects = [
	  {
		title: "PrepGuide.org",
		date: "May 2024",
		description:
		  "PrepGuide is an online platform I co-founded with my brother to provide free resources for SAT preparation.",
		video: "/PrepGuideDemov2.mov",
		badges: ["Webflow", "CMS"],
		website: "https://www.prepguide.org/",
		showWebsite: true,
		source: "",
		showSource: false,
		caseStudy: "/casestudies/prepguide"
	  },
	  {
		title: "Personal Spotify Terminal Interface",
		date: "June 2024",
		description:
		  "Termify provides a unique tactile experience for Spotify users, where they can retrieve top tracks, save playlists, and log out from the terminal interface.",
		video: "/termifydemov6.mp4",
		badges: ["Node.js", "Express", "Spotify API", "Pug"],
		website: "#",
		showWebsite: false,
		source: "https://github.com/alyab0uzaid/termify",
		showSource: true,
		caseStudy: "/casestudies/termify"
	  },
	  {
		title: "Endangered Species Visualization",
		date: "April 2024",
		description:
		  "An interactive website that maps endangered species at the Saint Louis Zoo.",
		image: "/images/zooss.png",
		badges: ["HTML", "CSS", "Leaflet.js"],
		website: "https://stlzoovisualization.pages.dev",
		showWebsite: true,
		source: "#",
		showSource: true,
		caseStudy: "/casestudies/zoo"
	  },
	  {
		title: "Portfolio Website",
		date: "April 2024",
		description: "This website!",
		image: "/images/portfoliodemov3.png",
		badges: ["SvelteKit", "TailwindCSS", "Cloudflare Pages"],
		website: "https://alyabouzaid.com",
		showWebsite: true,
		source: "https://github.com/alyab0uzaid/portfolio-website",
		showSource: true,
		caseStudy: "/casestudies/portfolio"
	  },
	];
  </script>

<!-- Main Container -->
<!-- <div class="flex justify-center items-start min-h-screen"> -->
	<!-- Single Column Wrapper -->
	<!-- <div class="w-full max-w-2xl px-6 sm:px-6 py-20"> -->
	  <!-- Header Section -->
	  <!-- <BlurFade delay={0.25}>
        <header class="flex items-center mb-8"> -->
          <!-- Profile Picture and Name -->
          <!-- <div class="flex items-center" >
            <div class="">
              <h1 class="text-3xl font-bold">PrepGuide</h1>

            </div>
          </div>
        </header>
        </BlurFade> -->

        	  <!-- About Section -->
	  <!-- <BlurFade delay={0.35}>
        <section id="about" class="mb-16 fadeInUp-animation">
              <p class="text-neutral-500 leading-relaxed">
                PrepGuide is an online platform I co-founded with my brother to provide free resources for SAT preparation.
              </p>
            
        </section>
        </BlurFade>

    </div>
</div> -->


<!-- Main Container -->
<div class="flex justify-center items-start min-h-screen">
	<!-- Single Column Wrapper -->
	<div class="w-full max-w-2xl px-6 sm:px-6 py-20">
	  <!-- Header Section -->
	  <BlurFade delay={0.25}>
        <header class="flex items-center mb-8">
          <!-- Profile Picture and Name -->
          <div class="flex items-center" >
            <div class="">
              <h1 class="text-2xl">Coming Soon...</h1>

            </div>
          </div>
        </header>
        </BlurFade>
    </div>
</div>