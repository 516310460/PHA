import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Example05Mirrored: () => import('../../components/Example05Mirrored.vue' /* webpackChunkName: "components/example05-mirrored" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  NDropdowns: () => import('../../components/NDropdowns.vue' /* webpackChunkName: "components/n-dropdowns" */).then(c => wrapFunctional(c.default || c)),
  NavMenu: () => import('../../components/NavMenu.vue' /* webpackChunkName: "components/nav-menu" */).then(c => wrapFunctional(c.default || c)),
  NetWorkError: () => import('../../components/NetWorkError.vue' /* webpackChunkName: "components/net-work-error" */).then(c => wrapFunctional(c.default || c)),
  Notice: () => import('../../components/Notice.vue' /* webpackChunkName: "components/notice" */).then(c => wrapFunctional(c.default || c)),
  SlideVerify: () => import('../../components/SlideVerify.vue' /* webpackChunkName: "components/slide-verify" */).then(c => wrapFunctional(c.default || c)),
  HashRateDepthChart: () => import('../../components/HashRate/depth-chart.vue' /* webpackChunkName: "components/hash-rate-depth-chart" */).then(c => wrapFunctional(c.default || c)),
  HashRateDetailsList: () => import('../../components/HashRate/details-list.vue' /* webpackChunkName: "components/hash-rate-details-list" */).then(c => wrapFunctional(c.default || c)),
  HashRateEntrust: () => import('../../components/HashRate/entrust.vue' /* webpackChunkName: "components/hash-rate-entrust" */).then(c => wrapFunctional(c.default || c)),
  HashRateKnockdown: () => import('../../components/HashRate/knockdown.vue' /* webpackChunkName: "components/hash-rate-knockdown" */).then(c => wrapFunctional(c.default || c)),
  HashRateLimit: () => import('../../components/HashRate/limit.vue' /* webpackChunkName: "components/hash-rate-limit" */).then(c => wrapFunctional(c.default || c)),
  HashRateMarket: () => import('../../components/HashRate/market.vue' /* webpackChunkName: "components/hash-rate-market" */).then(c => wrapFunctional(c.default || c)),
  HashRateOrderListAssetFull: () => import('../../components/HashRate/order-list-asset-full.vue' /* webpackChunkName: "components/hash-rate-order-list-asset-full" */).then(c => wrapFunctional(c.default || c)),
  HashRateOrderListEntrustFullHistory: () => import('../../components/HashRate/order-list-entrust-full-history.vue' /* webpackChunkName: "components/hash-rate-order-list-entrust-full-history" */).then(c => wrapFunctional(c.default || c)),
  HashRateOrderListEntrustFull: () => import('../../components/HashRate/order-list-entrust-full.vue' /* webpackChunkName: "components/hash-rate-order-list-entrust-full" */).then(c => wrapFunctional(c.default || c)),
  HashRateOrderListFull: () => import('../../components/HashRate/order-list-full.vue' /* webpackChunkName: "components/hash-rate-order-list-full" */).then(c => wrapFunctional(c.default || c)),
  HashRateOrderListTransactionFull: () => import('../../components/HashRate/order-list-transaction-full.vue' /* webpackChunkName: "components/hash-rate-order-list-transaction-full" */).then(c => wrapFunctional(c.default || c)),
  HashRateStop: () => import('../../components/HashRate/stop.vue' /* webpackChunkName: "components/hash-rate-stop" */).then(c => wrapFunctional(c.default || c)),
  HashRateTradeView: () => import('../../components/HashRate/tradeView.vue' /* webpackChunkName: "components/hash-rate-trade-view" */).then(c => wrapFunctional(c.default || c)),
  HashRateXbitTrend: () => import('../../components/HashRate/xbitTrend.vue' /* webpackChunkName: "components/hash-rate-xbit-trend" */).then(c => wrapFunctional(c.default || c)),
  InProgress: () => import('../../components/InProgress/index.vue' /* webpackChunkName: "components/in-progress" */).then(c => wrapFunctional(c.default || c)),
  TVpublicDealHeader: () => import('../../components/TVpublic/deal-header.vue' /* webpackChunkName: "components/t-vpublic-deal-header" */).then(c => wrapFunctional(c.default || c)),
  TVpublicHashRateDealHeader: () => import('../../components/TVpublic/hashRate-deal-header.vue' /* webpackChunkName: "components/t-vpublic-hash-rate-deal-header" */).then(c => wrapFunctional(c.default || c)),
  TVpublicLoading: () => import('../../components/TVpublic/loading.vue' /* webpackChunkName: "components/t-vpublic-loading" */).then(c => wrapFunctional(c.default || c)),
  TVpublicNumber: () => import('../../components/TVpublic/number.vue' /* webpackChunkName: "components/t-vpublic-number" */).then(c => wrapFunctional(c.default || c)),
  TVpublicPageLoading: () => import('../../components/TVpublic/page-loading.vue' /* webpackChunkName: "components/t-vpublic-page-loading" */).then(c => wrapFunctional(c.default || c)),
  TVpublicSlider: () => import('../../components/TVpublic/slider.vue' /* webpackChunkName: "components/t-vpublic-slider" */).then(c => wrapFunctional(c.default || c)),
  TVpublicTradeDealHeader: () => import('../../components/TVpublic/trade-deal-header.vue' /* webpackChunkName: "components/t-vpublic-trade-deal-header" */).then(c => wrapFunctional(c.default || c)),
  DialogNicknameDialog: () => import('../../components/dialog/NicknameDialog.vue' /* webpackChunkName: "components/dialog-nickname-dialog" */).then(c => wrapFunctional(c.default || c)),
  DialogTipsDialog: () => import('../../components/dialog/TipsDialog.vue' /* webpackChunkName: "components/dialog-tips-dialog" */).then(c => wrapFunctional(c.default || c)),
  BuycoinsHeader: () => import('../../components/buycoins/Header.vue' /* webpackChunkName: "components/buycoins-header" */).then(c => wrapFunctional(c.default || c)),
  SelectSearchPhoneSearch: () => import('../../components/selectSearch/PhoneSearch.vue' /* webpackChunkName: "components/select-search-phone-search" */).then(c => wrapFunctional(c.default || c)),
  SelectSearchPopper: () => import('../../components/selectSearch/Popper.vue' /* webpackChunkName: "components/select-search-popper" */).then(c => wrapFunctional(c.default || c)),
  SelectSearch: () => import('../../components/selectSearch/SelectSearch.vue' /* webpackChunkName: "components/select-search" */).then(c => wrapFunctional(c.default || c)),
  SelectSearchText: () => import('../../components/selectSearch/text.vue' /* webpackChunkName: "components/select-search-text" */).then(c => wrapFunctional(c.default || c)),
  KlineMain: () => import('../../components/kline/main.vue' /* webpackChunkName: "components/kline-main" */).then(c => wrapFunctional(c.default || c)),
  HashRateDatafeedsDataUpdater: () => import('../../components/HashRate/datafeeds/dataUpdater.js' /* webpackChunkName: "components/hash-rate-datafeeds-data-updater" */).then(c => wrapFunctional(c.default || c)),
  HashRateDatafeedsDatafees: () => import('../../components/HashRate/datafeeds/datafees.js' /* webpackChunkName: "components/hash-rate-datafeeds-datafees" */).then(c => wrapFunctional(c.default || c)),
  HashRateDatafeedsSocket: () => import('../../components/HashRate/datafeeds/socket.js' /* webpackChunkName: "components/hash-rate-datafeeds-socket" */).then(c => wrapFunctional(c.default || c)),
  HashRateJsChartBase: () => import('../../components/HashRate/js/chart-base.js' /* webpackChunkName: "components/hash-rate-js-chart-base" */).then(c => wrapFunctional(c.default || c)),
  HashRateJsChartFeed: () => import('../../components/HashRate/js/chart-feed.js' /* webpackChunkName: "components/hash-rate-js-chart-feed" */).then(c => wrapFunctional(c.default || c)),
  HashRateJsChartProvider: () => import('../../components/HashRate/js/chart-provider.js' /* webpackChunkName: "components/hash-rate-js-chart-provider" */).then(c => wrapFunctional(c.default || c)),
  HashRateJsChartStream: () => import('../../components/HashRate/js/chart-stream.js' /* webpackChunkName: "components/hash-rate-js-chart-stream" */).then(c => wrapFunctional(c.default || c)),
  HashRateJsIndicators: () => import('../../components/HashRate/js/indicators.js' /* webpackChunkName: "components/hash-rate-js-indicators" */).then(c => wrapFunctional(c.default || c)),
  HashRateJsUtils: () => import('../../components/HashRate/js/utils.js' /* webpackChunkName: "components/hash-rate-js-utils" */).then(c => wrapFunctional(c.default || c)),
  KlineJsAreas: () => import('../../components/kline/js/areas.js' /* webpackChunkName: "components/kline-js-areas" */).then(c => wrapFunctional(c.default || c)),
  KlineJsChart: () => import('../../components/kline/js/chart.js' /* webpackChunkName: "components/kline-js-chart" */).then(c => wrapFunctional(c.default || c)),
  KlineJsChartManager: () => import('../../components/kline/js/chart_manager.js' /* webpackChunkName: "components/kline-js-chart-manager" */).then(c => wrapFunctional(c.default || c)),
  KlineJsChartSettings: () => import('../../components/kline/js/chart_settings.js' /* webpackChunkName: "components/kline-js-chart-settings" */).then(c => wrapFunctional(c.default || c)),
  KlineJsCname: () => import('../../components/kline/js/cname.js' /* webpackChunkName: "components/kline-js-cname" */).then(c => wrapFunctional(c.default || c)),
  KlineJsControl: () => import('../../components/kline/js/control.js' /* webpackChunkName: "components/kline-js-control" */).then(c => wrapFunctional(c.default || c)),
  KlineJsCpoint: () => import('../../components/kline/js/cpoint.js' /* webpackChunkName: "components/kline-js-cpoint" */).then(c => wrapFunctional(c.default || c)),
  KlineJsCtoolManager: () => import('../../components/kline/js/ctool_manager.js' /* webpackChunkName: "components/kline-js-ctool-manager" */).then(c => wrapFunctional(c.default || c)),
  KlineJsCtools: () => import('../../components/kline/js/ctools.js' /* webpackChunkName: "components/kline-js-ctools" */).then(c => wrapFunctional(c.default || c)),
  KlineJsDataProviders: () => import('../../components/kline/js/data_providers.js' /* webpackChunkName: "components/kline-js-data-providers" */).then(c => wrapFunctional(c.default || c)),
  KlineJsDataSources: () => import('../../components/kline/js/data_sources.js' /* webpackChunkName: "components/kline-js-data-sources" */).then(c => wrapFunctional(c.default || c)),
  KlineJsExprs: () => import('../../components/kline/js/exprs.js' /* webpackChunkName: "components/kline-js-exprs" */).then(c => wrapFunctional(c.default || c)),
  KlineJsIndicators: () => import('../../components/kline/js/indicators.js' /* webpackChunkName: "components/kline-js-indicators" */).then(c => wrapFunctional(c.default || c)),
  Kline: () => import('../../components/kline/js/kline.js' /* webpackChunkName: "components/kline" */).then(c => wrapFunctional(c.default || c)),
  KlineJsLayouts: () => import('../../components/kline/js/layouts.js' /* webpackChunkName: "components/kline-js-layouts" */).then(c => wrapFunctional(c.default || c)),
  KlineJsMevent: () => import('../../components/kline/js/mevent.js' /* webpackChunkName: "components/kline-js-mevent" */).then(c => wrapFunctional(c.default || c)),
  KlineJsNamedObject: () => import('../../components/kline/js/named_object.js' /* webpackChunkName: "components/kline-js-named-object" */).then(c => wrapFunctional(c.default || c)),
  KlineJsPlotters: () => import('../../components/kline/js/plotters.js' /* webpackChunkName: "components/kline-js-plotters" */).then(c => wrapFunctional(c.default || c)),
  KlineJsRanges: () => import('../../components/kline/js/ranges.js' /* webpackChunkName: "components/kline-js-ranges" */).then(c => wrapFunctional(c.default || c)),
  KlineJsTemplates: () => import('../../components/kline/js/templates.js' /* webpackChunkName: "components/kline-js-templates" */).then(c => wrapFunctional(c.default || c)),
  KlineJsThemes: () => import('../../components/kline/js/themes.js' /* webpackChunkName: "components/kline-js-themes" */).then(c => wrapFunctional(c.default || c)),
  KlineJsTimeline: () => import('../../components/kline/js/timeline.js' /* webpackChunkName: "components/kline-js-timeline" */).then(c => wrapFunctional(c.default || c)),
  KlineJsUtil: () => import('../../components/kline/js/util.js' /* webpackChunkName: "components/kline-js-util" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
