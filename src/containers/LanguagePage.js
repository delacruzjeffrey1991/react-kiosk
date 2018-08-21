import React from 'react'
import { connect } from 'react-redux'
import { updateIntl } from 'react-intl-redux'
import { push } from 'react-router-redux'
import { LanguagePage } from 'components'
import languages from 'languages'

const LanguagePageContainer = props => <LanguagePage {...props} />

const mapDispatchToProps = dispatch => ({
  onLanguageChangeClick: (locale) => {
    dispatch(updateIntl({
      locale,
      messages: { ...languages[locale] },
    }))
    dispatch(push('/'))
  },
})

export default connect(null, mapDispatchToProps)(LanguagePageContainer)
