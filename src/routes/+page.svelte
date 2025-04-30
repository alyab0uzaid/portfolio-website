<script lang="ts">
	import * as Card from "$lib/components/ui/card";
	import { Badge } from "$lib/components/ui/badge";
	import { Button } from "$lib/components/ui/button";
	import Icon from "@iconify/svelte";
	import { toggleMode } from "mode-watcher";
	import BlurFade from "$lib/BlurFade.svelte";
	import AnimatedGradientText from "$lib/AnimatedGradientText.svelte";
	import { cn } from "$lib/utils";
	import Dock from "$lib/components/ui/dock/Dock.svelte";
	import DockIcon from "$lib/components/ui/dock/Dockicon.svelte"
  
	// projects data
	const projects = [
		{
		title: "RabbitHole Chrome Extension",
		date: "March 2025",
		description:
		  "A Chrome extension that integrates Wikipedia content and visualizes your exploration journey across webpages.",
		video: "/rabbitholetest.mp4",
		badges: ["JavaScript", "HTML", "CSS", "GoJS","Chrome Extension API", "Wikipedia API"],
		website: "",
		showWebsite: false,
		source: "https://github.com/alyab0uzaid/RabbitHole",
		showSource: true,
		caseStudy: "/casestudies/rabbithole"
	  },
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
  <div class="flex justify-center items-start min-h-screen">
	
	<!-- Single Column Wrapper -->
	<div class="w-full max-w-2xl px-6 sm:px-6 py-20">

	  <!-- Header Section -->
	  <BlurFade delay={0.25}>
	  <header class="flex items-center justify-between mb-16">
		<!-- Profile Picture and Name -->
		<div class="flex items-center" >
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
	  
    <!-- Right Side: Social Icons + Dark Mode -->
    <div class="flex items-center gap-3">
		
	<!-- Social Icons (Hidden on Mobile) -->
	<div class="hidden sm:flex space-x-3">
      <!-- GitHub -->
      <a
        href="https://github.com/alyab0uzaid"
        target="_blank"
        rel="noopener noreferrer"
        class="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition"
      >
        <Icon icon="mdi:github" class="h-6 w-6" />
      </a>

      <!-- LinkedIn -->
      <a
        href="https://www.linkedin.com/in/alyabouzaid/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-neutral-700 dark:text-neutral-300 hover:text-blue dark:hover:text-blue-400 transition"
      >
        <Icon icon="mdi:linkedin" class="h-6 w-6" />
      </a>

      <!-- Youtube -->
      <a
        href="https://www.youtube.com/@AlyAbouZaid"
        target="_blank"
        rel="noopener noreferrer"
        class="text-neutral-700 dark:text-neutral-300 hover:text-red dark:hover:text-blue-300 transition"
      >
        <Icon icon="mdi:youtube" class="h-6 w-6" />
      </a>

		<!-- Vertical Separator -->
		<div class="h-6 w-px bg-neutral-400 dark:bg-neutral-600 mx-2"></div>
	  </div>

      <!-- Dark Mode Button -->
      <Button on:click={toggleMode} variant="ghost" size="icon">
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
    </div>
		

		
	  </header>
	  </BlurFade>
	  
  
	  <!-- About Section -->
	  <BlurFade delay={0.35}>
	  <section id="about" class="mb-16 fadeInUp-animation">
		<h2 class="text-xl font-semibold mb-2">About Me</h2>
			<p class="text-neutral-500 leading-relaxed">
				Hi 👋 I'm Aly Abou-Zaid! Ever since I stumbled upon my first programming tutorial, I've been captivated by the endless possibilities of building things that not only work but also bring joy to people. Web development has been my gateway to merging my technical skills with my love for storytelling and design.
			</p>
		  
			<p class="mt-4 text-neutral-500 leading-relaxed">
				I also really like
				<a href="/sunsets">
				<AnimatedGradientText class="relative inline-flex">
					
					<span
						class={cn(
						`inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
						)}
					>
						sunsets
					</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
						><path d="m9 18 6-6-6-6" /></svg
					>
				</AnimatedGradientText>
				</a>
			  </p>
			  
	  </section>
	  </BlurFade>

	  <!-- Skill section -->
	  <BlurFade delay={0.45}>
	  <section id="skills" class="mb-16 fadeInUp-animation">
		<h2 class="text-xl font-semibold mb-2">Skills</h2>
		<Badge class="mb-1 dark:bg-neutral-300">HTML</Badge>
		<Badge class="mb-1 dark:bg-neutral-300" >CSS</Badge>
		<Badge class="mb-1 dark:bg-neutral-300">JavaScript</Badge>
		<Badge class="mb-1 dark:bg-neutral-300">SvelteKit</Badge>
		<Badge class="mb-1 dark:bg-neutral-300">Illustrator</Badge>
		<Badge class="mb-1 dark:bg-neutral-300">Premier Pro</Badge>
		<Badge class="mb-1 dark:bg-neutral-300">After Effects</Badge>
		<Badge class="mb-1 dark:bg-neutral-300">Photoshop</Badge>
		<Badge class="mb-1 dark:bg-neutral-300">Figma</Badge>
		<Badge class="mb-1 dark:bg-neutral-300">Webflow</Badge>
		<Badge class="mb-1 dark:bg-neutral-300">Eating</Badge>
	  </section>
	  </BlurFade>
	  
	  <!-- Projects Section -->
	  <BlurFade delay={0.55}>
	  <section id="projects" class="fadeInUp-animation">
		<h2 class="text-xl font-semibold mb-2">Projects</h2>
  
		<!-- Cards Grid -->
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">

			{#each projects as project}
			<a href={project.caseStudy}>
			  <Card.Root class="flex flex-col h-96  border hover:shadow-lg hover:scale-[1.02] transition-all duration-200 ease-in-out  ">
				<!-- Video or Image -->
				<Card.Content class="p-0">
				  {#if project.video}
					<!-- Video Container -->
					<video
					  src={project.video}
					  autoplay
					  loop
					  muted
					  playsinline
					  class="rounded-t-xl h-40 w-full object-cover"
					></video>
				  {:else}
					<!-- Static Image -->
					<img
					  src={project.image}
					  alt="{project.title}"
					  class="rounded-t-xl h-40 w-full object-cover"
					/>
				  {/if}
				</Card.Content>
		  
				<!-- Title and Description -->
				<Card.Header class="flex-grow p-3 pt-2">
				  <Card.Title>{project.title}</Card.Title>
				  <Card.Description class="text-xs text-black dark:text-white">
					{project.date}
				  </Card.Description>
				  <Card.Description class="text-xs">{project.description}</Card.Description>
				</Card.Header>
		  
				<!-- Badges and Footer -->
				<div class="mt-auto p-3">
				  <!-- Badges -->
				  <div class="mb-3 text-neutral-900 dark:text-neutral-100 text-xs font-medium flex gap-2 flex-wrap">
					{#each project.badges as badge}
					  <span class="bg-neutral-100 dark:bg-neutral-900 rounded p-1">
						{badge}
					  </span>
					{/each}
				  </div>
		  
				  <!-- Footer with Buttons -->
				  <div class="flex gap-2 justify-start">
					{#if project.showWebsite}
					  <button
						class="text-xs flex items-center px-3 py-1 bg-black hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-300 text-white dark:text-black rounded-md shadow-sm transition duration-200"
						on:click={() => window.open(project.website, "_blank")}
					  >
						<Icon icon="proicons:globe" class="mr-2 h-4 w-4" />
						Website
					  </button>
					{/if}
					{#if project.showSource}
					  <button
						class="text-xs flex items-center px-3 py-1 bg-black hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-300 text-white dark:text-black rounded-md shadow-sm transition duration-200"
						on:click={() => window.open(project.source, "_blank")}
					  >
						<Icon icon="mdi:github" class="mr-2 h-4 w-4" />
						Source
					  </button>
					{/if}
				  </div>
				</div>
			  </Card.Root>
			</a>
			{/each}

		  </div>  
		
	  </section>
	  </BlurFade>
	</div>
  </div>