<script lang="ts">
	import * as Card from "$lib/components/ui/card";
	import { Button } from "$lib/components/ui/button";
	import { Badge } from "$lib/components/ui/badge";
	import Icon from "@iconify/svelte";
	import BlurFade from "$lib/BlurFade.svelte";
	import { cn } from "$lib/utils";
	import AnimatedGradientText from "$lib/AnimatedGradientText.svelte";
	import { toggleMode } from "mode-watcher";

	// Creative case studies in order
	const creativeCaseStudies = [
		"/casestudies/zainmotors",
		"/casestudies/thankful",
		"/casestudies/newsbreak",
		"/casestudies/larkinbarrett"
	];

	// Get current index and calculate prev/next
	const currentPath = "/casestudies/larkinbarrett";
	const currentIndex = creativeCaseStudies.indexOf(currentPath);
	const prevCaseStudy = currentIndex > 0 ? creativeCaseStudies[currentIndex - 1] : null;
	const nextCaseStudy = currentIndex < creativeCaseStudies.length - 1 ? creativeCaseStudies[currentIndex + 1] : null;

	const project = {
		title: "Larkin & Knapp Campaign Video",
		date: "2023",
		description: `This video was created to support the student body president and vice president campaign of Larkin and Knapp at SIUE. Inspired by Apple's Don't Blink ad, the piece was built around rapid-fire text, bold transitions, and energetic pacing, designed to grab attention, say a lot in a little time, and make the message stick.\n\nIt was also my first time using After Effects, where I handled all the motion graphics and timing to keep the flow tight and the visuals sharp.\n\nThe ad was used throughout their campaign, and Larkin and Knapp went on to win the election.`,
		image: "/images/larkinbarrett.png",
		website: "https://youtu.be/6GFKxsfkVMc",
		showWebsite: false,
		badges: ["Video Production", "Motion Graphics", "Editing", "Typography", "After Effects"],
		features: [
			"Conceptualized the format and overall style",
			"Edited and animated the full video using After Effects",
			"Designed the typography and transitions to mirror the rhythm of Don't Blink",
			"Coordinated messaging and tone with the candidates' platform"
		],
		highlights: [
			"First full project built in After Effects",
			"Campaign won the student body election",
			"Inspired by professional ad work but personalized for student government"
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
				<p class="text-neutral-500 mb-6 whitespace-pre-line">{project.description}</p>
				<!-- Project Tags -->
				<div class="flex flex-wrap gap-2 mb-8">
					{#each project.badges as badge}
						<Badge variant="secondary">{badge}</Badge>
					{/each}
				</div>
			</header>
		</BlurFade>

		<BlurFade delay={0.45}>
			<div class="space-y-12">
				<!-- YouTube Embed -->
				<div class="rounded-xl overflow-hidden shadow-lg aspect-video">
					<iframe
						src="https://www.youtube.com/embed/6GFKxsfkVMc"
						title="Larkin & Knapp Campaign Video"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
						class="w-full h-full"
					></iframe>
				</div>

				<!-- My Role -->
				<section>
					<h2 class="text-2xl font-semibold mb-4">My Role</h2>
					<ul class="list-disc list-inside space-y-2 text-neutral-500">
						{#each project.features as feature}
							<li>{feature}</li>
						{/each}
					</ul>
				</section>

				<!-- Highlights -->
				<section>
					<h2 class="text-2xl font-semibold mb-4">Highlights</h2>
					<ul class="list-disc list-inside space-y-2 text-neutral-500">
						{#each project.highlights as highlight}
							<li>{highlight}</li>
						{/each}
					</ul>
				</section>
			</div>
		</BlurFade>
	</div>
</div> 