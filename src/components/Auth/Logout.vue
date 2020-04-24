<template>
	<div></div>
</template>

<script>
    /* eslint-disable no-mixed-spaces-and-tabs */

    export default {
        name: "Logout",
        created () {
             this.$store.dispatch("destroyToken")
	                .then(()=>  this.$router.push('/login'));

	    }
    }
</script>

<style scoped>

</style>