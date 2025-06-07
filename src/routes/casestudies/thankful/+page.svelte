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
	title: "Global Village: Thanksgiving Episode",
	date: "2023",
	description: "This piece was created for the Thanksgiving episode of Global Village, a student-produced series at SIUE that highlights culture and student life through creative video segments.\n\nWhat began as a simple set of on-campus interviews turned into something more playful — thanks to an unexpected moment that reshaped the entire edit. The final result mixes genuine reflections with subtle comedy, giving the piece a rhythm and personality of its own.",
	image: "/images/thankful.png",
	website: "https://www.youtube.com/watch?v=your-video-id",
	showWebsite: false,
	badges: ["Video Production", "Interviewing", "Editing", "Hosting"],
	features: [
		"Directed and conducted all interviews",
		"Handled the editing, pacing, and narrative structure",
		"On-camera host and interviewer",
		"Created the comedic rhythm through selective cuts and callbacks"
	],
	challenges: [
		"Adapting to unexpected moments during filming",
		"Balancing genuine content with comedic elements",
		"Creating a cohesive narrative from multiple interviews",
		"Maintaining engaging pacing throughout the piece"
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
				<p class="text-neutral-500 mb-6 whitespace-pre-line">{project.description}</p>
				
				<!-- Project Tags -->
				<div class="flex flex-wrap gap-2 mb-8">
					{#each project.badges as badge}
						<Badge variant="secondary">{badge}</Badge>
					{/each}
				</div>

				<!-- Recognition (moved above video) -->
				<section class="flex justify-center my-12">
					<div class="flex items-center gap-4">
						<Icon icon="ph:laurel-leaf" class="h-16 w-16 text-yellow-500 -scale-x-100" />
						<div class="text-center">
							<div class="text-lg font-bold tracking-wide text-neutral-800 dark:text-neutral-100">Best Of</div>
							<div class="text-2xl font-extrabold text-blue-700 dark:text-blue-400">Global Village</div>
							<div class="text-base font-medium text-neutral-500 mt-1">Segment</div>
						</div>
						<Icon icon="ph:laurel-leaf" class="h-16 w-16 text-yellow-500" />
					</div>
				</section>

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
				<!-- My Role -->
				<section>
					<h2 class="text-2xl font-semibold mb-4">My Role</h2>
					<ul class="list-disc list-inside space-y-2 text-neutral-500">
						{#each project.features as feature}
							<li>{feature}</li>
						{/each}
					</ul>
				</section>

				<!-- Simple Recognition at the bottom -->
				<section>
					<h2 class="text-xl font-semibold mb-2">Recognition</h2>
					<p class="text-neutral-500">Nominated for the “Best Of” episode of Global Village.</p>
				</section>
			</div>
		</BlurFade>
	</div>
</div> 