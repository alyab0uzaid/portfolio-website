<script lang="ts">
import * as Card from "$lib/components/ui/card";
import { Badge } from "$lib/components/ui/badge";
import { Button } from "$lib/components/ui/button";
import Icon from "@iconify/svelte";
import { toggleMode } from "mode-watcher";
import BlurFade from "$lib/BlurFade.svelte";
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
const currentPath = "/casestudies/newsbreak";
const currentIndex = creativeCaseStudies.indexOf(currentPath);
const prevCaseStudy = currentIndex > 0 ? creativeCaseStudies[currentIndex - 1] : null;
const nextCaseStudy = currentIndex < creativeCaseStudies.length - 1 ? creativeCaseStudies[currentIndex + 1] : null;

const project = {
	title: "SIUE Newsbreak",
	date: "2023",
	description: `SIUE Newsbreak is a parody news segment I wrote, filmed, and edited for Global Village, a student-led media series at SIUE. It was designed to look and sound like a real campus news broadcast, but the stories were completely made up, based on inside jokes and exaggerated takes on student life.\n\nThe humor came from how seriously it was delivered. From the TV studio setup to the anchor tone, everything played it straight, which made the fake stories even funnier for anyone familiar with campus culture.`,
	image: "/images/newsbreak.png",
	website: "https://youtu.be/Jz45kRU-4Rg",
	showWebsite: false,
	badges: ["Video Production", "Writing", "Editing", "On-Camera", "Broadcast Graphics"],
	features: [
		"Wrote the full script",
		"Acted as the on-camera news anchor",
		"Shot in SIUE's campus TV studio",
		"Edited the full segment, including pacing, timing, and comedic flow",
		"Created lower-thirds and visual assets to match a real broadcast"
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
			</header>
		</BlurFade>

		<BlurFade delay={0.45}>
			<div class="space-y-12">
				<!-- YouTube Embed -->
				<div class="rounded-xl overflow-hidden shadow-lg aspect-video">
					<iframe
						src="https://www.youtube.com/embed/Jz45kRU-4Rg"
						title="SIUE Newsbreak"
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
			</div>
		</BlurFade>
	</div>
</div> 