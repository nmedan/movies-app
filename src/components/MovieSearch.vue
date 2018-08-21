<template>
   <input type="text" @input="searchTermUpdate"/>
</template>

<script>

export default {
    methods: {
        searchTermUpdate(event) {
            this.$emit('searchTermUpdated', event.target.value)
        }
    }
}
</script>