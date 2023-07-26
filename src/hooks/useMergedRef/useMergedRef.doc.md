## Usage

```jsx
import { useMergedRef } from 'thmoon-utils'

const Template = ({ additionalRef }: { additionalRef: MutableRefObject<HTMLDivElement | null> }) => {
    const contentRef = useMergedRef<HTMLDivElement | null>(null, [additionalRef]);

    return <div ref={contentRef}>content</div>;
};

const TemplateWrapper = () => {
    const ref = useRef<HTMLDivElement | null>(null);

    return <Template additionalRef={ref} />;
};
```