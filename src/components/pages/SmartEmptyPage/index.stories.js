// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { SmartEmptyPage } from 'components'

storiesOf('SmartEmptyPage', module)
  .add('default', () => (
    <SmartEmptyPage />
  ))
