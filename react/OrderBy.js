import PropTypes from 'prop-types'
import React from 'react'
import { injectIntl, intlShape } from 'react-intl'
import { useRuntime } from 'vtex.render-runtime'
import classNames from 'classnames'

import SelectionListOrderBy from './components/SelectionListOrderBy'

import searchResult from './searchResult.css'

export const SORT_OPTIONS = [
  {
    value: 'OrderByTopSaleDESC',
    label: 'ordenation.sales',
  },
  {
    value: 'OrderByReleaseDateDESC',
    label: 'ordenation.release.date',
  },
  {
    value: 'OrderByBestDiscountDESC',
    label: 'ordenation.discount',
  },
  {
    value: 'OrderByPriceDESC',
    label: 'ordenation.price.descending',
  },
  {
    value: 'OrderByPriceASC',
    label: 'ordenation.price.ascending',
  },
  {
    value: 'OrderByNameASC',
    label: 'ordenation.name.ascending',
  },
  {
    value: 'OrderByNameDESC',
    label: 'ordenation.name.descending',
  },
]

const OrderBy = ({
  orderBy,
  getLinkProps,
  intl,
}) => {
  const sortingOptions = () => {
    return SORT_OPTIONS.map(({ value, label }) => {
      return {
        value: value,
        label: intl.formatMessage({ id: label }),
      }
    })
  }

  const { hints: { mobile } } = useRuntime()

  const orderbyClasses = classNames(searchResult.orderBy, {
    'flex justify-end': mobile,
  })

  return (
    <div className={orderbyClasses}>
      <SelectionListOrderBy
        mobile={mobile}
        orderBy={orderBy}
        getLinkProps={getLinkProps}
        options={sortingOptions()}
      />
    </div>
  )
}

OrderBy.propTypes = {
  /** Which sorting option is selected. */
  orderBy: PropTypes.string,
  /** Returns the link props. */
  getLinkProps: PropTypes.func,
  /** Intl instance. */
  intl: intlShape,
}

export default injectIntl(OrderBy)
