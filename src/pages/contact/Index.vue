<template>
	<div>
		<div>
			<img src="../../assets/images/home/clip_home2.png">
		</div>
		<section>
		    <div class="max-w-6xl mx-auto px-4 sm:px-6">
		      <div class="py-12 md:py-20 border-t border-gray-800">
		      	<img src="../../assets/images/contact/mapa.png" class="absolute right-20 w-3/5">
		        <!-- Section header -->
		        <div class="text-left pb-12 md:pb-20">
		          <h2 class="h2 mb-4 text-white">Contacto</h2>
		          <p class="text-xl text-gray-400">Oficinas corporativas</p>
		        </div>

		        <!-- Items -->
		        <div class="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none">
		          <!-- 1st item -->
		          <div class="relative flex flex-col items-start"  >
		            <img src="../../assets/images/contact/location.png">
		            <h4 class="h4 mb-2 text-white">GUADALAJARA</h4>
		            <p class="text-ls text-gray-400 font-casper text-left">
		            	Paseo del Pacífico 645 Carretera <br>
		            	Guadalajara - Nogales KM 13.5
		            </p>
		          </div>

		          <!-- 2nd item -->
		          <div class="relative flex flex-col items-start"  data-aos-delay="100" >
		            <img src="../../assets/images/contact/location.png">
		            <h4 class="h4 mb-2 text-white">CMDX</h4>
		            <p class="text-ls text-gray-400 font-casper text-left">
		            	Calle 2 Bodega #17 A Central de Abastos Iztapalapa, <br>
						D.F. México. <br>
						+ 52 (55) 5600 7192
					</p>
		          </div>

		          <!-- 3rd item -->
		          <div class="relative flex flex-col items-start"  data-aos-delay="200" >
		            <img src="../../assets/images/contact/location.png">
		            <h4 class="h4 mb-2 text-white">MONTERRY</h4>
		            <p class="text-ls text-gray-400 font-casper text-left">
		            	Av. Ignacio Sepúlveda S/N Parque Industrial Kalos <br>
		            	Encarnación, Bodega 140, Apodaca N. L. C.P. 66630 <br>
						81 1204 2053  ventasc72gpopremier.com
		            </p>
		          </div>

		          <!-- 4th item -->
		          <div class="relative flex flex-col items-start"  data-aos-delay="300" >
		            <img src="../../assets/images/contact/location.png">
		            <h4 class="h4 mb-2 text-white">GDL CORPORATIVO</h4>
		            <p class="text-ls text-gray-400 font-casper text-left">
		            	Mercado de Abastos, calle 7 Bloque G # 701, Mercado de Abastos, <br>
		            	Guadalajara, Jal. <br>
						33 8000 8300 <br>
						irr@gpopremier.com
		            </p>
		          </div>

		          <!-- 5th item -->
		          <div class="relative flex flex-col items-start"  data-aos-delay="400" >
		            <img src="../../assets/images/contact/location.png">
		            <h4 class="h4 mb-2 text-white">PLANTA PROCESADORA</h4>
		            <p class="text-ls text-gray-400 font-casper text-left">
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
				<!-- Page header -->
	            <div class="max-w-3xl mx-auto text-center mt-10">
	            	<p class="text-xl">
	            		Escribenos
	            	</p>
	            </div>

	            <!-- Contact form -->
	            <form class="max-w-xl mx-auto mt-10">
	            	<div class="grid md:grid-cols-12">
	            		<div class="md:col-span-6 lg:col-span-6">
		            		<div class="flex flex-wrap">
			                	<div class="w-full md:w-2/2 px-3 mb-4 md:mb-0">
				                  <label class="text-black text-sm font-medium mb-1" for="first-name">Nombre</label>
				                  <input id="first-name" type="text" class="form-input w-full text-black" required />
				                </div>
				            </div>
				            <div class="flex flex-wrap">
				                <div class="w-full md:w-2/2 px-3 mb-4 md:mb-0">
				                  <label class="text-black text-sm font-medium mb-1" for="first-name">Emial</label>
				                  <input id="first-name" type="text" class="form-input w-full text-black" required />
				                </div>
				            </div>
				            <div class="flex flex-wrap">
				                <div class="w-full md:w-2/2 px-3 mb-4 md:mb-0">
				                  <label class="text-black text-sm font-medium mb-1" for="first-name">Telefono</label>
				                  <input id="first-name" type="text" class="form-input w-full text-black" required />
				                </div>
				            </div>
				            <div class="flex flex-wrap">
				                <div class="w-full md:w-2/2 px-3 mb-4 md:mb-0">
				                  <label class="text-black text-sm font-medium mb-1" for="first-name">Estado</label>
				                  <input id="first-name" type="text" class="form-input w-full text-black" required />
				                </div>
				            </div>
		            	</div>
		            	<div class="md:col-span-6 lg:col-span-6">
			                <div class="flex flex-wrap -mx-3 mb-4">
				                <div class="w-full px-3">
				                  <label class="text-black text-sm font-medium mb-1" for="message">Mensajes</label>
				                  <textarea id="message" rows="4" class="form-textarea w-full text-black"></textarea>
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
	export default {
		name: 'oceanSpray',
		data() {
			return {

			}
		}
	};
</script>

<style>
	.form_ {
		height: 75.01639556884766px;
		width: 292.6232604980469px;
		left: 984px;
		top: 2055px;
		border-radius: nullpx;
	}
</style>