## Usage

```jsx
import { useScrollTo } from 'thmoon-utils'

const Demo = () => {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollTo } = useScrollTo();

    const handleButtonClick = () => {
        scrollTo(ref.current)
        // or with anchor
        // scrollTo('#testid')
    }


    return (
        <div>
            <button type="button" onClick={handleButtonClick}>
                scroll
            </button>
            <div ref={ref} id="testid">
                Content
            </div>
        </div>
    );
};
```