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
	const currentPath = "/casestudies/termify";
	const currentIndex = devCaseStudies.indexOf(currentPath);
	const prevCaseStudy = currentIndex > 0 ? devCaseStudies[currentIndex - 1] : null;
	const nextCaseStudy = currentIndex < devCaseStudies.length - 1 ? devCaseStudies[currentIndex + 1] : null;

	const project = {
		title: "Termify",
		date: "March 2024",
		description: "A terminal-style Spotify app for exploring your music and creating playlists by command.",
		video: "/termifydemov6.mp4",
		badges: ["Express.js", "Pug", "Spotify API"],
		github: "https://github.com/alyab0uzaid/termify",
		showGithub: true,
		problem: "I've always been drawn to interfaces that feel hands-on, like a terminal. I wanted to bring that feel to music. Termify is a web app that connects to your Spotify account and lets you explore your top tracks and build playlists using simple typed commands.",
		features: [
			"Connects to Spotify using OAuth2",
			"Displays your top tracks by timeframe",
			"Lets you create playlists with commands like `save playlist -mymix`",
			"Simulates a command-line interface using Express.js, Pug, and the Spotify Web API",
			"Includes fake terminal prompts, keyboard animations, and a clean, focused layout"
		],
		impact: {
			status: "Coming Soon",
			note: "Waiting on Spotify developer approval to go live"
		},
		technologies: [
			{
				name: "Express.js",
				description: "Backend framework"
			},
			{
				name: "Pug",
				description: "Template engine"
			},
			{
				name: "Spotify Web API",
				description: "Music data & authentication"
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
				<div class="flex gap-6 text-base font-medium">
					{#if prevCaseStudy}
						<a href={prevCaseStudy} class="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition flex items-center">
							<Icon icon="mdi:arrow-left" class="h-5 w-5 mr-1" />
							<span>prev</span>
						</a>
					{/if}
					{#if nextCaseStudy}
						<a href={nextCaseStudy} class="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition flex items-center">
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
					{#if project.showGithub}
						<a href={project.github} target="_blank" rel="noopener noreferrer">
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
				<!-- Problem -->
				<section>
					<h2 class="text-2xl font-semibold mb-4">Why I Built It</h2>
					<p class="text-neutral-500 whitespace-pre-line mb-6">{project.problem}</p>
				</section>

				<!-- What We Built -->
				<section>
					<h2 class="text-2xl font-semibold mb-4">What It Does</h2>
					<ul class="list-none space-y-3 text-neutral-500">
						{#each project.features as feature}
							<li class="flex items-start">
								<span class="mr-2">•</span>
								<span class="[&>code]:font-mono [&>code]:bg-neutral-100 [&>code]:dark:bg-neutral-800 [&>code]:px-2 [&>code]:py-0.5 [&>code]:rounded">{@html feature.replace(/`(.*?)`/g, '<code>$1</code>')}</span>
							</li>
						{/each}
					</ul>
				</section>

				<!-- Impact -->
				<section>
					<h2 class="text-2xl font-semibold mb-4">Try It Out</h2>
					<p class="text-neutral-500 mb-6">
						The app isn't published yet due to Spotify developer restrictions. I'm still waiting on approval to go live. In the meantime, you can visit the GitHub repo and run it locally:
					</p>
					<div class="flex gap-4">
						<a href={project.github} target="_blank" rel="noopener noreferrer">
							<Button variant="outline" class="gap-2">
								<Icon icon="mdi:github" class="h-5 w-5" />
								GitHub Repo
							</Button>
						</a>
					</div>
					<p class="text-neutral-500 mt-4">
						The instructions in the readme will guide you through setup so you can use Termify with your own account.
					</p>
				</section>

				<!-- Tech Stack -->
				<section>
					<h2 class="text-2xl font-semibold mb-4">Tech Stack</h2>
					<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
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