import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.div)`
  min-width: 10rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: absolute;
  top: calc(100% + 0.25rem);
  left: 0.5rem;

  z-index: 10;

  background-color: white;

  border-radius: 4px;
  border: 1px solid #eaeaea;

  padding: 5px;
`
