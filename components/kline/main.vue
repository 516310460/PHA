 <script>
import "./css/main.css";
// import Kline from "./js/kline.js";
const VueKline = {
  name: "main",
  props: {
    klineParams: {
      type: Object,
      default: {}
    },
    klineData: {
      type: Object,
      default: {}
    },
  },
  data () {
    return {
      cfg: {
        element: "#kline_container",
        width: this.klineParams.width,
        height: this.klineParams.height,
        theme: this.klineParams.theme,
        language: this.klineParams.language,
        ranges: this.klineParams.ranges,
        symbol: this.klineParams.symbol,
        symbolName: this.klineParams.symbolName,
        limit: 1000,
        count: this.klineParams.count,
        intervalTime: this.klineParams.intervalTime,
        debug: false,
        depthWidth: this.klineParams.depthWidth,
        onRequestData: this.onRequestData,
        onRangeChange: this.onRangeChange
      },
      kline: null
    };
  },
  mounted () {
    this.$nextTick(() => {
      let that = this
      setTimeout(() => {
        that.kline = new this.$Kline(that.cfg);
        that.kline.draw();
      }, 300)
      window.onload = function () {
        that.kline = new that.$Kline(that.cfg);
        that.kline.draw();
      }
    })
  },
  render () {
    return (
      <div id="kline_container">
        <div class="chart_container dark">
          <div id="chart_toolpanel">
            <div class="chart_toolpanel_separator" />
            <div class="clear_all">
              <div class="clear_all_icon" id="clearCanvas" />
              <div class="chart_toolpanel_tip chart_str_clear_all">
                清除全部
              </div>
            </div>
            <div class="chart_toolpanel_button">
              <div
                class="chart_toolpanel_icon"
                id="chart_Cursor"
                name="Cursor"
              />
              <div class="chart_toolpanel_tip chart_str_cursor">光标</div>
            </div>
            <div class="chart_toolpanel_button">
              <div
                class="chart_toolpanel_icon"
                id="chart_CrossCursor"
                name="CrossCursor"
              />
              <div class="chart_toolpanel_tip chart_str_cross_cursor">
                十字光标
              </div>
            </div>
            <div class="chart_toolpanel_button">
              <div
                class="chart_toolpanel_icon"
                id="chart_SegLine"
                name="SegLine"
              />
              <div class="chart_toolpanel_tip chart_str_seg_line">线段</div>
            </div>
            <div class="chart_toolpanel_button">
              <div
                class="chart_toolpanel_icon"
                id="chart_StraightLine"
                name="StraightLine"
              />
              <div class="chart_toolpanel_tip chart_str_straight_line">
                直线
              </div>
            </div>
            <div class="chart_toolpanel_button">
              <div
                class="chart_toolpanel_icon"
                id="chart_RayLine"
                name="RayLine"
              />
              <div class="chart_toolpanel_tip chart_str_ray_line">射线</div>
            </div>
            <div class="chart_toolpanel_button">
              <div
                class="chart_toolpanel_icon"
                id="chart_ArrowLine"
                name="ArrowLine"
              />
              <div class="chart_toolpanel_tip chart_str_arrow_line">箭头</div>
            </div>
            <div class="chart_toolpanel_button">
              <div
                class="chart_toolpanel_icon"
                id="chart_HoriSegLine"
                name="HoriSegLine"
              />
              <div class="chart_toolpanel_tip chart_str_horz_seg_line">
                水平线段
              </div>
            </div>
            <div class="chart_toolpanel_button">
              <div
                class="chart_toolpanel_icon"
                id="chart_HoriStraightLine"
                name="HoriStraightLine"
              />
              <div class="chart_toolpanel_tip chart_str_horz_straight_line">
                水平直线
              </div>
            </div>
            <div class="chart_toolpanel_button">
              <div
                class="chart_toolpanel_icon"
                id="chart_HoriRayLine"
                name="HoriRayLine"
              />
              <div class="chart_toolpanel_tip chart_str_horz_ray_line">
                水平射线
              </div>
            </div>
            <div class="chart_toolpanel_button">
              <div
                class="chart_toolpanel_icon"
                id="chart_VertiStraightLine"
                name="VertiStraightLine"
              />
              <div class="chart_toolpanel_tip chart_str_vert_straight_line">
                垂直直线
              </div>
            </div>
            <div class="chart_toolpanel_button">
              <div
                class="chart_toolpanel_icon"
                id="chart_PriceLine"
                name="PriceLine"
              />
              <div class="chart_toolpanel_tip chart_str_price_line">价格线</div>
            </div>
            <div class="chart_toolpanel_button">
              <div
                class="chart_toolpanel_icon"
                id="chart_TriParallelLine"
                name="TriParallelLine"
              />
              <div class="chart_toolpanel_tip chart_str_tri_parallel_line">
                价格通道线
              </div>
            </div>
            <div class="chart_toolpanel_button">
              <div
                class="chart_toolpanel_icon"
                id="chart_BiParallelLine"
                name="BiParallelLine"
              />
              <div class="chart_toolpanel_tip chart_str_bi_parallel_line">
                平行直线
              </div>
            </div>
            <div class="chart_toolpanel_button">
              <div
                class="chart_toolpanel_icon"
                id="chart_BiParallelRayLine"
                name="BiParallelRayLine"
              />
              <div class="chart_toolpanel_tip chart_str_bi_parallel_ray">
                平行射线
              </div>
            </div>
            <div class="chart_toolpanel_button">
              <div
                class="chart_toolpanel_icon"
                id="chart_DrawFibRetrace"
                name="DrawFibRetrace"
              />
              <div class="chart_toolpanel_tip chart_str_fib_retrace">
                斐波纳契回调
              </div>
            </div>
            <div class="chart_toolpanel_button">
              <div
                class="chart_toolpanel_icon"
                id="chart_DrawFibFans"
                name="DrawFibFans"
              />
              <div class="chart_toolpanel_tip chart_str_fib_fans">
                斐波纳契扇形
              </div>
            </div>
          </div>
          <div class="absolute opacity-10 z-10 text-center">
            <img
              src="/img/Home/logo.svg"
              class="w-64 mx-auto"
              alt="logo"
            />
          </div>
          <div id="chart_canvasGroup" class="temp">
            <canvas
              class="chart_canvas"
              id="chart_mainCanvas"
              style={{
                cursor: "default"
              }}
            />
            <canvas
              class="chart_canvas"
              id="chart_overlayCanvas"
              style={{
                cursor: "default"
              }}
            />
          </div>
          <div id="chart_tabbar">
            <ul>
              <li>
                <a name="VOLUME" class="">
                  VOLUME
                </a>
              </li>
              <li>
                <a name="MACD" class="">
                  MACD
                </a>
              </li>
              <li>
                <a name="KDJ" class="">
                  KDJ
                </a>
              </li>
              <li>
                <a name="StochRSI" class="">
                  StochRSI
                </a>
              </li>
              <li>
                <a name="RSI" class="">
                  RSI
                </a>
              </li>
              <li>
                <a name="DMI" class="">
                  DMI
                </a>
              </li>
              <li>
                <a name="OBV" class="">
                  OBV
                </a>
              </li>
              <li>
                <a name="BOLL" class="">
                  BOLL
                </a>
              </li>
              <li>
                <a name="SAR" class="">
                  SAR
                </a>
              </li>
              <li>
                <a name="DMA" class="">
                  DMA
                </a>
              </li>
              <li>
                <a name="TRIX" class="">
                  TRIX
                </a>
              </li>
              <li>
                <a name="BRAR" class="">
                  BRAR
                </a>
              </li>
              <li>
                <a name="VR" class="">
                  VR
                </a>
              </li>
              <li>
                <a name="EMV" class="">
                  EMV
                </a>
              </li>
              <li>
                <a name="WR" class="">
                  WR
                </a>
              </li>
              <li>
                <a name="ROC" class="">
                  ROC
                </a>
              </li>
              <li>
                <a name="MTM" class="">
                  MTM
                </a>
              </li>
              <li>
                <a name="PSY">PSY</a>
              </li>
            </ul>
          </div>
          <div id="chart_parameter_settings">
            <h2 class="chart_str_indicator_parameters">指标参数设置</h2>
            <table>
              <tbody>
                <tr>
                  <th>MA</th>
                  <td>
                    <input name="MA" />
                    <input name="MA" />
                    <input name="MA" />
                    <input name="MA" />
                    <input name="MA" />
                    <input name="MA" />
                  </td>
                  <td>
                    <button class="chart_str_default">默认值</button>
                  </td>
                  <th>DMA</th>
                  <td>
                    <input name="DMA" />
                    <input name="DMA" />
                    <input name="DMA" />
                  </td>
                  <td>
                    <button class="chart_str_default">默认值</button>
                  </td>
                </tr>
                <tr>
                  <th>EMA</th>
                  <td>
                    <input name="EMA" />
                    <input name="EMA" />
                    <input name="EMA" />
                    <input name="EMA" />
                    <input name="EMA" />
                    <input name="EMA" />
                  </td>
                  <td>
                    <button class="chart_str_default">默认值</button>
                  </td>
                  <th>TRIX</th>
                  <td>
                    <input name="TRIX" />
                    <input name="TRIX" />
                  </td>
                  <td>
                    <button class="chart_str_default">默认值</button>
                  </td>
                </tr>

                <tr>
                  <th>VOLUME</th>
                  <td>
                    <input name="VOLUME" />
                    <input name="VOLUME" />
                  </td>
                  <td>
                    <button class="chart_str_default">默认值</button>
                  </td>
                  <th>BRAR</th>
                  <td>
                    <input name="BRAR" />
                  </td>
                  <td>
                    <button class="chart_str_default">默认值</button>
                  </td>
                </tr>
                <tr>
                  <th>MACD</th>
                  <td>
                    <input name="MACD" />
                    <input name="MACD" />
                    <input name="MACD" />
                  </td>
                  <td>
                    <button class="chart_str_default">默认值</button>
                  </td>
                  <th>VR</th>
                  <td>
                    <input name="VR" />
                    <input name="VR" />
                  </td>
                  <td>
                    <button class="chart_str_default">默认值</button>
                  </td>
                </tr>
                <tr>
                  <th>KDJ</th>
                  <td>
                    <input name="KDJ" />
                    <input name="KDJ" />
                    <input name="KDJ" />
                  </td>
                  <td>
                    <button class="chart_str_default">默认值</button>
                  </td>
                  <th>EMV</th>
                  <td>
                    <input name="EMV" />
                    <input name="EMV" />
                  </td>
                  <td>
                    <button class="chart_str_default">默认值</button>
                  </td>
                </tr>
                <tr>
                  <th>StochRSI</th>
                  <td>
                    <input name="StochRSI" />
                    <input name="StochRSI" />
                    <input name="StochRSI" />
                    <input name="StochRSI" />
                  </td>
                  <td>
                    <button class="chart_str_default">默认值</button>
                  </td>
                  <th>WR</th>
                  <td>
                    <input name="WR" />
                    <input name="WR" />
                  </td>
                  <td>
                    <button class="chart_str_default">默认值</button>
                  </td>
                </tr>
                <tr>
                  <th>RSI</th>
                  <td>
                    <input name="RSI" />
                    <input name="RSI" />
                    <input name="RSI" />
                  </td>
                  <td>
                    <button class="chart_str_default">默认值</button>
                  </td>
                  <th>ROC</th>
                  <td>
                    <input name="ROC" />
                    <input name="ROC" />
                  </td>
                  <td>
                    <button class="chart_str_default">默认值</button>
                  </td>
                </tr>
                <tr>
                  <th>DMI</th>
                  <td>
                    <input name="DMI" />
                    <input name="DMI" />
                  </td>
                  <td>
                    <button class="chart_str_default">默认值</button>
                  </td>
                  <th>MTM</th>
                  <td>
                    <input name="MTM" />
                    <input name="MTM" />
                  </td>
                  <td>
                    <button class="chart_str_default">默认值</button>
                  </td>
                </tr>
                <tr>
                  <th>OBV</th>
                  <td>
                    <input name="OBV" />
                  </td>
                  <td>
                    <button class="chart_str_default">默认值</button>
                  </td>
                  <th>PSY</th>
                  <td>
                    <input name="PSY" />
                    <input name="PSY" />
                  </td>
                  <td>
                    <button class="chart_str_default">默认值</button>
                  </td>
                </tr>
                <tr>
                  <th>BOLL</th>
                  <td>
                    <input name="BOLL" />
                  </td>
                  <td>
                    <button class="chart_str_default">默认值</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div id="close_settings">
              <a class="chart_str_close">关闭</a>
            </div>
          </div>
          <div id="chart_loading" class="chart_str_loading">
            正在读取数据...
          </div>
        </div>
        <div
          style={{
            display: "none"
          }}
          id="chart_language_switch_tmp"
        >
          <span
            name="chart_str_period"
            zh_tw="週期"
            zh_cn="周期"
            en_us="TIME"
          />
          <span
            name="chart_str_period_line"
            zh_tw="分時"
            zh_cn="分时"
            en_us="Line"
          />
          <span
            name="chart_str_period_1m"
            zh_tw="1分鐘"
            zh_cn="1分钟"
            en_us="1m"
          />
          <span
            name="chart_str_period_3m"
            zh_tw="3分鐘"
            zh_cn="3分钟"
            en_us="3m"
          />
          <span
            name="chart_str_period_5m"
            zh_tw="5分鐘"
            zh_cn="5分钟"
            en_us="5m"
          />
          <span
            name="chart_str_period_15m"
            zh_tw="15分鐘"
            zh_cn="15分钟"
            en_us="15m"
          />
          <span
            name="chart_str_period_30m"
            zh_tw="30分鐘"
            zh_cn="30分钟"
            en_us="30m"
          />
          <span
            name="chart_str_period_1h"
            zh_tw="1小時"
            zh_cn="1小时"
            en_us="1h"
          />
          <span
            name="chart_str_period_2h"
            zh_tw="2小時"
            zh_cn="2小时"
            en_us="2h"
          />
          <span
            name="chart_str_period_4h"
            zh_tw="4小時"
            zh_cn="4小时"
            en_us="4h"
          />
          <span
            name="chart_str_period_6h"
            zh_tw="6小時"
            zh_cn="6小时"
            en_us="6h"
          />
          <span
            name="chart_str_period_12h"
            zh_tw="12小時"
            zh_cn="12小时"
            en_us="12h"
          />
          <span
            name="chart_str_period_1d"
            zh_tw="日線"
            zh_cn="日线"
            en_us="1d"
          />
          <span name="chart_str_period_3d" zh_tw="3日" zh_cn="3日" en_us="3d" />
          <span
            name="chart_str_period_1w"
            zh_tw="周線"
            zh_cn="周线"
            en_us="1w"
          />
          <span
            name="chart_str_settings"
            zh_tw="更多"
            zh_cn="更多"
            en_us="MORE"
          />
          <span
            name="chart_setting_main_indicator"
            zh_tw="均線設置"
            zh_cn="均线设置"
            en_us="Main Indicator"
          />
          <span
            name="chart_setting_main_indicator_none"
            zh_tw="關閉均線"
            zh_cn="关闭均线"
            en_us="None"
          />
          <span
            name="chart_setting_indicator_parameters"
            zh_tw="指標參數設置"
            zh_cn="指标参数设置"
            en_us="Indicator Parameters"
          />
          <span
            name="chart_str_chart_style"
            zh_tw="主圖樣式"
            zh_cn="主图样式"
            en_us="Chart Style"
          />
          <span
            name="chart_str_main_indicator"
            zh_tw="主指標"
            zh_cn="主指标"
            en_us="Main Indicator"
          />
          <span
            name="chart_str_indicator"
            zh_tw="技術指標"
            zh_cn="技术指标"
            en_us="Indicator"
          />
          <span
            name="chart_str_indicator_cap"
            zh_tw="技術指標"
            zh_cn="技术指标"
            en_us="INDICATOR"
          />
          <span
            name="chart_str_tools"
            zh_tw="畫線工具"
            zh_cn="画线工具"
            en_us="Tools"
          />
          <span
            name="chart_str_tools_cap"
            zh_tw="畫線工具"
            zh_cn="画线工具"
            en_us="TOOLS"
          />
          <span
            name="chart_str_theme"
            zh_tw="主題選擇"
            zh_cn="主题选择"
            en_us="Theme"
          />
          <span
            name="chart_str_theme_cap"
            zh_tw="主題選擇"
            zh_cn="主题选择"
            en_us="THEME"
          />
          <span
            name="chart_language_setting"
            zh_tw="語言(LANG)"
            zh_cn="语言(LANG)"
            en_us="LANGUAGE"
          />
          <span
            name="chart_str_depth_cap"
            zh_tw="深度圖"
            zh_cn="深度图"
            en_us="DEPTH"
          />

          <span name="chart_str_none" zh_tw="關閉" zh_cn="关闭" en_us="None" />
          <span
            name="chart_str_theme_dark"
            zh_tw="深色主題"
            zh_cn="深色主题"
            en_us="Dark"
          />
          <span
            name="chart_str_theme_light"
            zh_tw="淺色主題"
            zh_cn="浅色主题"
            en_us="Light"
          />
          <span name="chart_str_on" zh_tw="開啟" zh_cn="开启" en_us="On" />
          <span name="chart_str_off" zh_tw="關閉" zh_cn="关闭" en_us="Off" />
          <span
            name="chart_str_close"
            zh_tw="關閉"
            zh_cn="关闭"
            en_us="CLOSE"
          />
          <span
            name="chart_str_default"
            zh_tw="默認值"
            zh_cn="默认值"
            en_us="default"
          />
          <span
            name="chart_str_loading"
            zh_tw="正在讀取數據..."
            zh_cn="正在读取数据..."
            en_us="Loading..."
          />
          <span
            name="chart_str_indicator_parameters"
            zh_tw="指標參數設置"
            zh_cn="指标参数设置"
            en_us="Indicator Parameters"
          />
          <span
            name="chart_str_cursor"
            zh_tw="光標"
            zh_cn="光标"
            en_us="Cursor"
          />
          <span
            name="chart_str_cross_cursor"
            zh_tw="十字光標"
            zh_cn="十字光标"
            en_us="Cross Cursor"
          />
          <span
            name="chart_str_seg_line"
            zh_tw="線段"
            zh_cn="线段"
            en_us="Trend Line"
          />
          <span
            name="chart_str_straight_line"
            zh_tw="直線"
            zh_cn="直线"
            en_us="Extended"
          />
          <span
            name="chart_str_ray_line"
            zh_tw="射線"
            zh_cn="射线"
            en_us="Ray"
          />
          <span
            name="chart_str_arrow_line"
            zh_tw="箭頭"
            zh_cn="箭头"
            en_us="Arrow"
          />
          <span
            name="chart_str_horz_seg_line"
            zh_tw="水平線段"
            zh_cn="水平线段"
            en_us="Horizontal Line"
          />
          <span
            name="chart_str_horz_straight_line"
            zh_tw="水平直線"
            zh_cn="水平直线"
            en_us="Horizontal Extended"
          />
          <span
            name="chart_str_horz_ray_line"
            zh_tw="水平射線"
            zh_cn="水平射线"
            en_us="Horizontal Ray"
          />
          <span
            name="chart_str_vert_straight_line"
            zh_tw="垂直直線"
            zh_cn="垂直直线"
            en_us="Vertical Extended"
          />
          <span
            name="chart_str_price_line"
            zh_tw="價格線"
            zh_cn="价格线"
            en_us="Price Line"
          />
          <span
            name="chart_str_tri_parallel_line"
            zh_tw="價格通道線"
            zh_cn="价格通道线"
            en_us="Parallel Channel"
          />
          <span
            name="chart_str_bi_parallel_line"
            zh_tw="平行直線"
            zh_cn="平行直线"
            en_us="Parallel Lines"
          />
          <span
            name="chart_str_bi_parallel_ray"
            zh_tw="平行射線"
            zh_cn="平行射线"
            en_us="Parallel Rays"
          />
          <span
            name="chart_str_fib_retrace"
            zh_tw="斐波納契回調"
            zh_cn="斐波纳契回调"
            en_us="Fibonacci Retracements"
          />
          <span
            name="chart_str_fib_fans"
            zh_tw="斐波納契扇形"
            zh_cn="斐波纳契扇形"
            en_us="Fibonacci Fans"
          />
          <span
            name="chart_str_clear_all"
            zh_tw="清除全部"
            zh_cn="清除全部"
            en_us="Clear All"
          />
        </div>
      </div>
    );
  },
  methods: {
    // 重新绘制线条
    redraw () {
      this.kline.draw();
    },
    // 设置画布大小
    resize (w, h) {
      this.kline.resize(w, h);
    },
    // 设置交易品种
    setSymbol (symbol, symbolName) {
      this.kline.setSymbol(symbol, symbolName);
    },
    // 设置主题
    setTheme (style) {
      this.kline.setTheme(style);
    },
    // 设置语言
    setLanguage (lang) {
      this.kline.setLanguage(lang);
    },
    // 设置请求间隔时间(ms)
    setIntervalTime (intervalTime) {
      this.kline.setIntervalTime(intervalTime);
    },
    // 设置深度图宽度
    onRangeChange (range) {
      this.$emit("refreshKlineData", range);
      return range;
    },
    // 聚合时间改变时触发(ms)
    onRequestData (param, callback) {
      let data = this.klineData;
      callback(data);
    }
  }
};
export default VueKline;
</script>
