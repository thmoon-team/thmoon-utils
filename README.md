# thmoon-utils


### Описание
Данные репозиторий является набором хуков и улиток, созданные в ходе выполнения проетных задачь, которые мв перетасикваем из проекта в проект, далие будет описано как установить и описан флоу по работе с репозиторием для его расширения

### Начало работы 
установка пакета:
```
npm i thmoon-utils
```
Далие импонирует где необходимую имортируем улитку из пакета thmoon-utils и используем ее!
Пример:
`
import { useBooleanState } from 'thmoon-utils'

const Demo = () => {
    const [value, setTrue, setFalse, toggle] = useBooleanState();

    return (
        <div>
            <p>{value ? 'true' : 'false'}</p>
            <button onClick={setTrue} type="button">
                setTrue
            </button>
            <button onClick={setFalse} type="button">
                setFalse
            </button>
            <button onClick={toggle} type="button">
                toggle
            </button>
        </div>
    );
};
`
Все хуки и утилки и как их использовать можно посметреть в сторибуку
`
    тут будет ссылка как ток сможем опубликовать сторибук
`

### Флоу по работе с репозиторием:

Клонируем репозиторий
```
git clone https://github.com/thmoon-team/thmoon-utils.git
```

Далее ставим все зависимоти и делаем ветку от мастера.
В это ветке вносим изменения и для комита используем команду:
```
npm run cz
```

или
```
git cz
```

<kbd>
    <img 
    src="https://raw.githubusercontent.com/commitizen/cz-cli/master/meta/screenshots/add-commit.png" 
    caption="Далее у вас в консоли откроется данная тулза с набором команд для измемения"
    />
</kbd>

`
feat:     Добавили новую фичу
fix:      Пофиксили баг
docs:     Внесли изменмения в документацию
style:    Изменения, которые не влияют на смысл кода (пробелы, форматирование, пропущенные точки с запятой и т.д.)
refactor: Изменение кода, которое не исправляет ошибку и не добавляет функцию
perf:     Изменение кода, повышающее производительность
test:     Добавление отсутствующих тестов или исправление существующих тестов
build:    Изменения, влияющие на систему сборки или внешние зависимости (примеры областей: gulp, broccoli, npm)
ci:       Изменения в наших файлах конфигурации CI и скриптах (примеры областей: Travis, Circle, BrowserStack, SauceLabs)
chore:    Другие изменения, которые не изменяют src или тестовые файлы
revert:   Возвращает предыдущую фиксацию
`

Выбираем что из этого мы сделали, далее тулза попросит указасть скоуп, этот пунк мы пропускам,
Далие она попросит внести кратокое описание и подробное и уточник Are there any breaking changes ? Важно всегда нет, если имемения не влияют на интерсейс библитеки, то есть, из либы удалилась какая то утика или у имеющийся изменился интерсейс указывает в этом случае да.
и на послежний вопрос об issuse указывает нет.

Далие создаем мр. Если  он не проходит ревью и по нему есть замечания фиксим его, и комитим. После чего ревью и CI прошло успешно,
важно при сквоше название сквош комита должно быть изначальному комиту и описание взятое из него

