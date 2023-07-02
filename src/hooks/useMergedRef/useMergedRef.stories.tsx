import React, { MutableRefObject, useRef } from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import doc from './useMergedRef.doc.md';
import { useMergedRef } from '.';

const Template = ({ additionalRef }: { additionalRef: MutableRefObject<HTMLDivElement | null> }) => {
    const contentRef = useMergedRef<HTMLDivElement | null>(null, [additionalRef]);

    return <div ref={contentRef}>content</div>;
};

const TemplateWrapper = () => {
    const ref = useRef<HTMLDivElement | null>(null);

    return <Template additionalRef={ref} />;
};

export default {
    title: 'hooks/useMergedRef',
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

export const Demo: Story = () => <TemplateWrapper />;
Demo.args = {};
