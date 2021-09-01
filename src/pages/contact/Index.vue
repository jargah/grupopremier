<template>
	<Header />
	<div>
		<div class="opacity-50">
			<Video :media="clip_1" :padding="0"/>
		</div>
		<section>
		    <div class="max-w-6xl mx-auto px-4 sm:px-6">
			    <div class="py-12 md:py-20 border-t border-gray-800 p-6 md:p-2">
			      	<img src="../../assets/images/contact/mapa.png" class="hidden md:block absolute right-20 w-3/5 mt-40 xl:mt-20">
			        <!-- Section header -->
			        <div class="text-left pb-12 md:pb-20" data-aos="fade-up" data-aos-delay="200">
			          	<h2 class="h2 mb-4 text-white">Contacto</h2>
			          	<p class="text-xl text-gray-400">Oficinas corporativas</p>
			        </div>

			        <div class="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none">
				        <div class="relative flex flex-col items-start"  >
				            <img src="../../assets/images/contact/location.png">
				            <h4 class="h4 mb-2 text-white" data-aos="fade-up">GUADALAJARA</h4>
				            <p class="text-ls text-gray-400 font-casper text-left" data-aos="fade-up" data-aos-delay="200">
				            	Paseo del Pacífico 645 Carretera <br>
				            	Guadalajara - Nogales KM 13.5
				            </p>
				        </div>

				        <div class="relative flex flex-col items-start">
				            <img src="../../assets/images/contact/location.png">
				            <h4 class="h4 mb-2 text-white" data-aos="fade-up">CMDX</h4>
				            <p class="text-ls text-gray-400 font-casper text-left" data-aos="fade-up" data-aos-delay="200">
				            	Calle 2 Bodega #17 A Central de Abastos Iztapalapa, <br>
								D.F. México. <br>
								+ 52 (55) 5600 7192
							</p>
				        </div>

				        <div class="relative flex flex-col items-start">
				            <img src="../../assets/images/contact/location.png">
				            <h4 class="h4 mb-2 text-white" data-aos="fade-up">MONTERRY</h4>
				            <p class="text-ls text-gray-400 font-casper text-left" data-aos="fade-up" data-aos-delay="200">
				            	Av. Ignacio Sepúlveda S/N Parque Industrial Kalos <br>
				            	Encarnación, Bodega 140, Apodaca N. L. C.P. 66630 <br>
								81 1204 2053  ventasc72gpopremier.com
				            </p>
				        </div>

				        <div class="relative flex flex-col items-start">
				            <img src="../../assets/images/contact/location.png">
				            <h4 class="h4 mb-2 text-white" data-aos="fade-up">GDL CORPORATIVO</h4>
				            <p class="text-ls text-gray-400 font-casper text-left" data-aos="fade-up" data-aos-delay="200">
				            	Mercado de Abastos, calle 7 Bloque G # 701, Mercado de Abastos, <br>
				            	Guadalajara, Jal. <br>
								33 8000 8300 <br>
								irr@gpopremier.com
				            </p>
				        </div>

				        <div class="relative flex flex-col items-start">
				            <img src="../../assets/images/contact/location.png">
				            <h4 class="h4 mb-2 text-white" data-aos="fade-up">PLANTA PROCESADORA</h4>
				            <p class="text-ls text-gray-400 font-casper text-left" data-aos="fade-up" data-aos-delay="200">
				            	Camino Antiguo a San Isidro Mazatepec # 910, Col. Nicolás R. Casilla, <br>
				            	C.P. 45645, Tlajomulco de Zuñiga, Jalisco, México. <br>
								33 3686 1438 <br>
								hrl@gpopremier.com</p>
				        </div>
			        </div>

			    </div>
		    </div>
		</section>
		<div class="grid md:grid-cols-12">
			<div class="md:col-span-6 lg:col-span-6">
	            <img src="../../assets/images/contact/1.png">
			</div>
			<div class="md:col-span-6 lg:col-span-6 bg-white">
	            <div class="max-w-3xl mx-auto text-center mt-10">
	            	<p class="text-xl">
	            		Escribenos
	            	</p>
	            </div>

	            <!-- Contact form -->
	            <form class="max-w-xl mx-auto mt-10">
	            	<div class="grid md:grid-cols-12">
	            		<div class="md:col-span-6 lg:col-span-6 p-6">
		            		<div class="flex items-center border-b border-gray-800 py-2">
			                	<div class="w-full md:w-2/2 px-3 mb-4 md:mb-0">
				                  <input type="text" class="form-input border-none w-full text-black" placeholder="Nombre" required />
				                </div>
				            </div>
				            <div class="flex items-center border-b border-gray-800 py-2">
				                <div class="w-full md:w-2/2 px-3 mb-4 md:mb-0">
				                  <input type="text" class="form-input border-none  w-full text-black" placeholder="Email" required />
				                </div>
				            </div>
				            <div class="flex items-center border-b border-gray-800 py-2">
				                <div class="w-full md:w-2/2 px-3 mb-4 md:mb-0">
				                  <input type="text" class="form-input border-none  w-full text-black" placeholder="Teléfono" required />
				                </div>
				            </div>
				            <div class="flex items-center border-b border-gray-800 py-2">
				                <div class="w-full md:w-2/2 px-3 mb-4 md:mb-0">
				                  <input type="text" class="form-input border-none  w-full text-black" placeholder="Estado" required />
				                </div>
				            </div>
		            	</div>
		            	<div class="md:col-span-6 lg:col-span-6 p-6">
			                <div class="flex items-center border-b border-gray-800 py-2">
				                <div class="w-full px-3">
				                  <textarea rows="4" class="form-textarea border-none  w-full text-black" placeholder="Mensaje"></textarea>
				                </div>
				            </div>
		            	</div>
	            	</div>
	            </form>
			</div>
		</div>
	</div>
</template>

<script>
	import clip_1 from '../../assets/videos/contact/contact.mp4';
	import Video from '../../components/media/Index.vue';
	import Header from '../../components/header/Index.vue';

	export default {
		name: 'contact',
		components: {
			Video,
			Header
		},
		data() {
			return {
				clip_1
			}
		}
	};
</script>