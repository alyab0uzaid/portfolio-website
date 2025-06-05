<script lang="ts">
import * as Card from "$lib/components/ui/card";
import { Button } from "$lib/components/ui/button";
import Icon from "@iconify/svelte";
import BlurFade from "$lib/BlurFade.svelte";

const project = {
	title: "Zain Motors Stat Reels",
	date: "2024",
	description: "Short-form vertical videos showcasing car listings with fast specs and visuals. I created TikTok-style reels for Zain Motors, combining sleek footage, bold text animations, and quickfire stats (price, horsepower, MPG, etc.) to make used car listings feel modern and scroll-stopping.",
	image: "/images/zainmotors.png",
	website: "#",
	showWebsite: false,
	problem: "How can we make used car listings more engaging and appealing to younger audiences on social media?",
	solution: "Developed a series of TikTok-style reels that transform traditional car listings into dynamic, attention-grabbing content that highlights key specifications and features in an engaging format.",
	features: [
		"Vertical video format",
		"Dynamic text animations",
		"Quick-fire car specifications",
		"Modern visual style",
		"Social media optimization"
	],
	challenges: [
		"Condensing car information into short, engaging clips",
		"Creating consistent branding across multiple reels",
		"Balancing information density with visual appeal",
		"Optimizing for different social media platforms"
	],
	technologies: [
		{ name: "Premiere Pro", description: "Video editing and timeline management" },
		{ name: "After Effects", description: "Motion graphics and text animations" },
		{ name: "Mobile Camera", description: "Vertical video capture" },
		{ name: "Social Media", description: "Platform-specific optimization" }
	]
};
</script>

<div class="flex justify-center items-start min-h-screen">
	<div class="w-full max-w-4xl px-6 sm:px-6 py-20">
		<BlurFade delay={0.25}>
			<div class="mb-8">
				<a href="/" class="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition">
					<Icon icon="mdi:arrow-left" class="h-6 w-6 inline-block mr-2" />
					Back to Home
				</a>
			</div>
		</BlurFade>

		<BlurFade delay={0.35}>
			<header class="mb-12">
				<h1 class="text-3xl font-bold mb-4">{project.title}</h1>
				<p class="text-neutral-500 mb-6">{project.description}</p>
				<div class="flex gap-4 mb-8">
					{#if project.showWebsite}
						<a href={project.website} target="_blank" rel="noopener noreferrer">
							<Button variant="outline" class="gap-2">
								<Icon icon="proicons:globe" class="h-5 w-5" />
								View Project
							</Button>
						</a>
					{/if}
				</div>
			</header>
		</BlurFade>

		<BlurFade delay={0.45}>
			<div class="space-y-12">
				<!-- Project Video -->
				<div class="w-full max-w-[300px] mx-auto mb-12 rounded-xl overflow-hidden shadow-lg">
					<video
						src="/zainreel.mp4"
						controls
						autoplay
						loop
						muted
						playsinline
						class="w-full"
						preload="auto"
					></video>
				</div>

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