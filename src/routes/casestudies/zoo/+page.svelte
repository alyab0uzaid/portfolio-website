<script lang="ts">
	import * as Card from "$lib/components/ui/card";
	import { Badge } from "$lib/components/ui/badge";
	import { Button } from "$lib/components/ui/button";
	import Icon from "@iconify/svelte";
	import { toggleMode } from "mode-watcher";
	import BlurFade from "$lib/BlurFade.svelte";
	import AnimatedGradientText from "$lib/AnimatedGradientText.svelte";
	import { cn } from "$lib/utils";

	// Development case studies in order
	const devCaseStudies = [
		"/casestudies/rabbithole",
		"/casestudies/prepguide",
		"/casestudies/termify",
		"/casestudies/zoo"
	];

	// Get current index and calculate prev/next
	const currentPath = "/casestudies/zoo";
	const currentIndex = devCaseStudies.indexOf(currentPath);
	const prevCaseStudy = currentIndex > 0 ? devCaseStudies[currentIndex - 1] : null;
	const nextCaseStudy = currentIndex < devCaseStudies.length - 1 ? devCaseStudies[currentIndex + 1] : null;

	const project = {
		title: "Endangered Species Visualization",
		date: "April 2024",
		description: "An interactive website that maps endangered species at the Saint Louis Zoo.",
		image: "/images/zooss.png",
		badges: ["HTML", "CSS", "Leaflet.js"],
		website: "https://stlzoovisualization.pages.dev",
		showWebsite: true,
		problem: "Visitors to the Saint Louis Zoo often struggle to understand the conservation status and locations of endangered species. Traditional static maps and information boards don't provide an engaging way to learn about these important topics.",
		solution: "An interactive web application that visualizes endangered species on a map of the Saint Louis Zoo, providing visitors with an engaging way to learn about conservation efforts and species locations.",
		features: [
			"Interactive map of the Saint Louis Zoo",
			"Visual representation of endangered species locations",
			"Detailed information about each species",
			"Conservation status indicators",
			"Responsive design for mobile and desktop"
		],
		challenges: [
			"Creating an accurate map of the zoo layout",
			"Integrating real-time data about species locations",
			"Designing an intuitive user interface",
			"Ensuring accessibility for all visitors"
		],
		technologies: [
			{
				name: "HTML",
				description: "Structure and content of the web application"
			},
			{
				name: "CSS",
				description: "Styling and visual design"
			},
			{
				name: "Leaflet.js",
				description: "Interactive map functionality"
			}
		]
	};
</script>

<!-- Main Container -->
<div class="flex justify-center items-start min-h-screen">
	<!-- Single Column Wrapper -->
	<div class="w-full max-w-4xl px-6 sm:px-6 py-20">
		<!-- Navigation -->
		<BlurFade delay={0.25}>
			<div class="flex justify-between items-center mb-8">
				<a href="/" class="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition">
					<Icon icon="mdi:arrow-left" class="h-6 w-6 inline-block mr-2" />
					Back to Home
				</a>
				<div class="flex gap-6">
					{#if prevCaseStudy}
						<a href={prevCaseStudy} class="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition flex items-center">
							<Icon icon="mdi:arrow-left" class="h-5 w-5 mr-1" />
							<span>prev</span>
						</a>
					{/if}
					{#if nextCaseStudy}
						<a href={nextCaseStudy} class="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition flex items-center">
							<span>next</span>
							<Icon icon="mdi:arrow-right" class="h-5 w-5 ml-1" />
						</a>
					{/if}
				</div>
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