<script lang="ts">
	import * as Card from "$lib/components/ui/card";
	import { Badge } from "$lib/components/ui/badge";
	import { Button } from "$lib/components/ui/button";
	import Icon from "@iconify/svelte";
	import { toggleMode } from "mode-watcher";
	import BlurFade from "$lib/BlurFade.svelte";
	import AnimatedGradientText from "$lib/AnimatedGradientText.svelte";
	import { cn } from "$lib/utils";

	const project = {
		title: "Portfolio Website",
		date: "April 2024",
		description: "A modern, responsive portfolio website showcasing my projects and skills.",
		image: "/images/portfoliodemov3.png",
		badges: ["SvelteKit", "TailwindCSS", "Cloudflare Pages"],
		website: "https://alyabouzaid.com",
		showWebsite: true,
		source: "https://github.com/alyab0uzaid/portfolio-website",
		showSource: true,
		problem: "I needed a modern, responsive portfolio website that effectively showcases my projects and skills while providing a great user experience. The website needed to be fast, accessible, and easy to maintain.",
		solution: "Built a portfolio website using SvelteKit and TailwindCSS, featuring a clean design, smooth animations, and detailed case studies for each project. The website is deployed on Cloudflare Pages for optimal performance.",
		features: [
			"Responsive design for all devices",
			"Dark mode support",
			"Smooth animations and transitions",
			"Detailed project case studies",
			"Interactive project cards",
			"Performance optimized"
		],
		challenges: [
			"Creating a consistent design system",
			"Implementing smooth animations without performance impact",
			"Ensuring accessibility across all components",
			"Optimizing for fast loading times",
			"Maintaining a clean and organized codebase"
		],
		technologies: [
			{
				name: "SvelteKit",
				description: "Framework for building the website"
			},
			{
				name: "TailwindCSS",
				description: "Utility-first CSS framework for styling"
			},
			{
				name: "Cloudflare Pages",
				description: "For deployment and hosting"
			}
		]
	};
</script>

<!-- Main Container -->
<div class="flex justify-center items-start min-h-screen">
	<!-- Single Column Wrapper -->
	<div class="w-full max-w-4xl px-6 sm:px-6 py-20">
		<!-- Back Button -->
		<BlurFade delay={0.25}>
			<div class="mb-8">
				<a href="/" class="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition">
					<Icon icon="mdi:arrow-left" class="h-6 w-6 inline-block mr-2" />
					Back to Home
				</a>
			</div>
		</BlurFade>

		<!-- Project Header -->
		<BlurFade delay={0.35}>
			<header class="mb-12">
				<h1 class="text-3xl font-bold mb-4">{project.title}</h1>
				<p class="text-neutral-500 mb-6">{project.description}</p>
				
				<!-- Project Links -->
				<div class="flex gap-4 mb-8">
					{#if project.showWebsite}
						<a href={project.website} target="_blank" rel="noopener noreferrer">
							<Button variant="outline" class="gap-2">
								<Icon icon="proicons:globe" class="h-5 w-5" />
								Visit Website
							</Button>
						</a>
					{/if}
					{#if project.showSource}
						<a href={project.source} target="_blank" rel="noopener noreferrer">
							<Button variant="outline" class="gap-2">
								<Icon icon="mdi:github" class="h-5 w-5" />
								View Source
							</Button>
						</a>
					{/if}
				</div>

				<!-- Project Image -->
				<div class="rounded-xl overflow-hidden shadow-lg">
					<img
						src={project.image}
						alt={project.title}
						class="w-full h-auto"
					/>
				</div>
			</header>
		</BlurFade>

		<!-- Project Details -->
		<BlurFade delay={0.45}>
			<div class="space-y-12">
				<!-- Problem & Solution -->
				<section>
					<h2 class="text-2xl font-semibold mb-4">Problem & Solution</h2>
					<div class="space-y-4">
						<div>
							<h3 class="text-lg font-medium mb-2">The Problem</h3>
							<p class="text-neutral-500">{project.problem}</p>
						</div>
						<div>
							<h3 class="text-lg font-medium mb-2">The Solution</h3>
							<p class="text-neutral-500">{project.solution}</p>
						</div>
					</div>
				</section>

				<!-- Key Features -->
				<section>
					<h2 class="text-2xl font-semibold mb-4">Key Features</h2>
					<ul class="list-disc list-inside space-y-2 text-neutral-500">
						{#each project.features as feature}
							<li>{feature}</li>
						{/each}
					</ul>
				</section>

				<!-- Challenges -->
				<section>
					<h2 class="text-2xl font-semibold mb-4">Challenges</h2>
					<ul class="list-disc list-inside space-y-2 text-neutral-500">
						{#each project.challenges as challenge}
							<li>{challenge}</li>
						{/each}
					</ul>
				</section>

				<!-- Technologies -->
				<section>
					<h2 class="text-2xl font-semibold mb-4">Technologies Used</h2>
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
						{#each project.technologies as tech}
							<div class="p-4 border rounded-lg">
								<h3 class="font-medium mb-2">{tech.name}</h3>
								<p class="text-neutral-500">{tech.description}</p>
							</div>
						{/each}
					</div>
				</section>
			</div>
		</BlurFade>
	</div>
</div>