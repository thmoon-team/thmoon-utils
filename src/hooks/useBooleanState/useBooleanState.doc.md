## Usage

```jsx
import { useBooleanState } from 'thmoon-utils'

const Demo = () => {
    const [value, setTrue, setFalse, toggle] = useBooleanState();

    return (
        <div>
            <p>{value ? 'true' : 'false'}</p>
            <button onClick={setTrue} type="button">
                setTrue
            </button>
            <button onClick={setFalse} type="button">
                setFalse
            </button>
            <button onClick={toggle} type="button">
                toggle
            </button>
        </div>
    );
};
```