<template>
	<Header> </Header>
	<div>
		<div class="opacity-50">
			<Video :media="clip_1" :padding="0"/>
		</div>

		<div class="grid md:grid-cols-12 bg-white">
			<div class="md:col-span-12 lg:col-span-12 text-center p-16">
				<p class="c_2 text-4xl font-casper" data-aos="fade-up" data-aos-delay="200">
					Desde el año 2010 Grupo Premier de Occidente <br>
					somos el primer contacto de Ocean Spray para <br>
					temas de ventas y servicio al cliente en México. 
				</p> 
			</div>
		</div>

		<div class="grid md:grid-cols-12 bg-white continer">
			<div class="md:col-span-6 lg:col-span-6 p-16 mt-20">
				<p class="m-4 font-casper" data-aos="fade-up" data-aos-delay="200">
					Trabajamos de la mano para proveer información de su línea de productos y muestras de innovaciones. Apoyamos el crecimiento de la demanda de sus producto estrella en México: Arándanos Deshidratados y sus variantes.
				</p> 
				<p class="m-4 font-casper" data-aos="fade-up" data-aos-delay="200">
					Ocean Spray fue formado en 1930 por tres productores de arándano dirigidos por Marcus L. Urann, abogado y productor de arándanos. Este grupo de productores empezaron a generar ideas de productos innovadores basados en los arándanos. Desde entonces, la cooperativa Ocean Spray ha crecido a más de 700 familias productoras en toda América del Norte y del Sur.
				</p>
				<p class="m-4 font-casper" data-aos="fade-up" data-aos-delay="200">
					En Ocean Spray se respira una sensación de orgullo de la tradición de innovación e ingenio emprendida por los tres fundadores hace más de 80 años. Ahora con el respaldo de más de 700 familias productoras, Ocean Spray está más que listo para mantener su tradición de éxito con las próximas generaciones. Esta gran empresa deposita su confianza y pone en manos de Grupo Premier la distribución de los arándanos deshidratados en la República Mexicana.
				</p>
			</div>

			<div class="md:col-span-6 lg:col-span-6 p-16">
				<Video :media="clip_2" :padding="0"/>
				<p class="c_2 text-2xl font-casper text-center" data-aos="fade-up" data-aos-delay="200">
					El arándano: un fruto único <br>
					y excepcional
				</p>				
			</div>
		</div>
	</div>
</template>

<script>
	import clip_1 from '../../assets/videos/ocean_spray/1.mp4';
	import clip_2 from '../../assets/videos/ocean_spray/2.mp4';
	import Video from '../../components/media/Index.vue';
	import Header from '../../components/header/Index.vue';

	export default {
		name: 'oceanSpray',
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

<style>
	.c_2 {
		color: #002554;
	}
</style>