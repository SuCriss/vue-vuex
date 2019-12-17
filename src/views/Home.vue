<template>
  <div class="home">
    <h1>m:{{this.orderListAlias}}</h1>
    <h1>authority:{{this.orderListAlias1}}</h1>
    <HelloWorld msg="修改尝试"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState('m',{
      orderListAlias:state=>state.count
    }),
    ...mapState('authority',{
      orderListAlias1:state=>state.count
    }),
    ...mapGetters('m',[
      'doubleCountm'
    ]),
    ...mapGetters('authority',[
      'doubleCount'
    ])
  },
  methods: {
    ...mapMutations('m',[
      'increment'
    ]),
    ...mapMutations('authority',{
      incrementa:'increment'
    }),
    ...mapActions('m',[
      'incrementIfOddOnRootSum'
    ]),
    ...mapActions('authority',{
      incrementIfOddOnRootSuma:'incrementIfOddOnRootSum'
    })
  },
  mounted() {
    this.increment()
    this.incrementa()
    this.incrementIfOddOnRootSum()
    this.incrementIfOddOnRootSuma()
  },
}
</script>
