<template>
	<Header> </Header>
	<div>
		<div class="hidden flex md:flex md:flex-grow absolute left-6 mt-36 lg:mt-56 xl:mt-96">
			<img class="inline" src="../../assets/images/social/social_v.png">
		</div>

		<!-- Vidio Clip Home -->
		<div class="hidden lg:mt-40 mt-20 md:flex md:flex-grow" data-aos="fade-up">
			<img src="../../assets/images/home/clip_home.png" class="px-24">
		</div>
		<div class="md:hidden lg:mt-40 md:mt-28 mt-20" data-aos="fade-right">
			<img src="../../assets/images/home/clip_home.png" data-aos="fade-up">
		</div>
		

		<div data-aos="fade-right">
	        <router-link to="/somos">
                <Video :media="clip_1" :padding="0" data-aos="fade-up" data-aos-delay="200"/>
            </router-link>
	    </div>
		
		<section class="cnt_p bg-white">
			<div class="mx-6 lg:mx-0">
		        <div class="justify-center flex flex-wrap lg:flex-nowrap col-span-12">
			        <div class="col-span-12 md:col-span-6 lg:col-span-3">
			            <div class="flex flex-col items-center">
			              <img class="rounded-full mb-4 w-3/4 lg:w-4/4" src="../../assets/images/home/1.png" data-aos="fade-up" data-aos-delay="100"/>
			              <h4 class="text-xl font-medium mb-1" data-aos="fade-up">Frutos secos</h4>
			              <div class="text-gray-500 mb-1" data-aos="fade-up" data-aos-delay="200">Description Producto 1</div>
			            </div>
			        </div>

			        <div class="col-span-12 md:col-span-6 lg:col-span-3">
			            <div class="flex flex-col items-center">
			              <img class="rounded-full mb-4 w-3/4 lg:w-4/4" src="../../assets/images/home/2.png" data-aos="fade-up" data-aos-delay="100"/>
			              <h4 class="text-xl font-medium mb-1"  data-aos="fade-up">Frutas deshidratadas</h4>
			              <div class="text-gray-500 mb-1" data-aos="fade-up" data-aos-delay="200">Description Producto 2</div>
			            </div>
			        </div>

			        <div class="col-span-12 md:col-span-6 lg:col-span-3">
			            <div class="flex flex-col items-center">
			              <img class="rounded-full mb-4 w-3/4 lg:w-4/4" src="../../assets/images/home/3.png" data-aos="fade-up" data-aos-delay="100"/>
			              <h4 class="text-xl font-medium mb-1" data-aos="fade-up">Jamaica</h4>
			              <div class="text-gray-500 mb-1" data-aos="fade-up" data-aos-delay="200">Description Producto 3</div>
			            </div>
			        </div>

			        <div class="col-span-12 md:col-span-6 lg:col-span-3">
			            <div class="flex flex-col items-center">
			              <img class="rounded-full mb-4 w-3/4 lg:w-4/4" src="../../assets/images/home/4.png" data-aos="fade-up" data-aos-delay="100"/>
			              <h4 class="text-xl font-medium mb-1" data-aos="fade-up">Superfoods</h4>
			              <div class="text-gray-500 mb-1" data-aos="fade-up" data-aos-delay="200">Description Producto 4</div>
			            </div>
			        </div>
		        </div>
		    </div>
		    <div class="py-10 text-center">
	        	<router-link to="/productos" class="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out" data-aos="fade-up" data-aos-delay="100">
	                <h6 class="c_2 font-medium mb-1">VER MÁS</h6>
	            </router-link>
	        </div>
	    </section>

	    <div class="opacity-50">
			<Video :media="clip_2" :padding="0" />
		</div>
	</div>
</template>

<script>
	import clip_1 from '../../assets/videos/home/1.mp4';
	import clip_2 from '../../assets/videos/home/2.mp4';
	import Video from '../../components/media/Index.vue';
	import Header from '../../components/header/Index.vue';

	export default {
		name: "home",
		components: {
			Video,
			Header
		},
		data() {
			return {
				clip_1,
				clip_2
			}
		}
	};
</script>

<style scoped>
	.social_h {
		position: absolute;
		left: 2%;
	}

</style>