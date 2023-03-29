import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import doc from './useBooleanState.doc.md';
import { useBooleanState } from '.';

const Template = () => {
    const [isOn, on, off, toggle] = useBooleanState();

    return (
        <div>
            <p>{isOn ? 'on' : 'off'}</p>
            <button onClick={on} type="button">
                on
            </button>
            <button onClick={off} type="button">
                off
            </button>
            <button onClick={toggle} type="button">
                toggle
            </button>
        </div>
    );
};

export default {
    title: 'hooks/useBooleanState',
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
