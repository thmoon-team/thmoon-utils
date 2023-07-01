import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import doc from './isEmail.doc.md';
import { isEmail } from '.';

const Template = () => {
    const [value, setValue] = useState('');

    return (
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <div>isValid: {`${isEmail(value)}`}</div>
        </div>
    );
};

export default {
    title: 'utils/validators/isEmail',
    component: Template,
    parameters: {
        docs: {
            description: {
                component: doc as unknown,
            },
            prepareForInline: () => {
                return null;
            },
        },
    },
} as unknown as Meta;

export const Demo: Story = () => <Template />;
