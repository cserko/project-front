<template>
    <div>
        <slot> </slot>
        <Pagination v-on:set-page="setPage" v-on:inc-page="incPage" v-on:dec-page="decPage" v-bind:paginationProp="paginationProp" />
    </div>
</template>


<script>
import Pagination from "./Pagination"
export default {
    name: "Paginator",
    components: {
        Pagination,
    },
    data(){ 
        return {
        pageNumber: 1, //offset
        totalPages: false,
        totalElementsListed: 1, //limit
        paginationProp : {
            totalPages:  this.totalPages,
            currentPage: this.pageNumber
            }
        
        }
   },
    props : ["postCount"],

    methods: {
        paginator(){
            this.totalPages = Math.ceil(this.postCount / this.totalElementsListed)
            this.paginationProp= {totalPages: this.totalPages, 
                                    currentPage: this.pageNumber
                                    }
            this.$emit('fetch', {
                offset: this.pageNumber,
                limit: this.totalElementsListed,
            });
        },
        setPage(pageNumber){
            this.pageNumber = pageNumber 
            this.updateder()

        },
        incPage(){
            if (this.pageNumber + 1 != this.totalPages + 1){
                this.pageNumber += 1 
                this.updateder()
            }

        },
        decPage(){
            if (this.pageNumber - 1 != 0){
                this.pageNumber -= 1 
                this.updateder()
            }
        },
        updateder(){
            console.log(this.pageNumber)
            this.paginator()
        }
    },
    beforeMount(){
        this.paginator()

    },

}
</script>
