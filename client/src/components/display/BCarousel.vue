<template>
	<div class="">
		<BCarousel
			id="carousel-1"
			v-model="slide"
			:interval="3000"
			controls
			indicators
			fade
			background="#ababab"
			img-width="1024"
			img-height="680"
			@sliding-start="onSlideStart"
			@sliding-end="onSlideEnd"
			class="heading-text"
		>
			<!-- For loop for slideObj array -->
			<BCarouselSlide
				v-for="(slideObj, i) in slideObjs"
				:key="i"
				:caption="slideObj.caption"
				:text="slideObj.text"
				:img-src="slideObj.img"
				v-rellax
				data-rellax-xs-speed="0"
				data-rellax-mobile-speed="0"
				data-rellax-tablet-speed="0"
				:data-rellax-desktop-speed="rellaxNumber"
				class="h-100"
				:style="`max-height: ${maxHeight}px;`"
			>
				<!-- isHero -->
				<div v-if="showContent" class="h-100 my-auto py-2 rounded">
					<h1
						class="
							d-none
							d-md-block
							mb-5
							title
							font-weight-light
							text-light
							text-fancy
						"
						style="font-size: 4em;"
					>{{ mainText }}</h1>

					<h1
						class="
							d-none
							d-sm-block
							d-md-none
							mb-4
							title
							font-weight-light
							text-light
							text-fancy
						"
					>{{ mainText }}</h1>

					<h3
						class="
							d-block
							d-sm-none
							mb-3
							title
							font-weight-light
							text-light
							text-fancy
						"
					>{{ mainText }}</h3>

					<RouterLink to="/book" class="text-decoration-none">
						<BButton
							variant="primary"
							size="lg"
							class="d-none d-sm-block m-auto"
						>Book Apointment</BButton>

						<BButton
							variant="primary"
							size=""
							class="d-block d-sm-none m-auto"
						>Book Apointment</BButton>
					</RouterLink>

					<div class="title d-none d-md-block font-weight-bold text-light">
						<br><br><br>
					</div>
				</div>
			</BCarouselSlide>
		</BCarousel>

		<div v-if="showContent" class="wave">
			<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
				<path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill-0"></path>
				<path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill-1"></path>
				<path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill-2"></path>
			</svg>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			showContent: {
				type: Boolean,
				default: false,
			},

			slideObjs: {
				type: Array,
				required: true,
			},

			maxHeight: {
				type: Number,
				default: 400,
			},

			rellaxNumber: {
				type: Number,
				default: 0,
			},

			mainText: {
				type: String,
				default: '',
			},
		},

		data() {
			return {
				slide: 0,
				sliding: null,
				currentSlid: null,
			}
		},

		methods: {
			onSlideStart(slide) {
				this.currentSlid = slide
				this.sliding = true
			},

			onSlideEnd(slide) {
				this.currentSlid = slide
				this.sliding = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/styles/variables.scss';

	.heading-text {
		text-shadow: 1px 1px 2px $secondary-dark;
	}

	.wave {
		z-index: 1000;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
		transform: rotate(180deg);

		svg {
			position: relative;
			display: block;
			width: calc(152% + 1.3px);
			height: 100px;

			@media (max-width: 600px) {
				height: 40px;
			}
		}

		.shape-fill-0 {
			fill: $primary;
		}

		.shape-fill-1 {
			fill: $secondary;
		}

		.shape-fill-2 {
			fill: rgb(255, 255, 255);
		}
	}
</style>