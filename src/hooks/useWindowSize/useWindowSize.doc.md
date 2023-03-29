Hook который принемает ref ДОМ элемент и колбэк который отрабоатет если клик был вне его котента


## Usage

```jsx
import { useOuterClick } from 'thmoon-utils'

const Demo = () => {
    const size = useWindowSize();

    return (
        <div>
            {size}
        </div>
    );
};
```