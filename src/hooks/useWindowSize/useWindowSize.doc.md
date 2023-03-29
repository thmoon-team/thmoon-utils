Hook который принемает ref ДОМ элемент и колбэк который отрабоатет если клик был вне его котента


## Usage

```jsx
import { useWindowSize } from 'thmoon-utils'

const Demo = () => {
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
```