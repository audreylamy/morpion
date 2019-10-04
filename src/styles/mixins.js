import styled       from 'styled-components';
import {css}        from 'styled-components';
import breakpoints  from './breakpoints';

export const respondTo = Object.keys(breakpoints).reduce(
    (accumulator, label) => {
        accumulator[label] = (...args) => css`
          @media only screen and (max-width: ${breakpoints[label]}) {
            ${css(...args)};
          }
        `;
        console.log(accumulator)
        return accumulator;
      },
      {},
);