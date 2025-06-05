<script lang="ts">
	import * as Card from "$lib/components/ui/card";
	import { Button } from "$lib/components/ui/button";
	import { Badge } from "$lib/components/ui/badge";
	import Icon from "@iconify/svelte";
	import BlurFade from "$lib/BlurFade.svelte";
	import { cn } from "$lib/utils";
	import AnimatedGradientText from "$lib/AnimatedGradientText.svelte";

	const project = {
		title: "Larkin-Barrett Campaign Promo",
		date: "2024",
		description: "A fast-paced campaign ad for the 2024 SIUE Student Government presidential ticket. Shot and edited to highlight the energy, goals, and vision of Larkin and Barrett's campaign, blending cinematic shots with bold text overlays and upbeat music to rally student support.",
		image: "https://img.youtube.com/vi/6GFKxsfkVMc/maxresdefault.jpg",
		video: "6GFKxsfkVMc",
		website: "https://youtu.be/6GFKxsfkVMc",
		showWebsite: true,
		badges: ["Video Production", "Motion Graphics", "Campaign Strategy"],
		problem: "How can we create a campaign video that effectively communicates the candidates' vision while engaging and inspiring the student body?",
		solution: "Developed a dynamic, professional campaign video that combines cinematic shots, student testimonials, and bold motion graphics to create an engaging narrative that resonated with voters.",
		features: [
			"Cinematic camera work",
			"Dynamic motion graphics",
			"Student testimonials",
			"Professional color grading",
			"Strategic campaign messaging"
		],
		challenges: [
			"Creating an engaging narrative that resonated with the student body",
			"Balancing professional presentation with student-friendly content",
			"Coordinating filming schedules with campaign events",
			"Maintaining consistent visual quality across different shooting conditions"
		],
		technologies: [
			{ name: "Premiere Pro", description: "Video editing and timeline management" },
			{ name: "After Effects", description: "Motion graphics and visual effects" },
			{ name: "DSLR Camera", description: "High-quality video capture" },
			{ name: "Color Grading", description: "Visual consistency and mood enhancement" }
		],
		impact: "The campaign video played a crucial role in the Larkin-Barrett ticket's successful election, helping to establish their brand and communicate their vision to the student body. The video's engaging style and professional quality helped set them apart from other candidates and demonstrated their commitment to student leadership."
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
						src="https://www.youtube.com/embed/6GFKxsfkVMc"
						title="Larkin-Barrett Campaign Promo"
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

		<!-- Impact Section -->
		<BlurFade delay={0.75}>
			<section class="mb-12">
				<h2 class="text-2xl font-semibold mb-4">Impact</h2>
				<p class="text-neutral-700 dark:text-neutral-300 leading-relaxed">{project.impact}</p>
			</section>
		</BlurFade>

		<!-- Call to Action -->
		<BlurFade delay={0.85}>
			<section class="text-center">
				<a
					href={project.website}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center justify-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition"
				>
					<Icon icon="mdi:youtube" class="mr-2 h-5 w-5" />
					Watch on YouTube
				</a>
			</section>
		</BlurFade>
	</div>
</div> 