<script>
	const sections = ['About', 'Projects', 'Experience'];
</script>

<!-- Main Container -->
<div class="flex justify-center items-start min-h-screen py-24">
	<!-- Wrapper for content with responsive padding and maximum width -->
	<div class="flex flex-col lg:flex-row w-full max-w-6xl px-4 sm:px-8 mx-auto">
		<!-- Sidebar (above main content on small screens) -->
		<aside class="w-full md:w-1/2">
			<div class="sticky top-24 pb-10 md:pb-0">
				<!-- Sticky with normal bottom spacing -->
				<!-- Sidebar content -->
				<div class="md:text-left text-center">
					<!-- Center alignment for small screens, left alignment for larger screens -->
					<!-- Profile Picture -->
					<img
						src="/images/profilepic.png"
						alt="Profile Picture"
						class="rounded-full w-32 h-32 mb-4 mx-auto md:mx-0 border-2 border-white/20"
					/>
					<!-- Name and Title -->
					<h2 class="heading-main">Aly Abou-Zaid</h2>
					<p class="text-slate-400 mt-2">Web Developer</p>
				</div>

				<!-- Social Links - Normal alignment (not at the bottom) -->
				<div class="mt-6">
					<div class="flex space-x-4 justify-center md:justify-start">
						<a href="https://github.com/alyab0uzaid">
							<img src="/images/githubicon.png" alt="GitHub" class="icon-animation w-9" />
						</a>
						<a href="https://www.linkedin.com/in/alyabouzaid/" target="_blank">
							<img src="/images/linkedinicon.png" alt="LinkedIn" class="icon-animation w-9" />
						</a>
						<a href="https://www.youtube.com/@AlyAbouZaid" target="_blank">
							<img src="/images/youtubeicon.png" alt="YouTube" class="icon-animation w-9" />
						</a>
					</div>
				</div>
			</div>
		</aside>

		<!-- Main content (below sidebar on small screens) -->
		<main class="w-full lg:w-1/2">
			<section id="about" class="mb-6">
				<h1 class="heading-section">ABOUT ME</h1>
				<p class="leading-relaxed mb-6">
					Hi! I'm Aly Abou-Zaid, a computer science major with a minor in mass communications. I
					love building things that people enjoy, combining my technical skills in web development
					with the creativity I developed through video production. <br /><br />

					For a while, I was torn between computer science and mass comm, but web development has
					allowed me to bridge both worlds. I'm excited to keep learning, improving, and creating
					intuitive digital experiences that make an impact
				</p>

				<a href="#" class="arrow-link text-slate-400" target="_blank" rel="noopener noreferrer">
					Download My Resume<span class="arrow">↗</span>
				</a>
			</section>

			<section id="education" class="mb-6">
				<h2 class="heading-section">EDUCATION</h2>

				<div class="education-entry">
					<!-- Flexbox container to align University and Expected Graduation -->
					<div class="flex justify-between items-center mb-1">
						<h3 class="heading-entry">Southern Illinois University Edwardsville</h3>
						<div class="text-slate-400 text-sm">Expected May 2025</div>
					</div>

					<!-- Degree and Minor Information -->
					<div>
						<p class="subheading-entry text-slate-400">
							Bachelor of Arts in Computer Science, Minor in Mass Communications
						</p>
					</div>

					<!-- Badges for Achievements -->
					<div class="flex flex-wrap gap-2 mt-4">
						<span class="badge">Dean's List | Fall 2022, Spring 2022, Fall 2023, Spring 2024</span>
						<span class="badge">Provost Scholarship Recipient</span>
						<span class="badge">John Martinson Honors Program Student</span>
						<span class="badge">eHacks 2024 Most Ambitious Project Award Recipient</span>
					</div>
				</div>
			</section>

			<section id="experience">
				<h2 class="heading-section">EXPERIENCE</h2>

				<!-- STUDENT GOVERNMENT-->
				<div class="experience-entry grid grid-cols-1 md:grid-cols-8 md:gap-4 gap-y-0 md:mb-6 mb-2">
					<!-- Year Column for larger screens -->
					<div class="experience-year hidden md:block text-slate-400 col-span-1 md:col-span-2">
						2024 — Present
					</div>

					<!-- Description Column -->
					<div class="col-span-1 md:col-span-6">
						<h3 class="heading-entry">SIUE Student Government</h3>

						<!-- Year Column for small screens (appears under the title) -->
						<div class="experience-year text-slate-400 block md:hidden mb-2">2024 — Present</div>

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
				<div class="experience-entry grid grid-cols-1 md:grid-cols-8 md:gap-4 gap-y-0 md:mb-6 mb-2">
					<!-- Year Column for larger screens -->
					<div class="experience-year hidden md:block text-slate-400 col-span-1 md:col-span-2">
						2021 — 2022
					</div>

					<!-- Description Column -->
					<div class="col-span-1 md:col-span-6">
						<h3 class="heading-entry">SIUE Engagement Center</h3>

						<!-- Year Column for small screens (appears under the title) -->
						<div class="experience-year text-slate-400 block md:hidden mb-2">2021 — 2022</div>

						<h3 class="subheading-entry">Engagement Ambassador</h3>

						<p class="entry-description">
							As an Engagement Ambassador, I built rapport with alumni through outreach, securing
							donations to support the university's fundraising goals and campus initiatives while
							maintaining up-to-date contact information.
						</p>
					</div>
				</div>

				<!-- JIIMMYJOHNS -->
				<div class="experience-entry grid grid-cols-1 md:grid-cols-8 md:gap-4 gap-y-0 md:mb-6 mb-2">
					<!-- Year Column for larger screens -->
					<div class="experience-year hidden md:block text-slate-400 col-span-1 md:col-span-2">
						2020 — 2021
					</div>

					<!-- Description Column -->
					<div class="col-span-1 md:col-span-6">
						<h3 class="heading-entry">Jimmy John's</h3>

						<!-- Year Column for small screens (appears under the title) -->
						<div class="experience-year text-slate-400 block md:hidden mb-2">2020 — 2021</div>

						<h3 class="subheading-entry">Inshopper</h3>

						<p class="entry-description">
							Worked at the original Jimmy John's store, ensuring speedy service and quality
							sandwiches while managing in-store operations and customer interactions.
						</p>
					</div>
				</div>
			</section>

			<section id="projects">
				<h1 class="heading-section">PROJECTS</h1>
				<!-- PREPGUIDE-->
				<a
					href="https://prepguide.org"
					class="project-entry"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div class="flex flex-col md:flex-row items-start gap-6">
						<!-- Image Column with resizable width -->
						<div class="flex-shrink-0">
							<img
								src="/images/prepguidess.png"
								alt="PrepGuide.org Screenshot"
								class="project-thumb"
								style="width: 150px"
							/>
						</div>
						<!-- Description Column -->

						<div class="flex-grow">
							<h3 class="heading-entry pb-2">PrepGuide.org <span class="arrow">↗</span></h3>
							<p class="entry-description">
								PrepGuide is an online platform I co-founded with my brother to provide free
								resources for SAT preparation. It offers targeted lessons, official test answer
								keys, and personalized practice problems to help students optimize their study time
								and improve their test performance.
							</p>

							<!-- Language Badges -->
							<div class="flex space-x-2 mt-4">
								<span class="badge">Webflow</span>
								<span class="badge">CMS</span>
							</div>
						</div>
					</div>
				</a>

				<!-- ZOO-->
				<a
					href="https://www.siue.edu/~aabouza/ZooProject/index.html"
					class="project-entry"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div class="flex flex-col md:flex-row items-start gap-6">
						<!-- Image Column with resizable width -->
						<div class="flex-shrink-0">
							<img
								src="/images/zooss.png"
								alt="PrepGuide.org Screenshot"
								class="project-thumb"
								style="width: 150px"
							/>
						</div>
						<!-- Description Column -->
						<div class="flex-grow">
							<h3 class="heading-entry pb-2">
								Endangered Species Visualization Website<span class="arrow">↗</span>
							</h3>
							<p class="entry-description">
								An interactive website that maps endangered species at the Saint Louis
								Zoo
							</p>

							<!-- Language Badges -->
							<div class="flex space-x-2 mt-4">
								<span class="badge">HTML</span>
								<span class="badge">CSS</span>
								<span class="badge">Leaflet.js</span>
							</div>
						</div>
					</div>
				</a>


				<!-- TERMINAL-->
				<a
					href="https://alyab0uzaid.github.io/"
					class="project-entry"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div class="flex flex-col md:flex-row items-start gap-6">
						<!-- Image Column with resizable width -->
						<div class="flex-shrink-0">
							<img
								src="/images/terminalss.png"
								alt="PrepGuide.org Screenshot"
								class="project-thumb"
								style="width: 150px"
							/>
						</div>
						<!-- Description Column -->
						<div class="flex-grow">
							<h3 class="heading-entry pb-2">
								Personal Terminal Website<span class="arrow">↗</span>
							</h3>

							<p class="entry-description">
								A unique, interactive personal website styled after a terminal interface.
							</p>

							<!-- Language Badges -->
							<div class="flex space-x-2 mt-4">
								<span class="badge">HTML</span>
								<span class="badge">CSS</span>
								<span class="badge">Javascript</span>
							</div>
						</div>
					</div>
				</a>

                <a
					href="https://github.com/alyab0uzaid/spotifyMonthlyWrapped"
					class="project-entry"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div class="flex flex-col md:flex-row items-start gap-6">
						<!-- Image Column with resizable width -->
						<div class="flex-shrink-0">
							<img
								src="/images/SpotifySS.png"
								alt="PrepGuide.org Screenshot"
								class="project-thumb"
								style="width: 150px"
							/>
						</div>
						<!-- Description Column -->
						<div class="flex-grow">
							<h3 class="heading-entry pb-2">
								Automated Spotify Playlist Creator<span class="arrow">↗</span>
							</h3>
							<p class="entry-description">
								A Python application using the Spotipy library and Flask to automate the creation of personalized Spotify playlists
							</p>

							<!-- Language Badges -->
							<div class="flex space-x-2 mt-4">
								<span class="badge">Python</span>
								<span class="badge">Flask</span>
								<span class="badge">Spotipy</span>
							</div>
						</div>
					</div>
				</a>

			</section>
		</main>
	</div>
</div>
