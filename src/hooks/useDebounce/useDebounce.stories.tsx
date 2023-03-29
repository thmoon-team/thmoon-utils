import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import doc from './useDebounce.doc.md';
import { useDebounce } from '.';

const Template = () => {
    const [value, setValue] = useState('');
    const debouncedValue = useDebounce(value, 1000);

    return (
        <div>
            <p>{debouncedValue || 'write some text'}</p>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    );
};

export default {
    title: 'hooks/useDebounce',
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
