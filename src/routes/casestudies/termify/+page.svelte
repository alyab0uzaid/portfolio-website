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
		title: "Personal Spotify Terminal Interface",
		date: "June 2024",
		description: "Termify provides a unique tactile experience for Spotify users, where they can retrieve top tracks, save playlists, and log out from the terminal interface.",
		video: "/termifydemov6.mp4",
		badges: ["Node.js", "Express", "Spotify API", "Pug"],
		source: "https://github.com/alyab0uzaid/termify",
		showSource: true,
		problem: "Many developers and terminal enthusiasts want a more efficient way to control their Spotify playback without leaving their development environment. Traditional Spotify interfaces can be distracting and require switching contexts.",
		solution: "Termify is a terminal-based Spotify interface that allows users to control their music playback, view their top tracks, and manage playlists directly from the command line. It provides a seamless experience for developers who spend most of their time in the terminal.",
		features: [
			"Terminal-based Spotify control interface",
			"View and play top tracks",
			"Create and manage playlists",
			"Search and play songs",
			"User authentication and session management"
		],
		challenges: [
			"Implementing Spotify API authentication in a terminal environment",
			"Creating an intuitive command-line interface",
			"Handling real-time playback controls",
			"Managing user sessions and tokens"
		],
		technologies: [
			{
				name: "Node.js",
				description: "Runtime environment for the application"
			},
			{
				name: "Express",
				description: "Web framework for handling API requests"
			},
			{
				name: "Spotify API",
				description: "For music playback and user data"
			},
			{
				name: "Pug",
				description: "Template engine for rendering views"
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
					<video
						src={project.video}
						autoplay
						loop
						muted
						playsinline
						class="w-full h-auto"
					></video>
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