Hook который принемает ref ДОМ элемент и колбэк который отрабоатет если клик был вне его котента


## Usage

```jsx
import { useElementSize } from 'thmoon-utils'

const Demo = () => {
    const { ref, container } = useElementSize<HTMLDivElement>();

    return (
        <div>
            <div ref={ref} />
        </div>
    );
};
```