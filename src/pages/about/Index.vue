<template>
	<div>
		<div class="opacity-60">
			<Video :media="clip_1" :padding="0"/>
		</div>
		<div class="hidden md:grid md:grid-cols-12 bg-white">
			<div class="md:col-span-6 lg:col-span-6 p-6 md:p-16 my-16">
				<p class="font-casper">La empresa líder en importación de nueces, frutos secos y especias. <br>
					<span class="c_1">
						En los últimos 49 años Grupo Premier nos hemos consolidado como la empresa líder en importación, procesamiento y distribución de frutos secos en México	
					</span>
				</p> 
				<br>
				<p class="font-casper">Grupo Premier nace en 1970 con el ideal de satisfacer las necesidades del creciente mercado de alimentos a granel. A través de los años, nuestra empresa se ha consolidado como líder 	<span class="c_1">
						y referente en México como proveedor de pistaches, nueces, almendras, cereales, especies y frutos secos.
					</span>
				</p>
			</div>

			<div class="md:col-span-6 lg:col-span-6 p-6 md:p-16 my-16">
				<p class="font-casper">
					Actualmente contamos con nuestro Corporativo Matriz y Planta Procesadora en Guadalajara, Corporativo en CDMX y una Bodega en Monterrey. 
				</p>
				<br>
				<p class="font-casper">
					En el año 2018 se realizó la apertura al público de nuestra primer tienda con mostrador mayorista y minorista en el Mercado de Abastos de Guadalajara
				</p>				
			</div>
		</div>
		<div class="grid md:hidden lg:grid-cols-12 bg-white">
			<div class="md:col-span-6 lg:col-span-6 p-6 md:p-16 my-16">
				<p class="font-casper text-center">
					<span class="c_1">
						En los últimos 49 años nos hemos consolidado como la empresa líder en importación, procesamiento y distribución de frutos secos, nueces y especias en México.
					</span>
				</p> 
				<br>
				<p class="font-casper text-center">
					Grupo Premier nace en 1970 con el ideal de satisfacer las necesidades del creciente mercado de alimentos a granel.
				</p>
			</div>
		</div>

		<div class="hidden md:grid md:grid-cols-12 gap-5 lg:gap-20">
			<div class="md:col-span-6 lg:col-span-6 p-3 md:p-16 my-16">
				<p class="text-white font-casper text-5xl m-4">Historia</p>

				<p class="text-white font-casper max-w-xs m-6">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				</p>

				<p class="text-white font-casper max-w-xs m-6">
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
				</p>
			</div>
			<div class="md:col-span-6 lg:col-span-6 p-6 md:p-16 bg-white">
				<div class="flex flex-row md:flex-col">
					<div class="mb-8">
	                    <img src="../../assets/images/about/1.png" class="md:w-1/4 lg:w-2/4">
	                </div>
				</div>
			</div>
		</div>

		<div class="hidden md:grid md:grid-cols-12 bg-white">
			<div class="md:col-span-12 lg:col-span-12 text-center p-6 md:p-16">
				<p class="c_1 font-casper text-2xl md:text-5xl">
					Premier procesa frutos secos traídos de más <br>
					 de 13 países del mundo.
				</p>
			</div>
		</div>

		<div class="grid md:grid-cols-12 ">
			<div class="md:col-span-6 lg:col-span-6 p-3 lg:p-16">
				<p class="text-white font-casper text-center text-2xl md:text-xl m-4">Actualmente en Grupo Premier importamos frutos secos de </p>

				<div class="grid md:grid-row-12 mt-10 p-0 md:p-6 md:mt-20 text-left">
					<div class="grid grid-rows-2 md:grid-rows-3 grid-flow-col">
						<p class="font-casper text-2xl col-span-3 c_1 m-4">
							CÁNADA
						</p>
						<p class="font-casper col-span-3 text-white m-4">
							MÉXICO
						</p>
						<p class="font-casper col-span-3 text-white m-4">
							BRASIL
						</p>
						<p class="font-casper col-span-3 text-white m-4">
							PREÚ
						</p>
						<p class="font-casper col-span-3 text-white m-4">
							CHILE
						</p>
						<p class="font-casper col-span-3 text-white m-4">
							ARGENTINA
						</p>
					</div>
					<div class="grid grid-rows-2 md:grid-rows-3 grid-flow-col">
						<p class="font-casper col-span-3 text-white m-4">
							CÁNADA
						</p>
						<p class="font-casper col-span-3 text-white m-4">
							MÉXICO
						</p>
						<p class="font-casper col-span-3 text-white m-4">
							BRASIL
						</p>
						<p class="font-casper col-span-3 text-white m-4">
							PREÚ
						</p>
						<p class="font-casper col-span-3 text-white m-4">
							CHILE
						</p>
						<p class="font-casper col-span-3 text-white m-4">
							ARGENTINA
						</p>
					</div>
				</div>

				<div class="grid md:hidden grid-row-6 grid-flow-col gap-4">
                	<div>
                		<img src="../../assets/images/home/2.png"/>
                	</div>
                	<div>
                		<img src="../../assets/images/home/1.png"/>
                	</div>
                </div>
			</div>
			<div class="hidden md:flex md:col-span-6 lg:col-span-6 p-16 bg-white">
				<div class="flex flex-row md:flex-col">
					<div class="text-center">
	                    <img src="../../assets/images/about/2.png" class="w-3/4">
	                </div>
	                <div class="grid md:grid-cols-12 mt-20">
	                	<div class="md:col-span-6 lg:col-span-6">
	                		<img class="rounded-full mb-4" src="../../assets/images/about/3.png" />
	                		<p class="c_2 font-casper">ARÁNDANO</p>
	                	</div>
	                	<div class="md:col-span-6 lg:col-span-6">
	                		<img class="rounded-full mb-4" src="../../assets/images/about/4.png" />
	                		<p class="c_2 font-casper">LINAZA ENTERA</p>
	                	</div>
	                </div>
				</div>
			</div>
		</div>

		<div class="grid md:grid-cols-12 bg-white">
			<div class="md:col-span-12 lg:col-span-12 text-center p-6 md:p-16">
				<p class="c_2 font-casper text-base sm:text-xl lg:text-4xl">
					En un ambiente de inocuidad, con maquinaria de última tecnología <br>
					y bajo una constante búsqueda de estrategias que permitan <br>
					la excelencia en la calidad de los productos procesados, <br>
					es lo que permite ofrecer la satisfacción de los clientes <br>
					y consumidores de todo el país.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	import clip_1 from '../../assets/videos/about/about.mp4';
	import Video from '../../components/media/Index.vue';
	export default {
		name: 'about',
		components: {
			Video
		},
		data() {
			return {
				clip_1
			}
		}
	};
</script>

<style>
	.c_1 {
		color: #96D752;
	}
	.c_2 {
		color: #002554;
	}
</style>