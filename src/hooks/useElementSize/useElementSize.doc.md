## Usage

```jsx
import { useOuterClick } from 'thmoon-utils'

const Demo = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  
  useOuterClick(ref, () => setIsOpen(false) )

  return (
    <div>
      <button onClick={() => { setIsOpen(true); } }>open</button>
      {isOpen && <div ref={ref}>Content</div>}
    </div>
  );
};
```