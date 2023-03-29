import React, { useRef, useState } from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import doc from './useOuterClick.doc.md';
import { useOuterClick } from '.';

const Template = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    useOuterClick(ref, () => {
        setIsOpen(false);
    });

    return (
        <div>
            <button type="button" onClick={() => setIsOpen(true)}>
                open
            </button>
            {isOpen && (
                <div ref={ref} style={{ width: '200px', height: '200px', border: '1px solid black' }}>
                    Content
                </div>
            )}
        </div>
    );
};

export default {
    title: 'hooks/useOuterClick',
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
