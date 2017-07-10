<template>
    <div>
      <c-pane v-if="$route.path === '/demo'">
        <c-group v-for="demo in demos" :title="__(demo.title)" :cells="demo.cells"></c-group>
        <c-title>调试二维码</c-title>
        
      </c-pane>
      <router-view class="router-view" transition="slide-up" keep-alive></router-view>
    </div>
</template>

<script>
  import CPane from 'components/c-pane'
  import CGroup from 'components/c-group'
  import CTitle from 'components/c-title'
  
  export default {
    data(){
      return {
      }
    },
    computed: {
      demos () {
        const { router } = this.$route
        return [{
          title: 'view.home.example',
          cells: [{
            label: 'form',
            value: this.__('demo.form'),
            click () {
              router.go('/demo/form')
            },
            extra: {
              isLink: true
            }
          }, {
            icon: 'chart',
            label: 'chart',
            value: this.__('demo.charts'),
            click () {
              router.go('/demo/chart')
            },
            extra: {
              isLink: true
            }
          }, {
            value: this.__('demo.misc'),
            click () {
              router.go('/demo/misc')
            },
            extra: {
              isLink: true,
              isHTML: true
            }
          }, {
            label: 'swipe',
            value: this.__('demo.swipe'),
            click () {
              router.go('/demo/swipe')
            },
            extra: {
              isLink: true
            }
          },{
            label: 'iscroll',
            value: this.__('demo.iscroll'),
            click () {
              router.go('/demo/iscroll')
            },
            extra: {
              isLink: true
            }
          },{
            label: 'loadmore',
            value: this.__('demo.loadmore'),
            click () {
              router.go('/demo/loadmore')
            },
            extra: {
              isLink: true
            }
          },{
            label: 'pullup',
            value: this.__('demo.pullup'),
            click () {
              router.go('/demo/pullup')
            },
            extra: {
              isLink: true
            }
          },{
            label: 'pulldown',
            value: this.__('demo.pulldown'),
            click () {
              router.go('/demo/pulldown')
            },
            extra: {
              isLink: true
            }
          },{
            label: 'loadmore',
            value: this.__('demo.loadmore'),
            click () {
              router.go('/demo/loadmore')
            },
            extra: {
              isLink: true
            }
          },
          {
            label: 'menubar',
            value: this.__('demo.menubar'),
            click () {
              router.go('/demo/menubar')
            },
            extra: {
              isLink: true
            }
          },
          {
            label: 'cell',
            value: this.__('demo.cell'),
            click () {
              router.go('/demo/cell')
            },
            extra: {
              isLink: true
            }
          },
          {
            label: 'checklist',
            value: this.__('demo.checklist'),
            click () {
              router.go('/demo/checklist')
            },
            extra: {
              isLink: true
            }
          },{
            label: 'header',
            value: this.__('demo.header'),
            click () {
              router.go('/demo/header')
            },
            extra: {
              isLink: true
            }
          },]
        }]
      }
    },
    methods: {
    },
    components: {
      CPane,
      CGroup,
      CTitle
    }
}
</script>