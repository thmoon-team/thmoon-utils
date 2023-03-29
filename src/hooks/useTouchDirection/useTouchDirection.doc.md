## Usage

```jsx
import { useTouchDirection } from 'thmoon-utils'

const Demo = () => {
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
            >
                Try swipe on mobile
            </div>
        </>
    );
};
```