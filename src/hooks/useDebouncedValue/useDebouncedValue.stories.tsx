import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import doc from './useDebounce.doc.md';
import { useDebouncedValue } from '.';

const Template = () => {
    const [value, setValue] = useState('');
    const debouncedValue = useDebouncedValue(value, 1000);

    return (
        <div>
            <p>{debouncedValue || 'write some text'}</p>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    );
};

export default {
    title: 'hooks/useDebounceValue',
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
