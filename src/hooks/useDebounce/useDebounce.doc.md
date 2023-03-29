## Usage

```jsx
import { useOuterClick } from 'thmoon-utils'

const Demo = () => {
    const [value, setValue] = useState('');
    const debouncedValue = useDebounce(value, 1000);

    return (
        <div>
            <p>{debouncedValue ?? 'write some text'}</p>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
        </div>
    );
};
```