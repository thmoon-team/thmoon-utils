## Usage

```jsx
import { useOuterClick } from 'thmoon-utils'

const Demo = () => {
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
                <div ref={ref}>
                    Content
                </div>
            )}
        </div>
    );
};
```