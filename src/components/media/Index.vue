<template>
    <header class="hidden v-header" :style="paddingStyle">
        <video loop muted autoplay >
            <source :src="media" type="video/mp4" />
        </video>
    </header>
</template>

<script>
export default {
    name: 'home',
    props: {
        media :{
            required: true
        },
        padding: {
            type: Number,
            required: false,
            default: 100
        }
    },
    data() {
        return {
        }
    },
    computed: {
        paddingStyle() {
            return `padding-left: ${this.padding}px !important;
                    padding-right: ${this.padding}px !important;`
        }
    },
    created() {
        console.log("Init video component")
    }
};
</script>

<style lang="scss" scoped>

    .v-header{
        display: flex;
        align-items: center;
        color: #fff;
    }

    @media(min-width:992px){
        .v-header {
            max-width: 100%;
            min-width: 100%;
        }
    }
    
</style>




