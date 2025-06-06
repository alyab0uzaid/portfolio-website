<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import Icon from "@iconify/svelte";
	import BlurFade from "$lib/BlurFade.svelte";
	import { cn } from "$lib/utils";

	const project = {
		title: "PrepGuide",
		date: "May 2024",
		description: "A clean, free SAT prep site built for real students.",
		video: "/PrepGuideDemov2.mov",
		badges: ["Webflow", "CMS"],
		website: "https://www.prepguide.org/",
		showWebsite: true,
		problem: "While preparing for the SAT, my brother and I kept running into the same problem: too many resources, too little clarity. Some were locked behind paywalls, others felt outdated or unorganized, and figuring out what was actually useful took more time than it should have.\n\nThat's what pushed us to build PrepGuide.org, a site that brings together the best free SAT resources in one simple, distraction-free space.\n\nWe didn't want students to waste time digging. We wanted them to open the site and get to work.",
		solution: "We built PrepGuide.org to fix that. A clean, simple, and 100% free SAT prep site.",
		features: [
			"A clean, focused layout organized by SAT topic",
			"Curated links to trusted, high-quality external resources",
			"Simple structure designed to reduce friction and overwhelm",
			"Fully responsive and optimized for mobile",
			"Built in Webflow, powered by Webflow CMS for easy content updates"
		],
		impact: {
			users: "2000+",
			countries: "70+",
			growth: "Still growing—driven entirely by word of mouth"
		},
		technologies: [
			{
				name: "Webflow",
				description: "Design & deployment"
			},
			{
				name: "Webflow CMS",
				description: "Manage and scale lesson content"
			}
		]
	};
</script>

<div class="flex justify-center items-start min-h-screen">
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
					{#if project.showWebsite}
						<a href={project.website} target="_blank" rel="noopener noreferrer">
							<Button variant="outline" class="gap-2">
								<Icon icon="proicons:globe" class="h-5 w-5" />
								Visit Website
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
		<BlurFade delay={2.45}>
			<div class="space-y-12">
				<!-- Project Overview -->
				<section>
					<div class="text-xl font-semibold mb-8">Built with my brother. Used by students in 70+ countries.</div>
				</section>

				<!-- Problem -->
				<section>
					<h2 class="text-2xl font-semibold mb-4">The Problem</h2>
					<p class="text-neutral-500 whitespace-pre-line mb-6">{project.problem}</p>
				</section>

				<!-- What We Built -->
				<section>
					<h2 class="text-2xl font-semibold mb-4">What We Built</h2>
					<ul class="list-none space-y-3 text-neutral-500">
						{#each project.features as feature}
							<li class="flex items-start">
								<span class="mr-2">•</span>
								<span>{feature}</span>
							</li>
						{/each}
					</ul>
				</section>

				<!-- Impact -->
				<section>
					<h2 class="text-2xl font-semibold mb-4">Impact</h2>
					<div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
						<div class="p-6 border rounded-lg text-center">
							<div class="text-4xl font-bold mb-2">{project.impact.users}</div>
							<div class="text-neutral-500">visitors</div>
						</div>
						<div class="p-6 border rounded-lg text-center">
							<div class="text-4xl font-bold mb-2">{project.impact.countries}</div>
							<div class="text-neutral-500">countries</div>
						</div>
						<div class="p-6 border rounded-lg text-center">
							<div class="text-neutral-500 text-lg">{project.impact.growth}</div>
						</div>
					</div>
				</section>

				<!-- Why It Matters -->
				<section>
					<h2 class="text-2xl font-semibold mb-4">Why It Matters</h2>
					<p class="text-neutral-500">
						This wasn't a class project or a client job. It was something we built because we believed in it. And people are actually using it.
					</p>
				</section>

				<!-- Tech Stack -->
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