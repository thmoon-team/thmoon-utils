import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import doc from './useElementSize.doc.md';
import { useElementSize } from '.';

interface Template {
    height?: string;
    marginLeft?: string;
    marginRight?: string;
    marginTop?: string;
    width?: string;
}

const Template = (args: Template) => {
    const { ref, container } = useElementSize<HTMLDivElement>();

    return (
        <div>
            <pre>{JSON.stringify(container, null, 2)}</pre>
            <div style={{ border: '1px solid black', boxSizing: 'border-box', ...args }} ref={ref} />
        </div>
    );
};

export default {
    title: 'hooks/useElementSize',
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

export const Demo: Story = (args: Template) => <Template {...args} />;
Demo.args = {
    width: '200px',
    height: '150px',
    marginLeft: '100px',
    marginRight: '5px',
    marginTop: '5px',
};
