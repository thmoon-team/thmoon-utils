## Usage

```jsx
import { useElementSize } from 'thmoon-utils'

const Demo = () => {
    const { ref, container } = useElementSize<HTMLDivElement>();

    return (
        <div>
            <pre>{JSON.stringify(container, null, 2)}</pre>
            <div style={{ border: '1px solid black', boxSizing: 'border-box', ...args }} ref={ref} />
        </div>
    );
};
```