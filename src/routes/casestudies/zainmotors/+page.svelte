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
const currentPath = "/casestudies/zainmotors";
const currentIndex = creativeCaseStudies.indexOf(currentPath);
const prevCaseStudy = currentIndex > 0 ? creativeCaseStudies[currentIndex - 1] : null;
const nextCaseStudy = currentIndex < creativeCaseStudies.length - 1 ? creativeCaseStudies[currentIndex + 1] : null;

const project = {
	title: "Zain Motors Reel Template",
	date: "2024",
	description: "A custom After Effects template for Zain Motors' Instagram reels, bringing consistency and polish to their vehicle showcase videos. The template streamlines their content creation process, allowing them to drop in vehicle specs and apply professional overlays in seconds.",
	image: "/images/zainmotors.png",
	website: "https://www.instagram.com/zain.motors1/",
	showWebsite: true,
	badges: ["After Effects", "Motion Graphics", "Sound Design"],
	features: [
		"Modular overlay template for quick content creation",
		"Customizable fields for price, engine, horsepower, mileage, and drivetrain",
		"Motion sound effects synchronized with visual transitions",
		"Streamlined system for repeatable content production",
		"Professional, consistent branding across all reels"
	],
	challenges: [
		"Creating a flexible template that works for different vehicle types",
		"Balancing visual impact with quick production time",
		"Ensuring sound design enhances rather than distracts",
		"Making the template easy to use for non-designers"
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
				
				<!-- Project Tags -->
				<div class="flex flex-wrap gap-2 mb-8">
					{#each project.badges as badge}
						<Badge variant="secondary">{badge}</Badge>
					{/each}
				</div>

				<!-- Project Links -->
				<div class="flex gap-4 mb-8">
					{#if project.showWebsite}
						<a href={project.website} target="_blank" rel="noopener noreferrer">
							<Button variant="outline" class="gap-2">
								<Icon icon="mdi:instagram" class="h-5 w-5" />
								View on Instagram
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

				<!-- My Role -->
				<section>
					<h2 class="text-2xl font-semibold mb-4">My Role</h2>
					<ul class="list-disc list-inside space-y-2 text-neutral-500">
						<li>Designed and animated a modular overlay template in After Effects</li>
						<li>Included fields for price, engine, horsepower, mileage, and drivetrain</li>
						<li>Added motion sound effects to enhance visual transitions</li>
						<li>Adjusted timing, pitch, and direction of sounds to match the animations</li>
						<li>Delivered a streamlined system for repeatable content production</li>
					</ul>
				</section>

				<!-- What It Highlights -->
				<section>
					<h2 class="text-2xl font-semibold mb-4">What It Highlights</h2>
					<ul class="list-disc list-inside space-y-2 text-neutral-500">
						<li>Real-world motion design for a small business</li>
						<li>Efficient workflow for rapid content creation</li>
						<li>Visual consistency across multiple reels</li>
						<li>Use of sound design to enhance visual impact without extra editing</li>
					</ul>
				</section>
			</div>
		</BlurFade>
	</div>
</div> 