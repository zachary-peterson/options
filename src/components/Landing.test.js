import React from 'react';
import { render, waitFor, wait } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import selectEvent from 'react-select-event';
import { Landing } from './Landing';

test('test that components will render.', async () => {
    const { queryAllByTestId, getByText, findByRole } = render(<Landing />);

    await wait(() => {
        getByText(/one/i)
      });

      const minusBtn = getByText(/minus/i);
      userEvent.click(minusBtn);

      const selectTwo = getByText(/two 1/i);
      const plusBtn = getByText(/plus/i);
      userEvent.click(plusBtn);
})