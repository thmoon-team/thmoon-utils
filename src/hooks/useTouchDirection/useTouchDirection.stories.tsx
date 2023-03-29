import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Direction, DirectionType } from 'utils';

import doc from './useTouchDirection.doc.md';
import { useTouchDirection } from '.';

const Template = () => {
    const [eventType, setEventType] = useState('');
    const [defectionSwipe, setDefectionSwipe] = useState<DirectionType>();

    const handleStart = () => {
        setEventType('start');
    };

    const handleMove = () => {
        setEventType('move');
    };

    const handleEnd = ({ direction }: Direction) => {
        setEventType('end');
        setDefectionSwipe(direction);
    };

    const { onTouchEnd, onTouchMove, onTouchStart } = useTouchDirection({
        onStart: handleStart,
        onMove: handleMove,
        onEnd: handleEnd,
    });

    return (
        <>
            <div>
                <span>EventType:</span>
                <span>{eventType}</span>
            </div>
            <div>
                <span>defectionSwipe:</span>
                <span>{defectionSwipe}</span>
            </div>
            <div
                onTouchEnd={onTouchEnd}
                onTouchMove={onTouchMove}
                onTouchStart={onTouchStart}
                style={{ width: '300px', height: '300px', border: '1px solid black' }}
            >
                Try swipe on mobile
            </div>
        </>
    );
};

export default {
    title: 'hooks/useTouchDirection',
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
