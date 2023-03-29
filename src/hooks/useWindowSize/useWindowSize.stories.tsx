import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import doc from './useWindowSize.doc.md';
import { useWindowSize } from '.';

const Template = () => {
    const windowSizes = useWindowSize();

    return (
        <>
            <div>
                <span>WindowSize:</span>
                <span>width: {windowSizes?.width}</span>
                <span>height: {windowSizes?.height}</span>
            </div>
            <div>change window size for look demo</div>
        </>
    );
};

export default {
    title: 'hooks/useWindowSize',
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
