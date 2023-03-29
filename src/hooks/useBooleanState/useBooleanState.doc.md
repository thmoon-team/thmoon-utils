## Usage

```jsx
import { useBooleanState } from 'thmoon-utils'

const Demo = () => {
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
```