import { css } from 'styled-components'
import { Margin, Padding } from '@services/types/css'

export function applyMargin(props: Margin) {
  return css`
    ${props.margin ? { margin: props.margin } : {}};
    ${props.marginTop ? { marginTop: props.marginTop } : {}};
    ${props.marginLeft ? { marginLeft: props.marginLeft } : {}};
    ${props.marginRight ? { marginRight: props.marginRight } : {}};
    ${props.marginBottom ? { marginBottom: props.marginBottom } : {}};
  `
}

export function applyPadding(props: Padding) {
  return css`
    ${props.padding ? { padding: props.padding } : {}};
    ${props.paddingTop ? { paddingTop: props.paddingTop } : {}};
    ${props.paddingLeft ? { paddingLeft: props.paddingLeft } : {}};
    ${props.paddingRight ? { paddingRight: props.paddingRight } : {}};
    ${props.paddingBottom ? { paddingBottom: props.paddingBottom } : {}};
  `
}
