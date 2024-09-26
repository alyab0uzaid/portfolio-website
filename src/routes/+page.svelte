<script>
	const sections = ['About', 'Projects', 'Experience'];

	import youtube from '../static/images/youtubeicon.png';
	import github from '../static/images/githubicon.png';
	import linkedin from '../static/images/linkedinicon.png';
	import prepguidess from '../static/images/prepguidess.png';
	import zooss from '../static/images/zooss.png';
	import terminalss from '../static/images/terminalss.png';
</script>

<!-- Main Container -->
<div class="flex justify-center items-start min-h-screen py-24">
	<!-- Wrapper for content with responsive padding and maximum width -->
	<div class="flex flex-col lg:flex-row w-full max-w-6xl sm:px-8 mx-auto">
		<!-- Sidebar (above main content on small screens) -->
		<aside class="w-full md:w-1/2">
			<div class="sticky top-24 pb-10">
				<!-- Sidebar content -->
				<h2 class="heading-main">Aly Abou-Zaid</h2>
				<p class="text-slate-400 mt-2">Web Developer</p>

				<!-- Social Links -->
				<div class="flex space-x-4 my-6">
					<a href="https://github.com/alyab0uzaid">
						<img src={github} alt="GitHub" class="icon-animation w-9" />
					</a>
					<a href="https://www.linkedin.com/in/alyabouzaid/" target="_blank">
						<img src={linkedin} alt="LinkedIn" class="icon-animation w-9" />
					</a>
					<a href="https://www.youtube.com/@AlyAbouZaid" target="_blank">
						<img src={youtube} alt="YouTube" class="icon-animation w-9" />
					</a>
				</div>
			</div>
		</aside>

		<!-- Main content (below sidebar on small screens) -->
		<main class="w-full lg:w-1/2">
			<section>
				<h1 class="heading-section">ABOUT ME</h1>
				<p class="leading-relaxed mb-6">
					Hi! I'm Aly Abou-Zaid, a computer science major with a minor in mass communications. I love
					building things that people enjoy, combining my technical skills in web development with
					the creativity I developed through video production. <br><br>
                    
                    For a while, I was torn between
					computer science and mass comm, but web development has allowed me to bridge both worlds.
					I'm excited to keep learning, improving, and creating intuitive digital experiences that
					make an impact
				</p>
			</section>

			<section id="experience">
				<h2 class="heading-section">EXPERIENCE</h2>

				<!-- STUDENT GOVERNMENT-->
				<div class="experience-entry">
					<!-- Year Column -->
					<div class="experience-year">2024 — Present</div>
					<!-- Description Column -->
					<div class="col-span-6">
						<h3 class="heading-entry">SIUE Student Government</h3>
						<h3 class="subheading-entry">Communication Officer</h3>
						<p class="entry-description">
							As Communications Officer, I manage Student Government's social media and
							communication strategies. I organize internal bonding events and collaborate with team
							members to align communication efforts with organizational goals, ensuring consistent
							engagement with the student body.
						</p>
					</div>
				</div>

				<!-- ENGAGEMENT CENTER -->
				<div class="experience-entry">
					<!-- Year Column -->
					<div class="experience-year">2021 — 2022</div>
					<!-- Description Column -->
					<div class="col-span-6">
						<h3 class="heading-entry">SIUE Engagement Center</h3>
						<h3 class="subheading-entry">Engagement Ambassador</h3>
						<p class="entry-description">
							As an Engagement Ambassador, I built rapport with alumni through outreach, securing
							donations to support the university's fundraising goals and campus initiatives while
							maintaining up-to-date contact information.
						</p>
					</div>
				</div>

				<!-- JIIMMYJOHNS -->
				<div class="experience-entry">
					<!-- Year Column -->
					<div class="experience-year">2020 — 2021</div>
					<!-- Description Column -->
					<div class="col-span-6">
						<h3 class="heading-entry">Jimmy John's</h3>
						<h3 class="subheading-entry">Inshopper</h3>
						<p class="entry-description">
							Worked at the original Jimmy John's store, ensuring speedy service and quality
							sandwiches while managing in-store operations and customer interactions.
						</p>
					</div>
				</div>
			</section>

			<section>
				<h1 class="heading-section">PROJECTS</h1>
				<!-- PREPGUIDE-->
				<div class="flex flex-col md:flex-row items-start gap-6 mb-10">
					<!-- Image Column with resizable width -->
					<div class="flex-shrink-0">
						<img
							src={prepguidess}
							alt="PrepGuide.org Screenshot"
							class="rounded-lg object-cover w-full h-auto border-2 border-white/20 p-1/2"
							style="width: 150px"
						/>
					</div>
					<!-- Description Column -->
					<div class="flex-grow">
						<h3 class="heading-entry pb-2">PrepGuide.org</h3>
						<p class="entry-description">
							PrepGuide is an online platform I co-founded with my brother to provide free resources
							for SAT preparation. It offers targeted lessons, official test answer keys, and
							personalized practice problems to help students optimize their study time and improve
							their test performance.
						</p>
					</div>
				</div>

				<!-- ZOO-->
				<div class="flex flex-col md:flex-row items-start gap-6 mb-10">
					<!-- Image Column with resizable width -->
					<div class="flex-shrink-0">
						<img
							src={zooss}
							alt="PrepGuide.org Screenshot"
							class="rounded-lg object-cover w-full h-auto border-2 border-white/20 p-1/2"
							style="width: 150px"
						/>
					</div>
					<!-- Description Column -->
					<div class="flex-grow">
						<h3 class="heading-entry pb-2">Endangered Species Visualization Website</h3>
						<p class="entry-description">
							Created a fun, interactive website that maps endangered species at the Saint Louis Zoo
						</p>
					</div>
				</div>

				<!-- TERMINAL-->
				<div class="flex flex-col md:flex-row items-start gap-6 mb-10">
					<!-- Image Column with resizable width -->
					<div class="flex-shrink-0">
						<img
							src={terminalss}
							alt="PrepGuide.org Screenshot"
							class="rounded-lg object-cover w-full h-auto border-2 border-white/20 p-1/2"
							style="width: 150px"
						/>
					</div>
					<!-- Description Column -->
					<div class="flex-grow">
						<h3 class="heading-entry pb-2">Personal Terminal Website</h3>
						<p class="entry-description">
							Created a fun, interactive website that maps endangered species at the Saint Louis Zoo
						</p>
					</div>
				</div>
			</section>
		</main>
	</div>
</div>
