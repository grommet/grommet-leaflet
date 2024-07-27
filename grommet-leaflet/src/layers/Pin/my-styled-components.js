import styled from 'styled-components';

export * from 'styled-components';

const defaultStyled = typeof styled === 'function' ? styled : styled.default;

// eslint-disable-next-line no-restricted-exports
export { defaultStyled as default };
