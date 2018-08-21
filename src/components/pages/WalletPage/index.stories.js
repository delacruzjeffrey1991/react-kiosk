// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { BuyPage } from 'components'

storiesOf('BuyPage', module)
  .add('default', () => (
    <BuyPage />
  ))
