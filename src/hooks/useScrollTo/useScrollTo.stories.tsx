import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import doc from './useScrollTo.doc.md';
import { useScrollTo } from '.';

const list = ['tab-1', 'tab-2', 'tab-3'];

const Template = () => {
    const { scrollTo } = useScrollTo();

    return (
        <div>
            <div style={{ display: 'flex', gap: '20px' }}>
                {list.map((item) => (
                    <button key={item} type="button" onClick={() => scrollTo(`#${item}`)}>
                        {item}
                    </button>
                ))}
            </div>
            <div>
                {list.map((item) => (
                    <div
                        style={{ height: `500px`, backgroundColor: `#${Math.floor(Math.random() * 1000)}` }}
                        id={item}
                        key={item}
                    >
                        <h2>{item}</h2>
                    </div>
                ))}
            </div>
            <button type="button" onClick={() => scrollTo()}>
                go up
            </button>
        </div>
    );
};

export default {
    title: 'hooks/useScrollTo',
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
