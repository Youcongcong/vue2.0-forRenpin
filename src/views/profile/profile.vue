<template>
    <div class="profile">
        <div class="details">
            <ul class="in-list bdbr-1px bdbt-1px">
                <li>
                    <div class="in-item  my-item">
                        <div class="couponIn-icon w-18">
                            <img src="../../images/v1/lock.png"></div>
                        <div class="in-item-info my-item bdbr-1px">
                            <div class="fl">
                                <span class="profile-Order">京东火车票</span>
                            </div>
                            <div class="frddd">
                                <span class="profile-AllOrder">来京东轻松抢票</span>
                                <span class="profile-arrow"></span>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="in-item  my-item">
                        <div class="couponIn-icon w-18">
                            <img src="../../images/v1/desigin.png"></div>
                        <div class="in-item-info my-item bdbr-1px">
                            <div class="fl">
                                <span class="profile-Order">1元抢宝</span>
                            </div>
                            <div class="frddd">
                                <span class="profile-AllOrder">1元成就梦想</span>
                                <span class="profile-arrow"></span>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="in-item  my-item">
                        <div class="couponIn-icon w-18">
                            <img src="../../images/v1/bancheck.png"></div>
                        <div class="in-item-info my-item bdbr-1px">
                            <div class="fl">
                                <span class="profile-Order">我的预约</span>
                            </div>
                            <div class="frddd">
                                <span class="profile-AllOrder"></span>
                                <span class="profile-arrow"></span>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="in-item  my-item">
                        <div class="couponIn-icon w-18">
                            <img src="../../images/v1/cleardom.png"></div>
                        <div class="in-item-info my-item bdbr-1px">
                            <div class="fl">
                                <span class="profile-Order">我的必购码</span>
                            </div>
                            <div class="frddd">
                                <span class="profile-AllOrder"></span>
                                <span class="profile-arrow"></span>
                            </div>
                        </div>
                    </div>
                </li>
    
            </ul>
        </div>
    </div>
</template>

<script>
    
</script>

<style lang="scss">
    .in-list {
        width: 100%;
        background-color: white;
        overflow: hidden;
        position: relative;
    }
    
    .bdbt-1px:before {
        height: 1px;
        content: '';
        width: 100%;
        border-bottom: 1px solid #e3e5e9;
        position: absolute;
        top: -1px;
        left: 0;
        transform: scaleY(.5);
        -webkit-transform: scaleY(.5);
        z-index: 10;
    }
    
    .in-list li {
        list-style-type: none;
    }
    
    .in-list .in-item {
        height: 44px;
        line-height: 44px;
        padding: 0 0 0 10px;
        width: 100%;
        overflow: hidden;
        display: -webkit-box;
        display: -moz-box;
        vertical-align: middle;
    }
    
    .w-18 {
        width: 18px;
    }
    
    .couponIn-icon {
        height: 100%;
        display: table-cell;
        margin-right: 10px;
        line-height: 44px;
        vertical-align: top;
    }
    
    .couponIn-icon img {
        width: 100%;
        vertical-align: middle;
    }
    
    .in-item .in-item-info {
        vertical-align: middle;
        padding-right: 10px;
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        margin-left: 10px;
        position: relative;
    }
    
    .in-item-info span {
        display: inline-block;
        vertical-align: middle;
    }
    
    .profile-Order {
        font-size: 14px;
        color: #232326;
    }
    
    .fl {
        float: left;
        font-size: 0;
    }
    
    .frddd {
        float: right;
        font-size: 0;
        margin-right: 2%
    }
    
    .in-item-info span {
        display: inline-block;
        vertical-align: middle;
    }
    
    .profile-AllOrder {
        font-size: 12px;
        color: #848689;
        margin-right: 3px;
    }
    
    .profile-arrow {
        width: 11px;
        height: 15px;
        background-position: 0 -20px;
        vertical-align: middle;
        margin-top: 2px;
        display: block;
        background: url(../../images/v1/nextpre.png) no-repeat;
        background-size: 8px 15px;
    }
    
    .bdbr-1px:after {
        height: 1px;
        content: '';
        width: 100%;
        border-top: 1px solid #e3e5e9;
        position: absolute;
        bottom: -1px;
        right: 0;
        transform: scaleY(.5);
        -webkit-transform: scaleY(.5);
        z-index: 10;
    }
</style>