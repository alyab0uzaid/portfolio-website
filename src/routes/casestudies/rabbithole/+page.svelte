<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import Icon from "@iconify/svelte";
	import BlurFade from "$lib/BlurFade.svelte";
	import { cn } from "$lib/utils";

	const project = {
		title: "RabbitHole Chrome Extension",
		date: "March 2025",
		description: "A Chrome extension that transforms Wikipedia exploration into an elegant, visual journey by creating an interactive flowchart of your research path. Built in 48 hours at eHacks, where it won first place! 🏆",
		video: "eXI9RPzCBlo",
		badges: ["JavaScript", "HTML", "CSS", "Chrome Extension API", "Wikipedia API", "Dictionary.com API", "48-Hour Hackathon", "First Place Winner"],
		source: "https://github.com/alyab0uzaid/RabbitHole",
		showSource: true,
		problem: "During research, users often find themselves juggling 20+ browser tabs while exploring Wikipedia, losing track of how they got from one topic to another. This scattered tab explosion makes it difficult to maintain context and understand connections between topics.",
		solution: "RabbitHole transforms this chaotic exploration into an elegant, visual journey. By creating an interactive flowchart that maps connections between topics, we've eliminated tab overload while preserving the joy of discovery. The extension visualizes your exploration path, making research not just more efficient, but more meaningful as you see the connections between ideas.",
		features: [
			"Interactive flowchart visualization of Wikipedia exploration",
			"Text highlighting to fetch relevant Wikipedia information",
			"Expandable/collapsible nodes with toggle buttons",
			"Clean visual connections showing topic relationships",
			"Seamless overlay on any webpage",
			"Integration with Wikipedia and Dictionary.com APIs"
		],
		challenges: [
			"Implementing the interactive knowledge map with correct rendering",
			"Managing expand/collapse functionality for subtrees",
			"Fixing connection lines between nodes",
			"Handling complex DOM manipulation and state management",
			"Ensuring dynamic updates as users explore new topics",
			"Completing the entire project within the 48-hour hackathon timeframe"
		],
		technologies: [
			{
				name: "JavaScript",
				description: "Core programming language for the extension and interactive features"
			},
			{
				name: "Chrome Extension API",
				description: "For browser integration and extension functionality"
			},
			{
				name: "Wikipedia API",
				description: "For fetching article data and content"
			},
			{
				name: "Dictionary.com API",
				description: "For additional context and definitions"
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
					<h2 class="text-2xl font-semibold mb-4">Hackathon Success</h2>
					<div class="space-y-4">
						<p class="text-neutral-500">
							RabbitHole was born during eHacks, a 48-hour hackathon that pushed us to think fast and build faster. 
							Despite the time constraints, we managed to create a fully functional Chrome extension that impressed the judges 
							and took home first place! 🏆
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