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
	const currentPath = "/casestudies/rabbithole";
	const currentIndex = devCaseStudies.indexOf(currentPath);
	const prevCaseStudy = currentIndex > 0 ? devCaseStudies[currentIndex - 1] : null;
	const nextCaseStudy = currentIndex < devCaseStudies.length - 1 ? devCaseStudies[currentIndex + 1] : null;

	const project = {
		title: "RabbitHole Chrome Extension",
		date: "March 2025",
		description: "Wikipedia, without the chaos. A Chrome extension that transforms Wikipedia exploration into a visual journey, showing you where you've been, how topics connect, and what to explore next.",
		video: "eXI9RPzCBlo",
		badges: ["JavaScript", "HTML", "CSS", "Chrome Extension API", "Wikipedia API", "Dictionary.com API", "48-Hour Hackathon", "First Place Winner"],
		source: "https://github.com/alyab0uzaid/RabbitHole",
		showSource: true,
		problem: "Wikipedia is great, until you have 25 tabs open and forget how you got from black holes to Byzantine architecture. Most people explore instinctively but lose track of their path. There's no built-in way to follow your thought process or connect ideas across pages.",
		solution: "Make curiosity visible. RabbitHole is a Chrome extension that builds a visual flowchart of your research. Every page, every link you follow, gets mapped, so your Wikipedia spiral becomes a guided, interactive journey. It's like seeing your brain explore in real time.",
		features: [
			"Auto-maps your exploration as you browse",
			"Highlights and previews Wikipedia content without leaving the page",
			"Expands/collapses nodes to keep things clean",
			"Seamlessly overlays on top of any site",
			"Works with Wikipedia and Dictionary.com"
		],
		challenges: [
			"Making the interactive map render correctly as nodes branch",
			"Handling expand/collapse trees without breaking context",
			"Managing real-time updates as users explore",
			"Connecting nodes intelligently",
			"Doing all of this in 2 days without sleep"
		],
		technologies: [
			{
				name: "JavaScript",
				description: "Core logic and frontend behavior"
			},
			{
				name: "Chrome Extension API",
				description: "Injecting UI into webpages and handling tabs"
			},
			{
				name: "Wikipedia API",
				description: "Pulling article data and page content"
			},
			{
				name: "Dictionary.com API",
				description: "Supplementary definitions and context"
			}
		]
	};
</script>

<div class="flex justify-center items-start min-h-screen">
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
				<!-- Hackathon Achievement -->
				<section>
					<h2 class="text-2xl font-semibold mb-4">The Journey</h2>
					<div class="space-y-4">
						<p class="text-neutral-500">
							Built in 48 hours at eHacks, RabbitHole took first place out of 20+ teams. The hackathon pushed us to think fast, code smarter, and execute under pressure.
						</p>
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div class="rounded-xl overflow-hidden shadow-lg">
								<img 
									src="/images/ehacks-winner.JPG" 
									alt="eHacks 2025 First Place Winners" 
									class="w-full h-auto"
								/>
							</div>
							<div class="rounded-xl overflow-hidden shadow-lg">
								<video 
									src="/images/ehacks-timelapse.MOV" 
									class="w-full h-auto"
									playsinline
									autoplay
									loop
									muted
								></video>
							</div>
						</div>
					</div>
				</section>

				<!-- Problem & Solution -->
				<section>
					<h2 class="text-2xl font-semibold mb-4">The Problem</h2>
					<div class="space-y-4">
						<p class="text-neutral-500">{project.problem}</p>
					</div>
				</section>

				<!-- The Idea -->
				<section>
					<h2 class="text-2xl font-semibold mb-4">The Idea</h2>
					<div class="space-y-4">
						<p class="text-neutral-500">{project.solution}</p>
					</div>
				</section>

				<!-- What It Does -->
				<section>
					<h2 class="text-2xl font-semibold mb-4">What It Does</h2>
					<ul class="list-disc list-inside space-y-2 text-neutral-500">
						{#each project.features as feature}
							<li>{feature}</li>
						{/each}
					</ul>
					<p class="mt-4 text-neutral-500">The more you click, the clearer your journey becomes.</p>
				</section>

				<!-- My Role -->
				<section>
					<h2 class="text-2xl font-semibold mb-4">My Role</h2>
					<p class="text-neutral-500 mb-4">
						I designed and built the entire experience alongside my hackathon team — from concept to final code in under 48 hours.
					</p>
					<p class="text-neutral-500 font-medium mb-2">I focused on:</p>
					<ul class="list-disc list-inside space-y-2 text-neutral-500">
						<li>Flowchart rendering logic</li>
						<li>Text highlighting + popups</li>
						<li>DOM injection and cleanup</li>
						<li>Node path logic + state management</li>
						<li>UI design and polish</li>
					</ul>
				</section>

				<!-- Challenges -->
				<section>
					<h2 class="text-2xl font-semibold mb-4">Real Challenges</h2>
					<ul class="list-disc list-inside space-y-2 text-neutral-500">
						{#each project.challenges as challenge}
							<li>{challenge}</li>
						{/each}
					</ul>
				</section>

				<!-- Results -->
				<section>
					<h2 class="text-2xl font-semibold mb-4">What Happened</h2>
					<ul class="list-disc list-inside space-y-2 text-neutral-500">
						<li>Won First Place at eHacks</li>
						<li>Fully working Chrome extension demoed live</li>
						<li>Judges praised its polish, ambition, and usefulness</li>
						<li>Pushed us to think fast, code smarter, and execute under pressure</li>
					</ul>
				</section>

				<!-- Technologies -->
				<section>
					<h2 class="text-2xl font-semibold mb-4">Tech Stack</h2>
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