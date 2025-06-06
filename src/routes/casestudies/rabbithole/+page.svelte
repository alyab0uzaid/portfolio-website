<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import Icon from "@iconify/svelte";
	import BlurFade from "$lib/BlurFade.svelte";
	import { cn } from "$lib/utils";

	const project = {
		title: "RabbitHole Chrome Extension",
		date: "March 2025",
		description: "A Chrome extension that integrates Wikipedia content and visualizes your exploration journey across webpages.",
		video: "eXI9RPzCBlo",
		badges: ["JavaScript", "HTML", "CSS", "GoJS", "Chrome Extension API", "Wikipedia API"],
		source: "https://github.com/alyab0uzaid/RabbitHole",
		showSource: true,
		problem: "While browsing the web, users often find themselves going down 'rabbit holes' of information, jumping from one Wikipedia article to another. However, there's no easy way to visualize or track these exploration journeys.",
		solution: "RabbitHole is a Chrome extension that automatically detects Wikipedia articles and creates an interactive visualization of your browsing journey. It helps users understand their information exploration patterns and discover new connections between topics.",
		features: [
			"Real-time visualization of Wikipedia article connections",
			"Interactive graph showing your browsing history",
			"Automatic detection of Wikipedia articles",
			"Customizable visualization settings",
			"Export functionality for sharing your exploration journey"
		],
		challenges: [
			"Implementing real-time graph updates without performance issues",
			"Handling Wikipedia API rate limits",
			"Creating an intuitive user interface for complex data visualization",
			"Ensuring smooth integration with Chrome's extension system"
		],
		technologies: [
			{
				name: "JavaScript",
				description: "Core programming language for the extension"
			},
			{
				name: "GoJS",
				description: "Interactive graph visualization library"
			},
			{
				name: "Chrome Extension API",
				description: "For browser integration and functionality"
			},
			{
				name: "Wikipedia API",
				description: "For fetching article data and connections"
			}
		]
	};
</script>

<div class="flex justify-center items-start min-h-screen">
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
		<BlurFade delay={2.35}>
			<header class="mb-12">
				<h1 class="text-3xl font-bold mb-4">{project.title}</h1>
				<p class="text-neutral-500 mb-6">{project.description}</p>
				
				<!-- Project Links -->
				<div class="flex gap-4 mb-8">
					{#if project.showSource}
						<a href={project.source} target="_blank" rel="noopener noreferrer">
							<Button variant="outline" class="gap-2">
								<Icon icon="mdi:github" class="h-5 w-5" />
								View Source
							</Button>
						</a>
					{/if}
				</div>

				<!-- Project Video -->
				<div class="rounded-xl overflow-hidden shadow-lg">
					<div class="relative w-full aspect-video">
						<iframe
							src="https://www.youtube.com/embed/eXI9RPzCBlo?controls=1&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=eXI9RPzCBlo&autoplay=1&mute=1"
							title="RabbitHole Demo"
							class="absolute top-0 left-0 w-full h-full"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					</div>
				</div>
			</header>
		</BlurFade>

		<!-- Project Details -->
		<BlurFade delay={2.45}>
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