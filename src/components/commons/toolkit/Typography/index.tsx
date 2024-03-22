import React, { useMemo } from 'react'
import { variants } from './config'
import { useTypography } from './context'

import { Container } from './styles'
import { PixelTypeProps } from './types'
import { getPlaceholder } from './utils/getPlaceholder'

export const Typography: React.FC<PixelTypeProps> = props => {
  const { loading } = useTypography()
  const {
    children,
    variant,
    skeletonPlaceholder = 10,
    isLoading,
    ...rest
  } = props

  const loadingPlaceholder = useMemo(
    () => getPlaceholder(skeletonPlaceholder),
    [skeletonPlaceholder]
  )

  const defaultConfig = variants[variant]
  const customConfig = rest

  return (
    <Container
      {...{
        isLoading: isLoading !== undefined ? isLoading : loading,
        ...defaultConfig,
        ...customConfig
      }}
    >
      {loading ? loadingPlaceholder : children}
    </Container>
  )
}
