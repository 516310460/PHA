<template>
  <div class="bk232F49 w-full loginBG flex items-center justify-center">
    <div class="loginRight">
      <nuxt-link
        :to="`/${locale}`"
        tag="a"
        class="flex_center router-link-active block"
      >
        <!-- <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAABLCAYAAADNnDMfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRBRjNCRUNDOUY0RjExRUI5Nzg3RUQ1RTkxRUZFOEIzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRBRjNCRUNEOUY0RjExRUI5Nzg3RUQ1RTkxRUZFOEIzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEFGM0JFQ0E5RjRGMTFFQjk3ODdFRDVFOTFFRkU4QjMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEFGM0JFQ0I5RjRGMTFFQjk3ODdFRDVFOTFFRkU4QjMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6qkqv4AAAL8ElEQVR42uxdC5RW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"
          alt=""
          class="login_logo"
        > -->
        <div class="text-center clffffff font-bold fs66">
          PHA
        </div>
      </nuxt-link>
      <div class="loginParameter mt10 mx-auto">
        <div class="loginParameter_title">
          <nuxt-link
            :to="`/${locale}/ResetPassword`"
            tag="a"
            class="router-link-exact-active router-link-active"
          >
            忘记密码
          </nuxt-link>
          <nuxt-link
            :to="`/${locale}/Login`"
            tag="a"
            class="loginParameter_active_r"
          >
            登录
          </nuxt-link>
        </div>
        <div class="login_list mt30">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlCOUVFM0I2Qjg2ODExRUI4N0JBRTc1N0U0OTM4RjkwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlCOUVFM0I3Qjg2ODExRUI4N0JBRTc1N0U0OTM4RjkwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUI5RUUzQjRCODY4MTFFQjg3QkFFNzU3RTQ5MzhGOTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUI5RUUzQjVCODY4MTFFQjg3QkFFNzU3RTQ5MzhGOTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz64Ih+NAAABtUlEQVR42tTVSyhEURzH8RmPFNlMFhKSIiVEYnZYSJIooZGNkgVJspgQRUopk7w2ykKJskEeZTUbIaFmgcRKs/JISDLp+h79b92mGeYOFm595pzOvf3mf849Z8aqaZrlt68Iyx9cUUtut422EznQhNXvOWuIeXc4juJjE3bcw/aDAp8Qr0/fLoMtUpEpjtLST/TT8aaHenGONbSHUyJLmE9zg2ecqNBEtKIJM8JMoJrhsRSVglcVGok0dR/NUu16iJldmMcyS1BL60OqvqVipF1EFarh/iZwABMYI9AhY0lqXfVQ4wnYkpdXgv0ggS4Mo49Ap2H8/avNf4B6FMuDyYZ7O+jGNkbNnKgsrGADHlyjHHvSTqMSzoAnKkjgmYRVy5hHKrRI1WobXmCSt+9jCVzGIvVKo6VNl8BL5Bm+KFemmi2B6ppCB8YJ7pexF7Wb9NAjJOBK+hkBZtCHU7+xWbRhhOBBKr6l/6hCH1AnJ+IQhWY2P0FzNDUYInhZ5UTIuvZiFUXhHFOC1WHJRCPKVOAuKlAgbznW5DHVu17j229Aj2z4uB/89KkDtKBmbP03fycfAgwAohxzktaGjhUAAAAASUVORK5CYII="
            class="login_icon"
          >
          <div class="display_flex loginParameter_input">
            <input
              v-model="regParams.username"
              type="text"
              placeholder="账号"
              class="flex1"
            >
            <p
              class="fontsmall colorred"
              style="display: none;"
            ></p>
          </div>
        </div>
        <div class="login_list mt20">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFGRTY3RkE1Qjg2ODExRUJCRjZGQjU1QUNBNDkyQzlGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFGRTY3RkE2Qjg2ODExRUJCRjZGQjU1QUNBNDkyQzlGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUZFNjdGQTNCODY4MTFFQkJGNkZCNTVBQ0E0OTJDOUYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUZFNjdGQTRCODY4MTFFQkJGNkZCNTVBQ0E0OTJDOUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6FZQc1AAABYklEQVR42pSTzytFQRTH516XlJT8yD/AArFgiXoLys5KeauXv+AtLJQVO95KYq0s6JU/QJ56r66iJH+AYiElCy+9Nddn6oymMXN5pz73O805c87MuTNRlmXKtdNGoxc5gGXohk+4g/VioXDrxkduEhIMIc/wDofwAANQhHlYIdHZX0n0IkXgqGeHG8gO9ONvmvnYCZpCRqTiL2Phruxw056PnbgxaBH8qsKmezLpPQ67mECqoPVI+wTbvmBNxqsUq/4kIcEi4wv5A48wnrOTJ0hgCfZJVE7EcQ7HTJTUP43CC0gNyrHVm0oguCPQ5Evkxm6sbsygJ8E28oLWPL4eMzbH0Q3s9BScgWHo8/gis4nYmXRN34sW7OX1xySZhmvPuVNEv6M0L0kiwfeBpkbyft487kzgyz05qddntbYL61Kt5jhXVK2oNkze2Zz9d/Tr3MLxgTYDTbaP0QUlueXqW4ABAGCMoLbOcMG1AAAAAElFTkSuQmCC"
            class="login_icon"
          >
          <div class="display_flex loginParameter_input"><input
              type="password"
              v-model="regParams.password"
              placeholder="登录密码"
              class="flex1"
            >
            <p
              class="fontsmall colorred"
              style="display: none;"
            ></p>
          </div>
        </div>
        <div class="login_list mt20">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFGRTY3RkE1Qjg2ODExRUJCRjZGQjU1QUNBNDkyQzlGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFGRTY3RkE2Qjg2ODExRUJCRjZGQjU1QUNBNDkyQzlGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUZFNjdGQTNCODY4MTFFQkJGNkZCNTVBQ0E0OTJDOUYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUZFNjdGQTRCODY4MTFFQkJGNkZCNTVBQ0E0OTJDOUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6FZQc1AAABYklEQVR42pSTzytFQRTH516XlJT8yD/AArFgiXoLys5KeauXv+AtLJQVO95KYq0s6JU/QJ56r66iJH+AYiElCy+9Nddn6oymMXN5pz73O805c87MuTNRlmXKtdNGoxc5gGXohk+4g/VioXDrxkduEhIMIc/wDofwAANQhHlYIdHZX0n0IkXgqGeHG8gO9ONvmvnYCZpCRqTiL2Phruxw056PnbgxaBH8qsKmezLpPQ67mECqoPVI+wTbvmBNxqsUq/4kIcEi4wv5A48wnrOTJ0hgCfZJVE7EcQ7HTJTUP43CC0gNyrHVm0oguCPQ5Evkxm6sbsygJ8E28oLWPL4eMzbH0Q3s9BScgWHo8/gis4nYmXRN34sW7OX1xySZhmvPuVNEv6M0L0kiwfeBpkbyft487kzgyz05qddntbYL61Kt5jhXVK2oNkze2Zz9d/Tr3MLxgTYDTbaP0QUlueXqW4ABAGCMoLbOcMG1AAAAAElFTkSuQmCC"
            class="login_icon"
          >
          <div class="display_flex loginParameter_input"><input
              type="password"
              v-model="regParams.rePassword"
              placeholder="再次输入登录密码"
              class="flex1"
            >
            <p
              class="fontsmall colorred"
              style="display: none;"
            ></p>
          </div>
        </div>
        <div class="login_list mt20"><img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFCQ0IwMUZDQTBCMjExRUI5OTcyODE1OTAyMzRENUMyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFCQ0IwMUZEQTBCMjExRUI5OTcyODE1OTAyMzRENUMyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUJDQjAxRkFBMEIyMTFFQjk5NzI4MTU5MDIzNEQ1QzIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUJDQjAxRkJBMEIyMTFFQjk5NzI4MTU5MDIzNEQ1QzIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz53jkr1AAABU1BMVEWz29q029r5/Pzy+fm6397t9/b1+vq23Nu63t3X7OvO6Oe33dz3+/u7397o9PTx+Pjk8vL7/f30+vrI5eS03Nu13Nvz+fnW7Ov+/v653t3Q6ej9/v6/4eDD4+Ln9PPa7e3g8PDV6+v6/f3R6ene7+/Y7ezC4uHL5ub+//+43dzN5+f4/Pzf8O/h8fDV6+r2+/vF4+PC4uK+4ODJ5eXE4+LA4eDr9vXu9/fq9fXd7+7s9vb6/PzK5uXn9PTm8/PN5+bj8vHp9fTZ7ezU6+rP6Ojw+Pjb7u3T6urH5OTS6unM5+bi8fH8/v7X7Oy+4N/A4eHt9vbc7u7B4uG43t38/f3L5+bx+fi94N/n8/Pc7+74+/vw+PfZ7e28397y+fjh8fHF5OPv9/fG5OPv+PfR6ejB4eHH5eTW6+vr9fXl8/Ll8/PL5uXa7u30+vm23dzJ5uX///+19lXXAAAAcXRSTlP/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AClMwGUAAASkSURBVHja7Jr3XyI7EMAXTmCBpQiICEhTqSrqgWC50zt7Pc92vb5y5bX9/396XpKlaCY72d17n/eD+YnPZiZfNjuZzEyi6P9BU/5nkOR0paYYTQ0UvM5DogvKrZaIP3IWEp5UeG1/2TlI5KECtUOvQ5BZRdBqjx2BHAyNmf298vE0OPho3AHIYW803x8rsbXqzaOU+zofd/WeF21DpoyhxvzaUEes/4bPbULGjYHqf93p6+wbnWFbkLCxJgrc7hnWHfTagLjZFz79BC3RMSqwYAPCPkjIDUp42LvMWYYk2Qg7Apk5NmFrViEVjPHsUaFdi5AIVX8mto2USt3ysTVIkUJWTaz8iIpFLUGqWaK8buoTzolc3BJkh/7DJ6aQAvUImhXILjWbkvmWaTZfAsgVUa0g9oIykZy3AlkkqtMIyLzJx4MhpRBRRexJ+gqRLFuANIMoAyYejEguZeQhycQPTdcDBOQr9XBr8pD3RPNvTKDQoWu+IQ95QPZXHwZCXfGI+x5yD7mH3EMkIc3V2a3tysPD9HzBo/0MSDM6tegayErGWnsv3c5CclcJTpYVDHSdgcRufj6aBLO5+NlN/5lNyFhDj12JckZlqsSCJ+sQtbEZVMQtFH7vsgkpD46nttL+3ZX8eKA9RG7V7EEG2uRbT6rXu/ZyK9TvcjkDufhyfVvgcm5x6E/YhpzwB8idOwf5+AaM/J/ag8R6kBmR3+qqPSsbtQAxlI/E3rHZZnITFiB1pmta1BqNGx9OGtJVsDmQrhuVqogkJMNWwQdMPSz1jK0kSQirqQRwhT2vuGQAQJrUtEYyyCrjB+Z2UjKQtGnafKstiCyRD3lNX+Q3fD2XGfyiBOQVVelKFJhZrecTHtISGgu3aQk4BeZCNFrFmpWB6Bs0caxiITlarfNKQcLwglTgqh8wW6PJKn/5ThCtAhYSFzjfaTWxlBPUdqewkFO4REpDrCRcMtjHQoKwu/uVdOXhj3KOhdDtoQHbUBEu9L2Qgrzg7kEB0ufnLnpi+KoUpJ2ShGjEvIJSkKw05EIKQtzju588XUT6QpOE0A8fwkLo2n0jCaEm3MZCsnDNTgBZAWuWXMhn+BhJANkAtbiQPXiXgyEsvvmOhTyGXT0MWaXnXhp600qA1do66Fa24f2Bv/1SX98CwxiOg2SHRjN4SBQMUamd/nK3Y1cQqfIhlyp4cjI7obzjhGPHqqAADQR3LLfZ5MVkHZ6/mRfFqQCk4aM+4hgZRVyzPEgqTDUC7jSOkVlSREEUBBml/gt16GCYr5KVTYI2WTbwDcEwslOPdDq3zjRzpowCkzyQzxlLbMJMZyzP5Nq6PKR34qqkRTamGWmpL2kFwkLiH1E0nAFHRwwhwWmO8Fh2s1dtCPDPas7iPQlRliw+xc71ixr1O7dHquH+JZBgR7cM0Zd9fUx5xtN3KKXl8exAHSyi24DoyaGLN+rndDH/6m1xe6E2+Hhd021BdN1vUh1UfGb3MDD3Vnb+ETLq5gkZ6ppPF77ms+FB6CMvLHkGK469lvVHUNroq1eZsL88WEKt7T9dxupK3VQrdY7yJ3sHWyd/RiOXEnr/CjAAN8ayPakDXc8AAAAASUVORK5CYII="
            class="login_icon"
          >
          <div class="display_flex loginParameter_input"><input
              type="text"
              v-model="regParams.code"
              placeholder="请输入验证码"
              class="flex1"
            >
            <p
              class="fontsmall colorred"
              style="display: none;"
            ></p>
            <div
              @click="!timer && getCodeEmail()"
              class="cursor cursor-pointer sendCodeBa sendCodeYes"
            >{{timer ? timerCount + 'S后重新获取' : '发送验证码'}}</div>
          </div>
        </div>
        <div class="mt20 text_center loginParameter_input">
          <button
            @click="forgetLoginPwd"
            class="colorfff text_center cursor clffffff"
          >提 交</button>
        </div>
      </div>
      <div class="login_footer pb20 mt10 text_center loginParameter_forget text-center clffffff">
        <nuxt-link
          tag="a"
          :to="`/${locale}/ResetPassword`"
          class="fontsmall "
        >
          忘记密码
        </nuxt-link>
        <span>|</span>
        <nuxt-link
          tag="a"
          :to="`/${locale}/Login`"
          class="fontsmall "
        >
          登录
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  layout: 'else',
  data () {
    return {
      regParams: {
        "username": "",// "用户名"
        "password": "",// "登录密码"
        "rePassword": "",// "确认密码"
        "code": "",// "邮件验证码"
      },
      timer: null,
      timerCount: 60,
    };
  },
  computed: {
    ...mapState(['locale'])
  },
  destroyed () {
    clearInterval(this.timer)
  },
  mounted () {
    this.$nextTick(() => {
    })
  },
  methods: {
    // 获取邮箱验证码
    getCodeEmail () {
      if (!this.regParams.username) {
        return this.$message.error("用户名不能为空")
      }
      let params = {
        "type": "forgetPwd",
        "email": this.regParams.username,// "用户名"
      }
      this.$api.user.getCodeEmail(params).then(res => {
        if (res.type == "success") {
          this.$message.success("获取验证码成功")
          this.timer = setInterval(() => {
            this.timerCount--
            if (this.timerCount == 0) {
              clearInterval(this.timer)
              this.timer = null
              this.timerCount = 60
            }
          }, 1000);
        }
      })
    },
    forgetLoginPwd () {
      if (!this.regParams.username) {
        return this.$message.error("用户名不能为空")
      }
      if (!this.regParams.password) {
        return this.$message.error("登录密码不能为空")
      }
      if (!this.regParams.rePassword) {
        return this.$message.error("确认密码不能为空")
      }
      if (!this.regParams.code) {
        return this.$message.error("邮件验证码不能为空")
      }
      if (this.regParams.password != this.regParams.rePassword) {
        return this.$message.error("两次密码输入不一致，请重新输入")
      }
      let params = {
        "userName": this.regParams.username,// "用户名"
        "newpassword": this.$md5(this.regParams.password),// "登录密码"
        "qpassword": this.$md5(this.regParams.rePassword),// "确认密码"
        "type": 3,
        "code": this.regParams.code,// "邮件验证码"
      }
      this.$api.user.forgetLoginPwd(params).then(res => {
        if (res.type == "success") {
          this.$message.success("修改成功")
          this.$router.replace(`/${this.locale}/Login`)
        }
      })
    },
  }
}
</script>
<style lang="scss" scoped>
.sendCodeBa {
  background: #5ba6a5;
  height: 40px;
  line-height: 40px;
  border: 1px solid #5ba6a5;
  width: 120px;
  text-align: center;
  font-size: 0.9rem;
  color: #fff;
  border-radius: 0 20px 20px 0;
}
.loginBG {
  height: 100vh;
  width: 100%;
  background: url('/img/Home/login_bg.9e7ff4d.jpg') no-repeat 50%;
  background-size: 100% 100%;
  background-attachment: fixed;
}
.flex_center {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.display_flex,
.display_flex_both {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.login_logo {
  height: 60px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
}
.loginParameter {
  border-radius: 30px;
  background-color: #fff;
  overflow: hidden;
  max-width: 390px;
  .loginParameter_title {
    display: inline-block;
    width: 100%;
    overflow: hidden;
    margin-bottom: 24px;
    a {
      display: inline-block;
      width: 50%;
      float: left;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-family: '\5FAE\8F6F\96C5\9ED1';
      color: #388682;
      font-weight: 700;
    }
    .loginParameter_active_r {
      color: #fff;
      font-weight: 700;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAAAvCAYAAADJqNmJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMzQUZEQkNDQjkzMTExRUJBNDUxODI2QTQ4MURGNENGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMzQUZEQkNEQjkzMTExRUJBNDUxODI2QTQ4MURGNENGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzNBRkRCQ0FCOTMxMTFFQkE0NTE4MjZBNDgxREY0Q0YiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzNBRkRCQ0JCOTMxMTFFQkE0NTE4MjZBNDgxREY0Q0YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7MaF0FAAADzUlEQVR42uxcv2sUQRR+8wImF0FEUOQ4iClEAtcJYhVtAzaC2AYiloL/gIh/gViKpLLTQrGxCoLY2FiI+KsK2kT8VYRcVMw9j5zxknN39s3M292ZnRk4Ltm7mTc379vvm/l4rIKHjwjGm/r/0vD67n8o41rWd0kzhkm8sbFM4+r66ObA6k/8OAE1zFpDIDV8addADV+UnYfRNaVdx8J4WTHzxtnTR2XHzu2XM4eiuUNGLGoKOHSLlrVgpAEJN1EkBBIqAAloQAKWIKEikHC+Fww4mEnjJEzHImRwh+Ulh3KSURgXzFhEN4fC/qoxIMFR0hyo30VqpFjERWpsWaThUjOSFSPq5yQMPJeaKlgkbKlBu6RxEsZgES5r2UqNzxtWCgkcNkkTk5oIN6wBSA3qF88gaayECUoNm0VU2rA6nVYkThneeiMBSY2fssJYPJdTRvJGgtywojkFC0tN8ka8lRq01+kapcYHbyQCqUEnnY5OarhJbobUoNPi1So1AXgjgUsNyh4JI/BGIrLhUXt3WUmNx94IgRxIKt2w1iM1WIjsMqWGhGx4tvuokg1vv+dQBhO22LCWJTUxeyMlSg0aTdqXDStADTZ8fN4IWiE7RG8EIHkjViaYDbKTN9J4Gx6dJx2UN5JseEETjHkcDMYbAUgliuImmMFxsGxvJJUoViY1mIloNovUITWpRLEqbwRzB5FAtrVOpxJFH7wRzKVlE6mxYRFJqfHWGwm7RBG1tCwtNdF5IwFJDc8h1QziiuzkjQTljSBfCiqQmuSNeCU1yB/QRWrK8EZSiWLZUoOsM40ri5TijcQmNUKsbSA1PHBUtWFNJYpyLCIgNYhK9YxsszI3rM5S03BvpGIbHttTkw/AtFW+YeVKTSpRlGQRXJrt3B2898GmhSw1qUSxcC54o3v8Q7s1eQ9cWi1SA6lEsWRvZHtDevtk9+aEUt+cARKDNwIQTYniNjjOtY+snzl86DpI1A8lG16GtTzwRv4dZVfOnlo5tr91B6RasuGDl5o9Pse7hflbM9OtZVGAJBseQrXhFRHNjX8+9/jppbfrG1cHf06IAUUxEaEK0KbAoB/nKcvMpw8r4v8mpZufQzzTmLaxdQ7pm4X55Qudo0v7ENe8YpFUolipN5LJHDvt2Zfv04vPX15e7W0u9ommQLIpVxYB/fPKlQ2LMO8usWfDe8QiGf204Nhp9z+uHbz26v3F1Y3N8z/7/RmvpMYGILFLje7GVIbg2N2uvHh94snnr6c//fjV7f3emh2ApbNFdCCxiCuLSMZzjPv3sz8CDABO8zd5eSmfzQAAAABJRU5ErkJggg==)
        no-repeat 50%;
      background-size: 100% 100%;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: -25px;
        height: 40px;
        width: 25px;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAlCAYAAACkhgJBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRGNTM1NDFGQjkzMTExRUJCQjBEODU3QkIwNzFFNThFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRGNTM1NDIwQjkzMTExRUJCQjBEODU3QkIwNzFFNThFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REY1MzU0MURCOTMxMTFFQkJCMEQ4NTdCQjA3MUU1OEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REY1MzU0MUVCOTMxMTFFQkJCMEQ4NTdCQjA3MUU1OEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6l4NjYAAABzElEQVR42mL8//+/ZsfNu9ILHz3xuP/1a9DPf/8UGRgZsAO4+H9UYZAhMM6XP3+YfI+fcTnx7l3ej7//lIg1DMUQGLj/9Rury5ETmfe+fksFamAmZBBWQ2DA99hp620vX/X9+/+fF5+rmBjwgM1WpkejZKXTmRiZPoNd/h+LIqAYE9Al+MxhWGxicCFISiKHkYHxD5YwBQO8LoGB1eZGpzV4efohAcHIgO4qogwBgQvOtgt4WVhOooQq1DCiDWFjYvofIyvdAWT+RRjESJpLQGCaoc5NMTa2TejRQ5IhIBAjJzMP6IX/GGECiiFsGBvo1dO8Cwybs2SFCTJQ4ubaRnIUo4N0Jbl9FBuSqST/ip2R+T5FhoCAIBvreYb/jJQZIsLGdhMSuIzkG6LAzUm5d3T5eZ9SbIibuMgrig1xEBX+yvif4Q/ZiQ2eaxgZv1PkEqjmn5Qbwsj0m2JDIGULI8Xe+UqxS1gZmT6AY+ffv3+wkMbAhAA7M9N7il3Czcz8BG4IMbZiA6IcbA/AhgAB2S4xFuS7TrF3GrVVbzExMn6hyBBxDva/fCwsZyhNbAzKPFx7GYFRrEluwILAlmeveCk2BJKHKDQABAACDACobZySpaDSWgAAAABJRU5ErkJggg==)
          no-repeat 50%;
        background-size: 100% 100%;
      }
    }
  }
  .login_list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    background-color: #e5f0e9;
    padding-left: 10px;
    border-radius: 20px;
    margin: 18px 10px 0;
  }
  .login_list {
    margin: 13px 40px 0;
    .login_icon {
      height: 18px;
      width: 18px;
      margin: 0 auto;
    }
    p {
      position: absolute;
      bottom: -1.05rem;
      left: 0;
      font-size: 10px;
    }
  }
  .loginParameter_input {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    input {
      padding-left: 10px;
      margin-right: 20px;
      border-radius: 5px;
      border: 0;
      height: 40px;
      line-height: 40px;
      width: calc(100% - 30px);
      color: #000;
      background-color: #e5f0e9;
      outline: none;
    }
  }
}
.mt10 {
  margin-top: 15px;
}
.loginParameter_input button {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAAASCAIAAADUnqsCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAwMTNCRUZCQjkzMTExRUJCODY0RDNCMDBFNTMyRTUyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAwMTNCRUZDQjkzMTExRUJCODY0RDNCMDBFNTMyRTUyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDAxM0JFRjlCOTMxMTFFQkI4NjREM0IwMEU1MzJFNTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDAxM0JFRkFCOTMxMTFFQkI4NjREM0IwMEU1MzJFNTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6FyxJuAAAA1UlEQVR42uyVUQ6EIAxEadL732MvsNfrJiZriIFSENfBnX4Z1KbwnKek1zutUrJfWWU9X7TG61K8a+Weebd2H6vOJjY+0ndFn8PJg9R/vvHDjcOOjuRSB2UmU8K0dRgO04HTrD7lr63NKe+pi4Xp0dJr73R7Uhfg9DfSq0G61Y2U3iinfCSl9HCkV4N0fc4ovRlhckopPRzpBUspPRzpXcCM0vthmE4wo/QwOLnMKL37pNfDjNLDC5PLTIzSw+d0YEbpoUiv839G6SVoTkE3Unqg9RFgAB810DB87jXYAAAAAElFTkSuQmCC)
    no-repeat 50%;
  background-size: 100% 100%;
  height: 32px;
  line-height: 32px;
  border-radius: 20px;
  border: 0;
  width: 60%;
  display: inherit;
  margin: 32px auto;
}
</style>