<template>
       <div v-if="movies.length>0">
            <button type="button" @click="previousPage" :disabled="pageNumber<=1" class="btn btn-primary">Previous</button>
            <button type="button" @click="nextPage" :disabled="pageNumber>=pagesLength" class="btn btn-primary">Next</button>	  
		   Page {{pageNumber}} of {{pagesLength}}
       </div>
</template>

<script>

export default {
    props:['pageNumber', 'movies', 'pagesLength'],
    data () {
        return  {
            styleBackground: {
                background:'lightblue'
            }
        }
    },
    methods: {
        nextPage() {
            this.$emit('setNextPage');
        },
        
        previousPage() {
            this.$emit('setPreviousPage')
        }
        
    }
}
</script>