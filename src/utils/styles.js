import { css } from 'glamor';

export const container = css(
  {
    width: '60%',
    margin: '0 auto',
    padding: '20px 0'
  }),
topBar = css({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }),
title = css({
    fontSize: '1.7em',
    fontFamily: '"Lato", "Roboto", Helvetica, sans-serif',
    margin: '0.5em 0 1em',
    fontWeight: '900',
    textShadow: '0 0 2px rgba(0,0,0,0.17)'
  }),
titleLink = css({
    background: 'none'
  }),
sectionTitle = css({
    display: 'inline-block',
    borderBottom: '1px solid',
    color: 'rgba(0, 0, 0, 0.85)',
    letterSpacing: '0.2em',
    fontFamily: '"Montserrat Condensed", "Roboto Condensed", "Arial Condensed", Helvetica, sans-serif',
    fontWeight: '300'
  }),
sectionSubtitle = css({
    color: 'rgba(0, 0, 0, 0.3)',
    margin: '0.6em 0 2em',
    letterSpacing: '0.1em',
    fontFamily: '"Montserrat Condensed", "Roboto Condensed", "Arial Condensed", Helvetica, sans-serif',
    fontWeight: '500'
  }),
card = css({
    padding: '0 0.7em',
    borderBottom: '1px solid rgba(0, 0, 0, 0.15)'
  }),
cardTitle = css({
    color: 'rgba(0, 0, 0, 0.75)',
    margin: '1.5em 0 0.2em',
    fontSize: '1.2em'
  }),
cardDate = css({
    color: 'rgba(0, 0, 0, 0.25)',
    fontSize: '0.7em'
  }),
cardBlurb = css({
    color: 'rgba(0, 0, 0, 0.6)'
  })