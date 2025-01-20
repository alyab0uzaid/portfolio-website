<script>
	import * as Card from "$lib/components/ui/card";
	import { Badge } from "$lib/components/ui/badge";
	import { Button } from "$lib/components/ui/button";
	import Icon from "@iconify/svelte";
  
	// projects data
	const projects = [
    {
      title: "Personal Spotify Terminal Interface",
      date: "June 2024",
	  description: "Termify provides a unique tactile experience for Spotify users, where they can retrieve top tracks, save playlists, and log out from the terminal interface.",
      image: "/images/termifyss.png",
      badges: ["Node.js", "Express", "Spotify API", "Pug"],
      website: "#",
      showWebsite: true,
      source: "#",
      showSource: true,
    },
    {
      title: "PrepGuide.org",
      date: "May 2024",
	  description: "PrepGuide is an online platform I co-founded with my brother to provide free resources for SAT preparation.",
      image: "/images/prepguidess.png",
      badges: ["Webflow", "CMS"],
      website: "#",
      showWebsite: true,
      source: "",
      showSource: false, // Only show Website button
    },
    {
      title: "Endangered Species Visualization",
      date: "April 2024",
	  description: "An interactive website that maps endangered species at the Saint Louis Zoo",
      image: "/images/zooss.png",
      badges: ["HTML", "CSS", "Leaflet.js"],
      website: "",
      showWebsite: false, // Only show Source button
      source: "#",
      showSource: true,
    },
  ];
  </script>
  
  <!-- Main Container -->
  <div class="flex justify-center items-start min-h-screen">
	<!-- Single Column Wrapper -->
	<div class="w-full max-w-2xl px-6 sm:px-6 py-20">
	  <!-- Header Section -->
	  <header class="flex items-center mb-16">
		<!-- Profile Picture -->
		<img
		  src="/images/profilepicv2.jpeg"
		  alt="Profile Picture"
		  class="w-20 h-20 rounded-full border-2 border-neutral-300"
		/>
		<!-- Name and Title -->
		<div class="ml-4">
		  <h1 class="text-xl font-bold">Aly Abou-Zaid</h1>
		  <p class="text-lg text-neutral-500">Web Developer</p>
		</div>
	  </header>
  
	  <!-- About Section -->
	  <section id="about" class="mb-16">
		<h2 class="text-xl font-semibold">About Me</h2>
		<p class="text-neutral-700 leading-relaxed">
		  Hi! I'm Aly Abou-Zaid, a computer science major with a minor in mass communications.
		  I love building things that people enjoy, combining my technical skills in web
		  development with the creativity I developed through video production. Web development
		  allows me to bridge both worlds and create impactful digital experiences.
		</p>
		<p class="text-neutral-700 leading-relaxed mt-4">
		  Outside of coding, I enjoy working on creative projects and exploring new ways to
		  make digital content intuitive and engaging.
		</p>
	  </section>
  
	  <!-- Projects Section -->
	  <section id="projects">
		<h2 class="text-xl font-semibold mb-8">Projects</h2>
  
		<!-- Cards Grid -->
		
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
			{#each projects as project}
			  <Card.Root class=" flex flex-col h-96">
				<!-- Image -->
				<Card.Content class="p-0">
				  <img
					src={project.image}
					alt="{project.title}"
					class="rounded-t-xl h-40 w-full object-cover"
				  />
				</Card.Content>
		  
				<!-- Title and Description -->
				<Card.Header class="flex-grow p-3 pt-2">
				  <Card.Title >{project.title}</Card.Title>
				  <Card.Description class="text-xs text-black">{project.date}</Card.Description>
				  <Card.Description class="text-xs">{project.description}</Card.Description>
				</Card.Header>
		  
				<!-- Badges and Footer -->
				<div class="mt-auto p-3">
				  <!-- Badges -->
				  <div class="mb-3 text-neutral-900 text-xs font-medium flex gap-2 flex-wrap">
					{#each project.badges as badge}
					  <span class="bg-neutral-100 rounded p-1">{badge}</span>
					{/each}
				  </div>
		  
				  <!-- Footer with Buttons -->
				  <div class="flex gap-2 justify-start">
					{#if project.showWebsite}
					<button
					  class="text-xs flex items-center px-3 py-1 bg-black hover:bg-neutral-800 text-white rounded-md shadow-sm transition duration-200"
					  on:click={() => window.open(project.website, "_blank")}
					>
					  <Icon icon="proicons:globe" class="mr-2 h-4 w-4" />
					  Website
					</button>
				  {/if}
				  {#if project.showSource}
					<button
					  class="text-xs flex items-center px-3 py-1 bg-black hover:bg-neutral-800 text-white rounded-md shadow-sm transition duration-200"
					  on:click={() => window.open(project.source, "_blank")}
					>
					  <Icon icon="mdi:github" class="mr-2 h-4 w-4" />
					  Source
					</button>
				  {/if}
				  </div>
				</div>
			  </Card.Root>
			{/each}
		  </div>
		  
		  
		  
		  
	  </section>
	</div>
  </div>