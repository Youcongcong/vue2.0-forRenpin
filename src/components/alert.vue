 <template>
    <div class="alet_container">
	    <section class="tip_text_container">
            <!-- <div class="tip_icon">
            //     <span></span>
            //     <span></span>
            // </div> -->
            <div class="m-box">
		        <div class="m-duigou"></div>
	        </div>
            <p class="tip_text">{{alertText}}</p>
             <!--<div class="confrim" @click="closeTip">确认</div>-->
        </section>
    </div>
</template>

<script>
    export default {
    	data(){
            return{
                positionY: 0,
                timer: null,
            }
        },
        mounted(){
      
        },
        props: ['alertText'],
        methods: {
            closeTip(){
                this.$emit('closeTip')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~scss_page';
	@keyframes tipMove{
       0%   { transform: scale(1) }
       35%  { transform: scale(.8) }
       70%  { transform: scale(1.1) }
       100% { transform: scale(1) }
    }
    .alet_container{
    	position: fixed;
    	top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 200;
    }
    .tip_text_container{
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -6rem;
        margin-left: -6rem;
        width: 12rem;
        animation: tipMove .4s ;
        background-color: rgba(255,255,255,1);
        border: 1px;
        padding-top: .6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 1px;
        border-radius: 0.25rem;
        .tip_icon{
            @include wh(3rem, 3rem);
            border: 0.15rem solid #f8cb86;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            span:nth-of-type(1){
                @include wh(.12rem, 1.5rem);
                background-color: #f8cb86;
            }
            span:nth-of-type(2){
                @include wh(.2rem, .2rem);
                border: 1px;
                border-radius: 50%;
                margin-top: .2rem;
                background-color: #f8cb86;
            }
        }
        .tip_text{
            @include sc(.7rem, #333);
            line-height: .9rem;
            text-align: center;
            margin-top: .8rem;
            padding: 0 .4rem;
        }
        .confrim{
            @include sc(.8rem, #fff);
            font-weight: bold;
            margin-top: .8rem;
            background-color: #fa6666;
            width: 100%;
            text-align: center;
            line-height: 1.8rem;
            border: 1px;
            border-bottom-left-radius: 0.25rem;
            border-bottom-right-radius: 0.25rem;
        }
    }
        .m-box {
			width: 45px;
			height: 45px;
			position: relative;
			margin: 18px auto;
			background: #00ED70;
			border-radius: 50%;
		}

		.m-duigou {
			width: 26px;
			height: 14px;
			position: absolute;
			left: 50%;
			top: 50%;
			margin: -13px 0 0 -13px;
			-webkit-transform: rotate(-45deg);
			transform: rotate(-45deg);
			overflow: hidden;
		}

		.m-duigou:before,
		.m-duigou:after {
			content: "";
			position: absolute;
			background: #fff;
			border-radius: 2px
		}

		.m-duigou:before {
			width: 4px;
			height: 28px;
			border-radius: 32%;
			left: 0px;
			-webkit-animation: dgLeft 0.5s linear 0.4s .1 both;
			animation: dgLeft 0.5s linear 0.4s .1 both;
		}

		.m-duigou:after {
			width: 51px;
			height: 4px;
			bottom: 0;
			-webkit-animation: dgRight 0.5s linear 0.9s .1 both;
			animation: dgRight 0.5s linear 0.9s  .1 both
		}

		@-webkit-keyframes dgLeft {
			0% {
				top: -100%
			}
			100% {
				top: 0%
			}
		}

		@-webkit-keyframes dgLeft {
			0% {
				top: -100%
			}
			100% {
				top: 0%
			}
		}

		@-webkit-keyframes dgRight {
			0% {
				left: -100%
			}
			100% {
				left: 0%
			}
		}

		@-webkit-keyframes dgRight {
			0% {
				left: -100%
			}
			100% {
				left: 0%
			}
		}
</style>
