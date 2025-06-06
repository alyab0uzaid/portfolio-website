<script lang="ts">
import * as Card from "$lib/components/ui/card";
import { Button } from "$lib/components/ui/button";
import Icon from "@iconify/svelte";
import BlurFade from "$lib/BlurFade.svelte";
import { Badge } from "$lib/components/ui/badge";
import { toggleMode } from "mode-watcher";
import AnimatedGradientText from "$lib/AnimatedGradientText.svelte";
import { cn } from "$lib/utils";

// Creative case studies in order
const creativeCaseStudies = [
	"/casestudies/zainmotors",
	"/casestudies/thankful",
	"/casestudies/newsbreak",
	"/casestudies/larkinbarrett"
];

// Get current index and calculate prev/next
const currentPath = "/casestudies/thankful";
const currentIndex = creativeCaseStudies.indexOf(currentPath);
const prevCaseStudy = currentIndex > 0 ? creativeCaseStudies[currentIndex - 1] : null;
const nextCaseStudy = currentIndex < creativeCaseStudies.length - 1 ? creativeCaseStudies[currentIndex + 1] : null;

const project = {
	title: "What Are You Thankful For?",
	date: "November 2023",
	description: "A feel-good Thanksgiving street interview video capturing students' responses about what they're thankful for. Filmed at SIUE with quick cuts and cozy campus vibes.",
	image: "https://img.youtube.com/vi/Q1fgyZ5Dl0A/hqdefault.jpg",
	website: "https://youtu.be/Q1fgyZ5Dl0A",
	showWebsite: true,
	problem: "How can we capture authentic, positive moments from students on campus and share them in a way that feels genuine and uplifting?",
	solution: "Filmed spontaneous interviews with students, edited for quick pacing and cozy vibes, and published as a short, shareable video.",
	features: [
		"Street interviews",
		"Quick-cut editing",
		"Authentic student responses",
		"Seasonal/holiday theme"
	],
	challenges: [
		"Getting students comfortable on camera",
		"Editing for both brevity and warmth",
		"Capturing good audio outdoors"
	],
	technologies: [
		{ name: "Premiere Pro", description: "Editing and color grading" },
		{ name: "DSLR Camera", description: "Filming interviews" }
	]
};
</script>

<div class="flex justify-center items-start min-h-screen">
	<div class="w-full max-w-4xl px-6 sm:px-6 py-20">
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

		<BlurFade delay={0.35}>
			<header class="mb-12">
				<h1 class="text-3xl font-bold mb-4">{project.title}</h1>
				<p class="text-neutral-500 mb-6">{project.description}</p>
				<div class="flex gap-4 mb-8">
					{#if project.showWebsite}
						<a href={project.website} target="_blank" rel="noopener noreferrer">
							<Button variant="outline" class="gap-2">
								<Icon icon="proicons:globe" class="h-5 w-5" />
								Watch Video
							</Button>
						</a>
					{/if}
				</div>
				<!-- YouTube Embed -->
				<div class="rounded-xl overflow-hidden shadow-lg aspect-video">
					<iframe
						src="https://www.youtube.com/embed/Q1fgyZ5Dl0A"
						title="What Are You Thankful For?"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
						class="w-full h-full"
					></iframe>
				</div>
			</header>
		</BlurFade>

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