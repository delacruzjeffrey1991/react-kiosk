import {
  LoadingPage,
  CashDispensePage,
  SmartEmptyPage,
  BuyPage,
  WalletPage,
  SmsPage
} from 'components'
import {
  HomePage,
  Layout,
  LanguagePage,
  RedeemPage,
  SellPage,
  SendBtcPage,
} from 'containers'

import PendingData from 'components/PendingData'

const routes = [{
  component: Layout,
  routes: [
    {
      component: PendingData,
      routes: [
        {
          path: '/',
          exact: true,
          component: HomePage,
        },
        {
          path: '/language',
          exact: true,
          component: LanguagePage,
        },
        {
          path: '/sell',
          exact: true,
          component: SellPage,
        },
        {
          path: '/send-btc',
          exact: true,
          component: SendBtcPage,
        },
        {
          path: '/loading',
          exact: true,
          component: LoadingPage,
        },
        {
          path: '/redeem',
          exact: true,
          component: RedeemPage,
        },
        {
          path: '/cash-dispense',
          exact: true,
          component: CashDispensePage,
        },
        {
          path: 'smart-empty',
          exact: true,
          component: SmartEmptyPage,
        },
        {
          path: '/buy',
          exact: true,
          component: BuyPage,
        },
                {
          path: '/wallet',
          exact: true,
          component: WalletPage,
        },
                {
          path: '/sms',
          exact: true,
          component: SmsPage,
        },
      ],
    },
  ],
}]

export default routes