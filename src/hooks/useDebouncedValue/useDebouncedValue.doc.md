## Usage

```jsx
import { useDebouncedValue } from 'thmoon-utils'

const Demo = () => {
    const [value, setValue] = useState('');
    const debouncedValue = useDebouncedValue(value, 1000);

    return (
        <div>
             <p>{debouncedValue || 'write some text'}</p>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
        </div>
    );
};
```